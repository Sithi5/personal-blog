'use client';

import React, { useState } from 'react';
import MoonLogo from 'assets/logos/moon.svg';
import SunLogo from 'assets/logos/sun.svg';
import Image from 'next/image';

export default function DarkModeToggle() {
    const htmlElement = document.querySelector('html');
    const [darkMode, setDarkMode] = useState(
        htmlElement?.classList.contains('dark')
    );

    function toggleDarkMode() {
        if (htmlElement?.classList.contains('dark')) {
            htmlElement?.classList.remove('dark');
            setDarkMode(false);
        } else {
            htmlElement?.classList.toggle('dark');
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
                        ? 'bg-yellow-500 -translate-x-2'
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
