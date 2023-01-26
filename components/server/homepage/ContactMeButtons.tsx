import Link from 'next/link';
import React from 'react';
import PrimaryButtons from '../buttons/PrimaryButtons';

export default function ContactMeButtons() {
    return (
        <div className="flex items-center justify-evenly my-4 w-full">
            <Link href="#contact-me">
                <PrimaryButtons text="contact me" />
            </Link>
            <Link href="#see-my-resume">
                <PrimaryButtons text="see my resume" />
            </Link>
        </div>
    );
}
