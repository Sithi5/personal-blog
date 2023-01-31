'use client';

import PandaAvatar from 'assets/images/panda-avatar.svg';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

type HorizontalBarProps = {
    navbarLinksList: [string, string][];
    handleVerticalNav: () => void;
};

export default function HorizontalBar(props: HorizontalBarProps) {
    const { navbarLinksList, handleVerticalNav } = props;

    return (
        <div className="fixed w-full h-20 bg-white shadow-xl flex justify-between items-center px-2 2xl:px-16">
            <a href="/">
                <Image src={PandaAvatar} alt="/" width="80" height="50" />
            </a>

            <ul className="hidden md:flex pr-4">
                {navbarLinksList.map(([title, url]) => (
                    <>
                        {/* Here we use a <a> instead of Link because of Next.js 13 bug with anchor */}
                        <a key={title} href={url}>
                            <li className="ml-10 text-sm uppercase hover:border-b">
                                {title}
                            </li>
                        </a>
                    </>
                ))}
            </ul>
            <div onClick={handleVerticalNav} className="md:hidden">
                <AiOutlineMenu size={25} />
            </div>
        </div>
    );
}
