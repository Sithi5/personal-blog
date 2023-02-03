'use client';

import React from 'react';
import { Slide } from 'react-awesome-reveal';
import ExperienceCard from './ExperienceCard';
import DirectBricoLogo from 'assets/logos/directbrico-logo.svg';
import MangaLibLogo from 'assets/logos/mangalib-logo.svg';
import ParsecLogo from 'assets/logos/parsec-logo.svg';

export type ExperienceTranslatedText = {
    title: string;
    jobTitle: string;
    period: string;
    companyDescription: string;
    missionDescription: string;
};

export type ExperiencesTranslatedDict = {
    [key: string]: ExperienceTranslatedText;
};

type ExperiencesCardsSlideProps = {
    translations: ExperiencesTranslatedDict;
};

export default function ExperienceCardsSlide(
    props: ExperiencesCardsSlideProps
) {
    const { translations } = props;
    return (
        <Slide triggerOnce direction="up" cascade damping={0.1}>
            <div className="flex flex-row w-full flex-wrap justify-around">
                <ExperienceCard
                    title={translations.directBrico.title}
                    jobTitle={translations.directBrico.jobTitle}
                    headerGradientColorClass="bg-gradient-to-b from-black to-darkGreenDirectBricoColor"
                    period={translations.directBrico.period}
                    href="https://www.directbrico.com/"
                    companyDescription={
                        translations.directBrico.companyDescription
                    }
                    svgImage={DirectBricoLogo}
                    missionDescription={
                        translations.directBrico.missionDescription
                    }
                />
                <ExperienceCard
                    title={translations.parsec.title}
                    headerGradientColorClass="bg-gradient-to-b from-black to-blueParsecColor"
                    jobTitle={translations.parsec.jobTitle}
                    period={translations.parsec.period}
                    companyDescription={translations.parsec.companyDescription}
                    svgImage={ParsecLogo}
                    href="https://parsec.cloud/"
                    missionDescription={translations.parsec.missionDescription}
                />
                <ExperienceCard
                    title={translations.mangalib.title}
                    jobTitle={translations.mangalib.jobTitle}
                    headerGradientColorClass="bg-gradient-to-b from-black to-orangeMangalib"
                    period={translations.mangalib.period}
                    companyDescription={
                        translations.mangalib.companyDescription
                    }
                    svgImage={MangaLibLogo}
                    imageRounded={false}
                    href="https://play.google.com/store/apps/details?id=com.mangalib&pli=1"
                    missionDescription={
                        translations.mangalib.missionDescription
                    }
                />
            </div>
        </Slide>
    );
}
