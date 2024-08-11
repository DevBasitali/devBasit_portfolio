import React from "react";
import Card from "../_components/Card";

function Skill() {
  return (
    <>
      <section className="relative flex flex-row bg-gray-950">
        <div className="relative items-center mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:px-8">
          <div className="max-w-xl text-center hidden lg:block md:block">
            <h1 className="text-xl font-extrabold text-white sm:text-xl md:text-4xl lg:text-5xl">
              Skills.
            </h1>
            <p className="text-sm mt-4 ml-5 max-w-lg text-gray-300 text-left justify-center   sm:text:md md:text-xl lg:text-xl tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              eum nam a omnis, quae eos, illum quis doloribus iste rerum nostrum
              unde quibusdam sed molestiae consequatur voluptas autem incidunt
              aliquam?
            </p>
          </div>
        </div>

        <div className=" flex items-center justify-center mx-auto max-w-screen-xl rounded-full bg-gray-900 my-10">
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 mx-auto max-w-screen-xl">
          <img src="/HTML.png" alt="html" className="w-40 h-30" />
          <img src="/CSS.png" alt="html" className="w-40 h-30" />
          <img src="/JAVASCRIPT.png" alt="html" className="w-40 h-30" />
          <img src="/tailwind.png" alt="html" className="w-40 h-30" />
            
          </div>

          <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1">
          <img src="/MONGODB.png" alt="html" className="w-40 h-30" />
          <img src="/react.png" alt="html" className="w-40 h-30" />
          <img src="/NODEJS.png" alt="html" className="w-40 h-30" />
          <img src="/nextjs.png" alt="html" className="w-40 h-30" />
          </div>

          <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1">
          <img src="/github.png" alt="html" className="w-40 h-30" />
          <img src="/Mysql.png" alt="html" className="w-40 h-30" />
          <img src="/flutter.png" alt="html" className="w-40 h-30" />
          <img src="/php.png" alt="html" className="w-40 h-30" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Skill;
