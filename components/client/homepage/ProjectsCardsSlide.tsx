'use client';

import React from 'react';
import { Slide } from 'react-awesome-reveal';
import ProjectCard from './ProjectCard';
import GomokuImage from '/assets/images/gomoku-board.svg';
import CrimeHackerIcon from '/assets/images/crime-hacker-icon.svg';
import ExpertSystemIcon from '/assets/images/expert-system.svg';
import InceptionIcon from '/assets/images/inception.svg';

export type ProjectTranslatedText = {
    title: string;
    projectFocus: string;
    programmingLanguage: string;
    projectDescription: string;
};

export type ProjectsTranslatedDict = {
    [key: string]: ProjectTranslatedText;
};

type ProjectsCardsSlideProps = {
    translations: ProjectsTranslatedDict;
};

export default function ProjectsCardsSlide(props: ProjectsCardsSlideProps) {
    const { translations } = props;

    return (
        <Slide triggerOnce direction="up" cascade damping={0.1}>
            <div className="flex flex-row w-full flex-wrap justify-around">
                <ProjectCard
                    title={translations.gomoku.title}
                    svgImage={GomokuImage}
                    projectFocus={translations.gomoku.projectFocus}
                    programmingLanguage={
                        translations.gomoku.programmingLanguage
                    }
                    href="https://github.com/Sithi5/Gomoku"
                    projectDescription={translations.gomoku.projectDescription}
                />
                <ProjectCard
                    title={translations.override.title}
                    svgImage={CrimeHackerIcon}
                    projectFocus={translations.override.projectFocus}
                    programmingLanguage={
                        translations.override.programmingLanguage
                    }
                    href="https://github.com/Sithi5/Override"
                    projectDescription={
                        translations.override.projectDescription
                    }
                />
                <ProjectCard
                    title={translations.expertSystem.title}
                    svgImage={ExpertSystemIcon}
                    projectFocus={translations.expertSystem.projectFocus}
                    programmingLanguage={
                        translations.expertSystem.programmingLanguage
                    }
                    href="https://github.com/Sithi5/expert-system"
                    projectDescription={
                        translations.expertSystem.projectDescription
                    }
                />
                <ProjectCard
                    title={translations.inceptionOfThings.title}
                    svgImage={InceptionIcon}
                    projectFocus={translations.inceptionOfThings.projectFocus}
                    programmingLanguage={
                        translations.inceptionOfThings.programmingLanguage
                    }
                    href="https://github.com/Sithi5/Inception-of-Things"
                    projectDescription={
                        translations.inceptionOfThings.projectDescription
                    }
                />
            </div>
        </Slide>
    );
}
