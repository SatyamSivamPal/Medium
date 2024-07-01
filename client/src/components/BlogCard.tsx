import { Link } from "react-router-dom";

type blogCardParams = {
    name: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
}

export const BlogCard = (params: blogCardParams) => {
    return (
        <Link to={`/blog/${params.id}`}>
            <div className="mt-3 w-screen max-w-2xl border-b border-slate-200 pb-4 p-4 shadow-sm cursor-pointer">
                <div className="flex items-center">
                    <Avatar name={params.name} size="small" />
                    <div className="font-normal pl-2 text-sm">
                        {params.name}
                    </div>
                    <div className="pl-1">
                        <Circle />
                    </div>
                    <div className="pl-1 text-slate-400 font-light text-xs">
                        {params.publishedDate}
                    </div>
                </div>
                <div className="pt-1 font-bold text-lg">
                    {params.title}
                </div>
                <div className="pt-1 font-thin text-sm">
                    {params.content.length > 100 ? (params.content.slice(0, 100) + "...") : params.content}
                </div>
                <div className="flex justify-between items-center pt-2">
                    <div className="text-slate-400 text-xs">
                        {Math.ceil(params.content.length / 100)} minutes read
                    </div>
                    <div className="flex items-center gap-6">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-slate-400 cursor-pointer hover:text-blue-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-slate-400 cursor-pointer hover:text-blue-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-slate-400 cursor-pointer hover:text-blue-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

type avatarParams = {
    name: string;
    size: "small" | "big";
}

export function Avatar(params: avatarParams) {
    return (
        <div>
            <div className={`relative inline-flex items-center justify-center ${params.size === 'small' ? "w-6 h-6" : "w-10 h-10"}  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer hover:bg-blue-400`}>
                <span className={`text-gray-600 dark:text-gray-300 font-normal ${params.size === 'small' ? "text-xs" : "text:lg"}`}>{params.name[0]}</span>
            </div>
        </div>
    )
}

export function Circle() {
    return (
        <div className="rounded-full bg-slate-300 h-1 w-1">
            &nbsp;
        </div>
    )
}