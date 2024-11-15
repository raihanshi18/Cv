import React from 'react'
import pp from '../assets/kucing.jpg'
import { Button, Card, Table } from 'flowbite-react'

const AboutMe = () => {
  return (
    <div className="flex items-center justify-evenly h-screen gap-8 flex-wrap my-2 ">
        <img
            alt="image"
            src={pp}
            className="w-90 h-90"
        />

        <div className="flex flex-col ">
            <h5 className="mb-3 md:text-5xl font-medium text-gray-900 dark:text-white">
                About me
            </h5>
            <span className="text-lg md:text-xl  text-gray-500 dark:text-gray-400 max-w-md">
                Passionate about coding and always eager to explore new ideas and challenges.
            </span>
                <Table className="mt-5">
                <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {'Name'}
                    </Table.Cell>
                    <Table.Cell>:</Table.Cell>
                    <Table.Cell>Raihan Abdur Rahman Shiddiq</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {'Date of Birth'}
                    </Table.Cell>
                    <Table.Cell>:</Table.Cell>
                    <Table.Cell>May 18, 2008</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {'Email'}
                    </Table.Cell>
                    <Table.Cell>:</Table.Cell>
                    <Table.Cell>raihanshiddiq18@gmail.com</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {'Phone'}
                    </Table.Cell>
                    <Table.Cell>:</Table.Cell>
                    <Table.Cell>+62 8956 2007 5503</Table.Cell>
                </Table.Row>
                
                </Table.Body>
            </Table>

            <div className="flex gap-7 mt-9">
                <Button color="blue" pill>
                My Skills
                </Button>
            </div>
        </div>

      
    </div>
  )
}


export default AboutMe