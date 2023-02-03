'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LanguageSwitch() {
    const router = useRouter();
    const [language, setLanguage] = useState<string>('en');
    const [showDropdown, setShowDropdown] = useState(false);

    function pushing() {
        router.push('https://www.google.com/');
    }

    return (
        <div className="relative">
            <button
                className="px-3 py-2 rounded-lg hover:bg-gray-300"
                onClick={() => {
                    router.replace('http://www.localhost:3000/en');
                }}
            >
                {language === 'en' ? (
                    <>
                        <span className="inline-block w-4 h-4 bg-gray-400 rounded-full"></span>
                        <span className="ml-2">EN</span>
                    </>
                ) : (
                    <>
                        <span className="inline-block w-4 h-4 bg-gray-400 rounded-full"></span>
                        <span className="ml-2">FR</span>
                    </>
                )}
            </button>

            {showDropdown && (
                <div className="absolute right-0 mt-2 py-2 bg-white rounded-lg shadow-xl">
                    <button
                        className="px-3 py-2 block w-full text-left hover:bg-gray-300"
                        onClick={() => {
                            console.log('ici');
                        }}
                    >
                        <span className="inline-block w-4 h-4 bg-gray-400 rounded-full"></span>
                        <span className="ml-2">EN</span>
                    </button>
                    <button
                        className="px-3 py-2 block w-full text-left hover:bg-gray-300"
                        onClick={() => {
                            console.log('ici');
                        }}
                    >
                        <span className="inline-block w-4 h-4 bg-gray-400 rounded-full"></span>
                        <span className="ml-2">FR</span>
                    </button>
                </div>
            )}
        </div>
    );
}
