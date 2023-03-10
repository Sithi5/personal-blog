'use client';

import React from 'react';
import Lottie from 'react-lottie';

import * as animationData from 'assets/lotties/IntroLottie.json';

export default function IntroLottie() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return <Lottie options={defaultOptions} isClickToPauseDisabled={true} />;
}
