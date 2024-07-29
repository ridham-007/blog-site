import type { Metadata } from "next";
import { Open_Sans, Lato, Arimo, Nunito,Poppins } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./_header/page";
import Footer from "./_footer/page";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Open_Sans({
  subsets: ['latin'],
  // display: 'swap',
})

// const inter = Arimo({
//   subsets: ['latin'],
//   // display: 'swap',
// })

// const inter = Nunito({
//   subsets: ['latin'],
//   // display: 'swap',
// })
// const inter = Lato({
//   weight: '400',
//   subsets: ['latin'],
// })

export const metadata: Metadata = {
  title: "JustReadInside | Explore the world",
  description: "Discover the globe with our one-stop shop that provides thea wide range of blog posts, and motivational travel guides."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="L_APx2l8iVy4gmmmcok2Q4T6FXPBcwkFvA0Pc8hK_PE" />
      </head>
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
      <GoogleAnalytics gaId="G-E6JQ21SY2Q" />
      <Script id="" type="application/ld+json"> 
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "JustReadInside",
          "url": "https://justreadinside.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://justreadinside.com/about-us{search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </Script>
    </html>
  );
}
