'use client';

import React, { useState } from 'react';

export default function LanguageSwitch() {
    const [language, setLanguage] = useState<string>('en');
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="relative">
            <button
                className="px-3 py-2 rounded-lg hover:bg-gray-300"
                onClick={() => setShowDropdown(!showDropdown)}
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
                            setLanguage('en');
                            setShowDropdown(false);
                        }}
                    >
                        <span className="inline-block w-4 h-4 bg-gray-400 rounded-full"></span>
                        <span className="ml-2">EN</span>
                    </button>
                    <button
                        className="px-3 py-2 block w-full text-left hover:bg-gray-300"
                        onClick={() => {
                            setLanguage('fr');
                            setShowDropdown(false);
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
