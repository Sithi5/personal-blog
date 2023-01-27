import { EducationBlock } from 'components/client';
import React from 'react';
import FourtyTwoLogo from 'assets/logos/42-logo.svg';
import EscRennesLogo from 'assets/logos/esc-rennes-logo.svg';

export default function Education() {
    return (
        <div className="flex flex-col justify-around p-4">
            <div className="flex-1 px-8">
                <EducationBlock
                    title={'42'}
                    cursus={'Master of Science in Computer Science'}
                    description={
                        'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
                    }
                    period={'September 2017 - April 2019'}
                    svgImage={FourtyTwoLogo}
                />
            </div>
            <div className="flex-1 px-8 pt-12">
                <EducationBlock
                    title={'ESC Rennes'}
                    cursus={'Bachelor in business school, major in finance'}
                    description={
                        'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
                    }
                    period={'September 2017 - April 2019'}
                    svgImage={EscRennesLogo}
                />
            </div>
        </div>
    );
}
