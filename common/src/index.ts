import z, { string } from 'zod'

export const signUpSchema  = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()    
})

export const signInSchema  = z.object({
    email: z.string().email(),
    password: z.string().min(6),  
})

export const createBlogSchema = z.object({
    title: z.string(),
    content: z.string()
})

export const updateBlogSchema = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})


export type signUpSchema = z.infer<typeof signUpSchema>
export type signInSchema = z.infer<typeof signInSchema>
export type createBlogSchema = z.infer<typeof createBlogSchema>
export type updateBlogSchema = z.infer<typeof updateBlogSchema>


