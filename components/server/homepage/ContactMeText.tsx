import React from 'react';
import { Emoji } from 'components/server';
import Link from 'next/link';

export type ContactMeTranslatedDict = {
    h2: string;
    contactMeText: string;
};

type ContactMeTextProps = {
    translations: ContactMeTranslatedDict;
};

export default function ContactMeText(props: ContactMeTextProps) {
    const { translations } = props;
    return (
        <>
            <h2 className="flex tracking-wide text-4xl md:text-5xl lg:text-7xl">
                {translations.h2}
                <span
                    className="animate-waving-hand pl-4 z-0"
                    role="img"
                    aria-label="animate-waving-hand"
                >
                    ☎️
                </span>
            </h2>
            <p className="tracking-normal text-grey text-1xl lg:text-2xl font-extralight">
                {translations.contactMeText}
            </p>
            <h3 className="lg:text-3xl text-grey pt-4">
                <Link href="tel:+33685546067">+33 6 85 54 60 67</Link>
            </h3>
            <h3 className="lg:text-3xl text-grey pt-4">
                <Link href="mailto:ma.sithis@gmail.com">
                    ma.sithis@gmail.com
                </Link>
            </h3>
        </>
    );
}
