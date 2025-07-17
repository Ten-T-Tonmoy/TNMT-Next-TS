import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FollowerPointerCard } from "../components/ui/Pointer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "TNMY-portfolio",
  description: "Portfolio gen1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} overflow-hidden
        ${ubuntu.variable} ${poppins.variable}
        ${geistMono.variable}  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FollowerPointerCard>{children}</FollowerPointerCard>
        </ThemeProvider>
      </body>
    </html>
  );
}
