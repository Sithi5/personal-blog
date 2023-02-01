'use client';

import React, { useEffect, useRef, useState } from 'react';
import MoonLogo from 'assets/logos/moon.svg';
import SunLogo from 'assets/logos/sun.svg';
import Image from 'next/image';

export default function DarkModeToggle() {
    const htmlElement = useRef<HTMLHtmlElement | null>();
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        htmlElement.current = document.querySelector('html');
        const htmlIsDark = htmlElement.current?.classList.contains('dark');
        setDarkMode(htmlIsDark ? true : false);
    }, []);

    function toggleDarkMode() {
        if (htmlElement.current?.classList.contains('dark')) {
            htmlElement.current.classList.remove('dark');
            setDarkMode(false);
        } else {
            htmlElement.current?.classList.toggle('dark');
            setDarkMode(true);
        }
    }

    return (
        <button
            className={
                'w-12 h-6 rounded-full ' +
                (darkMode ? 'bg-lightgrey ' : 'bg-white') +
                ' flex items-center transition duration-300 focus:outline-none shadow '
            }
            onClick={toggleDarkMode}
        >
            <div
                id="switch-toggle"
                className={
                    'w-6 h-6 relative rounded-full transition duration-500 transform ' +
                    (!darkMode
                        ? 'bg-yellow-500 translate-x-0'
                        : 'bg-gray-700 translate-x-full') +
                    ' p-1 text-white'
                }
            >
                <Image
                    alt="moon"
                    className=" text-white"
                    src={darkMode ? MoonLogo : SunLogo}
                />
            </div>
        </button>
    );
}
