import React from 'react';

type PrimaryButtonsProps = {
    text: string;
};

export default function PrimaryButtons(props: PrimaryButtonsProps) {
    const { text } = props;
    return (
        <button
            className={
                'bg-gradient-to-r from-primary to-[#709dff]' +
                ' px-4 text-white h-12 rounded-lg hover:text-primary hover:scale-105 ' +
                'ease-in duration-75 hover:from-white hover:to-white hover:border-2 hover:border-primary'
            }
        >
            <p className="text-xs lg:text-xl dark:hover:text-primary">{text}</p>
        </button>
    );
}
