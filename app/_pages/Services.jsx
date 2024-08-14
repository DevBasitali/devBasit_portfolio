import React from "react";
import Card from "../_components/Card";

function Services() {
  return (
    <>
      <section id="Services" className="relative bg-gray-900">
        <div className=" flex flex-col items-center h-screen sm:h-screen md:h-max lg:h-screen mx-auto max-w-screen-xl px-4">
          <div className=" max-w-xl mt-10 mb-8 text-center">
            <h1 className="text-xl font-extrabold text-white sm:text-xl md:text-4xl lg:text-5xl">
              My Expertise.
            </h1>
            <h1 className="text-xl mt-5 font-bold text-teal-500 sm:text-xl md:text-3xl lg:text-3xl">
            Awesome Services for you
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

  
