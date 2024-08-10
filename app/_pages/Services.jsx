import React from "react";
import Card from "../_components/Card";

function Services() {
  return (
    <>
      <section className="relative bg-gray-900 bg-cover bg-center bg-no-repeat">
        <div className="relative flex flex-col items-center h-screen mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className=" max-w-xl py-6 text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-xl font-extrabold text-white sm:text-xl md:text-2xl lg:text-5xl">Services.</h1>
          </div>
          <Card/>
        </div>
      </section>
    </>
  );
}

export default Services;
// sm:h-screen md:h-screen lg:flex lg:h-screen lg:px-8 bordersm:h-screen md:h-screen lg:flex lg:h-screen lg:px-8 border
