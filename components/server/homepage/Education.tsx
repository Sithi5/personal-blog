import { EducationBlock } from 'components/client';
import React from 'react';
import FourtyTwoLogo from 'assets/logos/42-logo.svg';
import EscRennesLogo from 'assets/logos/esc-rennes-logo.svg';
import UniversityOfMacauLogo from 'assets/logos/university-of-macau-logo.svg';

export default function Education() {
    return (
        <div className="flex flex-col justify-around p-4">
            <h2 className="tracking-wide font-normal px-8">Education</h2>
            <div className="flex-1 px-8">
                <EducationBlock
                    title={'42 Paris'}
                    schoolDescription={'Master of Science in Computer Science'}
                    description={
                        '• Algorithmic and AI (Game AI, Sorting algorithm, C/Python/Rust programming language)\n' +
                        '• Security project (root-me type project)\n' +
                        '• Web project (Creating an instagram like social media, a dating website PHP/JS/CSS/HTML/SYMFONY)\n' +
                        '• Virus project (Create a packer with C and ASM programming language)\n' +
                        '• System administration (Docker, Virtualbox, Networking)\n' +
                        '• Many projects in autonomous groups, peer correction, peer learning'
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
                        'Rennes School of Business is a French business school located in Rennes, the capital of Brittany:\n' +
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
