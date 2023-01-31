'use client';

import { Slide } from 'react-awesome-reveal';

export default function ProficiencyBars() {
    return (
        <Slide triggerOnce cascade damping={0.02} direction="left">
            <div className="px-4 pt-4">
                <p className="pb-4 text-grey">Mobile Development</p>
                <div className="h-4  bg-lightgrey rounded-xl">
                    <div
                        className={'w-[90%] h-full bg-primary rounded-xl'}
                    ></div>
                </div>
            </div>
            <div className="px-4 pt-4">
                <p className="pb-4 text-grey">Frontend/Design</p>
                <div className="h-4  bg-lightgrey rounded-xl">
                    <div
                        className={'w-[70%] h-full bg-primary rounded-xl'}
                    ></div>
                </div>
            </div>
            <div className="px-4 pt-4">
                <p className="pb-4 text-grey">Backend</p>
                <div className="h-4  bg-lightgrey rounded-xl">
                    <div
                        className={'w-[80%] h-full bg-primary rounded-xl'}
                    ></div>
                </div>
            </div>
            <div className="px-4 pt-4">
                <p className="pb-4 text-grey">Pipelines/Deployment</p>
                <div className="h-4  bg-lightgrey rounded-xl">
                    <div
                        className={'w-[50%] h-full bg-primary rounded-xl'}
                    ></div>
                </div>
            </div>
        </Slide>
    );
}
