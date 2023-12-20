import { client } from "../../../sanity/lib/client";
import Header from "../components/Header";
import PostComponent from "../components/PostComponent";
import { Post } from "../utils/interface";

async function getPosts() {
  const query = `*[_type == "post"]{
    mainImage,
    title,
    slug,
    publishedAt,
    excerpt
  }`;
  const data = await client.fetch(query);
  return data;
}
export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <div>
      <Header title="Articles" />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post._id} post={post} />)}
      </div>
    </div>
  );
}
