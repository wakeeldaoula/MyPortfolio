import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadwakeel.dev"),
  title: "Muhammad Wakeel | Junior Data Scientist Portfolio",
  description:
    "Muhammad Wakeel - A passionate Junior Data Scientist specializing in machine learning, data analysis, and end-to-end model deployment. View my projects and skills.",
  keywords: [
    "Data Scientist",
    "Machine Learning",
    "Python",
    "Data Analysis",
    "ML Engineer",
    "Muhammad Wakeel",
    "Portfolio",
    "Scikit-Learn",
    "Pandas",
    "Data Science",
    "UET Lahore",
  ],
  authors: [{ name: "Muhammad Wakeel" }],
  creator: "Muhammad Wakeel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadwakeel.dev",
    title: "Muhammad Wakeel | Junior Data Scientist Portfolio",
    description:
      "A passionate Junior Data Scientist specializing in machine learning, data analysis, and end-to-end model deployment.",
    siteName: "Muhammad Wakeel Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Wakeel - Data Scientist Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Wakeel | Junior Data Scientist Portfolio",
    description:
      "A passionate Junior Data Scientist specializing in machine learning, data analysis, and end-to-end model deployment.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className="relative">{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
