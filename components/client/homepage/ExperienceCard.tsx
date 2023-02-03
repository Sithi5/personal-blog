import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type ExperienceCardProps = {
    title: string;
    period: string;
    companyDescription: string;
    missionDescription: string;
    headerGradientColorClass: string;
    href: string;
    jobTitle: string;
    imageRounded?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    svgImage: any;
};

export default function ExperienceCard(props: ExperienceCardProps) {
    const {
        title,
        period,
        companyDescription,
        svgImage,
        missionDescription,
        headerGradientColorClass,
        href,
        jobTitle,
        imageRounded = true,
    } = props;

    return (
        <Link
            href={href}
            target="_blank"
            className="mt-4 lg:mt-0 flex flex-col w-full lg:w-[30%] h-[590px] bg-white rounded-lg shadow-2xl hover:scale-105 ease-in duration-75 dark:border-2 dark:border-white"
        >
            <div
                className={
                    headerGradientColorClass + ' h-[125px] rounded-lg relative'
                }
            >
                <div className="flex flex-col justify-center items-center h-full w-full">
                    <h3 className="text-2xl text-white">{title}</h3>
                </div>
                <div className="absolute bottom-[-40px] w-full flex justify-center items-center">
                    <div className=" w-[80px] h-[80px] rounded-full shadow-2xl bg-white">
                        <Image
                            alt="logo-directbrico"
                            src={svgImage}
                            className={
                                'w-full h-full ' +
                                (imageRounded ? 'rounded-full' : '')
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full h-full items-center pt-[40px] dark:bg-darkBlueColor ">
                <h4 className="tracking-normal text-2xl lg:text-3xl pt-0 lg:pt-4 font-normal">
                    {jobTitle}
                </h4>
                <p className="italic font-light">{period}</p>

                <p className="p-4 break-words w-full text-grey">
                    {companyDescription}
                </p>
                <p className="px-4 pt-4 text-grey">
                    {missionDescription.split('\n').map((item, key) => {
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
