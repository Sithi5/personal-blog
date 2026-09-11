import React from 'react';

export type ContactMeTranslatedDict = {
    h2: string;
};

type ContactMeTextProps = {
    translations: ContactMeTranslatedDict;
};

export default function ContactMeText(props: ContactMeTextProps) {
    const { translations } = props;
    return (
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
    );
}
