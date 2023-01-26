import { Intro, WhatIDo, Education } from 'components/server';
import React from 'react';

export default function Home() {
    return (
        <div className="relative">
            <div className="pt-40 flex justify-center flex-col">
                <section className="h-screen w-screen">
                    <Intro />
                </section>
                <section className="h-screen w-screen">
                    <WhatIDo />
                </section>
                <section className="h-screen w-screen">
                    <Education />
                </section>
            </div>
        </div>
    );
}
