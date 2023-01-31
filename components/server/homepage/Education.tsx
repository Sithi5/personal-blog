import { EducationBlock } from 'components/client';
import React from 'react';
import FourtyTwoLogo from 'assets/logos/42-logo.svg';
import EscRennesLogo from 'assets/logos/esc-rennes-logo.svg';
import UniversityOfMacauLogo from 'assets/logos/university-of-macau-logo.svg';

export default function Education() {
    return (
        <div className="flex flex-col justify-around p-4">
            <h2>Education</h2>
            <div className="flex-1 px-8">
                <EducationBlock
                    title={'42 Paris'}
                    schoolDescription={
                        "Master's degree (RNCP level 7) in Computer Science"
                    }
                    description={
                        '• Algorithmic and AI\n' +
                        '• Security project\n' +
                        '• Web project\n' +
                        '• Virus project\n' +
                        '• System administration'
                    }
                    period={'September 2017 - April 2019'}
                    svgImage={FourtyTwoLogo}
                />
            </div>
            <div className="flex-1 px-8 pt-12 ">
                <EducationBlock
                    title={'ESC Rennes'}
                    schoolDescription={
                        "Bachelor's degree, Economics, Finance and Management"
                    }
                    description={
                        '• finance & banking systems\n' +
                        '• corporate finance\n' +
                        '• marketing analysis\n' +
                        '• international management'
                    }
                    period={'September 2013 - April 2019'}
                    svgImage={EscRennesLogo}
                />
            </div>
            <div className="flex-1 px-8 pt-12">
                <EducationBlock
                    title={'University of Macau'}
                    schoolDescription={
                        'Finance, Banking and International Management'
                    }
                    description={
                        '• Finance and banking\n' +
                        '• International Behaviour\n' +
                        '• International Management'
                    }
                    period={'January 2016 - June 2016'}
                    svgImage={UniversityOfMacauLogo}
                />
            </div>
        </div>
    );
}
