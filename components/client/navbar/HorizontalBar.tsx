'use client';

import cyberpunkAvatar from 'images/malo-avatar-cyberpunk.png';
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
        <div className="fixed w-full h-20 shadow-xl flex justify-between items-center px-2 2xl:px-16">
            <Image src={cyberpunkAvatar} alt="/" width="80" height="50" />
            <ul className="hidden md:flex ">
                {navbarLinksList.map(([title, url]) => (
                    <Link key={title} href={url}>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            {title}
                        </li>
                    </Link>
                ))}
            </ul>
            <div onClick={handleVerticalNav} className="md:hidden">
                <AiOutlineMenu size={25} />
            </div>
        </div>
    );
}
