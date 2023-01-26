'use client';

import React from 'react';
import { Slide } from 'react-awesome-reveal';

export default function EducationText() {
    return (
        <Slide triggerOnce direction="right">
            <h1 className="tracking-wide font-light text-3xl md:text-4x lg:text-6xl l flex">
                Education
            </h1>

            <p className="tracking-normal text-grey text-1xl lg:text-2xl pt-8 lg:pt-12 font-light">
                42 Paris
            </p>
            <p className="tracking-normal text-grey text-1xl lg:text-2xl pt-8 lg:pt-12 font-light">
                ESC Rennes
            </p>
        </Slide>
    );
}
