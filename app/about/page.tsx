import Image from "next/image";

import me from "../assets/img/me.jpg";
import friends from "../assets/img/friends.jpg";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 fs-xl fw-600 ls-xs">About me</h1>

      <p className="mb-4 tc-l-lead-2">
        Hi, I'm Renildo. For those who don't know me, I'm the creator of Yumma
        CSS. I've been here since 2019, and I love building modern, high-quality
        apps. I've worked on a CSS library, written a full and beautiful
        documentation for it, created a VS Code Intellisense extension, and
        built a playground. I'm also planning to put together a component
        library based on my CSS library.
      </p>

      <div className="g-4 d-g my-6">
        <Image alt="Me" className="bs-md h-auto rad-2" src={me}></Image>
      </div>

      <p className="mb-4 tc-l-lead-2">
        I live in Portugal, and I love learning new technologies and making cool
        things with them.
      </p>
      <p className="mb-4 tc-l-lead-2">
        In my free time, I enjoy playing the piano, going for walks in nature
        with friends, and being an{" "}
        <span>
          <a
            className="tc-indigo h:tdl-u"
            href="https://music.apple.com/pt/artist/renildo-pereira/1747299923">
            instrumental artist
          </a>
        </span>
        .
      </p>
      <p className="mb-4 tc-l-lead-2">
        If you'd like to contact me, you can reach me on{" "}
        <span>
          <a className="tc-indigo h:tdl-u" href="https://twitter.com/rrenildoo">
            𝕏
          </a>
        </span>
        .
      </p>
    </section>
  );
}
