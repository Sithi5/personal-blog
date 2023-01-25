import React from 'react';

type EmojiProps = {
    label?: string;
    symbol: string;
    className?: string;
};

export default function Emoji(props: EmojiProps) {
    const { label, symbol, className } = props;

    return (
        <span
            className={className ? className : ''}
            role="img"
            aria-label={label ? label : ''}
            aria-hidden={label ? 'false' : 'true'}
        >
            {symbol}
        </span>
    );
}
