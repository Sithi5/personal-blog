import { ProficiencyBars, ProficiencyLottie } from 'components/client';
import React from 'react';

export default function Proficiency() {
    return (
        <div className="flex flex-col lg:flex-row  p-4">
            <div className="flex flex-col justify-center w-full lg:w-[50%]">
                <h2 className="">Proficiency</h2>
                <ProficiencyBars />
            </div>
            <div className="flex justify-center  px-4 lg:px-8 w-full  lg:h-[700px] lg:w-[700px]">
                <ProficiencyLottie />
            </div>
        </div>
    );
}
