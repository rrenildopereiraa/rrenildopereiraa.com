import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="d-f fd-c s-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full d-f fd-c md:fd-r s-x-0 md:s-x-2">
              <p className="tc-lead">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="tc-d-lead-6 ls-sm">{post.metadata.title}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
