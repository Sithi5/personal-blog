'use client';

import React, { useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';

type EducationBlockProps = {
    schoolDescription: string;
    title: string;
    period: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    svgImage: any;
};

export default function EducationBlock(props: EducationBlockProps) {
    const { schoolDescription, title, period, description, svgImage } = props;
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
                <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start">
                    <Image
                        src={svgImage}
                        alt="42-logo"
                        height={100}
                        width={100}
                    />
                    <div className="flex flex-col p-4">
                        <h3 className="tracking-normal text-2xl lg:text-3xl pt-0 lg:pt-4 font-normal">
                            {title}
                        </h3>
                        <h4>{schoolDescription}</h4>
                        <p className="italic font-light ">{period}</p>
                        <p className="pl-4 text-grey">
                            {description.split('\n').map((item, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        {item}
                                        <br />
                                    </React.Fragment>
                                );
                            })}
                        </p>
                    </div>
                </div>
                <div
                    className={
                        'bg-gray-200 h-[2px] transition-width duration-700 ease-in-out ' +
                        (hover
                            ? ' bg-primary max-w-[100%]  '
                            : 'lg:max-w-[70%]')
                    }
                ></div>
            </div>
        </Slide>
    );
}
