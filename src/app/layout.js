import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ChalksNBoard | Educational Marketing Agency",
  description: "Boost School Admissions with 360° Marketing That Delivers. Chalksnboard provides digital marketing, dynamic web design, and growth strategies for educational institutions.",
  keywords: ["AI Admission CRM", "Admission CRM Software", "School CRM", "College CRM", "AI Counselling", "Student Lead Management", "Education CRM", "Admission Management System", "Google Ads for Schools", "College Marketing", "AI Voice Agent", "Admission Automation", "Student Lead Nurturing", "AI for Education", "Admission Ecosystem"],
  openGraph: {
    title: "ChalksNBoard | Educational Marketing Agency",
    description: "Boost School Admissions with 360° Marketing That Delivers.",
    url: "https://chalksnboard.in",
    siteName: "ChalksNBoard",
    images: [
      {
        url: "https://eduai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EduAI Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduAI - AI-Powered Admission Growth Platform",
    description: "Automate counselling, nurture every student lead, manage admissions, and increase enrollments.",
    images: ["https://eduai.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  // Organization Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EduAI",
    "url": "https://eduai.com",
    "logo": "https://eduai.com/logo.png",
    "description": "Complete AI-powered admission ecosystem for educational institutions.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/eduai",
      "https://www.twitter.com/eduai",
      "https://www.instagram.com/eduai"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://eduai.com" />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18368586303"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18368586303');
          `}
        </Script>
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-18368586303/YeyeCNC-6tscEL_E6bZE',
                'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
