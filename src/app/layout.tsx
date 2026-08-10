import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hashim | Business Intelligence & Data Analyst",
  description:
    "Enterprise BI Specialist, Data Engineer, and Machine Learning Developer creating predictive data architectures and interactive analytics dashboards.",
  keywords: [
    "Business Intelligence",
    "Data Analyst",
    "Power BI",
    "SQL",
    "Python",
    "Machine Learning",
    "PySpark",
    "AWS",
  ],
  openGraph: {
    title: "Hashim | Business Intelligence & Data Analyst",
    description: "Enterprise BI Architect & Machine Learning Developer.",
    url: "https://hashim.dev",
    siteName: "Hashim Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hashim Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050505] text-gray-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}