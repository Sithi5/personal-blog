'use client';

import React, { useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';

type EducationBlockProps = {
    cursus: string;
    title: string;
    period: string;
    description: string;
    svgImage: any;
};

export default function EducationBlock(props: EducationBlockProps) {
    const { cursus, title, period, description, svgImage } = props;
    const [hover, setHover] = useState(false);

    return (
        <Slide triggerOnce direction="left">
            <div
                onMouseEnter={() => {
                    setHover(true);
                }}
                onMouseLeave={() => {
                    setHover(false);
                }}
            >
                <div className="flex flex-row">
                    <Image
                        src={svgImage}
                        alt="42-logo"
                        height={100}
                        width={100}
                        className=" rounded-xl"
                    />
                    <div className="flex flex-col p-4">
                        <h3 className="tracking-normal text-grey text-1xl lg:text-2xl pt-8 lg:pt-12 font-light">
                            {title}
                        </h3>
                        <h4>{cursus}</h4>
                        <h5>{period}</h5>
                        <p>{description}</p>
                    </div>
                </div>
                <div
                    className={
                        'bg-gray-200 h-[2px]  ' +
                        (hover
                            ? 'animate-fill-progress-bar w-[100%]'
                            : 'animate-empty-progress-bar w-[70%]')
                    }
                >
                    <div
                        className={hover ? 'bg-primary h-[2px] w-[100%]' : ''}
                    ></div>
                </div>
            </div>
        </Slide>
    );
}
