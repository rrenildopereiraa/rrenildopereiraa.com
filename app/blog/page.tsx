import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Posts",
  description: "Developer experience and web development posts.",
};

export default function Page() {
  return (
    <section>
      <h1 className="fw-600 fs-xl mb-8 ls-xs">Blog posts</h1>
      <BlogPosts />
    </section>
  );
}
