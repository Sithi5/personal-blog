import Link from 'next/link';

const CONTACT_EMAIL = 'ma.sithis@gmail.com';

export default function MangaLibDeleteAccountPage() {
    return (
        <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-16">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-darkBackgroundColor">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orangeMangalib">
                    MangaLib
                </p>
                <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                    Delete your account
                </h1>
                <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                    If you delete your MangaLib account, all of your personal
                    data and your entire manga library will be permanently
                    removed from our systems. This action cannot be undone.
                </p>
                <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
                    To request deletion of your account and associated data,
                    please contact us by email. We will process your request and
                    confirm once your data has been deleted.
                </p>
                <Link
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('MangaLib account deletion request')}&body=${encodeURIComponent('Hello,\n\nI would like to delete my MangaLib account and all associated data.\n\nAccount email:\n\nThank you.')}`}
                    className="inline-flex items-center justify-center rounded-lg bg-orangeMangalib px-6 py-3 font-medium text-white transition hover:opacity-90"
                >
                    Request account deletion
                </Link>
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                    Or email us directly at{' '}
                    <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-orangeMangalib underline"
                    >
                        {CONTACT_EMAIL}
                    </a>
                </p>
            </div>
        </main>
    );
}
