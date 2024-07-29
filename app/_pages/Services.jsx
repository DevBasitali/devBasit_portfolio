import React from "react";
import { Tent } from "lucide-react";
import Card from "../_components/Card";

function Services() {
  return (
    <>
      <section className="relative bg-gray-900 bg-cover bg-center bg-no-repeat">
        <div className="flex items-center flex-col h-screen relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:h-screen lg:px-8">
          <div className=" max-w-xl py-6 text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">Services.</h1>
          </div>
          

          <Card/>
          
            
            

          
        </div>
      </section>
    </>
  );
}

export default Services;
