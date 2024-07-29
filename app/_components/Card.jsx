import React from "react";

export default function Card() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 h-80 w-auto">
          
          <div className="flex flex-col items-center bg-gray-950 rounded-lg shadow-md p-6">
            <img src="SEO.png" alt="" className="w-20 h-20 mb-4" />
            <h2 className="text-center text-white">Content SEO Specialist</h2>
            <ul className="text-start text-gray-400 pt-4 pl-4">
              <li>Boost organic traffic</li>
              <li>Master keyword research</li>
              <li>Expert in on-off-page SEO</li>
            </ul>
          </div>

          <div className="flex flex-col  items-center bg-gray-950 rounded-lg shadow-md p-6">
            <img src="main.png" alt="" className="w-20 h-20 mb-4" />
            <h2 className="text-center text-white">Maintenance and Support</h2>
            <ul className="text-start text-gray-400 py-4 pl-4">
              <li>Troubleshoot, resolve issues</li>
              <li>Excellent customer support</li>
              <li>Maintain, optimize IT systems</li>
            </ul>
          </div>

          <div className="flex flex-col items-center bg-gray-950 rounded-lg shadow-md p-6">
            <img src="phone.png" alt="" className="w-20 h-20 mb-4" />
            <h2 className="text-center text-white">Lead Android Developer</h2>
            <ul className="text-start text-gray-400 pt-4 pl-4">
              <li>Develop high-quality Apps</li>
              <li>Master Languages</li>
              <li>User-centric mobile experiences</li>
            </ul>
          </div>

          <div className="flex flex-col items-center bg-gray-950 rounded-lg shadow-md p-6">
            <img src="web.png" alt="" className="w-20 h-20 mb-4" />
            <h2 className="text-center text-white">
              Senior Full Stack Developer
            </h2>
            <ul className="text-start text-gray-400 pt-4 pl-4">
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
