import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './components/theme-provider';
import { FloatingDockMain } from "./components/FloatingDockMain";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rani Asmit",
  metadataBase: new URL('https://raniasmit.me'),
  description: "Portfolio of Rani Asmit, a developer specializing in web development, cloud computing, and open source.",
  keywords: [
    "Rani Asmit",
    // "freelance product engineer",
    // "MVP developer",
    "software engineer India",
    "build MVP",
    "startup MVP builder",
    //"hire product engineer",
    //"freelance backend developer",
    //"Next.js developer",
    "Java Spring developer",
    "Flutter developer",
    //"React developer",
    "portfolio of Rani",
    "Rani freelance",
    "Rani software engineer",
    //"cloud developer",
    //"startup product developer",
  ],
  authors: [{ name: "Rani Asmit" }],
  creator: "Rani Asmit",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Rani Asmit",
    description: "Explore Rani Asmit's portfolio of cutting-edge web apps, tech blogs, and open-source projects.",
    images: ["/WormHole.jpg"],
    url: "https://raniasmit.me",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rani Asmit | Developer Portfolio",
    description: "Explore web projects and blogs by Rani Asmit.",
    //images: ["/twitter_profile_image.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingDockMain/>
        </ThemeProvider>
      </body>
    </html>
  );
}
