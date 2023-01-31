import { ExperienceCardsSlide } from 'components/client';
import React from 'react';

export default function Experiences() {
    return (
        <div className="flex flex-col justify-center p-4  w-full animate-fade-in ">
            <h2>Experiences</h2>
            <div className="flex justify-evenly lg:flex-row flex-col flex-wrap">
                <ExperienceCardsSlide />
            </div>
        </div>
    );
}
