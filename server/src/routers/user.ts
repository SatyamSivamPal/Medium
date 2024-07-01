import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from "hono/jwt";
import { signInSchema, signUpSchema } from "@satyamx100/medium-common";

type Bindings = {
    DATABASE_URL: string
    JWT_SECRET: string
}

const app = new Hono<{
    Bindings: Bindings
}>();

app.post("/signup", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = signUpSchema.safeParse(body);

    if(!success){
        return c.json({
            msg:"Invalid credentials or inputs"
        }, 403)
    }

    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                name: body.name
            }
        })

        const token = await sign({
           id: user.id
        }, c.env.JWT_SECRET)

        return c.json({
            user: user,
            token: token
        })

    } catch (err) {
        return c.json({error: "Error while signup", err}, 400);
    }

})

app.post("/signin", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const {success} = signInSchema.safeParse(body);

    if(!success){
        return c.json({
            msg: "Invalid credentials or input"
        }, 403)
    }

    try {
        const user = await prisma.user.findUnique({
            where:{
                email: body.email,
                password: body.password
            }
        })
        if(!user){
            return c.json({
                msg: "Invalid credentials",
            }, 403)
        }
        const token = await sign({
            id: user.id
        }, c.env.JWT_SECRET)

        return c.json({
            msg: "User logged in successfully",
            token: token,
            user: user
        })
        
    } catch (error) {
        return c.json({
            err: "Error wile singing in", error
        }, 400)
    }
})

export default app;
 
