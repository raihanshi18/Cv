import React from 'react'
import pp from '../assets/kucing.jpg'
import { Card } from 'flowbite-react'

const Profile = () => {
  return (
    <Card className='max-w-full m-3'>
    <div className='flex justify-between px-4 pt-4 flex-wrap m-3 '>
      <div className="flex flex-col items-center pb-10">        
      <img
          alt="Kucing image"    
          height="96"
          src={pp}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Raihan Abdur Rahman Shiddiq</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Programmer</span> 
      </div>
      <div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Raihan Abdur Rahman Shiddiq</h5>
        <h5>Phone +62 8956 2007 5503</h5>
        <h5>Email raihanshiddiq18@gmail.com</h5>
        <h5>Github :</h5>
        <h5>Linkdl :</h5>
      </div>
                   
    </div>
    </Card> 
  )
}

export default Profile