import React from "react";
import { GitHubIcon, TwitterIcon, RssIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="fs-sm mt-8 d-f fd-c s-x-0 tc-lead md:fd-r md:s-x-4">
        <li>
          <a
            className="d-f ai-c h:tc-black"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/rrenildoo"
          >
            <TwitterIcon className="dim-5" />
            <p className="ml-2 h-7">Twitter</p>
          </a>
        </li>
        <li>
          <a
            className="d-f ai-c h:tc-black"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/rrenildopereiraa"
          >
            <GitHubIcon className="dim-5" />
            <p className="ml-2 h-7">GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="d-f ai-c h:tc-black"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <RssIcon className="dim-5" />
            <p className="ml-2 h-7">RSS</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 tc-lead">© {new Date().getFullYear()} MIT Licensed</p>
    </footer>
  );
}
