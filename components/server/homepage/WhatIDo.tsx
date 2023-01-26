import React from 'react';
import WhatIDoText from '../../client/homepage/WhatIDoText';
import { WhatIDoLottie } from 'components/client';

export default function WhatIDo() {
    return (
        <div className="flex flex-col lg:flex-row justify-around p-4  ">
            <div className="flex-1 px-8  max-h-[60%] ">
                <WhatIDoLottie />
            </div>
            <div className="flex-1 px-8">
                <WhatIDoText />
            </div>
        </div>
    );
}
