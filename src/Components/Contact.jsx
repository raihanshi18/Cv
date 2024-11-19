import { Button } from 'flowbite-react'
import React from 'react'
import pp from '../assets/fotoaku.png'
import { MdMail } from 'react-icons/md'
import { FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="relative flex items-center justify-evenly h-screen gap-8 flex-wrap" id='contact'>
       <div className='absolute bottom-0 right-0 w-72 h-72 bg-purple-300 rounded-full filter blur-xl mt-10 z-0 opacity-40'></div>
       <div className='absolute top-10 left-0 w-72 h-72 bg-blue-300 rounded-full filter blur-xl mt-10 z-0 opacity-40'></div>
    <div className="flex flex-col ">
      <div data-aos="fade-down" data-aos-duration="2500">
      <h5 className="mb-3 md:text-5xl font-medium text-gray-900 dark:text-white">
        Contact Me!!
      </h5>
      <span >Feel free to contact me if you have any questions or just want to say hi.</span>
      </div>
      
      <div className="flex gap-7 mt-9 flex-row">
        <a href="raihanshiddiq@gmail.com" data-aos="zoom-in-up" data-aos-duration="1500"><MdMail className='w-10 h-10'/></a>
        <a href="https://github.com/raihanshi18" data-aos="zoom-in-down" data-aos-duration="1500"><FaGithub className='w-10 h-10'/></a>
        <a href="https://www.instagram.com/raihanshi_/" data-aos="zoom-in-up" data-aos-duration="1500"><FaInstagram className='w-10 h-10'/></a>
        <a href="https://discordapp.com/users/HANN#hanzxyz" data-aos="zoom-in-down" data-aos-duration="1500"><FaDiscord className='w-10 h-10'/></a>
      </div>
    </div>

    <img
      alt="image"
      src={pp}
      className="w-90 h-90 mx-5" data-aos='fade-left' data-aos-duration="2500" 
    />
    </div>
  )
}

export default Contact