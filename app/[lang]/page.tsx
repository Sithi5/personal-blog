import {
    Intro,
    WhatIDo,
    Education,
    Proficiency,
    Experiences,
    Projects,
    ContactMe,
    Certifications,
} from 'components/server';
import { getTranslator, locales, ValidLocale } from 'i18n';
import React from 'react';

export async function generateStaticParams() {
    return locales.map((locale) => ({
        lang: locale,
    }));
}

type HomeProps = {
    params: { lang: string; country: string };
};

export default async function Home(props: HomeProps) {
    const { params } = props;
    const lang = params.lang as ValidLocale;
    const translator = await getTranslator(
        lang // our middleware ensures this is valid
    );

    return (
        <div className="flex justify-center flex-col">
            <section className="pt-28 ">
                <Intro translator={translator} />
            </section>
            <section id="skills" className="lg:pt-4">
                <WhatIDo translator={translator} />
            </section>
            <section id="experiences" className="lg:pt-4">
                <Experiences translator={translator} />
            </section>
            <section id="proficiency" className="lg:pt-4">
                <Proficiency translator={translator} />
            </section>
            <section id="certifications" className="lg:pt-4">
                <Certifications translator={translator} />
            </section>
            <section id="education" className="lg:pt-4">
                <Education translator={translator} />
            </section>
            <section id="projects" className="lg:pt-4">
                <Projects translator={translator} />
            </section>
            <section id="contact-me" className="lg:pt-4">
                <ContactMe translator={translator} />
            </section>
        </div>
    );
}
