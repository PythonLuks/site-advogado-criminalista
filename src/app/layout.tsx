import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TopBanner } from "@/components/ui/top-banner";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Rodolfo Alexander | Consultoria e Correspondência Jurídica",
  description: "Defesa Criminal Estratégica com Excelência, Ética e Compromisso. Especialista em Lei de Drogas e Crimes Hediondos.",
  keywords: ["Advogado Criminal", "Defesa Criminal", "Direito Penal", "Lei de Drogas", "Crimes Hediondos", "Habeas Corpus"],
  authors: [{ name: "Rodolfo Alexander" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://rodolfoalexander.com.br",
    title: "Rodolfo Alexander | Advogado Criminalista",
    description: "Defesa Criminal Estratégica com Excelência, Ética e Compromisso.",
    siteName: "Rodolfo Alexander",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodolfo Alexander | Advogado Criminalista",
    description: "Defesa Criminal Estratégica com Excelência, Ética e Compromisso.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col">
        <LenisProvider>
          <TopBanner />
          <Navbar />
          <main className="flex-1 flex flex-col pt-10">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </LenisProvider>
      </body>
    </html>
  );
}
