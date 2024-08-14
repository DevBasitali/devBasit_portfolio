import React from "react";

export default function Card() {
  return (
    <>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-auto">
        <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-black shadow">
          <div>
            <img
            src="https://plus.unsplash.com/premium_photo-1661589763483-b30d5f3ae5bf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full object-cover"
              alt=""
            />
          </div>

          <div className="absolute inset-0 z-10 bg-gradient-to-t from-teal-900"></div>
          <div className="absolute inset-x-0 bottom-0 z-20 p-4">
            <p className="mb-1 text-center text-sm text-white text-opacity-80">
              Andrea Felsted • <time>18 Nov 2022</time>
            </p>
            <h1 className="text-center text-white font-bold text-sm sm:text-sm md:text-base lg:text-xl">
              Full Stack Developer
            </h1>
            <ul className="text-start text-gray-200 pt-4 pl-4 text-xs hidden sm:hidden md:block lg:block sm:text-xs md:text-base lg:text-md/50">
              <li>Responsive, user-friendly sites</li>
              <li>MERN Stack Technologies</li>
              <li>Scalable, maintainable web apps</li>
            </ul>
          </div>
        </div>

        <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-black shadow">
          <div>
            <img
              src="https://images.unsplash.com/photo-1618424599646-14f0a25990f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full object-cover"
              alt=""
            />
          </div>

          <div className="absolute inset-0 z-10 bg-gradient-to-t from-teal-900"></div>
          <div className="absolute inset-x-0 bottom-0 z-20 p-4">
            <p className="mb-1 text-center text-sm text-white text-opacity-80">
              Andrea Felsted • <time>18 Nov 2022</time>
            </p>
            <h1 className="text-center text-white font-bold text-sm sm:text-sm md:text-base lg:text-xl">
              Android App Developer
            </h1>
            <ul className="text-start text-gray-200 pt-4 pl-4 text-xs hidden sm:hidden md:block lg:block sm:text-xs md:text-base lg:text-md/50">
              <li>Develop high-quality Apps</li>
              <li>Master Languages</li>
              <li>User-centric mobile experiences</li>
            </ul>
          </div>
        </div>

        <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-black shadow">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1685283298465-e52e933a3312?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full object-cover"
              alt=""
            />
          </div>

          <div className="absolute inset-0 z-10 bg-gradient-to-t from-teal-900"></div>
          <div className="absolute inset-x-0 bottom-0 z-20 p-4">
            <p className="mb-1 text-center text-sm text-white text-opacity-80">
              Andrea Felsted • <time>18 Nov 2022</time>
            </p>
            <h1 className="text-center text-white font-bold text-sm sm:text-sm md:text-base lg:text-xl">
              Search Engine Optimization
            </h1>
            <ul className="text-start text-gray-200 pt-4 pl-4 text-xs hidden sm:hidden md:block lg:block sm:text-xs md:text-base lg:text-md/50">
              <li>Boost organic traffic</li>
              <li>Master keyword research</li>
              <li>Expert in on-off-page SEO</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /*<div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-auto">
               <div className="max-w-[18rem] rounded-lg bg-gray-950 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white h-60 sm:h-60 md:h-96 ">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    className="rounded-t-lg"
                    src="https://drive.google.com/file/d/1WtHs2xFKyC_mPHR0c6vmwzOinymUdSIp/view?usp=drive_link"
                    alt="not found"
                  />
                </div>
                <div className="p-6 flex flex-col items-center justify-center">
                  <h1 className="text-center text-white font-bold text-sm sm:text-sm md:text-base lg:text-lg">
                    Full Stack Developer
                  </h1>
                  <ul className="text-start text-gray-400 pt-4 pl-4 text-xs hidden sm:hidden md:block lg:block sm:text-xs md:text-base lg:text-md/50">
                    <li>Responsive, user-friendly sites</li>
                    <li>MERN Stack Technologies</li>
                    <li>Scalable, maintainable web apps</li>
                  </ul>
                </div>
              </div> 

              

              <div className="max-w-[18rem] rounded-lg bg-gray-950 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white h-60 sm:h-60 md:h-96 ">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    className="rounded-t-lg"
                    src="https://drive.google.com/file/d/1J7iunbN6lBI24pZTb4Q_ftUM0D_a9NKk/view?usp=drive_link"
                    alt=""
                  />
                </div>
                <div className="p-6 flex flex-col items-center justify-center">
                  <h1 className="text-center text-white font-bold text-sm sm:text-sm md:text-base lg:text-lg">
                    Lead Android Developer
                  </h1>
                  <ul className="hidden sm:hidden md:block lg:block text-start text-gray-400 pt-4 pl-4 text-sm sm:text-sm md:text-base lg:text-md/50 ">
                    <li>Develop high-quality Apps</li>
                    <li>Master Languages</li>
                    <li>User-centric mobile experiences</li>
                  </ul>
                </div>
              </div>

              <div className="max-w-[18rem] rounded-lg bg-gray-950 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white h-60 sm:h-60 md:h-96 ">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    className="rounded-t-lg"
                    src="https://drive.google.com/file/d/1BuQhzdxsMVtUfhZZbF_Ih5HSAqmdYW2I/view?usp=drive_link"
                    alt=""
                  />
                </div>
                <div className="p-6 flex flex-col items-center justify-center">
                  <h1 className="text-center text-white font-bold text-sm sm:text-sm md:text-base lg:text-lg">
                    Content SEO Specialist
                  </h1>
                  <ul className="hidden sm:hidden md:block lg:block text-start text-gray-400 pt-4 pl-4 text-sm sm:text-sm md:text-base lg:text-md/50">
                    <li>Boost organic traffic</li>
                    <li>Master keyword research</li>
                    <li>Expert in on-off-page SEO</li>
                  </ul>
                </div>
              </div>

              <div className="max-w-[18rem] rounded-lg bg-gray-950 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white h-60 sm:h-60 md:h-96 ">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    className="rounded-t-lg"
                    src="https://drive.google.com/file/d/1RJgRc6gKwJPjUfALgJBMO7SoHRSdDped/view?usp=drive_link"
                    alt=""
                  />
                </div>
                <div className="p-6 flex flex-col items-center justify-center">
                  <h1 className="text-center text-white font-bold text-sm sm:text-sm md:text-base lg:text-lg">
                    Maintenance and Support
                  </h1>
                  <ul className="hidden sm:hidden md:block lg:block text-start text-gray-400 pt-4 pl-4 text-sm sm:text-sm md:text-base lg:text-md/50">
                    <li>Troubleshoot, resolve issues</li>
                    <li>Excellent customer support</li>
                    <li>Maintain, optimize IT systems</li>
                  </ul>
                </div>
              </div>
            </div>*/
}
