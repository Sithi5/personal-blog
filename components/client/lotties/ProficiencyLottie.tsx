'use client';

import React from 'react';
import LottiePlayer from './LottiePlayer';
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
            <LottiePlayer
                options={defaultOptions}
                isClickToPauseDisabled={true}
            />
        </Slide>
    );
}
