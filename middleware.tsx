import { NextRequest, NextResponse } from 'next/server';
import langParser from 'accept-language-parser';
import { defaultLocale, locales } from 'i18n';

function findBestMatchingLocale(acceptLangHeader: string) {
    // parse the locales acceptable in the header, and sort them by priority (q)
    const parsedLangs = langParser.parse(acceptLangHeader);

    // find the first locale that matches a locale in our list
    for (let i = 0; i < parsedLangs.length; i++) {
        const parsedLang = parsedLangs[i];
        const matchedLocale = locales.find((locale) => {
            return parsedLang.code === locale;
        });
        if (matchedLocale) {
            return matchedLocale;
        }
    }
    return defaultLocale;
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if the pathname is missing a valid locale
    const pathnameIsMissingValidLocale = locales.every((locale) => {
        return !(
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
        );
    });

    if (pathnameIsMissingValidLocale) {
        const matchedLocale = findBestMatchingLocale(
            request.headers.get('Accept-Language') || defaultLocale
        );
        if (matchedLocale !== defaultLocale) {
            return NextResponse.redirect(
                new URL(`/${matchedLocale}${pathname}`, request.url)
            );
        } else {
            return NextResponse.rewrite(
                new URL(`/${defaultLocale}${pathname}`, request.url)
            );
        }
    } else if (pathname === `/${defaultLocale}`) {
        // redirect to the root path
        return NextResponse.redirect(
            new URL(
                pathname.replace(
                    `/${defaultLocale}`,
                    pathname.startsWith('/') ? '/' : ''
                ),
                request.url
            )
        );
    }
}

export const config = {
    // do not localize next.js paths
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};
