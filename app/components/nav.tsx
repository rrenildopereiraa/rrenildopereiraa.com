import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
  "https://medium.com/@rrenildopereiraa": { name: "Articles" },
  "/projects": { name: "Projects" },
  "https://www.dropbox.com/scl/fi/r8s4hhzjggjuyhlwx5u2j/Renildo-Pereira-Curr-culo.pdf?rlkey=v4m5cvsysewbvrsftkr1zq9ja&st=yhzhoc7t&dl=0": { name: "Resume" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="d-f fd-c md:fd-r md:ai-c jc-sb">
        <div className="d-f ai-c">
          <Link href="/" className="fs-xxl fw-600 ls-2">
            {metaData.title}
          </Link>
        </div>
        <div className="d-f fd-r g-4 mt-6 md:mt-0 md:ml-auto ai-c">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link key={path} href={path} className="transition-all h:text-neutral-800 d:h:text-neutral-200 d-f align-middle p-r">
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
