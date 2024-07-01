import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";
import { createBlogSchema, updateBlogSchema } from "@satyamx100/medium-common";

type Bindings = {
    JWT_SECRET: string
    DATABASE_URL: string
}

type Variables = {
    userId: string
}

const app = new Hono<{
    Bindings: Bindings,
    Variables: Variables
}>();

app.use('/*', async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET)as JWTPayload & {id: string}
        if(user) {
            c.set('userId', user.id)
            return await next();
        } else{
            return c.json({
                msg: "Invlaid token"
            }, 403)
        }
    } catch (error) {
        return c.json({
            msg: "Invlalid token"
        }, 403)
    }
})

app.post("/create", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const userId = c.get('userId');

    const {success} = createBlogSchema.safeParse(body);

    if(!success){
        return c.json({
            msg: "Invalid inputs"
        }, 403)
    }
    
    try {
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId
            }
        })

        return c.json({
            msg: "Blog created successfully!",
            id: post.id
        })
    } catch (error) {
        return c.json({
            err: error,
            msg: "Error while creating the blog"
        }, 401)
    }

})

app.put("/update", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const {success} = updateBlogSchema.safeParse(body);
    if(!success){
        return c.json({
            msg: "Invalid credentials"
        })
    }
    try {
        const updatedBlog = await prisma.post.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content
            }
        })
        return c.json({
            msg: "Updated successfully!",
            id: updatedBlog.id
        })
    } catch (error) {
        return c.json({
            msg: "Error while updating the blog",
            err: error
        })
    }

})

app.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany({
        select:{
            content: true,
            title: true,
            id: true,
            createdAt: true,
            updatedAt: true,
            author: {
                select:{
                    name: true
                }
            }
        }
    });

    return c.json({
        blogs: blogs
    })
})

app.get("/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogId = c.req.param('id');

    try {
        const blog = await prisma.post.findUnique({
            where: {
                id: blogId
            },
            select:{
                title: true,
                content: true,
                createdAt: true,
                id: true,
                author:{
                    select:{
                        name: true
                    }
                }
            }
        })
        return c.json({
            blog: blog
        })
    } catch (error) {
        return c.json({
            msg: "Error while fetching blog post",
            err: error
        })
    }
})



export default app;