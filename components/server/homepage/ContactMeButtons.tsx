import Link from 'next/link';
import React from 'react';
import PrimaryButtons from '../buttons/PrimaryButtons';

export default function ContactMeButtons() {
    return (
        <div className="flex justify-around lg:justify-start">
            <Link
                href="#contact-me"
                className="pl-4 min-w-[24vw] lg:min-w-[12vw]"
            >
                <PrimaryButtons text="contact me" />
            </Link>
            <Link
                href="https://drive.google.com/file/d/1lEzZlYw3k2I1qv1o9ndyC2aAxyfxRlIW/view?usp=share_link"
                target={'_blank'}
                className="pl-4 min-w-[24vw] lg:min-w-[12vw]"
            >
                <PrimaryButtons text="see my resume" />
            </Link>
        </div>
    );
}
