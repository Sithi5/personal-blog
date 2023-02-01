'use client';

import { HorizontalBar, VerticalBar } from 'components/server';
import React from 'react';

type NavbarProps = {
    navbarLinksList: [string, string][];
    navbarLetsConnectText: string;
};

export default function Navbar(props: NavbarProps) {
    const { navbarLinksList, navbarLetsConnectText } = props;
    const [isVerticalNav, setVerticalNav] = React.useState(false);

    const handleVerticalNav = () => {
        setVerticalNav(!isVerticalNav);
    };

    return (
        <div className="z-50 relative">
            <HorizontalBar
                navbarLinksList={navbarLinksList}
                handleVerticalNav={handleVerticalNav}
            />
            <VerticalBar
                navbarLinksList={navbarLinksList}
                handleVerticalNav={handleVerticalNav}
                isVerticalNav={isVerticalNav}
                navbarLetsConnectText={navbarLetsConnectText}
            />
        </div>
    );
}
