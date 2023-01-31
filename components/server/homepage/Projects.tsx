import React from 'react';
import { ProjectsCardsSlide } from 'components/client';

export default function Projects() {
    return (
        <div className="flex flex-col justify-center p-4  w-full animate-fade-in ">
            <h2>Projects</h2>
            <div className="flex justify-evenly lg:flex-row flex-col flex-wrap">
                <ProjectsCardsSlide />
            </div>
        </div>
    );
}
