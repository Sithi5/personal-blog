import React from 'react';
import { IntroLottie } from 'components/client';
import IntroductionText from './IntroductionText';
import ContactMeButtons from './ContactMeButtons';
import { ContactLinks } from 'components/server';

export default function Intro() {
    return (
        <div className="animate-fade-in flex flex-col lg:flex-row justify-around px-4">
            <div className="flex flex-col lg:pt-10 lg:w-[50%] w-full">
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
            <div className="flex px-4 pt-8 lg:pt-0 lg:px-8 w-full lg:h-[700px] lg:w-[700px]">
                <div className="">
                    <IntroLottie />
                </div>
            </div>
        </div>
    );
}
