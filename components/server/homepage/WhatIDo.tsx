import React from 'react';
import {
    WhatIDoLottie,
    WhatIDoStackIcons,
    WhatIDoText,
} from 'components/client';

type WhatIDoProps = {
    translator: (key: string) => string;
};

export default function WhatIDo(props: WhatIDoProps) {
    const { translator } = props;

    return (
        <div className="flex flex-col lg:flex-row  p-4">
            <div className="flex flex-col justify-center lg:order-2 w-full lg:w-[50%]">
                <h2>{translator('whatIDo.h2')}</h2>
                <WhatIDoText text={translator('whatIDo.textOne')} />
                <WhatIDoStackIcons />
            </div>
            <div className="flex justify-center  px-4 lg:px-8 w-full lg:order-1 lg:h-[700px] lg:w-[700px]">
                <WhatIDoLottie />
            </div>
        </div>
    );
}
