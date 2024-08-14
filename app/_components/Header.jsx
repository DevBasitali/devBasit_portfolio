import React from "react";
import { Mail } from "lucide-react";

function Header() {
  return (
    <header className="bg-teal-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-0 items-center justify-center md:h-20 lg:h-20">
          <div className="hidden md:block lg:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-lg">
                <li>
                  <a
                    className="text-gray-200 transition font-bold tracking-wider hover:text-teal-600"
                    href="#Home"
                  >
                    {" "}
                    HOME{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition font-bold tracking-wider hover:text-teal-600"
                    href="#About"
                  >
                    {" "}
                    ABOUT{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition font-bold tracking-wider hover:text-teal-600"
                    href="#Services"
                  >
                    {" "}
                    SERVICES{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition font-bold tracking-wider hover:text-teal-600"
                    href="#Skill"
                  >
                    {" "}
                    SKILLS{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-200 transition font-bold tracking-wider hover:text-teal-600"
                    href="#Projects"
                  >
                    {" "}
                    PROJECTS{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
