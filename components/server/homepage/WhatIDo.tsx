import React from 'react';
import {
    WhatIDoLottie,
    WhatIDoStackIcons,
    WhatIDoText,
} from 'components/client';

export default function WhatIDo() {
    return (
        <div className="flex flex-col lg:flex-row  p-4">
            <div className="flex flex-col justify-center lg:order-2 w-full lg:w-[50%]">
                <h2 className="">What I do</h2>
                <WhatIDoText />
                <WhatIDoStackIcons />
            </div>
            <div className="flex justify-center  px-4 lg:px-8 w-full lg:order-1 lg:h-[700px] lg:w-[700px]">
                <WhatIDoLottie />
            </div>
        </div>
    );
}
