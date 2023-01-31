'use client';

import React from 'react';
import Lottie from 'react-lottie';

import * as animationData from 'assets/lotties/ContactMeLottie.json';

export default function ContactMeLottie() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return <Lottie options={defaultOptions} isClickToPauseDisabled={true} />;
}
