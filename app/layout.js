import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Technical Writer — Dev Docs / APIs — Nick Maahs",
  description: "Developer documentation, API reference, and technical writing services.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">
              <h1>
                Nick Maahs
              </h1>
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
