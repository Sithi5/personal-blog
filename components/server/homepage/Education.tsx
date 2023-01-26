import React from 'react';
import { EducationText } from 'components/client';

export default function Education() {
    return (
        <div className="flex flex-col lg:flex-row justify-around p-4  ">
            <div className="flex-1 px-8  max-h-[60%] ">
                <EducationText />
            </div>
            <div className="flex-1 px-8">
                <EducationText />
            </div>
        </div>
    );
}
