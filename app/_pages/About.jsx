import React from "react";

function About() {
  return (
    <>
      <section className="relative bg-gray-950">
        

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              About.
            </h1>

            <p className="mt-4 ml-5 max-w-lg text-white sm:text-xl lg:text-2xl text-left">
              I'm a passionate full-stack developer proficient in crafting
              dynamic web applications using the MERN stack{" "}
              <strong>(MongoDB, Express, React, Node.js)</strong>. Beyond
              coding, I'm a seasoned social media expert adept at crafting
              engaging content, building strong online communities, and driving
              brand growth. My expertise lies in leveraging social platforms to
              amplify digital presence and achieve business objectives.
            </p> 
          </div>

          <div>
          <h1 className="mt-4 text-2xl font-bold max-w-lg text-white sm:text-sm lg:text-xl">Contact</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
