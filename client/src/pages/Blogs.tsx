import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogsSkeleton } from "../components/BlogsSkeleton";
import { useBlogs } from "../hooks"
import { format } from "date-fns";

export const Blogs = () => {
    const { blogs, loading } = useBlogs();

    if (loading) {
        return (
            <div>
                <div>
                    <Appbar />
                </div>
                <div className="flex items-center flex-col">
                    <BlogsSkeleton />
                    <BlogsSkeleton />
                    <BlogsSkeleton />
                </div>
            </div>

        )
    }

    return (
        <div>
            <div>
                <Appbar />
            </div>
            <div className="flex items-center flex-col">
                {blogs.map(blog => <BlogCard name={blog.author.name} title={blog.title} content={blog.content} publishedDate={formatDate(blog.createdAt)} id={blog.id} />)}
            </div>
        </div>

    )
}


function formatDate(isoDate: string) {
    return format(new Date(isoDate), 'dd MMM yyyy');
}