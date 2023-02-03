import React from 'react';
import { Emoji } from 'components/server';

const footerHeight = 12;

type FooterProps = {
    translator: (key: string) => string;
};
export default function Footer(props: FooterProps) {
    const { translator } = props;

    return (
        <>
            <div className={'relative bottom-0 h-' + footerHeight}></div>
            {/* This prevent other elem go to throu the footer */}
            <footer
                className={'absolute bottom-0 w-full z-50  h-' + footerHeight}
            >
                <div className="flex flex-col justify-center p-4 items-center">
                    <p className="text-grey">
                        {translator('footer.madeWith')}{' '}
                        <Emoji symbol="❤️" label="heart" />{' '}
                        {translator('footer.by')}
                    </p>
                    <p className="text-grey">
                        {translator('footer.poweredBy')}
                    </p>
                </div>
            </footer>
        </>
    );
}
