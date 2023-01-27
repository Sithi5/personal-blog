'use client';

import React from 'react';
import { Slide } from 'react-awesome-reveal';

type EducationBlockProps = {
    cursus: string;
    title: string;
    period: string;
    description: string;
};

export default function EducationBlock(props: EducationBlockProps) {
    const { cursus, title, period, description } = props;

    return (
        <Slide triggerOnce direction="left">
            <h3 className="tracking-normal text-grey text-1xl lg:text-2xl pt-8 lg:pt-12 font-light">
                {title}
            </h3>
            <h4>{cursus}</h4>
            <h5>{period}</h5>
            <p>{description}</p>
        </Slide>
    );
}
