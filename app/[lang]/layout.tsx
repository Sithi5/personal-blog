import { Navbar, ScrollToTopButton } from 'components/client/';
import { Footer } from 'components/server';
import { getTranslator, locales, ValidLocale } from 'i18n';
import 'styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

export async function generateStaticParams() {
    return locales.map((locale) => ({
        lang: locale,
    }));
}

type RootProps = {
    params: { lang: string; country: string };
    children: React.ReactNode;
};

export default async function RootLayout(props: RootProps) {
    const { params, children } = props;
    const lang = params.lang as ValidLocale;
    const translator = await getTranslator(lang);

    const navbarLinksList: [string, string][] = [
        [translator('navbar.home'), '/'],
        [translator('navbar.skills'), '#skills'],
        [translator('navbar.experiences'), '#experiences'],
        [translator('navbar.projects'), '#projects'],
        [translator('navbar.education'), '#education'],
        [translator('navbar.contactMe'), '#contact-me'],
    ];

    return (
        <html lang="en" className="">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className="relative min-h-screen">
                <header>
                    <Navbar
                        navbarLinksList={navbarLinksList}
                        navbarLetsConnectText={translator('navbar.letsConnect')}
                        lang={lang}
                    />
                </header>
                <main>{children}</main>
                <Analytics />
                <Footer translator={translator} />
                <ScrollToTopButton />
            </body>
        </html>
    );
}
