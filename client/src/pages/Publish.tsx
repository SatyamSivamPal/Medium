import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    return (
        <div>
            <Appbar />
            <div className="mx-32 my-16 max-w-full">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-11 text-slate-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <input type="text" placeholder="Title" className="w-full text-5xl text-slate-400 focus:outline-none border-b shadow-xs h-24" onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setTitle(e.target.value)
                    }}/>
                </div>
                <div>
                    <textarea placeholder="Tell your story..." className="focus:outline-none mt-4 w-full text-lg text-slate-600 pl-12  shadow-xs h-32" onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                        setContent(e.target.value)
                    }} />
                </div>
            </div>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-3 text-center me-2 mb-2 mx-36" onClick={async () => {
                const res = await axios.post(`${BACKEND_URL}/api/v1/blog/create`, {
                    title,
                    content
                }, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                })
                navigate(`/blog/${res.data.id}`)
            }}>Publish Post</button>
        </div>
    )
}
