import Link from "next/link";
import React from "react";
interface NavLink {
  name: string;
  url: string;
}

const navLinks: NavLink[] = [
  { name: "Home", url: "#home" },
  { name: "Customer", url: "#customer" },
  { name: "Solution", url: "#solution" },
  { name: "Service", url: "#service" },
  { name: "Contact Us", url: "#contactus" },
];

const Header = () => {
  return (
    <div>
      <header>
        <nav
          id="navbar"
          className="fixed inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80"
        >
          <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
              <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
                <a
                  href="/"
                  aria-label="logo"
                  className="flex items-center space-x-2"
                >
                  <h1 className="font-semibold text-base">
                    LAVANDULA TECHNOLOGIES
                  </h1>
                </a>
                <button
                  aria-label="humburger"
                  id="hamburger"
                  className="relative -mr-6 p-6 lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                  />
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                  />
                </button>
              </div>
              <div
                id="layer"
                aria-hidden="true"
                className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden"
              />
              <div className="nav-container">
                <ul className="flex space-x-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.url}>
                        <div className="block transition hover:text-primary dark:hover:text-primaryLight md:px-4">
                          {link.name}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
