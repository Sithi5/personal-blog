import React from 'react';
import { Emoji } from 'components/server';

export default function IntroductionText() {
    return (
        <div>
            <h1 className="tracking-wide text-4xl lg:text-7xl md:text-5xl flex">
                Hi all, i&apos;m Malo
                <span
                    className="animate-waving-hand pl-4 z-0"
                    role="img"
                    aria-label="animate-waving-hand"
                >
                    👋
                </span>
            </h1>

            <p className="tracking-normal text-grey text-1xl lg:text-2xl pt-8 lg:pt-12 font-light">
                A passionate Full Stack Software Developer{' '}
                <Emoji symbol="🚀" label="rocket" /> having an experience of
                building Web and Mobile applications with JavaScript / Reactjs /
                Nodejs / React Native and some other cool libraries and
                frameworks.
            </p>
        </div>
    );
}
