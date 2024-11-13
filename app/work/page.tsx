import Image from "next/image";
import DocsImg from "../assets/docs.png";
import ColorsImg from "../assets/colors.png";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 fs-xl fw-600 ls-xs">My projects</h1>
      <p className="mb-4 tc-l-lead-2">
        Since late 2019, I've worked as a full-stack developer. My work mainly
        involves web applications, but I've also created mobile and desktop
        apps. What I really enjoy is designing and prototyping modern
        interactive layouts. Here's an example:
      </p>

      <div className="my-8">
        <h1 className="fs-lg fw-600 ls-xs">Docs</h1>
        <p className="my-4 tc-l-lead-2">
          I put together the documentation for{" "}
          <span>
            <a className="tc-indigo h:tdl-u" href="https://www.yummacss.com/">
              Yumma CSS.
            </a>
          </span>{" "}
          It's got all the info you need, from how to install and configure to
          how to use the free components and advanced utility classes.
        </p>

        <Image
          alt="Yumma CSS Docs"
          className="h-auto rad-2 mt-4"
          src={DocsImg}
        />

        <p className="my-4 tc-l-lead-2">
          This also includes components that show the new, latest features I've
          added.
        </p>

        <Image
          alt="Yumma CSS Docs - Color System"
          className="h-auto rad-2 mt-4"
          src={ColorsImg}
        />
      </div>
    </section>
  );
}
