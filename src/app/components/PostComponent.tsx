import Link from "next/link";
import { Post } from "../utils/interface";

interface Props {
  post: Post;
}
function PostComponent({ post }: Props) {
  return (
    <div className="mb-8  p-4 border border-gray-900 text-gray-300 rounded-md shadow-sm shadow-purple-950 hover:shadow-md hover:shadow-purple-500 hover:text-white">
      <Link href={`/posts/${post?.slug?.current}`}>
        <h2 className="text-2xl font-bold">{post?.title}</h2>
        <p className="my-2 text-purple-800 text-sm">
          {new Date(post?.publishedAt).toDateString()}
        </p>
        <p className="mb-4 line-clamp-2">{post?.excerpt}</p>
      </Link>
    </div>
  );
}

export default PostComponent;
