import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Posts",
  description: "Developer experience and web development posts.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Blog posts
      </h1>
      <BlogPosts />
    </section>
  );
}
