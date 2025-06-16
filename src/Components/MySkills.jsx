import { Progress } from 'flowbite-react';
import React from 'react';
import { 
  FaReact, FaJs, FaPhp, FaCss3Alt, FaFigma, FaLaravel, FaNetworkWired 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiBootstrap 
} from 'react-icons/si';

const MySkills = () => {
  return (
    <div className='relative mt-9 px-6 py-20 md:px-20 lg:px-40 min-h-screen' id='skill'>
      {/* Background blur circles */}
      <div className='absolute top-10 left-[45%] w-72 h-72 bg-blue-300 rounded-full filter blur-xl mt-10 z-0 opacity-40'></div>
      <div className='absolute top-[28rem] right-8 w-72 h-72 bg-purple-300 rounded-full filter blur-xl mt-10 z-0 opacity-40'></div>

      {/* Title and description */}
      <div className='text-center z-10' data-aos="fade-down" data-aos-duration="2500">
        <h5 className="mb-3 md:text-5xl text-3xl font-medium text-gray-900 dark:text-white">My Skills</h5>
        <span className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-md">
          Passionate about coding and always eager to explore new ideas and challenges.
        </span>
      </div>

      {/* Skill list */}
      <div
        className='flex flex-col md:flex-row justify-evenly gap-12 my-10 z-10'
        data-aos="fade-up"
        data-aos-delay="250"
        data-aos-duration="2500"
      >
        {/* Left column */}
        <div className='flex flex-col gap-4 w-full md:w-1/2'>
          <div className="flex items-center gap-2 text-base font-medium"><FaReact /> React</div>
          <Progress progress={50} color="blue" />
          <div className="flex items-center gap-2 text-base font-medium"><FaJs /> JavaScript</div>
          <Progress progress={80} color="blue" />
          <div className="flex items-center gap-2 text-base font-medium"><FaPhp /> PHP</div>
          <Progress progress={75} color="blue" />
          <div className="flex items-center gap-2 text-base font-medium"><FaCss3Alt /> CSS</div>
          <Progress progress={60} color="blue" />
        </div>

        {/* Right column */}
        <div className='flex flex-col gap-4 w-full md:w-1/2' data-aos="fade-up" data-aos-delay="350" data-aos-duration="2500">
          <div className="flex items-center gap-2 text-base font-medium"><FaNetworkWired /> WebSocket</div>
          <Progress progress={65} color="blue" />
          <div className="flex items-center gap-2 text-base font-medium"><FaFigma /> Figma</div>
          <Progress progress={90} color="blue" />
          <div className="flex items-center gap-2 text-base font-medium"><FaLaravel /> Laravel</div>
          <Progress progress={60} color="blue" />
          <div className="flex items-center gap-2 text-base font-medium">
            <SiBootstrap /> <SiTailwindcss /> Bootstrap & Tailwind
          </div>
          <Progress progress={50} color="blue" />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
