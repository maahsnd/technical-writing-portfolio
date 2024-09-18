import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import background from "./topo_tmp.webp"

export const metadata = {
  title: "Technical Writer — Dev Docs / APIs — Nick Maahs",
  description: "Developer documentation, API reference, and technical writing services.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='bgWrap'>
          <Image
            alt="Topographical map"
            src={background}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
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
