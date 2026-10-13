import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Syne } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollTextures } from "@/components/ScrollTextures";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Vagish Sharma — Backend Software Engineer",
  description:
    "Backend Software Engineer focused on C#, .NET, SQL Server, Azure, and REST APIs.",
  metadataBase: new URL("https://vagish-sharma.vercel.app"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plex.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <SmoothScroll>
          <ScrollTextures />
          <div className="shell">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
