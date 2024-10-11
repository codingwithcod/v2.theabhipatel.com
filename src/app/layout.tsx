import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import AppLayout from "./AppLayout";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.APP_BASE_URL}`),
  title: {
    default: "TheAbhiPatel",
    template: "%s - A Full Stack Developer | Portfolio",
  },
  description:
    "TheAbhiPatel: Turning concepts into functional web experiences from front to back. Explore the portfolio of Abhishek Patel, a full stack developer specializing in creating seamless websites and applications",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
