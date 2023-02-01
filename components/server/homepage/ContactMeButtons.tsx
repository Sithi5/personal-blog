import Link from 'next/link';
import React from 'react';
import PrimaryButtons from '../buttons/PrimaryButtons';

type IntroProps = {
    translator: (key: string) => string;
};

export default function ContactMeButtons(props: IntroProps) {
    const { translator } = props;

    return (
        <div className="flex justify-around lg:justify-start">
            <a href="#contact-me" className="pl-4 min-w-[24vw] lg:min-w-[12vw]">
                <PrimaryButtons text={translator('intro.contactMe')} />
            </a>
            <Link
                href="https://drive.google.com/file/d/1lEzZlYw3k2I1qv1o9ndyC2aAxyfxRlIW/view?usp=share_link"
                target={'_blank'}
                className="pl-4 min-w-[24vw] lg:min-w-[12vw]"
            >
                <PrimaryButtons text={translator('intro.seeMyResume')} />
            </Link>
        </div>
    );
}
