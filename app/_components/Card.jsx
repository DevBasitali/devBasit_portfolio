import React from "react";

export default function Card() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 h-80 w-auto">
          
          <div className="flex flex-col items-center bg-gray-950 rounded-lg shadow-md p-6">
            <img src="SEO.png" alt="" className="w-10 h-10 sm:h-10 sm:w-10 lg:h-20 lg:w-20 md:h-20 md:w-20 mb-4 " />
            <h2 className="text-center text-white text-sm sm:text-sm md:text-base lg:text-lg">Content SEO Specialist</h2>
            <ul className="text-start text-gray-400 pt-4 pl-4 text-sm sm:text-sm md:text-base lg:text-md/50">
              <li>Boost organic traffic</li>
              <li>Master keyword research</li>
              <li>Expert in on-off-page SEO</li>
            </ul>
          </div>

          <div className="flex flex-col  items-center bg-gray-950 rounded-lg shadow-md p-6">
            <img src="main.png" alt="" className="w-10 h-10 sm:h-10 sm:w-10 lg:h-20 lg:w-20 md:h-20 md:w-20 mb-4" />
            <h2 className="text-center text-white text-sm sm:text-sm md:text-base lg:text-lg">Maintenance and Support</h2>
            <ul className="text-start text-gray-400 pt-4 pl-4 text-sm sm:text-sm md:text-base lg:text-md/50">
              <li>Troubleshoot, resolve issues</li>
              <li>Excellent customer support</li>
              <li>Maintain, optimize IT systems</li>
            </ul>
          </div>

          <div className="flex flex-col items-center bg-gray-950 rounded-lg shadow-md p-6">
            <img src="phone.png" alt="" className="w-10 h-10 sm:h-10 sm:w-10 lg:h-20 lg:w-20 md:h-20 md:w-20 mb-4" />
            <h2 className="text-center text-white text-sm sm:text-sm md:text-base lg:text-lg">Lead Android Developer</h2>
            <ul className="text-start text-gray-400 pt-4 pl-4 text-sm sm:text-sm md:text-base lg:text-md/50">
              <li>Develop high-quality Apps</li>
              <li>Master Languages</li>
              <li>User-centric mobile experiences</li>
            </ul>
          </div>

          <div className="flex flex-col items-center bg-gray-950 rounded-lg shadow-md p-6">
            <img src="web.png" alt="" className="w-10 h-10 sm:h-10 sm:w-10 lg:h-20 lg:w-20 md:h-20 md:w-20 mb-4" />
            <h2 className="text-center text-white text-sm sm:text-sm md:text-base lg:text-lg">
              Senior Full Stack Developer
            </h2>
            <ul className="text-start text-gray-400 pt-4 pl-4 text-sm sm:text-sm md:text-base lg:text-md/50">
              <li>Responsive, user-friendly sites</li>
              <li>MERN Stack Technologies</li>
              <li>Scalable, maintainable web apps</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
