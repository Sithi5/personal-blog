'use client';

import React from 'react';
import HorizontalBar from './HorizontalBar';
import VerticalBar from './VerticalBar';

const navbarLinksList: [string, string][] = [
    ['Home', '/'],
    ['Skills', '#skills'],
    ['Experiences', '#experiences'],
    ['Projects', '#projects'],
    ['Education', '#education'],
    ['Contact Me', '#contact-me'],
];

export default function Navbar() {
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
            />
        </div>
    );
}
