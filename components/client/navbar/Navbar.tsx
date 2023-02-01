'use client';

import React from 'react';
import HorizontalBar from './HorizontalBar';
import VerticalBar from './VerticalBar';

type NavbarProps = {
    navbarLinksList: [string, string][];
};

export default function Navbar(props: NavbarProps) {
    const { navbarLinksList } = props;
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
