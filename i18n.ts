export const locales = ['en', 'fr'] as const;
export const defaultLocale = 'en';
export type ValidLocale = (typeof locales)[number];

export async function getTranslator(locale: ValidLocale) {
    const dictionary = await import(`./dictionaries/${locale}.json`);
    const defaultDictionary =
        locale !== defaultLocale
            ? await import(`./dictionaries/${defaultLocale}.json`)
            : '';
    function generateTranslator(
        key: string,
        params?: { [key: string]: string | number }
    ) {
        let translation = key
            .split('.')
            .reduce((obj, key) => obj && obj[key], dictionary);
        if (!translation && locale !== defaultLocale) {
            // Back-up to default locale dictionary
            translation = key
                .split('.')
                .reduce((obj, key) => obj && obj[key], defaultDictionary);
            if (!translation) {
                return key;
            }
        }
        if (params && Object.entries(params).length) {
            Object.entries(params).forEach(([key, value]) => {
                translation = translation?.replace(
                    `{{ ${key} }}`,
                    String(value)
                );
            });
        }
        return translation;
    }
    return generateTranslator;
}
