import React from 'react';
import { IntroLottie } from 'components/client';
import IntroductionText from './IntroductionText';
import ContactLinks from 'components/server/utils/ContactLinks';
import ContactMeButtons from './ContactMeButtons';

export default function Intro() {
    return (
        <div className="animate-fade-in flex flex-col lg:flex-row justify-around p-4">
            <div className=" flex-1 px-8 ">
                <IntroductionText />
                <div className="pt-8 lg:pt-12">
                    <ContactLinks />
                </div>
                <div className="pt-8 lg:pt-12">
                    <ContactMeButtons />
                </div>
            </div>
            <div className="flex-1 px-8 max-h-[60%] ">
                <IntroLottie />
            </div>
        </div>
    );
}
