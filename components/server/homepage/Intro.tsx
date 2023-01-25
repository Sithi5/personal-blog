import React from 'react';
import { DevelopperOnComputorLottie } from 'components/client';
import IntroductionText from './IntroductionText';
import ContactLinks from 'components/client/utils/ContactLinks';

export default function Intro() {
    return (
        <div className="flex flex-col lg:flex-row justify-around p-4  ">
            <div className="flex-1 px-8">
                <IntroductionText />
                <div className="pt-8 lg:pt-12">
                    <ContactLinks />
                </div>
            </div>
            <div className="flex-1 px-8 max-h-[60%] ">
                <DevelopperOnComputorLottie />
            </div>
        </div>
    );
}
