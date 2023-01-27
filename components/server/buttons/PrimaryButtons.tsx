import React from 'react';

type PrimaryButtonsProps = {
    text: string;
};

export default function PrimaryButtons(props: PrimaryButtonsProps) {
    const { text } = props;
    return (
        <button className=" bg-primary px-4 h-12 rounded-lg hover:scale-105 ease-in duration-75">
            <p className="text-xs lg:text-xl">{text}</p>
        </button>
    );
}
