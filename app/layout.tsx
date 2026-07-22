import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./components/CartProvider";
import CartDrawer from "./components/CartDrawer";
import { QuickViewProvider } from "./components/QuickViewProvider";
import QuickViewModal from "./components/QuickViewModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import SmoothScroll from "./components/SmoothScroll";
import StickyMobileBar from "./components/StickyMobileBar";

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
      <body className={`${display.variable} ${sans.variable} font-sans antialiased bg-cream text-ink pb-16 sm:pb-0`}>
        <CartProvider>
          <QuickViewProvider>
            <SmoothScroll />
            {children}
            <FloatingWhatsApp />
            <StickyMobileBar />
            <QuickViewModal />
            <CartDrawer />
          </QuickViewProvider>
        </CartProvider>
      </body>
    </html>
  );
}
