import { Button, Card } from "flowbite-react";
import React from "react";
import laptopImage from "../assets/LaptoWork.jpg";

const Project = () => {
  return (
    <div className="relative py-16 px-6 sm:px-10 md:px-16 min-h-screen container mx-auto" id="project">
      <h5
        className="mb-10 text-3xl md:text-5xl font-medium text-gray-900 dark:text-white text-center"
        data-aos="fade-down"
        data-aos-duration="2500"
      >
        My Project
      </h5>

      {/* Responsive Grid: 1 card on very small, 2 on sm+, 3 on lg+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
        {/* Project Card 1 */}
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
            This project is a job search website specifically built for SMK PI alumni, developed using Laravel.
          </p>
          <div className="mt-auto">
            <Button color="blue" pill size="sm" href="https://github.com/raihanshi18/Portofolio-Brocode.git">
              See
            </Button>
          </div>
        </Card>

        {/* Project Card 2 */}
        <Card
          className="flex flex-col h-full"
          imgAlt="Laptop Work"
          imgSrc={laptopImage}
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="1500"
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            PI Medsos With Websocket
          </h5>
          <p className="font-normal text-sm text-gray-700 dark:text-gray-400 mb-3">
            This project is a simple social media application that includes a posting feature implemented using WebSocket and React.
          </p>
          <div className="mt-auto">
            <Button color="blue" pill size="sm" href="https://github.com/raihanshi18/PI-MEDSOS.git">
              See
            </Button>
          </div>
        </Card>

        {/* Project Card 3 */}
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
            In this project I created use cases, activity diagrams and sequence diagrams for a website.
          </p>
        </Card>

        {/* Project Card 4 */}
        <Card
          className="flex flex-col h-full"
          imgAlt="Laptop Work"
          imgSrc={laptopImage}
          data-aos="fade-up"
          data-aos-delay="350"
          data-aos-duration="1500"
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Figma Design Project
          </h5>
          <p className="font-normal text-sm text-gray-700 dark:text-gray-400 mb-3">
            In this project, I used Figma to design a clean and responsive user interface for a web application.
          </p>
        </Card>

        {/* Project Card 5 */}
        <Card
          className="flex flex-col h-full"
          imgAlt="Laptop Work"
          imgSrc={laptopImage}
          data-aos="fade-up"
          data-aos-delay="350"
          data-aos-duration="1500"
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Backend Marketplace
          </h5>
          <p className="font-normal text-sm text-gray-700 dark:text-gray-400 mb-3">
            This project is a backend system for a marketplace application, developed using Laravel and RESTful API. It handles core features such as product management, user authentication, and order processing.
          </p>
          <div className="mt-auto">
            <Button color="blue" pill size="sm" href="https://github.com/raihanshi18/be-marketplace.git">
              See
            </Button>
          </div>
        </Card>

        {/* Project Card 6 */}
        <Card
          className="flex flex-col h-full"
          imgAlt="Laptop Work"
          imgSrc={laptopImage}
          data-aos="fade-up"
          data-aos-delay="350"
          data-aos-duration="1500"
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Laravel Basic Todolist
          </h5>
          <p className="font-normal text-sm text-gray-700 dark:text-gray-400 mb-3">
            This is a basic TodoList application built with Laravel to manage tasks simply and efficiently.
          </p>
          <div className="mt-auto">
            <Button color="blue" pill size="sm" href="https://github.com/raihanshi18/laravel-basic-todolist.git">
              See
            </Button>
          </div>
        </Card>
      </div>

      {/* Background blur effects */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-300 rounded-full filter blur-xl mt-10 z-0 opacity-30"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300 rounded-full filter blur-xl mt-10 z-0 opacity-30"></div>
    </div>
  );
};

export default Project;
