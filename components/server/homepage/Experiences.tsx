import React from 'react';
import Image from 'next/image';
import DirectBricoLogo from 'assets/logos/directbrico-logo.svg';
import MangaLibLogo from 'assets/logos/mangalib-logo.svg';
import ParsecLogo from 'assets/logos/parsec-logo.svg';
import Link from 'next/link';

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

function ExperienceCard(props: ExperienceCardProps) {
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
            className="mt-4 lg:mt-0 w-full lg:w-[30%] h-[590px] bg-white rounded-lg shadow-2xl"
            target="_blank"
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
            <div className="flex flex-col w-full h-full items-center pt-[40px]">
                <h4 className="tracking-normal text-2xl lg:text-3xl pt-0 lg:pt-4 font-normal">
                    {jobTitle}
                </h4>
                <p className="italic font-light">{period}</p>

                <p className="p-4 break-words w-full text-grey">
                    {companyDescription}
                </p>
                <p className="px-4 pt-4">
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

export default function Experiences() {
    return (
        <div className="flex flex-col justify-center p-4  w-full animate-fade-in ">
            <h2 className="">Experiences</h2>
            <div className="flex justify-between lg:flex-row flex-col">
                <ExperienceCard
                    title="DirectBrico"
                    jobTitle="Engineering Manager"
                    headerGradientColorClass="bg-gradient-to-b from-black to-darkGreenDirectBricoColor"
                    period="January 2022 - March 2023"
                    href="https://www.directbrico.com/"
                    companyDescription="DirectBrico is a young C2C Marketplace in the field of
                    second-hand, which allows everyone to resell its Gardening
                    and DIY products"
                    svgImage={DirectBricoLogo}
                    missionDescription={
                        '• SCRUM Master\n' +
                        '• Recruit developers\n' +
                        '• Lead-developer for the mobile application in React Native\n' +
                        '• Building and releasing the apps through IOS and Android\n' +
                        '• Build CI/CD for the app and prestashop with github action'
                    }
                />
                <ExperienceCard
                    title="Parsec Cloud"
                    headerGradientColorClass="bg-gradient-to-b from-black to-blueParsecColor"
                    jobTitle="R&D Engineer"
                    period="Jun 2020 - Dec 2020"
                    companyDescription="Parsec allows you to share your work and data in the cloud confidentially via end-to-end encryption technology"
                    svgImage={ParsecLogo}
                    href="https://parsec.cloud/"
                    missionDescription={
                        '• Development of a data decryption/encryption process inside an SGX enclave to reinforce security\n' +
                        '• Improvement of the GUI of the software\n' +
                        '• Development of new features around the kernel\n'
                    }
                />
                <ExperienceCard
                    title="MangaLib"
                    jobTitle="Founder"
                    headerGradientColorClass="bg-gradient-to-b from-black to-orangeMangalib"
                    period="October 2021 - today"
                    companyDescription="
                    MangaLib allows you to store your personal manga library and to perform a quick search within it."
                    svgImage={MangaLibLogo}
                    imageRounded={false}
                    href="https://play.google.com/store/apps/details?id=com.mangalib&pli=1"
                    missionDescription={
                        '• Development of the app from scratch with ReactNative\n' +
                        '• Release on the stores\n' +
                        '• Create full UI/UX\n'
                    }
                />
            </div>
        </div>
    );
}
