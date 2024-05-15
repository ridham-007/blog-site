import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cookies } from "next/headers"
import Header from "./_header/page";
import Footer from "./_footer/page";


const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InShorten: Latest News, Blog, Travel",
  description: "Discover the globe with our one-stop shop that provides the most recent news updates, a wide range of blog posts, and motivational travel guides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex flex-col w-full max-w-[1440px] h-[100vh] overflow-auto`}
        suppressHydrationWarning={true}
        style={{
          marginRight: 'auto !important',
          marginLeft: 'auto !important',
          padding: '0px !important'
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header></Header>
          {children}
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
