import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 fs-xl fw-600 ls-xs">
        Hi, I'm Renildo, Freelancer since 2019 👋🏽
      </h1>
      <p className="mb-4">
        I am pleased to meet you. At present, I am a web engineer with a focus
        on products, and I am responsible for leading the development at{" "}
        <span className="fw-600 tc-indigo">
          <a href="https://yummacss.com">Yumma CSS</a>.
        </span>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
