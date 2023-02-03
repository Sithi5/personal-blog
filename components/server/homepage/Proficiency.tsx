import {
    ProficiencyBars,
    ProficiencyBarsTranslatedDict,
    ProficiencyLottie,
} from 'components/client';
import React from 'react';

type ProficiencyProps = {
    translator: (key: string) => string;
};

export default function Proficiency(props: ProficiencyProps) {
    const { translator } = props;

    const proficiencyBarsTranslations: ProficiencyBarsTranslatedDict = {
        mobileDevelopment: translator(
            'proficiency.proficiencyBars.mobileDevelopment'
        ),
        frontendDesign: translator(
            'proficiency.proficiencyBars.frontendDesign'
        ),
        backendDevelopment: translator(
            'proficiency.proficiencyBars.backendDevelopment'
        ),
        pipelinesDeployment: translator(
            'proficiency.proficiencyBars.pipelinesDeployment'
        ),
    };

    return (
        <div className="flex flex-col lg:flex-row  p-4">
            <div className="flex flex-col justify-center w-full lg:w-[50%]">
                <h2 className="">{translator('proficiency.h2')}</h2>
                <ProficiencyBars translations={proficiencyBarsTranslations} />
            </div>
            <div className="flex justify-center  px-4 lg:px-8 w-full  lg:h-[700px] lg:w-[700px]">
                <ProficiencyLottie />
            </div>
        </div>
    );
}
