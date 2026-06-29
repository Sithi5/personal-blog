'use client';

import React from 'react';
import LottiePlayer from './LottiePlayer';

import * as animationData from 'assets/lotties/IntroLottie.json';

export default function IntroLottie() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <LottiePlayer options={defaultOptions} isClickToPauseDisabled={true} />
    );
}
