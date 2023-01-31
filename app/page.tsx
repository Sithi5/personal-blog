import {
    Intro,
    WhatIDo,
    Education,
    Proficiency,
    Experiences,
} from 'components/server';
import React from 'react';

export default function Home() {
    return (
        <div className="flex justify-center flex-col">
            <section className="pt-28 ">
                <Intro />
            </section>
            <section id="skills" className="lg:pt-4">
                <WhatIDo />
            </section>
            <section className="lg:pt-4">
                <Proficiency />
            </section>
            <section id="experiences" className="lg:pt-4">
                <Experiences />
            </section>
            <section id="projects" className="lg:pt-4">
                <Projects />
            </section>
            <section id="education" className="lg:pt-4">
                <Education />
            </section>
        </div>
    );
}
