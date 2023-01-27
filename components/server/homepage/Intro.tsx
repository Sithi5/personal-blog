import React from 'react';
import { IntroLottie } from 'components/client';
import IntroductionText from './IntroductionText';
import ContactLinks from 'components/server/utils/ContactLinks';
import ContactMeButtons from './ContactMeButtons';

export default function Intro() {
    return (
        <div className="animate-fade-in flex flex-col lg:flex-row justify-around p-4 min-h-screen">
            <div className="flex-1 flex flex-col lg:pt-10">
                <div className="px-4 lg:px-8 flex flex-col">
                    <IntroductionText />
                    <div className="pt-8">
                        <ContactLinks />
                    </div>
                    <div className="pt-8 ">
                        <ContactMeButtons />
                    </div>
                </div>
            </div>
            <div className="flex-1 flex px-4 pt-8 lg:pt-0 lg:px-8 max-h-[100vw] lg:max-h-[40vw]">
                <div className="">
                    <IntroLottie />
                </div>
            </div>
        </div>
    );
}
