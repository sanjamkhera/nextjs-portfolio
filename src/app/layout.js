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
  title: "Seawall Software | Digital Solutions",
  description: "Personal Portfolio of Sanjam Khera - Expert in web development, mobile apps, and digital transformation",
  keywords: "web development, mobile apps, digital transformation, software solutions",
  location: "410 W Georgia St, Vancouver, BC V6B 1Z3, Canada",
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
