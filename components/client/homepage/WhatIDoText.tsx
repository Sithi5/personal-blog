'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';
import { Slide } from 'react-awesome-reveal';
import {
    SiC,
    SiCplusplus,
    SiGnubash,
    SiRust,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';

import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import {
    FaDocker,
    FaNodeJs,
    FaNpm,
    FaPhp,
    FaPython,
    FaReact,
    FaYarn,
} from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { DiCss3, DiJavascript1 } from 'react-icons/Di';
import { GrMysql } from 'react-icons/Gr';
import { IoLogoFirebase } from 'react-icons/io5';

type ReactIconsWrapperProps = {
    ReactIcon: ReactNode;
    text: string;
    href: string;
};

function ReactIconsWrapper(props: ReactIconsWrapperProps) {
    const { ReactIcon, text, href } = props;
    return (
        <li className="p-3 cursore-pointer hover:scale-105  ease-in duration-75">
            <Link
                target="_blank"
                className="text-grey hover:text-primary"
                href={href}
            >
                <div className="flex flex-col justify-center items-center">
                    {ReactIcon}
                    <p className={'text-xs pt-4'}>{text}</p>
                </div>
            </Link>
        </li>
    );
}

function StackIcons() {
    return (
        <ul className="flex flex-col items-center justify-center my-4 w-full sm:w-[85%]">
            <div className="flex items-center justify-center my-4 w-full sm:w-[85%]">
                <ReactIconsWrapper
                    ReactIcon={<SiTypescript size={50} />}
                    text={'TypeScript'}
                    href="https://www.typescriptlang.org/"
                />
                <ReactIconsWrapper
                    ReactIcon={<DiJavascript1 size={50} />}
                    text={'JavaScript'}
                    href="https://www.javascript.com/"
                />
                <ReactIconsWrapper
                    ReactIcon={<FaPhp size={50} />}
                    text={'php'}
                    href="https://www.php.net/"
                />
                <ReactIconsWrapper
                    ReactIcon={<AiFillGithub size={50} />}
                    text={'Git'}
                    href="https://git-scm.com/"
                />
                <ReactIconsWrapper
                    ReactIcon={<FaPython size={50} />}
                    text={'Python'}
                    href="https://www.python.org/"
                />
                <ReactIconsWrapper
                    ReactIcon={<FaReact size={50} />}
                    text={'React'}
                    href="https://reactjs.org/"
                />
                <ReactIconsWrapper
                    ReactIcon={<TbBrandReactNative size={50} />}
                    text={'ReactNative'}
                    href="https://reactjs.org/"
                />
            </div>
            <div className="flex items-center justify-center my-4 w-full sm:w-[85%]">
                <ReactIconsWrapper
                    ReactIcon={<AiFillHtml5 size={50} />}
                    text={'HTML'}
                    href="https://developer.mozilla.org/fr/docs/Web/HTML"
                />
                <ReactIconsWrapper
                    ReactIcon={<SiTailwindcss size={50} />}
                    text={'TailwindCSS'}
                    href="https://tailwindcss.com/"
                />
                <ReactIconsWrapper
                    ReactIcon={<DiCss3 size={50} />}
                    text={'CSS3'}
                    href="https://developer.mozilla.org/fr/docs/Web/CSS"
                />
                <ReactIconsWrapper
                    ReactIcon={<FaYarn size={50} />}
                    text={'Yarn'}
                    href="https://yarnpkg.com/"
                />
                <ReactIconsWrapper
                    ReactIcon={<FaNpm size={50} />}
                    text={'npm'}
                    href="https://www.npmjs.com/"
                />
                <ReactIconsWrapper
                    ReactIcon={<FaNodeJs size={50} />}
                    text={'Nodejs'}
                    href="https://nodejs.org/en/"
                />
                <ReactIconsWrapper
                    ReactIcon={<GrMysql size={50} />}
                    text={'MySQL'}
                    href="https://www.mysql.com/fr/"
                />
            </div>
            <div className="flex items-center justify-center my-4 w-full sm:w-[85%]">
                <ReactIconsWrapper
                    ReactIcon={<IoLogoFirebase size={50} />}
                    text={'Firebase'}
                    href="https://firebase.google.com/"
                />
                <ReactIconsWrapper
                    ReactIcon={<SiC size={50} />}
                    text={'C'}
                    href="https://www.cprogramming.com/"
                />
                <ReactIconsWrapper
                    ReactIcon={<SiCplusplus size={50} />}
                    text={'C++'}
                    href="https://isocpp.org/"
                />
                <ReactIconsWrapper
                    ReactIcon={<SiRust size={50} />}
                    text={'Rust'}
                    href="https://www.rust-lang.org/fr"
                />
                <ReactIconsWrapper
                    ReactIcon={<FaDocker size={50} />}
                    text={'Docker'}
                    href="https://www.docker.com/"
                />
                <ReactIconsWrapper
                    ReactIcon={<SiGnubash size={50} />}
                    text={'Bash'}
                    href="https://www.gnu.org/software/bash/"
                />
            </div>
        </ul>
    );
}

export default function WhatIDoText() {
    return (
        <Slide triggerOnce direction="right">
            <h1 className="tracking-wide font-light text-3xl md:text-4x lg:text-6xl l flex">
                What I do
            </h1>
            <p className="tracking-normal text-grey text-1xl lg:text-2xl pt-8 lg:pt-12 font-light">
                CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </p>
            <StackIcons />
        </Slide>
    );
}
