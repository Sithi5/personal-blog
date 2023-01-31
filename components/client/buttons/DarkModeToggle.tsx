'use client';

import React, { useState } from 'react';

export default function DarkModeToggle() {
    const htmlElement = document.querySelector('html');
    const [darkMode, setDarkMode] = useState(false);

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
            className="bg-white  font-bold py-2 px-4 rounded"
            onClick={() => toggleDarkMode()}
        >
            {darkMode ? '🌙' : '☀️'}
        </button>
    );
}
