import { Appbar } from "./Appbar"
import { Blog as BlogType } from "../hooks";
import { Avatar } from "./BlogCard";
import {format} from "date-fns";

type FullblogProps = {
    blog: BlogType
}

export const Fullblog = ({ blog }: FullblogProps) => {
    return (
        <div>
            <Appbar />
            <div className="grid grid-cols-12 w-full pt-16 px-16">
                <div className="col-span-8">
                    <div className="text-5xl font-bold">
                        {blog.title}
                    </div>
                    <div className="pt-2 text-slate-400 font-medium text-sm">Posted on {formatDate(blog.createdAt)}</div>
                    <div className="pt-2 text-sm text-slate-800">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 w-full pl-4">
                    <div className="font-semibold text-lg">
                        Author
                    </div>
                    <div className="flex items-center pt-3">
                        <div>
                            <Avatar name={blog.author.name} size="big" />
                        </div>
                        <div className="flex flex-col ml-4">
                            <div className="text-2xl font-bold">
                                {blog.author.name}
                            </div>
                            <div className="pt-1 text-slate-400 text-sm">
                                Random catch phrase about the author's ability to grab the user's attention
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


function formatDate(isoDate: string) {
    return format(new Date(isoDate), 'dd MMM yyyy');
}