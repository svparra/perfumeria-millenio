import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./components/CartProvider";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Perfumería Millenio | Perfumes originales en Colombia",
  description:
    "Encuentra tu aroma ideal con asesoría personalizada. Perfumería 100% original certificada, envíos a todo Colombia y pago contraentrega.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${sans.variable} font-sans antialiased bg-cream text-ink`}>
        <CartProvider>
          {children}
          <FloatingWhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}
