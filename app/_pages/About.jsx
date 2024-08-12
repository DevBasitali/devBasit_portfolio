import React from "react";
import { Phone } from "lucide-react";
import { Map } from "lucide-react";
import { Calendar } from "lucide-react";
import { Mail } from "lucide-react";

function About() {
  return (
    <>
      <section className="relative flex flex-row bg-gray-950">
        <div className=" items-center mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:px-8 my-5 rounded-2xl bg-gray-900">
          <div className="max-w-xl text-center ">
            <h1 className="text-xl font-extrabold text-white sm:text-xl md:text-4xl lg:text-5xl">
              About.
            </h1>
            <p className="text-sm mt-4 ml-5 max-w-lg text-gray-300 text-left justify-center sm:text:md md:text-xl lg:text-xl tracking-wide">
              My name is Basit Ali, I'm a passionate full-stack developer
              proficient in crafting dynamic web applications using the MERN
              stack
              <strong className="text-teal-600">
                (MongoDB, Express, React, Node.js)
              </strong>
              . Beyond coding, I'm a {""}
              <span className="text-gray-200 font-bold">
                Social Media Expert {""}
              </span>
              adept at crafting engaging content, building strong online
              communities, and driving brand growth.
            </p>

            <div className="flex flex-row justify-center">
              <a
                target="_blank"
                className="block w-full rounded border border-teal-600 bg-teal-600 mt-5 px-5 py-3 text-md font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto mr-2"
                href=""
              >
                Download CV
              </a>
              <a
                target="_blank"
                className="block w-full rounded border border-teal-600 bg-transparent mt-5 px-5 py-3 text-md font-medium text-white hover:bg-teal-600 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto ml-2"
                href=""
              >
                Contact Us
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 px-2 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
              <div className=" flex flex-row items-center">
                <Calendar size={15} className="mr-2"/>
                <h1 className="text-gray-300">
                  <span className="font-extrabold">DOB:</span> 04-July-2001
                </h1>
              </div>

              <div className=" flex flex-row items-center ">
                <Mail size={15} className="mr-2"/>
                <h1 className="text-gray-300">
                  <span className="font-extrabold">Email:</span>{" "}
                  ibasitaliraja@gmail.com
                </h1>
              </div>

              <div className=" flex flex-row items-center ">
                <Phone size={15} className="mr-2"/>
                <h1 className="text-gray-300">
                  <span className="font-extrabold">Phone:</span> 03135359605
                </h1>
              </div>

              <div className=" flex flex-row items-center ">
                <Map size={15} className="mr-1"/>
                <h1 className="text-gray-300">
                  <span className="font-extrabold">Location:</span> Islamabad,
                  Pakistan
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mx-auto max-w-screen-xl">
          <img
            src="/laptop1.png"
            alt="image"
            width={500}
            height={500}
            className="hidden lg:block md:block opacity-75"
          />
        </div>
      </section>
    </>
  );
}

export default About;
