import { Intro, WhatIDo, Education, Proficiency } from 'components/server';
import React from 'react';

export default function Home() {
    return (
        <div className="flex justify-center flex-col">
            <section className="pt-28 ">
                <Intro />
            </section>
            <section className="lg:pt-4">
                <WhatIDo />
            </section>
            <section className="lg:pt-4">
                <Proficiency />
            </section>
            <section className="lg:pt-4">
                <Education />
            </section>
        </div>
    );
}
