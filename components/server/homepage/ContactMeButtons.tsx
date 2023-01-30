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
                href="#see-my-resume"
                className="pl-4 min-w-[24vw] lg:min-w-[12vw]"
            >
                <PrimaryButtons text="see my resume" />
            </Link>
        </div>
    );
}
