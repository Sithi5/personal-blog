import { EducationBlock } from 'components/client';
import React from 'react';

export default function Education() {
    return (
        <div className="flex flex-col justify-around p-4">
            <div className="flex-1 px-8">
                <EducationBlock
                    title={'42'}
                    cursus={'Master of Science in Computer Science'}
                    description={'lorem ipsum'}
                    period={'September 2017 - April 2019'}
                />
            </div>
            <div className="flex-1 px-8 pt-12">
                <EducationBlock
                    title={'ESC Rennes'}
                    cursus={'Bachelor in business school, major in finance'}
                    description={'lorem ipsum'}
                    period={'September 2017 - April 2019'}
                />
            </div>
        </div>
    );
}
