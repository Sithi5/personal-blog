import { HomePageIntro } from 'components/server';
import React from 'react';

export default function Home() {
    return (
        <div className="relative">
            <div className="pt-60 flex justify-center">
                <HomePageIntro />
            </div>
        </div>
    );
}
