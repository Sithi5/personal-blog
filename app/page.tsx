import { DevelopperOnComputorLottie, Navbar } from 'components/client';
import { Emoji } from 'components/server';
import React from 'react';

export default function Home() {
    return (
        <div className="relative">
            <div className="pt-60 flex justify-center">
                <div className="flex flex-row justify-around">
                    <div className="w-2/5 h-2/5">
                        <h1 className="text-7xl flex">
                            Hi all, i&apos;m Malo
                            <span
                                className="animate-waving-hand pl-4 z-0"
                                role="img"
                                aria-label="animate-waving-hand"
                            >
                                👋
                            </span>
                        </h1>

                        <p className=" text-gray-400 text-3xl pt-12 font-light">
                            A passionate Full Stack Software Developer{' '}
                            <Emoji symbol="🚀" label="rocket" /> having an
                            experience of building Web and Mobile applications
                            with JavaScript / Reactjs / Nodejs / React Native
                            and some other cool libraries and frameworks.
                        </p>
                    </div>
                    <div className=" w-1/3 h-1/3 flex">
                        <DevelopperOnComputorLottie />
                    </div>
                </div>
            </div>
        </div>
    );
}
