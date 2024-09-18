import { Roboto } from "next/font/google"
import "./globals.css";
import Link from "next/link";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Technical Writer — Dev Docs / APIs — Nick Maahs",
  description: "Developer documentation, API reference, and technical writing services.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <header>
          <nav>
            <Link href="/">
              Home
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
