import React from 'react';

function home() {
  return (
    <>
      <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Hi, I Am Basit Ali
            <span className="sm:block mt-5"> A Full Stack Web Developer </span>
          </h1>

          {/* <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            
          </p> */}

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a target="_blank"
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="https://drive.google.com/file/d/1kU4PAt-0BLrv9jSe_7wBRNWZQn4lBrM3/view?usp=drive_link"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default home;
