import { Navbar } from 'components/client/';
import { Footer } from 'components/server';
import 'styles/globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>
                <header>
                    <Navbar />
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
