import React from 'react';
import { Emoji } from 'components/server';

const footerHeight = 12;

export default function Footer() {
    return (
        <>
            <div className={'relative bottom-0 h-' + footerHeight}></div>
            {/* This prevent other elem go to throu the footer */}
            <footer
                className={'absolute bottom-0 w-full z-50  h-' + footerHeight}
            >
                <div className="flex justify-center p-4">
                    <p className="text-grey">
                        Made with <Emoji symbol="❤️" label="heart" /> by Malo
                        Boucé
                    </p>
                </div>
            </footer>
        </>
    );
}
