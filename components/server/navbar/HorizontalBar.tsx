import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { DarkModeToggle, LanguagesToggle } from 'components/client/';
import { SiFoodpanda } from 'react-icons/si';
import { ValidLocale } from 'i18n';

type HorizontalBarProps = {
    navbarLinksList: [string, string][];
    handleVerticalNav: () => void;
    lang: ValidLocale;
};

export default function HorizontalBar(props: HorizontalBarProps) {
    const { navbarLinksList, handleVerticalNav, lang } = props;

    return (
        <div className="fixed w-full h-20 bg-white dark:bg-darkBlueColor shadow-xl flex justify-between items-center px-2 2xl:px-16">
            <a href="/">
                <SiFoodpanda size={65} className="dark:text-white" />
            </a>

            <ul className="hidden md:flex pr-4">
                {navbarLinksList.map(([title, url]) => (
                    <a key={title} href={url}>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <p>{title}</p>
                        </li>
                    </a>
                ))}
                <li key={'darkModeToggle'} className="ml-10">
                    <DarkModeToggle />
                </li>
                <li key={'languageToggle'} className="ml-10">
                    <LanguagesToggle lang={lang} />
                </li>
            </ul>
            <div onClick={handleVerticalNav} className="md:hidden">
                <AiOutlineMenu size={25} className="dark:text-white" />
            </div>
        </div>
    );
}
