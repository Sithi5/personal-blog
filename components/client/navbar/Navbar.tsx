'use client';

import { HorizontalBar, VerticalBar } from 'components/server';
import { ValidLocale } from 'i18n';
import React from 'react';

type NavbarProps = {
    navbarLinksList: [string, string][];
    navbarLetsConnectText: string;
    lang: ValidLocale;
};

export default function Navbar(props: NavbarProps) {
    const { navbarLinksList, navbarLetsConnectText, lang } = props;
    const [isVerticalNav, setVerticalNav] = React.useState(false);

    const handleVerticalNav = () => {
        setVerticalNav(!isVerticalNav);
    };

    return (
        <div className="z-50 relative">
            <HorizontalBar
                navbarLinksList={navbarLinksList}
                handleVerticalNav={handleVerticalNav}
                lang={lang}
            />
            <VerticalBar
                navbarLinksList={navbarLinksList}
                handleVerticalNav={handleVerticalNav}
                isVerticalNav={isVerticalNav}
                navbarLetsConnectText={navbarLetsConnectText}
                lang={lang}
            />
        </div>
    );
}
