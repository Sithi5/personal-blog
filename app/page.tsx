import { Intro, WhatIDo, Education } from 'components/server';
import React from 'react';

export default function Home() {
    return (
        <div className="pt-28 flex justify-center flex-col">
            <section>
                <Intro />
            </section>
            <section>
                <WhatIDo />
            </section>
            <section>
                <Education />
            </section>
        </div>
    );
}
