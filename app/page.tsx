import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rad-half bg-l-silver-5 d-b lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:flo-r sm:ml-5 sm:mb-5 f-g-100 h:f-g-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 fs-xxl fw-600 ls-2">Hello, I'm Renildo Pereira</h1>

      <div>
        <p>
          For those who don't know me, I'm the creator of{" "}
          <a href="https://www.yummacss.com/" target="_blank" rel="noopener noreferrer">
            Yumma CSS
          </a>
          . I love building modern, high-quality apps with it. I also created a{" "}
          <a href="https://www.yummacss.com/" target="_blank" rel="noopener noreferrer"></a>{" "}
          <a href="https://marketplace.visualstudio.com/items?itemName=yumma-css.yumma-css-intellisense" target="_blank">
            VS Code extension
          </a>
          , and a{" "}
          <a href="https://play.yummacss.com/" target="_blank" rel="noopener noreferrer">
            playground
          </a>{" "}
          for Yumma CSS .
        </p>
        <p>
          In my spare time, I like to go for walks in nature with friends and also be a piano{" "}
          <a href="instrumental artisthttps://music.apple.com/pt/artist/renildo-pereira/1747299923" target="_blank" rel="noopener noreferrer">
            instrumental artist
          </a>
          .
        </p>
      </div>
    </section>
  );
}
