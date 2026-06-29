import 'styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'MangaLib — Delete Account',
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
};

type MangaLibLayoutProps = {
    children: React.ReactNode;
};

export default function MangaLibLayout({ children }: MangaLibLayoutProps) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-white dark:bg-darkBlueColor">
                {children}
            </body>
        </html>
    );
}
