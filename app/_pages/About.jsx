import React from "react";

function About() {
  return (
    <>
      <section className="relative flex flex-row bg-gray-950">
        <div className="relative items-center mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:px-8">
          <div className="max-w-xl text-center ">
            <h1 className="text-xl font-extrabold text-white sm:text-xl md:text-2xl lg:text-5xl">
              About.
            </h1>
            <p className="text-sm mt-4 ml-5 max-w-lg text-gray-300 text-left justify-center   sm:text:md md:text-xl lg:text-xl tracking-wide">
              I'm a passionate full-stack developer proficient in crafting
              dynamic web applications using the MERN stack{" "}
              <strong className="text-gray-50">(MongoDB, Express, React, Node.js)</strong>. Beyond
              coding, I'm a seasoned <span className="text-gray-50 font-bold">Social Media Expert</span> adept at crafting
              engaging content, building strong online communities, and driving
              brand growth.
            </p>

            <div className="flex justify-center flex-row">
              <a
                target="_blank"
                className="block w-full rounded border border-blue-900 bg-blue-900 mt-5 px-5 py-3 text-md font-medium text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto mr-2"
                href=""
              >
                Download CV
              </a>
              <a
                target="_blank"
                className="block w-full rounded border border-blue-900 bg-transparent mt-5 px-5 py-3 text-md font-medium text-white hover:bg-blue-900 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto ml-2"
                href=""
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative hidden items-center mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:px-8">
          
        </div>
        
      </section>
    </>
  );
}

export default About;
