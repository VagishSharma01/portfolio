import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollTextures } from "@/components/ScrollTextures";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jb = JetBrains_Mono({
  variable: "--font-jb",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Vagish Sharma — Software Engineer (.NET / SQL / Azure)",
  description:
    "Software engineer focused on reliable APIs, database performance, and enterprise integrations. C# · .NET · SQL Server · Azure.",
  metadataBase: new URL("https://vagish-sharma.vercel.app"),
  alternates: { canonical: "https://vagish-sharma.vercel.app" },
  openGraph: {
    title: "Vagish Sharma — Software Engineer (.NET / SQL / Azure)",
    description:
      "Production APIs, SQL performance, enterprise integrations. Explore projects and download the résumé.",
    url: "https://vagish-sharma.vercel.app",
    type: "website",
    siteName: "Vagish Sharma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vagish Sharma — Software Engineer",
    description: "C# · .NET · SQL Server · REST APIs · Azure",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${space.variable} ${inter.variable} ${jb.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Providers>
          <SmoothScroll>
            <ScrollTextures />
            <div className="shell">{children}</div>
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
