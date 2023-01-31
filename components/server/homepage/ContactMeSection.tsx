import React from 'react';
import { IntroLottie } from 'components/client';
import IntroductionText from './IntroductionText';
import ContactLinks from 'components/server/utils/ContactLinks';
import ContactMeButtons from './ContactMeButtons';

export default function Intro() {
    return (
        <div className="animate-fade-in flex justify-around px-4">
            <div className="px-4 lg:px-8 flex flex-col">
                <div className="w-[48px] h-[48px] "></div>
            </div>
        </div>
    );
}
