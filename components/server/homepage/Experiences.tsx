import {
    ExperienceCardsSlide,
    ExperiencesTranslatedDict,
} from 'components/client';
import React from 'react';

type ExperiencesProps = {
    translator: (key: string) => string;
};

export default function Experiences(props: ExperiencesProps) {
    const { translator } = props;

    const experiencesTranslatedText: ExperiencesTranslatedDict = {
        directBrico: {
            title: translator('experiences.directbrico.title'),
            jobTitle: translator('experiences.directbrico.jobTitle'),
            period: translator('experiences.directbrico.period'),
            companyDescription: translator(
                'experiences.directbrico.companyDescription'
            ),
            missionDescription: translator(
                'experiences.directbrico.missionDescription'
            ),
        },
        parsec: {
            title: translator('experiences.parsec.title'),
            jobTitle: translator('experiences.parsec.jobTitle'),
            period: translator('experiences.parsec.period'),
            companyDescription: translator(
                'experiences.parsec.companyDescription'
            ),
            missionDescription: translator(
                'experiences.parsec.missionDescription'
            ),
        },
        mangalib: {
            title: translator('experiences.mangalib.title'),
            jobTitle: translator('experiences.mangalib.jobTitle'),
            period: translator('experiences.mangalib.period'),
            companyDescription: translator(
                'experiences.mangalib.companyDescription'
            ),
            missionDescription: translator(
                'experiences.mangalib.missionDescription'
            ),
        },
    };

    return (
        <div className="flex flex-col justify-center p-4  w-full animate-fade-in ">
            <h2>{translator('experiences.h2')}</h2>
            <div className="flex justify-evenly lg:flex-row flex-col flex-wrap">
                <ExperienceCardsSlide
                    translations={experiencesTranslatedText}
                />
            </div>
        </div>
    );
}
