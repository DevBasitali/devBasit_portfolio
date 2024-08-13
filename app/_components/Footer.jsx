import React from "react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { MailIcon } from "lucide-react";

function Footer() {
  return (
    <>
      <footer class="bg-gray-100 dark:bg-gray-950">
        <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="flex justify-center text-teal-600 dark:text-teal-300 font-bold text-2xl tracking-wider">
            Dev Basit Ali.
            
          </div>

          <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
            A MERN STACK DEVELOPER
          </p>

          <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#About"
              >
                About
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#Services"
              >
                Services
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#Projects"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#Home"
              >
                Blog
              </a>
            </li>
          </ul>

          <ul class="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <a
                href="https://linkedin.com/in/devbasitali"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                <span class="sr-only">Linkedin</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <Linkedin/>
                  
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/DevBasitali"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                <span class="sr-only">GitHub</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <Github/>
                  
                </svg>
              </a>
            </li>

            <li>
              <a
                href="ibasitaliraja@gmail.com"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                <span class="sr-only">Gmail</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <MailIcon/>
                  
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
