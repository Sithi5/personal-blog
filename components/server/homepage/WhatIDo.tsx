import React from 'react';
import {
    WhatIDoLottie,
    WhatIDoStackIcons,
    WhatIDoText,
} from 'components/client';

export default function WhatIDo() {
    return (
        <div className="flex flex-col lg:flex-row  p-4">
            <div className="flex-1 justify-center lg:order-2">
                <WhatIDoText />
                <WhatIDoStackIcons />
            </div>
            <div className="flex-1 flex justify-center  px-4 lg:px-8 lg:order-1">
                <WhatIDoLottie />
            </div>
        </div>
    );
}
