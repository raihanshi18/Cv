import { Button, Card } from 'flowbite-react'
import React from 'react'
import laptopImage from '../assets/LaptoWork.jpg';

const Project = () => {
  return (
    <div className='relative mt-10 p-10 h-screen' id='project'>
         <div className='absolute top-10 left-45 w-72 h-72 bg-purple-300 rounded-full filter blur-xl mt-10 z-0 opacity-40'></div>
         <div className='absolute top-10 right-0 w-72 h-72 bg-blue-300 rounded-full filter blur-xl mt-10 z-0 opacity-40'></div>
         <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-blue-900 rounded-full filter blur-xl mt-10 z-0 opacity-40'></div>
        <h5 className="mb-3 md:text-5xl font-medium text-gray-900 dark:text-white text-center" data-aos="fade-down" data-aos-duration="2500">My Project</h5>
        <div className="flex items-center justify-evenly gap-8 flex-wrap flex-row p-10"> 
            <Card
            className="max-w-sm"
            imgAlt="Laptop Work"
            imgSrc={laptopImage}
            data-aos="fade-right" data-aos-delay="250"  data-aos-duration="2000"
            >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Jalan Kerja PI
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                In this project I can show that I can work well as a team.
            </p>
            <Button color="blue" pill>
                See More
            </Button>

            </Card>
            <Card
            className="max-w-sm"
            imgAlt="Laptop Work"
            imgSrc={laptopImage}
            data-aos="fade-right" data-aos-delay="350"  data-aos-duration="2000"
            >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                React Project
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                In this project I made a lot of things with React, for example a portfolio and making a simple website.
            </p>
            <Button color="blue" pill>
                See More
            </Button>
            </Card>

            <Card
            className="max-w-sm"
            imgAlt="Laptop Work"
            imgSrc={laptopImage}
            data-aos="fade-right" data-aos-delay="450"  data-aos-duration="2000"
            >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Unified Modeling Language Project
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                In this project I created use cases, activity diagrams and sequence diagrams for a website.
            </p>
            <Button color="blue" pill>
                See More
            </Button>
            </Card>
        </div>  
    </div>
   
  )
}

export default Project