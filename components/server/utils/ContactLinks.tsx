import Link from 'next/link';
import React from 'react';
import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaStackOverflow } from 'react-icons/fa';

export default function ContactLinks() {
    return (
        <ul className="flex items-center justify-around w-full">
            <li className=" rounded-full shadow-lg shadow-gray-400 dark:border-2 dark:border-white p-3 cursore-pointer hover:scale-105 ease-in duration-75 ">
                <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/malo-bouc%C3%A9/"
                >
                    <FaLinkedinIn size={25} className="dark:text-white" />
                </Link>
            </li>
            <li className="rounded-full shadow-lg shadow-gray-400 dark:border-2 dark:border-white p-3 cursore-pointer hover:scale-105 ease-in duration-75 ">
                <Link target="_blank" href="https://github.com/Sithi5">
                    <AiOutlineGithub size={25} className="dark:text-white" />
                </Link>
            </li>
            <li className="rounded-full shadow-lg shadow-gray-400 dark:border-2 dark:border-white p-3 cursore-pointer hover:scale-105 ease-in duration-75 ">
                <Link href="mailto:ma.sithis@gmail.com">
                    <AiOutlineMail size={25} className="dark:text-white" />
                </Link>
            </li>
            <li className="rounded-full shadow-lg shadow-gray-400 dark:border-2 dark:border-white p-3 cursore-pointer hover:scale-105 ease-in duration-75 ">
                <Link
                    target="_blank"
                    href="https://stackoverflow.com/users/10182580/sithis"
                >
                    <FaStackOverflow size={25} className="dark:text-white" />
                </Link>
            </li>
        </ul>
    );
}
