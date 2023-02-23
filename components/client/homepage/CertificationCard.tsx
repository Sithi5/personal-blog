'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type CertificationsCardProps = {
    title: string;
    certificationFocus: string;
    programmingLanguage: string;
    certificationDescription: string;
    href: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    svgImage: any;
    imageRounded?: boolean;
};

export default function CertificationsCard(props: CertificationsCardProps) {
    const {
        title,
        certificationFocus,
        programmingLanguage,
        certificationDescription,
        href,
        svgImage,
        imageRounded = false,
    } = props;

    return (
        <Link
            href={href}
            target="_blank"
            className="mt-12 w-[100%] lg:w-[40%] h-[430px] bg-white rounded-lg shadow-2xl flex flex-col items-center border-[1px] border-grey hover:scale-105 ease-in duration-75 dark:bg-darkBlueColor dark:border-2 dark:border-white"
        >
            <div className=" w-[150px] h-[150px] mt-4">
                <Image
                    alt="logo-directbrico"
                    src={svgImage}
                    className={
                        'w-full h-full ' + (imageRounded ? 'rounded-full' : '')
                    }
                />
            </div>
            <div className="flex flex-col w-full h-full items-center  pt-4 ">
                <h3 className="text-3xl text-black  pt-0 ">{title}</h3>
                <h4 className="tracking-normal text-1xl lg:text-2xl pt-0 font-normal">
                    {certificationFocus}
                </h4>
                <p className="italic font-light">{programmingLanguage}</p>

                <p className="px-4 pt-4 text-grey">
                    {certificationDescription.split('\n').map((item, key) => {
                        return (
                            <React.Fragment key={key}>
                                {item}
                                <br />
                            </React.Fragment>
                        );
                    })}
                </p>
            </div>
        </Link>
    );
}
