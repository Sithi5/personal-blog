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
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                    To request deletion of your account and associated data,
                    open MangaLib, go to Settings, then choose Delete account.
                    We will process your request and confirm once your data has
                    been deleted.
                </p>
            </div>
        </main>
    );
}
