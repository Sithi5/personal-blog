import React from 'react';
import { DevelopperOnComputorLottie } from 'components/client';
import HomePageIntroductionText from './HomePageIntroductionText';

export default function Page() {
    return (
        <div className="flex flex-col lg:flex-row justify-around p-4  ">
            <div className="flex-1 px-8">
                <HomePageIntroductionText />
            </div>
            <div className="flex-1 px-8 max-h-[60%] ">
                <DevelopperOnComputorLottie />
            </div>
        </div>
    );
}
