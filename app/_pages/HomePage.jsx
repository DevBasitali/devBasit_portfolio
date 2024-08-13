import React from "react";


function HomePage() {
  return (
    <>
      <section id="Home" className="bg-[url('../public/bannerBg02.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center bg-">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-xl font-extrabold sm:text-5xl text-white">
              Hi, I Am Basit Ali <br />
              <span className="sm:block mt-5 text-gray-100">
                {" "}
                A Full Stack Web Developer{" "}
              </span>
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
    </>
  );
}

export default HomePage;
