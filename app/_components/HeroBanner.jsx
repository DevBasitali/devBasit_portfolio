import React from "react";

function HeroBanner() {
  return (
    <section className="bg-[url('../public/bannerBg02.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center bg-">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-white bg-clip-text text-xl font-extrabold text-transparent sm:text-5xl sm:bg-gray-200">
            Hi, I Am Basit Ali,
            <span className="sm:block mt-5"> A Full Stack Web Developer </span>
            {/* <span className="sm:block mt-5 font-mono text-md"> Specilized In MERN Stack </span> */}
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              target="_blank"
              className="block w-sm rounded bg-teal-600 border border-teal-600 px-5 py-3 text-lg font-semibold text-white hover:bg-teal-700 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="https://drive.google.com/file/d/1kU4PAt-0BLrv9jSe_7wBRNWZQn4lBrM3/view?usp=drive_link"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
