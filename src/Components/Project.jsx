import { Button, Card } from "flowbite-react";
import React from "react";
import laptopImage from "../assets/LaptoWork.jpg";

const Project = () => {
  return (
    <div className="relative py-16 px-8 md:px-16 min-h-screen container mx-auto" id="project">
      <h5
        className="mb-10 text-3xl md:text-5xl font-medium text-gray-900 dark:text-white text-center"
        data-aos="fade-down"
        data-aos-duration="2500"
      >
        My Project
      </h5>
      
      {/* Grid with proper spacing and smaller cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
        <div className="max-w-xs mx-auto w-full">
          <Card
            className="flex flex-col h-full"
            imgAlt="Laptop Work"
            imgSrc={laptopImage}
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1500"
          >
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Jalan Kerja PI
            </h5>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400 mb-3">
              In this project I can show that I can work well as a team.
            </p>
            <div className="mt-auto">
              <Button color="blue" pill size="sm">
                See More
              </Button>
            </div>
          </Card>
        </div>

        <div className="max-w-xs mx-auto w-full">
          <Card
            className="flex flex-col h-full"
            imgAlt="Laptop Work"
            imgSrc={laptopImage}
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="1500"
          >
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              React Project
            </h5>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400 mb-3">
              In this project I made a lot of things with React, for example a
              portfolio and making a simple website.
            </p>
            <div className="mt-auto">
              <Button color="blue" pill size="sm">
                See More
              </Button>
            </div>
          </Card>
        </div>

        <div className="max-w-xs mx-auto w-full">
          <Card
            className="flex flex-col h-full"
            imgAlt="Laptop Work"
            imgSrc={laptopImage}
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-duration="1500"
          >
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Unified Modeling Language Project
            </h5>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400 mb-3">
              In this project I created use cases, activity diagrams and sequence
              diagrams for a website.
            </p>
            <div className="mt-auto">
              <Button color="blue" pill size="sm">
                See More
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-300 rounded-full filter blur-xl mt-10 z-0 opacity-30"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300 rounded-full filter blur-xl mt-10 z-0 opacity-30"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-blue-900 rounded-full filter blur-xl mt-10 z-0 opacity-30"></div>
    </div>
  );
};

export default Project;