import React from 'react';
import { Emoji } from 'components/server';

export default function Footer() {
    return (
        <div className="flex bottom-0 justify-center p-4">
            <p className="text-grey">
                Made with <Emoji symbol="❤️" label="heart" /> by Malo Boucé
            </p>
        </div>
    );
}
