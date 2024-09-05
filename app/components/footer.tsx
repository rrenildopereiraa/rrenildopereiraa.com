import React from "react";
import { GitHubIcon, TwitterIcon, RssIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="fs-sm mt-8 d-f fd-c s-x-0 tc-lead md:fd-r md:s-x-4">
        <li>
          <a
            className="d-f ai-c h:tc-indigo"
            href="https://twitter.com/rrenildoo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon className="dim-5" />
            <p className="ml-2 h-7">Twitter</p>
          </a>
        </li>
        <li>
          <a
            className="d-f ai-c h:tc-indigo"
            href="https://github.com/rrenildopereiraa"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon className="dim-5" />
            <p className="ml-2 h-7">GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="d-f ai-c h:tc-indigo"
            href="/rss"
            rel="noopener noreferrer"
            target="_blank"
          >
            <RssIcon className="dim-5" />
            <p className="ml-2 h-7">RSS</p>
          </a>
        </li>
      </ul>
      <div className="mt-8 tc-lead">
        <p>
          This website was built with{" "}
          <span>
            <a
              className="tdl-u"
              href="https://www.yummacss.com/docs/installation"
              rel="noopener noreferrer"
              target="_blank"
            >
              Yumma CSS
            </a>
          </span>{" "}
          and{" "}
          <span>
            <a
              className="tdl-u"
              href="https://nextjs.org/docs/getting-started/installation"
              rel="noopener noreferrer"
              target="_blank"
            >
              Next.js
            </a>
          </span>
          .
        </p>
      </div>
    </footer>
  );
}
