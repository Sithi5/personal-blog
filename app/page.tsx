import {
    Intro,
    WhatIDo,
    Education,
    Proficiency,
    Experiences,
    Projects,
    ContactMe,
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
            <section id="experiences" className="lg:pt-4">
                <Experiences />
            </section>
            <section className="lg:pt-4">
                <Proficiency />
            </section>
            <section id="projects" className="lg:pt-4">
                <Projects />
            </section>
            <section id="education" className="lg:pt-4">
                <Education />
            </section>
            <section id="contact-me" className="lg:pt-4">
                <ContactMe />
            </section>
        </div>
    );
}
