import React from 'react'
import pp from '../assets/kucing.jpg'
import { Button, Card } from 'flowbite-react'

const Profile = () => {
  return (
    <div className="flex items-center justify-evenly h-screen gap-8 flex-wrap m-5 ">
      <div className="flex flex-col ">
        <h5 className="mb-3 md:text-2xl font-small text-gray-800 dark:text-white">
          Hello!
        </h5>
        <h5 className="mb-3 md:text-5xl font-medium text-gray-900 dark:text-white">
          I'm Raihan Abdur
        </h5>
        <h5 className="mb-3 md:text-5xl font-medium text-gray-900 dark:text-white">
          Rahman Shiddiq
        </h5>
        <span className="text-lg md:text-xl  text-gray-500 dark:text-gray-400 max-w-md">
          Junior Programmer
        </span>

        <div className="flex gap-7 mt-5">
        <Button color="blue" pill>
          About me 
        </Button>
        <Button color="blue" pill>
          My Skills
        </Button>
        </div>
      </div>

      <img
        alt="image"
        src={pp}
        className="w-90 h-90"
      />
    </div>
  )
}


export default Profile