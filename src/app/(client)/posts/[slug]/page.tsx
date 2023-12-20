import Header from "@/app/components/Header";
import { client } from "../../../../../sanity/lib/client";
import { Post } from "@/app/utils/interface";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { urlForImage } from "../../../../../sanity/lib/image";

async function getPosts(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]{
    title,
    slug,
    publishedAt,
    excerpt,
    body
  }`;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

async function page({ params }: { params: { slug: string } }) {
  const post: Post = await getPosts(params.slug);
  console.log(post);

  if (!post) {
    notFound();
  }
  return (
    <div className="pb-10">
      <Header title={post?.title} />
      <div className="text-center">
        <span className="text-purple-500 text-sm">
          {new Date(post?.publishedAt).toDateString()}
        </span>
      </div>
      <div className={richTextStyles}>
        <PortableText
          value={post?.body}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
}

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlForImage(value)} alt="Post" width={700} height={700} />
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a className="underline" href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-headings:text-2xl
porse-p:mb-5
porse-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
