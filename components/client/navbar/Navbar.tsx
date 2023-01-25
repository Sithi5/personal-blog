'use client';

import React from 'react';
import HorizontalBar from './HorizontalBar';
import VerticalBar from './VerticalBar';

const navbarLinksList: [string, string][] = [
    ['Home', '/'],
    ['About', '/about'],
    ['Skills', '/skills'],
    ['Projects', '/projects'],
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
