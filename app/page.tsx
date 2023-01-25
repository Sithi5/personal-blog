import { Intro, WhatIDo } from 'components/server';
import React from 'react';

export default function Home() {
    return (
        <div className="relative">
            <div className="pt-60 flex justify-center flex-col">
                <section>
                    <Intro />
                </section>
                <section>
                    <WhatIDo />
                </section>
            </div>
        </div>
    );
}
