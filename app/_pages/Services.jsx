import React from "react";
import Card from "../_components/Card";

function Services() {
  return (
    <>
      <section id="Services" className="relative bg-gray-900 ">
        <div className="flex flex-col items-center h-screen sm:h-max md:h-max lg:h-screen mx-auto max-w-screen-xl px-4">
          <div className=" max-w-xl mt-6 mb-8 text-center">
            <h1 className="text-xl font-extrabold text-white sm:text-xl md:text-4xl lg:text-5xl">
              Services.
            </h1>
          </div>

          <div className="container mx-auto">

            <Card/>

          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

{
  /* <div className="flex flex-col items-center bg-gray-950 rounded-lg shadow-md p-6">
            <img
              src="main.png"
              alt=""
              className="w-10 h-10 sm:h-10 sm:w-10 lg:h-20 lg:w-20 md:h-20 md:w-20 mb-4"
            />
            <h2 className="text-center text-white text-sm sm:text-sm md:text-base lg:text-lg">
              Maintenance and Support
            </h2>
            <ul className="text-start text-gray-400 pt-4 pl-4 text-sm sm:text-sm md:text-base lg:text-md/50">
              <li>Troubleshoot, resolve issues</li>
              <li>Excellent customer support</li>
              <li>Maintain, optimize IT systems</li>
            </ul>
          </div>

          

           */
}
