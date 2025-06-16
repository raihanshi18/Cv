import React from "react";
import { Button } from "flowbite-react";

const AboutMe = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen gap-8 flex-wrap my-2 text-center px-4"
      id="about"
    >
      {/* Blur Background Elements */}
      <div className="absolute top-10 left-45 w-80 h-80 bg-blue-300 rounded-full filter blur-xl mt-10 z-0 opacity-40"></div>
      <div className="absolute top-100 right-8 w-91 h-91 bg-purple-300 rounded-full filter blur-xl mt-10 z-0 opacity-40"></div>

      <div
        className="z-10 max-w-2xl flex flex-col items-center justify-center"
        data-aos="fade-left"
        data-aos-duration="2500"
      >
        <h5 className="mb-3 md:text-5xl text-3xl font-medium text-gray-900 dark:text-white">
          About me
        </h5>

        <div className="mt-8 text-lg md:text-xl text-gray-500 px-4">
          <p>
            Hi! I'm Raihan, a vocational high school student with a strong
            interest in backend development. I enjoy working behind the scenes
            to build application logic, manage databases, and create efficient,
            secure APIs.
            <br />
            <br />
            I'm experienced in using PHP (Laravel) and JavaScript for
            backend development, and I have a solid understanding of MySQL and
            Git. Currently, I'm focused on learning and building my portfolio
            while seeking new experiences in web development.
          </p>
        </div>

        <div className="flex gap-7 mt-9">
          <Button color="blue" pill href="#skill">
            My Skills
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
