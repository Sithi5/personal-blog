'use client';

import React from 'react';
import Lottie from 'react-lottie';
import { Slide } from 'react-awesome-reveal';

import * as animationData from 'assets/lotties/ProficiencyLottie.json';

export default function ProficiencyLottie() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <Slide triggerOnce direction="up">
            <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
        </Slide>
    );
}
