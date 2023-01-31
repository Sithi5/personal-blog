'use client';

import React from 'react';
import { Slide } from 'react-awesome-reveal';
import ExperienceCard from './ExperienceCard';
import DirectBricoLogo from 'assets/logos/directbrico-logo.svg';
import MangaLibLogo from 'assets/logos/mangalib-logo.svg';
import ParsecLogo from 'assets/logos/parsec-logo.svg';

export default function ExperienceCardsSlide() {
    return (
        <Slide triggerOnce direction="up" cascade damping={0.1}>
            <div className="flex flex-row w-full flex-wrap justify-around">
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
        </Slide>
    );
}
