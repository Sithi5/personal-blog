'use client';

import React from 'react';
import Lottie from 'react-lottie';
import { Slide } from 'react-awesome-reveal';

import * as animationData from 'assets/lotties/WhatIDoLottie.json';

export default function WhatIDoLottie() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <Slide triggerOnce direction="left">
            <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
        </Slide>
    );
}
