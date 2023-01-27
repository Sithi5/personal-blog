'use client';

import React from 'react';
import { Slide } from 'react-awesome-reveal';

export default function WhatIDoText() {
    return (
        <Slide triggerOnce direction="right">
            <h1 className="tracking-wide font-light text-3xl md:text-4x lg:text-6xl">
                What I do
            </h1>
            <p className="tracking-normal text-grey text-1xl lg:text-2xl pt-8 lg:pt-12 font-light">
                CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </p>
        </Slide>
    );
}
