'use client';

import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { DarkModeToggle } from 'components/client/';
import { SiFoodpanda } from 'react-icons/si';

type HorizontalBarProps = {
    navbarLinksList: [string, string][];
    handleVerticalNav: () => void;
};

export default function HorizontalBar(props: HorizontalBarProps) {
    const { navbarLinksList, handleVerticalNav } = props;

    return (
        <div className="fixed w-full h-20 bg-white dark:bg-darkBlueColor shadow-xl flex justify-between items-center px-2 2xl:px-16">
            <a href="/">
                <SiFoodpanda size={65} className="dark:text-white" />
            </a>

            <ul className="hidden md:flex pr-4">
                {navbarLinksList.map(([title, url]) => (
                    <>
                        {/* Here we use a <a> instead of Link because of Next.js 13 bug with anchor */}
                        <a key={title} href={url}>
                            <li className="ml-10 text-sm uppercase hover:border-b">
                                <p>{title}</p>
                            </li>
                        </a>
                    </>
                ))}
                <li className="ml-10">
                    <DarkModeToggle />
                </li>
            </ul>
            <div onClick={handleVerticalNav} className="md:hidden">
                <AiOutlineMenu size={25} className="dark:text-white" />
            </div>
        </div>
    );
}
