import type { Metadata } from "next";
import { Zen_Old_Mincho, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const zenOldMincho = Zen_Old_Mincho({
    weight: ["400", "500", "700", "900"],
    subsets: ["latin"],
    variable: "--font-zen-old-mincho",
    display: "swap",
});

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

export const metadata: Metadata = {
    title: "やまと不動産 | YAMATO REAL ESTATE",
    description: "奈良の刻を、住まう。",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body
                className={`${zenOldMincho.variable} ${manrope.variable} antialiased bg-y-off-white text-y-charcoal`}
            >
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
