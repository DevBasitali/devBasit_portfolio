import React from 'react';

function About() {
  return (
    <>

<section
  className="relative bg-gray-950"
>
  <div
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
        About.</h1>

      <p className="mt-4 ml-5 max-w-lg text-white sm:text-lg/relaxed text-left">
      I'm a passionate full-stack developer proficient in crafting dynamic web applications using the MERN stack <strong>(MongoDB, Express, React, Node.js)</strong>.
      Beyond coding, I'm a seasoned social media expert adept at crafting engaging content, building strong online communities, and driving brand growth. My expertise lies in leveraging social platforms to amplify digital presence and achieve business objectives.
      </p>
    </div>
  </div>
</section>
    </>
  );
}

export default About;
