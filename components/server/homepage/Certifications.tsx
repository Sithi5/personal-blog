import React from 'react';
import {
    CertificationsCardsSlide,
    CertificationsTranslatedDict,
} from 'components/client';

type CertificationsProps = {
    translator: (key: string) => string;
};

export default function Certifications(props: CertificationsProps) {
    const { translator } = props;

    const certificationsTranslatedText: CertificationsTranslatedDict = {
        createAndManageCloudResources: {
            title: translator(
                'certifications.createAndManageCloudResources.title'
            ),
            certificationFocus: translator(
                'certifications.createAndManageCloudResources.certificationFocus'
            ),
            programmingLanguage: translator(
                'certifications.createAndManageCloudResources.programmingLanguage'
            ),
            certificationDescription: translator(
                'certifications.createAndManageCloudResources.certificationDescription'
            ),
        },
        googleCloudEssentials: {
            title: translator('certifications.googleCloudEssentials.title'),
            certificationFocus: translator(
                'certifications.googleCloudEssentials.certificationFocus'
            ),
            programmingLanguage: translator(
                'certifications.googleCloudEssentials.programmingLanguage'
            ),
            certificationDescription: translator(
                'certifications.googleCloudEssentials.certificationDescription'
            ),
        },
    };

    console.log(certificationsTranslatedText);

    return (
        <div className="flex flex-col justify-center p-4  w-full animate-fade-in ">
            <h2>{translator('certifications.h2')}</h2>
            <div className="flex justify-evenly lg:flex-row flex-col flex-wrap">
                <CertificationsCardsSlide
                    translations={certificationsTranslatedText}
                />
            </div>
        </div>
    );
}
