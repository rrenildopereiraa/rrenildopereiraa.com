function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 d-f fd-c s-x-0 s-y-2 tc-lead md:fd-r md:s-x-4 md:s-y-0">
        <li>
          <a
            className="d-f ai-c h:tc-black"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/rrenildoo"
          >
            <ArrowIcon />
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
            <ArrowIcon />
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
            <ArrowIcon />
            <p className="ml-2 h-7">RSS</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 tc-lead">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}
