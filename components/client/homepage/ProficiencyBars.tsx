'use client';

import { Slide } from 'react-awesome-reveal';

export type ProficiencyBarsTranslatedDict = {
    mobileDevelopment: string;
    frontendDesign: string;
    backendDevelopment: string;
    pipelinesDeployment: string;
};

type ProficiencyBarsProps = {
    translations: ProficiencyBarsTranslatedDict;
};

export default function ProficiencyBars(props: ProficiencyBarsProps) {
    const { translations } = props;
    return (
        <Slide triggerOnce cascade damping={0.02} direction="left">
            <div className="px-4 pt-4">
                <p className="pb-4 text-grey">
                    {translations.mobileDevelopment}
                </p>
                <div className="h-4  bg-lightgrey rounded-xl">
                    <div
                        className={'w-[90%] h-full bg-primary rounded-xl'}
                    ></div>
                </div>
            </div>
            <div className="px-4 pt-4">
                <p className="pb-4 text-grey">{translations.frontendDesign}</p>
                <div className="h-4  bg-lightgrey rounded-xl">
                    <div
                        className={'w-[70%] h-full bg-primary rounded-xl'}
                    ></div>
                </div>
            </div>
            <div className="px-4 pt-4">
                <p className="pb-4 text-grey">
                    {translations.backendDevelopment}
                </p>
                <div className="h-4  bg-lightgrey rounded-xl">
                    <div
                        className={'w-[80%] h-full bg-primary rounded-xl'}
                    ></div>
                </div>
            </div>
            <div className="px-4 pt-4">
                <p className="pb-4 text-grey">
                    {translations.pipelinesDeployment}
                </p>
                <div className="h-4  bg-lightgrey rounded-xl">
                    <div
                        className={'w-[50%] h-full bg-primary rounded-xl'}
                    ></div>
                </div>
            </div>
        </Slide>
    );
}
