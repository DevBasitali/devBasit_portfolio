import React from "react";
import Gallery from "../_components/Gallery";

function Projects() {
  return (
    <>
      <section id="Projects" className="bg-gray-900 px-14">
        <div className="flex flex-col items-center mx-auto max-w-screen-xl h-max lg:h-screen md:h-max">
          <div className="text-center max-w-xl">
            <h1 className="font-extrabold text-xl sm:text-md md:text-4xl lg:text-4xl mt-10">My Recent Work</h1>
          </div>

          <div class="bg-gray-900 mx-auto my-10 lg:px-32">
            <div class=" grid grid-cols-2 -m-1 md:-m-2 md:grid-cols-3 lg:grid-cols-3">
              <div class="flex w-auto flex-wrap mb-4">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  />
                </div>
              </div>
              <div class="flex w-auto flex-wrap mb-4">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                  />
                </div>
              </div>
              <div class="flex w-auto flex-wrap mb-4">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                  />
                </div>
              </div>
              <div class="flex w-auto flex-wrap mb-4">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                  />
                </div>
              </div>
              <div class="flex w-auto flex-wrap mb-4">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
                  />
                </div>
              </div>
              <div class="flex w-auto flex-wrap mb-4">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-row justify-center">
              <a
                target="_blank"
                className="block w-full rounded border border-teal-600 bg-teal-600 mt-5 px-5 py-3 text-md font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto mr-2"
                href=""
              >
                Download CV
              </a>
              
            </div> */}

        </div>
      </section>
    </>
  );
}

export default Projects;
