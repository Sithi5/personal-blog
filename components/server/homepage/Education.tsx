import { EducationBlock } from 'components/client';
import React from 'react';
import FourtyTwoLogo from 'assets/logos/42-logo.svg';
import EscRennesLogo from 'assets/logos/esc-rennes-logo.svg';
import UniversityOfMacauLogo from 'assets/logos/university-of-macau-logo.svg';

export type EducationTranslatedText = {
    title: string;
    schoolDescription: string;
    description: string;
    period: string;
};

export type EducationTranslatedDict = {
    [key: string]: EducationTranslatedText;
};

type EducationProps = {
    translator: (key: string) => string;
};

export default function Educationprops(props: EducationProps) {
    const { translator } = props;

    const educationTranslatedText: EducationTranslatedDict = {
        fourtyTwo: {
            title: translator('education.fourtyTwo.title'),
            schoolDescription: translator(
                'education.fourtyTwo.schoolDescription'
            ),
            description: translator('education.fourtyTwo.description'),
            period: translator('education.fourtyTwo.period'),
        },
        escRennes: {
            title: translator('education.escRennes.title'),
            schoolDescription: translator(
                'education.escRennes.schoolDescription'
            ),
            description: translator('education.escRennes.description'),
            period: translator('education.escRennes.period'),
        },
        universityOfMacau: {
            title: translator('education.universityOfMacau.title'),
            schoolDescription: translator(
                'education.universityOfMacau.schoolDescription'
            ),
            description: translator('education.universityOfMacau.description'),
            period: translator('education.universityOfMacau.period'),
        },
    };

    return (
        <div className="flex flex-col justify-around p-4">
            <h2>{translator('education.h2')}</h2>
            <div className="flex-1 px-8">
                <EducationBlock
                    title={educationTranslatedText.fourtyTwo.title}
                    schoolDescription={
                        educationTranslatedText.fourtyTwo.schoolDescription
                    }
                    description={educationTranslatedText.fourtyTwo.description}
                    period={educationTranslatedText.fourtyTwo.period}
                    svgImage={FourtyTwoLogo}
                />
            </div>
            <div className="flex-1 px-8 pt-12 ">
                <EducationBlock
                    title={'ESC Rennes'}
                    schoolDescription={educationTranslatedText.escRennes.title}
                    description={educationTranslatedText.escRennes.description}
                    period={educationTranslatedText.escRennes.period}
                    svgImage={EscRennesLogo}
                />
            </div>
            <div className="flex-1 px-8 pt-12">
                <EducationBlock
                    title={educationTranslatedText.universityOfMacau.title}
                    schoolDescription={
                        educationTranslatedText.universityOfMacau.title
                    }
                    description={
                        educationTranslatedText.universityOfMacau.description
                    }
                    period={educationTranslatedText.universityOfMacau.period}
                    svgImage={UniversityOfMacauLogo}
                />
            </div>
        </div>
    );
}
