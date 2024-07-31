import React from "react";
import { Mail } from "lucide-react";

function Header() {
  return (
    <header className="bg-gray-950">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          {/* <div className="hidden lg:flex lg:items-start md:flex md:items-center md:gap-12">
            <a className=" text-gray-200" href="#">
              BASIT ALI
            </a>
          </div> */}
          <div className="block md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-md">
                <li>
                  <a
                    className="text-gray-200 transition hover:text-blue-700"
                    href="#"
                  >
                    {" "}
                    Home{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-400"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-400"
                    href="#"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-400"
                    href="#"
                  >
                    {" "}
                    Skills{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-400"
                    href="#"
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
