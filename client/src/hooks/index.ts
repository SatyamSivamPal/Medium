import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

type Blogs = {
    content: string;
    title:string;
    id: string;
    createdAt: string;
    updatedAt: string;
    author: {
        name: string
    }

}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blogs []>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => {
            setBlogs(res.data.blogs)
            setLoading(false);
        })
    }, [])

    return{
        loading,
        blogs
    }
}

export type Blog = {
    title: string;
    content: string;
    createdAt: string;
    id: string;
    author:{
        name: string;
    }
}

export const useBlog = ({id} : {id:string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | null>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => {
            setBlog(res.data.blog)
            setLoading(false);
        })
    }, [id])

    return{
        loading,
        blog
    }
}
