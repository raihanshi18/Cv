import React from 'react'
import pp from '../assets/fotoaku.png'
import { Button, Card, Table } from 'flowbite-react'

const AboutMe = () => {
  return (
    <div className="relative flex items-center justify-evenly h-screen gap-8 flex-wrap my-2 " id='about'>
         <div className='absolute top-10 left-45 w-80 h-80 bg-blue-300 rounded-full filter blur-xl mt-10 z-0 opacity-40'></div>
         <div className='absolute top-100 right-8 w-91 h-91 bg-purple-300 rounded-full filter blur-xl mt-10 z-0 opacity-40'></div>
        <img
            alt="image"
            src={pp}
            className="w-90 h-90" data-aos='fade-right' data-aos-duration="2500"
        />

        <div className="flex flex-col " data-aos='fade-left' data-aos-duration="2500">
            <h5 className="mb-3 md:text-5xl font-medium text-gray-900 dark:text-white">
                About me
            </h5>
            <span className="text-lg md:text-xl  text-gray-500 dark:text-gray-400 max-w-md">
                Passionate about coding and always eager to explore new ideas and challenges.
            </span>
            <div>

            <table className='p-10 mt-8 text-xl text-gray-500'>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>   :</td>
                        <td>Raihan Abdur Rahman Shiddiq</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>   :</td>
                        <td>raihanshiddiq18@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>   :</td>
                        <td>+62 8956 2007 5503</td>
                    </tr>
                </tbody>
            </table>
            </div>

            <div className="flex gap-7 mt-9">
                <Button color="blue" pill href='#skill'>
                My Skills
                </Button>
            </div>
        </div>

      
    </div>
  )
}


export default AboutMe