'use client';

import React, { useState, useEffect } from 'react';
import { FaHandPointUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 20) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            className={`fixed bottom-0 right-0 m-6 z-[51] ${
                showButton ? 'block' : 'hidden'
            }`}
        >
            <button
                className="bg-gradient-to-r from-primary to-[#709dff] px-4 text-white h-12 rounded-lg  hover:text-primary hover:scale-105 ease-in duration-75 hover:from-white hover:to-white hover:border-2 hover:border-primary"
                onClick={handleClick}
            >
                <FaHandPointUp size={30} />
            </button>
        </div>
    );
}
