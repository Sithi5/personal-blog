'use client';

import React from 'react';
import Lottie from 'react-lottie';
import type { LottieProps } from 'react-lottie';

const LottieComponent = Lottie as React.ComponentType<LottieProps>;

export default function LottiePlayer(props: LottieProps) {
    return <LottieComponent {...props} />;
}
