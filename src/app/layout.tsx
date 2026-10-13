import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Vagish Sharma | Backend Software Engineer",
  description:
    "Backend Software Engineer focused on C#, .NET, SQL Server, Azure, and REST APIs. Open to backend and software engineering roles.",
  openGraph: {
    title: "Vagish Sharma | Backend Software Engineer",
    description: "C# / .NET · SQL Server · Azure · REST APIs",
    url: "https://vagish-sharma.vercel.app",
  },
  metadataBase: new URL("https://vagish-sharma.vercel.app"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plex.variable} ${plexMono.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
