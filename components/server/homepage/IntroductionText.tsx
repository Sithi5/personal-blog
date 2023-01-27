import React from 'react';
import { Emoji } from 'components/server';

export default function IntroductionText() {
    return (
        <>
            <h1 className="flex animate-bounce-slow tracking-wide text-4xl md:text-5xl lg:text-7xl">
                Hi all, i&apos;m Malo
                <span
                    className="animate-waving-hand pl-4 z-0"
                    role="img"
                    aria-label="animate-waving-hand"
                >
                    👋
                </span>
            </h1>
            <p className="tracking-normal text-grey text-1xl md:text-2xl lg:text-3xl pt-8 lg:pt-12 font-light">
                A passionate Full Stack Software Developer{' '}
                <Emoji symbol="🚀" label="rocket" /> having an experience of
                building Web and Mobile applications with TypeScript / Reactjs /
                Next.js / Nodejs / React Native and some other cool libraries
                and frameworks.
            </p>
        </>
    );
}
