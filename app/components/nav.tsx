import Link from "next/link";

const navItems = {
  "/": {
    name: "Home",
  },
  "/blog": {
    name: "Blog",
  },
  "/work": {
    name: "Work ",
  },
  "/about": {
    name: "About ",
  },
};

export function Navbar() {
  return (
    <aside className="n:ml-8 mb-16 ls-sm">
      <div className="lg:p-t lg:dir-b-11">
        <nav
          className="d-f fd-r ai-s p-r px-0 pb-0 md:ovf-auto spr-6 md:p-r"
          id="nav"
        >
          <div className="d-f fd-r s-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="h:tc-indigo d-f va-m p-r py-1 px-2 m-1 fw-500"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
