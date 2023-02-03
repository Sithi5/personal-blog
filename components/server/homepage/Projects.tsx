import React from 'react';
import { ProjectsCardsSlide } from 'components/client';
import { projectsTranslatedDict } from 'components/client/homepage/ProjectsCardsSlide';

type ProjectsProps = {
    translator: (key: string) => string;
};

export default function Projects(props: ProjectsProps) {
    const { translator } = props;

    const projectsTranslatedText: projectsTranslatedDict = {
        gomoku: {
            title: translator('projects.gomoku.title'),
            projectFocus: translator('projects.gomoku.projectFocus'),
            programmingLanguage: translator(
                'projects.gomoku.programmingLanguage'
            ),
            projectDescription: translator(
                'projects.gomoku.projectDescription'
            ),
        },
        override: {
            title: translator('projects.override.title'),
            projectFocus: translator('projects.override.projectFocus'),
            programmingLanguage: translator(
                'projects.override.programmingLanguage'
            ),
            projectDescription: translator(
                'projects.override.projectDescription'
            ),
        },
        expertSystem: {
            title: translator('projects.expertSystem.title'),
            projectFocus: translator('projects.expertSystem.projectFocus'),
            programmingLanguage: translator(
                'projects.expertSystem.programmingLanguage'
            ),
            projectDescription: translator(
                'projects.expertSystem.projectDescription'
            ),
        },
        inceptionOfThings: {
            title: translator('projects.inceptionOfThings.title'),
            projectFocus: translator('projects.inceptionOfThings.projectFocus'),
            programmingLanguage: translator(
                'projects.inceptionOfThings.programmingLanguage'
            ),
            projectDescription: translator(
                'projects.inceptionOfThings.projectDescription'
            ),
        },
    };

    return (
        <div className="flex flex-col justify-center p-4  w-full animate-fade-in ">
            <h2>{translator('projects.h2')}</h2>
            <div className="flex justify-evenly lg:flex-row flex-col flex-wrap">
                <ProjectsCardsSlide translations={projectsTranslatedText} />
            </div>
        </div>
    );
}
