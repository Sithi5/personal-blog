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

export type ExperiencesTransletedDict = {
    [experienceTitle: string]: ExperienceTranslatedText;
};

type ExperiencesCardsSlideProps = {
    experiencesTranslated: ExperiencesTransletedDict;
};

export default function ExperienceCardsSlide(
    props: ExperiencesCardsSlideProps
) {
    const { experiencesTranslated } = props;
    return (
        <Slide triggerOnce direction="up" cascade damping={0.1}>
            <div className="flex flex-row w-full flex-wrap justify-around">
                <ExperienceCard
                    title={experiencesTranslated.DirectBrico.title}
                    jobTitle={experiencesTranslated.DirectBrico.jobTitle}
                    headerGradientColorClass="bg-gradient-to-b from-black to-darkGreenDirectBricoColor"
                    period={experiencesTranslated.DirectBrico.period}
                    href="https://www.directbrico.com/"
                    companyDescription={
                        experiencesTranslated.DirectBrico.companyDescription
                    }
                    svgImage={DirectBricoLogo}
                    missionDescription={
                        experiencesTranslated.DirectBrico.missionDescription
                    }
                />
                <ExperienceCard
                    title={experiencesTranslated.Parsec.title}
                    headerGradientColorClass="bg-gradient-to-b from-black to-blueParsecColor"
                    jobTitle={experiencesTranslated.Parsec.jobTitle}
                    period={experiencesTranslated.Parsec.period}
                    companyDescription={
                        experiencesTranslated.Parsec.companyDescription
                    }
                    svgImage={ParsecLogo}
                    href="https://parsec.cloud/"
                    missionDescription={
                        experiencesTranslated.Parsec.missionDescription
                    }
                />
                <ExperienceCard
                    title={experiencesTranslated.Mangalib.title}
                    jobTitle={experiencesTranslated.Mangalib.jobTitle}
                    headerGradientColorClass="bg-gradient-to-b from-black to-orangeMangalib"
                    period={experiencesTranslated.Mangalib.period}
                    companyDescription={
                        experiencesTranslated.Mangalib.companyDescription
                    }
                    svgImage={MangaLibLogo}
                    imageRounded={false}
                    href="https://play.google.com/store/apps/details?id=com.mangalib&pli=1"
                    missionDescription={
                        experiencesTranslated.Mangalib.missionDescription
                    }
                />
            </div>
        </Slide>
    );
}
