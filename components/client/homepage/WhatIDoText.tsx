'use client';

import React from 'react';
import { Slide } from 'react-awesome-reveal';

type WhatIDoTextProps = {
    text: string;
};

export default function WhatIDoText(props: WhatIDoTextProps) {
    const { text } = props;
    return (
        <Slide triggerOnce direction="up">
            <p className="tracking-normal text-grey text-1xl lg:text-2xl font-light">
                {text}
            </p>
        </Slide>
    );
}
