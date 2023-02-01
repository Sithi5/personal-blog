import {
    Intro,
    WhatIDo,
    Education,
    Proficiency,
    Experiences,
    Projects,
    ContactMe,
} from 'components/server';
import { getTranslator, locales, ValidLocale } from 'i18n';
import React from 'react';

export async function generateStaticParams() {
    return locales.map((locale) => ({
        lang: locale,
    }));
}

export default async function Home({
    params,
}: {
    params: { lang: string; country: string };
}) {
    const translator = await getTranslator(
        `${params.lang}` as ValidLocale // our middleware ensures this is valid
    );

    return (
        <div className="flex justify-center flex-col">
            <section className="pt-28 ">
                <Intro translator={translator} />
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
