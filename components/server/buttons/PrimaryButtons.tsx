import React from 'react';

type PrimaryButtonsProps = {
    text: string;
};

export default function PrimaryButtons(props: PrimaryButtonsProps) {
    const { text } = props;
    return (
        <button className=" bg-primary  md:w-36 sm:w-24 lg:w-44 h-12 rounded-lg">
            <p className="text-xs lg:text-xl">{text}</p>
        </button>
    );
}
