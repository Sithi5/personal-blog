import {
    ExperienceCardsSlide,
    ExperiencesTransletedDict,
} from 'components/client';
import React from 'react';

type ExperiencesProps = {
    translator: (key: string) => string;
};

export default function Experiences(props: ExperiencesProps) {
    const { translator } = props;

    const experienceTranslatedText: ExperiencesTransletedDict = {
        DirectBrico: {
            title: translator('experiences.directbrico.title'),
            jobTitle: 'Engineering Manager',
            period: 'January 2022 - March 2023',
            companyDescription:
                'DirectBrico is a young C2C Marketplace in the field of second-hand, which allows everyone to resell its Gardening and DIY products',
            missionDescription:
                '• SCRUM Master\n' +
                '• Recruit developers\n' +
                '• Lead-developer for the mobile application in React Native\n' +
                '• Building and releasing the apps through IOS and Android\n' +
                '• Build CI/CD for the app and prestashop with github action',
        },
        Parsec: {
            title: 'Parsec Cloud',
            jobTitle: 'R&D Engineer',
            period: 'Jun 2020 - Dec 2020',
            companyDescription:
                'Parsec allows you to share your work and data in the cloud confidentially via end-to-end encryption technology',
            missionDescription:
                '• Development of a data decryption/encryption process inside an SGX enclave to reinforce security\n' +
                '• Improvement of the GUI of the software\n' +
                '• Development of new features around the kernel\n',
        },
        Mangalib: {
            title: 'Mangalib',
            jobTitle: 'R&D Engineer',
            period: 'October 2021 - today',
            companyDescription:
                'MangaLib allows you to store your personal manga library and to perform a quick search within it.',
            missionDescription:
                '• Development of the app from scratch with ReactNative\n' +
                '• Release on the stores\n' +
                '• Create full UI/UX\n',
        },
    };

    return (
        <div className="flex flex-col justify-center p-4  w-full animate-fade-in ">
            <h2>{translator('experiences.h2')}</h2>
            <div className="flex justify-evenly lg:flex-row flex-col flex-wrap">
                <ExperienceCardsSlide
                    experiencesTranslated={experienceTranslatedText}
                />
            </div>
        </div>
    );
}
