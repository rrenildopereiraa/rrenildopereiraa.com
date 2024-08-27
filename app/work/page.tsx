import Image from "next/image";
import DocsImg from "../assets/docs.png";
import ShadesImg from "../assets/shades.png";

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
          I wrote the documentation for Yumma CSS.
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
          src={ShadesImg}
        />
      </div>
    </section>
  );
}
