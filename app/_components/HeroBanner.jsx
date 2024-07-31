import React from "react";

function HeroBanner() {
  return (
    <section className="bg-black bg-cover bg-center bg-no-repeat text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center bg-">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-white bg-clip-text text-xl font-bold text-transparent sm:text-5xl">
            Hi, I Am Basit Ali
            <span className="sm:block mt-5"> A Full Stack Web Developer </span>
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              target="_blank"
              className="block w-full rounded border border-blue-600 px-12 py-3 text-md font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="https://drive.google.com/file/d/1kU4PAt-0BLrv9jSe_7wBRNWZQn4lBrM3/view?usp=drive_link"
            >
              let's get in touch
            </a>
          </div>
        </div>
      
      </div>
      
      

      
    </section>
  );
}

export default HeroBanner;
