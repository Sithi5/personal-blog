'use client';

import React from 'react';
import LottiePlayer from './LottiePlayer';

import * as animationData from 'assets/lotties/ContactMeLottie.json';

export default function ContactMeLottie() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <LottiePlayer options={defaultOptions} isClickToPauseDisabled={true} />
    );
}
