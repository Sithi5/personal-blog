'use client';

import React, { useState } from 'react';
import { ValidLocale } from 'i18n';
import FranceLogo from '/assets/logos/france-logo.svg';
import EnglandLogo from '/assets/logos/england-logo.svg';
import Image from 'next/image';

type LanguageSwitchProps = {
    lang: ValidLocale;
};

export default function LanguageSwitch(props: LanguageSwitchProps) {
    const { lang } = props;
    const [showDropdown, setShowDropdown] = useState(false);

    function handleShowDropdown() {
        setShowDropdown(!showDropdown);
    }

    return (
        <div className="relative">
            <button
                className="px-3 rounded-lg hover:bg-lightgrey"
                onClick={() => {
                    handleShowDropdown();
                }}
            >
                <div className="flex">
                    {lang === 'en' ? (
                        <>
                            <Image
                                src={EnglandLogo}
                                alt="england-logo"
                                height={10}
                                width={10}
                            />
                            <span className="ml-2 dark:text-white">EN</span>
                        </>
                    ) : (
                        <>
                            <Image
                                src={FranceLogo}
                                alt="france-logo"
                                height={10}
                                width={10}
                            />
                            <span className="ml-2 dark:text-white">FR</span>
                        </>
                    )}
                </div>
            </button>

            {showDropdown ? (
                <div className="absolute pl-2 bg-white rounded-lg shadow-xl">
                    <a href="/en">
                        <button
                            className="flex"
                            onClick={() => {
                                setShowDropdown(false);
                            }}
                        >
                            <Image
                                src={EnglandLogo}
                                className="mt-2 ml-2"
                                alt="england-logo"
                                height={10}
                                width={10}
                            />
                            <span className="mx-2  text-black">EN</span>
                        </button>
                    </a>
                    <a className="" href="/fr">
                        <button
                            className="flex"
                            onClick={() => {
                                setShowDropdown(false);
                            }}
                        >
                            <Image
                                src={FranceLogo}
                                className="mt-2 ml-2"
                                alt="france-logo"
                                height={10}
                                width={10}
                            />
                            <span className="mx-2  text-black">FR</span>
                        </button>
                    </a>
                </div>
            ) : null}
        </div>
    );
}
