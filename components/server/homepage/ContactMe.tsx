import React from 'react';
import ContactMeText, { ContactMeTranslatedDict } from './ContactMeText';
import { ContactLinks } from 'components/server';
import { ContactMeLottie } from 'components/client';

type EducationProps = {
    translator: (key: string) => string;
};

export default function ContactMe(props: EducationProps) {
    const { translator } = props;

    const contactMeTranslatedText: ContactMeTranslatedDict = {
        h2: translator('contactMe.h2'),
        contactMeText: translator('contactMe.contactMeText'),
    };

    return (
        <div className="animate-fade-in flex flex-col lg:flex-row justify-around px-4">
            <div className="flex flex-col lg:pt-10 lg:w-[50%] w-full">
                <div className="px-4 lg:px-8 flex flex-col">
                    <ContactMeText translations={contactMeTranslatedText} />
                    <div className="pt-8">
                        <ContactLinks />
                    </div>
                </div>
            </div>
            <div className="flex px-4 pt-8 lg:pt-0 lg:px-8 w-full lg:h-[600px] lg:w-[50%]">
                <div className="">
                    <ContactMeLottie />
                </div>
            </div>
        </div>
    );
}
