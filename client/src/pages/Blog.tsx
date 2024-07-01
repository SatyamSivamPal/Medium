import { BlogSkeleton } from "../components/BlogSkeleton";
import { Fullblog } from "../components/Fullblog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams()
  const  {loading, blog} = useBlog({
    id: id || ""
  });
  if(loading) {
    return (
      <div>
        <BlogSkeleton />
      </div>
    )
  }

  return (
    <div>
      {blog ? <Fullblog blog={blog} /> : <div>No blog is found </div>}
    </div>
  )
}



