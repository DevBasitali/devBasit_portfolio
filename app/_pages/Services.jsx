import React from "react";
import Card from "../_components/Card";

function Services() {
  return (
    <>
      <section id="Services" className="relative bg-gray-900 pt-8 pb-12">
        <div className="relative flex flex-col items-center h-screen sm:h-max md:h-screen lg:h-max mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className=" max-w-xl py-6 text-center">
            <h1 className="text-xl font-extrabold text-white sm:text-xl md:text-4xl lg:text-5xl pb-5">Services.</h1>
          </div>
          <Card/>
        </div>
      </section>
    </>
  );
}

export default Services;