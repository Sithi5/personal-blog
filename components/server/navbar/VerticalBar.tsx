import React from 'react';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import ContactLinks from '../utils/ContactLinks';
import { DarkModeToggle, LanguagesToggle } from 'components/client/';
import { SiFoodpanda } from 'react-icons/si';
import { ValidLocale } from 'i18n';

type VerticalBarProps = {
    navbarLinksList: [string, string][];
    handleVerticalNav: () => void;
    isVerticalNav: boolean;
    navbarLetsConnectText: string;
    lang: ValidLocale;
};

export default function VerticalBar(props: VerticalBarProps) {
    const {
        navbarLinksList,
        handleVerticalNav,
        isVerticalNav,
        navbarLetsConnectText,
        lang,
    } = props;

    return (
        <>
            <div
                className={
                    isVerticalNav
                        ? 'fixed left-0 top-0 w-full h-full bg-black/30 dark:bg-black/40 '
                        : 'hidden'
                }
                onClick={handleVerticalNav}
            ></div>
            <div
                className={
                    isVerticalNav
                        ? 'fixed left-0 top-0 w-[75%] sm:w-3/5 md:w-2/5 h-screen bg-white dark:bg-darkBlueColor ease-in duration-500'
                        : 'fixed left-[-100%] top-0 ease-in duration-500 '
                }
            >
                <div className="h-full p-10 flex flex-col justify-around">
                    <div className="flex w-full items-center justify-between">
                        <Link href="/">
                            <SiFoodpanda
                                size={65}
                                className="dark:text-white"
                            />
                        </Link>
                        <div
                            onClick={handleVerticalNav}
                            className="rounded-full shadow-lg shadow-gray-400 dark: p-3 cursor-pointer  dark:border-2 dark:border-white"
                        >
                            <AiOutlineClose
                                size={25}
                                className="dark:text-white "
                            />
                        </div>
                    </div>
                    <div className="border-b border-gray-300 my-4">
                        <p className="w-[85%] md:w-[90%] py-4">Malo Boucé</p>
                    </div>
                    <ul className="py-4 flex flex-col">
                        {navbarLinksList.map(([title, url]) => (
                            <Link key={title} href={url}>
                                <li className="text-sm py-4 uppercase">
                                    <p>{title}</p>
                                </li>
                            </Link>
                        ))}
                        <li key={'darkModeToggle'} className="ml-10">
                            <DarkModeToggle />
                        </li>
                        <li key={'languageToggle'} className="ml-10 py-4">
                            <LanguagesToggle lang={lang} />
                        </li>
                    </ul>
                    <div className="justify-self-end">
                        <p className="uppercase tracking-widest text-primary dark:text-primary">
                            {navbarLetsConnectText}
                        </p>
                        <div className="pt-4">
                            <ContactLinks />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
