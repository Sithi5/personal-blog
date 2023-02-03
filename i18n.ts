export const locales = ['en', 'fr'] as const;
export const defaultLocale = 'en';
export type ValidLocale = (typeof locales)[number];

export async function getTranslator(locale: ValidLocale) {
    const dictionary = await import(`./translation/${locale}.ts`);
    const defaultDictionary =
        locale !== defaultLocale
            ? await import(`./translation/${defaultLocale}.ts`)
            : undefined;

    function generateTranslator(keys: string) {
        let translation = dictionary.default;
        for (const key of keys.split('.')) {
            if (translation[key] === undefined) {
                translation = undefined;
                break;
            } else {
                translation = translation[key];
            }
        }
        if (
            translation === undefined &&
            defaultDictionary &&
            defaultDictionary !== dictionary
        ) {
            // Check if it exist in default dictionary
            translation = defaultDictionary.default;
            for (const key of keys.split('.')) {
                if (translation[key] === undefined) {
                    return keys;
                } else {
                    translation = translation[key];
                }
            }
        }

        return translation;
    }
    return generateTranslator;
}
