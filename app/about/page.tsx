import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 fs-xl fw-600 ls-xs">About me</h1>
      <p className="mb-4 tc-l-lead-2">
        Hi, I'm Renildo. I'm a full-stack developer working on Yumma CSS. I love
        building modern apps that are high-quality and ready to use.
      </p>
      <p className="mb-4 tc-l-lead-2">
        I live in Portugal, and I love learning new technologies and making cool
        things with them.
      </p>
      <p className="mb-4 tc-l-lead-2">
        In my free time, I enjoy playing the piano, going for walks in nature with friends,
        and being an{" "}
        <span>
          <a
            className="tc-indigo"
            href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO0WDjhN?si=b92e7228f0e94bee"
          >
            instrumental artist
          </a>
        </span>
        .
      </p>
      <p className="mb-4 tc-l-lead-2">
        If you'd like to contact me, you can reach me on{" "}
        <span>
          <a className="tc-indigo" href="https://twitter.com/rrenildoo">
            𝕏
          </a>
        </span>
        .
      </p>
    </section>
  );
}
