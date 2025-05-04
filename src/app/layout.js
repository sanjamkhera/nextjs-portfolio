import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  title: "Seawall Software | Vancouver's Premier Digital Solutions Company",
  description: "Seawall Software is Vancouver's leading digital solutions provider, specializing in web development, mobile apps, and AI integration. Expert team delivering innovative software solutions for businesses.",
  keywords: "Seawall Software, Vancouver software company, web development Vancouver, mobile app development, digital solutions, software development, AI integration, custom software solutions, Vancouver tech company",
  location: "Vancouver, BC, Canada",
  author: "Seawall Software",
  robots: "index, follow",
  openGraph: {
    title: "Seawall Software | Vancouver's Premier Digital Solutions Company",
    description: "Leading Vancouver software company specializing in web development, mobile apps, and AI integration. Expert team delivering innovative digital solutions.",
    type: "website",
    locale: "en_CA",
    siteName: "Seawall Software"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1F2228",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900`}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
