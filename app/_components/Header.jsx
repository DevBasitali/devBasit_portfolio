import React from "react";
import { Mail } from "lucide-react";

function Header() {
  return (
    <header className="bg-gray-950">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-0 items-center justify-center md:h-20 lg:h-20">
          <div className="hidden md:block lg:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-lg">
                <li>
                  <a
                    className="text-gray-200 transition hover:text-teal-600"
                    href="#Home"
                  >
                    {" "}
                    Home{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-teal-600"
                    href="#About"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-teal-600"
                    href="#Services"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-teal-600"
                    href="#Skill"
                  >
                    {" "}
                    Skills{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-200 transition hover:text-teal-600"
                    href="#Projects"
                  >
                    {" "}
                    Projects{" "}
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
