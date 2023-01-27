'use client';

import cyberpunkAvatar from 'images/malo-avatar-cyberpunk.png';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import ContactLinks from '../../server/utils/ContactLinks';

type VerticalBarProps = {
    navbarLinksList: [string, string][];
    handleVerticalNav: () => void;
    isVerticalNav: boolean;
};

export default function VerticalBar(props: VerticalBarProps) {
    const { navbarLinksList, handleVerticalNav, isVerticalNav } = props;

    return (
        <div>
            <div
                className={
                    isVerticalNav
                        ? 'fixed left-0 top-0 w-full h-full bg-black/30'
                        : 'hidden'
                }
                onClick={handleVerticalNav}
            ></div>
            <div
                className={
                    isVerticalNav
                        ? 'fixed left-0 top-0 w-[75%] sm:w-3/5 md:w-2/5 h-screen bg-white ease-in duration-500'
                        : 'fixed left-[-100%] top-0 ease-in duration-500 '
                }
            >
                <div className="h-full p-10 flex flex-col justify-around">
                    <div className="flex w-full items-center justify-between">
                        <Image
                            src={cyberpunkAvatar}
                            width="87"
                            height="35"
                            alt="/"
                        />
                        <div
                            onClick={handleVerticalNav}
                            className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                        >
                            <AiOutlineClose size={25} />
                        </div>
                    </div>
                    <div className="border-b border-gray-300 my-4">
                        <p className="w-[85%] md:w-[90%] py-4">Malo Boucé</p>
                    </div>
                    <ul className="py-4 flex flex-col">
                        {navbarLinksList.map(([title, url]) => (
                            <Link key={title} href={url}>
                                <li className="text-sm py-4 uppercase">
                                    {title}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <div className="justify-self-end">
                        <p className="uppercase tracking-widest text-primary">
                            Let&apos;s Connect
                        </p>
                        <ContactLinks />
                    </div>
                </div>
            </div>
        </div>
    );
}
