import "./globals.css";
import Image from "next/image";
import background from "@/public/topo_bg.jpg";
import Header from "@/components/header/Header";
import { Analytics } from "@vercel/analytics/react"

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
            priority="true"
          />
        </div>
        <Header></Header>
        <div className="contentContainer">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
