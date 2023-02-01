import React from 'react';
import { Emoji } from 'components/server';

type IntroTextProps = {
    translator: (key: string) => string;
};

export default function IntroTextBlock(props: IntroTextProps) {
    const { translator } = props;

    return (
        <>
            <h1 className="flex animate-bounce-slow tracking-wide text-4xl md:text-5xl lg:text-7xl">
                {translator('intro.hello')}
                <span
                    className="animate-waving-hand pl-4 z-0"
                    role="img"
                    aria-label="animate-waving-hand"
                >
                    👋
                </span>
            </h1>
            <p className="tracking-normal text-grey text-1xl md:text-2xl lg:text-3xl pt-8 lg:pt-12 font-light">
                {translator('intro.partOne')}
                <Emoji symbol="🚀" label="rocket" />{' '}
                {translator('intro.partTwo')}
            </p>
        </>
    );
}
