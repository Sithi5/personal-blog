'use client';

import React from 'react';
import { Slide } from 'react-awesome-reveal';
import CertificationCard from './CertificationCard';
import GoogleCloudLogo from '/assets/logos/google-cloud-logo.svg';

export type CertificationTranslatedText = {
    title: string;
    certificationFocus: string;
    programmingLanguage: string;
    certificationDescription: string;
};

export type CertificationsTranslatedDict = {
    [key: string]: CertificationTranslatedText;
};

type CertificationsCardsSlideProps = {
    translations: CertificationsTranslatedDict;
};

export default function CertificationsCardsSlide(
    props: CertificationsCardsSlideProps
) {
    const { translations } = props;

    return (
        <Slide triggerOnce direction="up" cascade damping={0.1}>
            <div className="flex flex-row w-full flex-wrap justify-around">
                <CertificationCard
                    title={translations.createAndManageCloudResources.title}
                    svgImage={GoogleCloudLogo}
                    certificationFocus={
                        translations.createAndManageCloudResources
                            .certificationFocus
                    }
                    programmingLanguage={
                        translations.createAndManageCloudResources
                            .programmingLanguage
                    }
                    certificationDescription={
                        translations.createAndManageCloudResources
                            .certificationDescription
                    }
                    href="https://www.cloudskillsboost.google/public_profiles/d3594725-aec8-4c11-bbc5-1217cf38b658/badges/3231569"
                />
                <CertificationCard
                    title={translations.googleCloudEssentials.title}
                    svgImage={GoogleCloudLogo}
                    certificationFocus={
                        translations.googleCloudEssentials.certificationFocus
                    }
                    programmingLanguage={
                        translations.googleCloudEssentials.programmingLanguage
                    }
                    certificationDescription={
                        translations.googleCloudEssentials
                            .certificationDescription
                    }
                    href="https://www.cloudskillsboost.google/public_profiles/d3594725-aec8-4c11-bbc5-1217cf38b658/badges/3227604"
                />
            </div>
        </Slide>
    );
}
