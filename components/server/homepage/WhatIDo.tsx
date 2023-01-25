import React from 'react';
import WhatIDoText from './WhatIDoText';

export default function WhatIDo() {
    return (
        <div className="flex flex-col lg:flex-row justify-around p-4  ">
            <div className="flex-1 px-8">
                <WhatIDoText />
            </div>
        </div>
    );
}
