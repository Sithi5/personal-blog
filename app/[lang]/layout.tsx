import { Navbar, ScrollToTopButton } from 'components/client/';
import { Footer } from 'components/server';
import { getTranslator, locales, ValidLocale } from 'i18n';
import 'styles/globals.css';

export async function generateStaticParams() {
    return locales.map((locale) => ({
        lang: locale,
    }));
}

export default async function RootLayout({
    params,
    children,
}: {
    children: React.ReactNode;
    params: { lang: string; country: string };
}) {
    const translator = await getTranslator(
        `${params.lang}` as ValidLocale // our middleware ensures this is valid
    );

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
                    {/* <Navbar
                        navbarLinksList={navbarLinksList}
                        navbarLetsConnectText={translator('navbar.letsConnect')}
                    /> */}
                </header>
                <main>{children}</main>
                <Footer />
                <ScrollToTopButton />
            </body>
        </html>
    );
}
