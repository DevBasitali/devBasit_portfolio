import React from "react";
import Card from "../_components/Card";

function Skill() {
  return (
    <>
      {/* <section className="relative bg-gray-950 bg-cover bg-center bg-no-repeat pt-10">
        <div className="flex items-center flex-col h-screen relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:h-screen lg:px-8">
          <div className=" max-w-xl py-6 text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">Skills.</h1>
          </div>
        </div>
      </section> */}

      <section className="relative bg-gray-950 pt-8 pb-8">
        <div className="relative flex flex-col items-center h-screen sm:h-max md:h-screen mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className=" max-w-xl py-6 text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-xl font-extrabold text-white sm:text-xl md:text-4xl lg:text-5xl">
              Skills.
            </h1>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Skill;
