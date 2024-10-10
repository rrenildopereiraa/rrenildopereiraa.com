import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 fs-xl fw-600 ls-xs">
        Hi, I'm Renildo, Freelancer since 2019 👋🏽
      </h1>
      <p className="mb-4">
        Is nice to meet you. At present, I am a web engineer with a focus
        on development at{" "}
        <span className="fw-600 tc-indigo h:tdl-u">
          {" "}
          <a href="https://yummacss.com">Yumma CSS Library</a>.
        </span>
      </p>

      <div className="my-8">
        <h2 className="fs-md fw-600">Latest posts</h2>
        <BlogPosts />
      </div>
    </section>
  );
}
