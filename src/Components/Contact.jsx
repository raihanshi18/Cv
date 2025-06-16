import { Button } from 'flowbite-react'
import React from 'react'
import { MdMail } from 'react-icons/md'
import { FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="relative flex flex-col items-center justify-center px-6 py-20 md:py-32 gap-8 min-h-screen" id="contact">
      {/* Decorative Blurs */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 rounded-full filter blur-xl z-0 opacity-40"></div>
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-300 rounded-full filter blur-xl z-0 opacity-40"></div>

      {/* Contact Content */}
      <div className="z-10 text-center max-w-xl" data-aos="fade-down" data-aos-duration="2500">
        <h5 className="mb-3 text-3xl md:text-5xl font-medium text-gray-900 dark:text-white">
          Contact Me!!
        </h5>
        <span className="text-gray-700 dark:text-gray-300">
          Feel free to contact me if you have any questions or just want to say hi.
        </span>
      </div>

      {/* Icons */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 z-10">
        <a href="mailto:raihanshiddiq@gmail.com" data-aos="zoom-in-up" data-aos-duration="1500">
          <MdMail className="w-10 h-10 hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://github.com/raihanshi18" target="_blank" rel="noopener noreferrer" data-aos="zoom-in-down" data-aos-duration="1500">
          <FaGithub className="w-10 h-10 hover:text-gray-800 transition-colors" />
        </a>
        <a href="https://www.instagram.com/raihanshi_/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in-up" data-aos-duration="1500">
          <FaInstagram className="w-10 h-10 hover:text-pink-500 transition-colors" />
        </a>
        <a href="https://discordapp.com/users/HANN#hanzxyz" target="_blank" rel="noopener noreferrer" data-aos="zoom-in-down" data-aos-duration="1500">
          <FaDiscord className="w-10 h-10 hover:text-indigo-500 transition-colors" />
        </a>
      </div>
    </div>
  )
}

export default Contact
