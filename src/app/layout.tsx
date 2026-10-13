import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Instrument_Serif,
  Syne,
} from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Vagish Sharma — Backend Software Engineer",
  description:
    "Backend Software Engineer focused on C#, .NET, SQL Server, Azure, and REST APIs. Open to backend and software engineering roles.",
  openGraph: {
    title: "Vagish Sharma — Backend Software Engineer",
    description: "C# / .NET · SQL Server · Azure · REST APIs",
    type: "website",
    url: "https://vagish-sharma.vercel.app",
  },
  metadataBase: new URL("https://vagish-sharma.vercel.app"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${instrument.variable} ${plex.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <div className="grain" aria-hidden />
        <SmoothScroll>
          <div className="site-shell">{children}</div>
        </SmoothScroll>
        <CustomCursor />
      </body>
    </html>
  );
}
