"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const { scrollY } = useScroll();
    const bgOpacity = useTransform(scrollY, [0, 500], [0, 0.95]);
    const textColor = useTransform(scrollY, [0, 500], ["rgba(255,255,255,1)", "rgba(51,51,51,1)"]);

    // Use ref to track previous scroll position without re-renders
    const lastYRef = useRef(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previousY = lastYRef.current;
        const direction = latest > previousY ? "down" : "up";

        if (latest < 50) {
            setIsVisible(true);
        } else if (direction === "down" && !isOpen) {
            setIsVisible(false);
        } else if (direction === "up") {
            setIsVisible(true);
        }

        lastYRef.current = latest;
    });

    return (
        <>
            <motion.header
                initial={{ y: 0 }}
                animate={{ y: isVisible || isOpen ? 0 : "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ backgroundColor: `rgba(249, 249, 249, ${bgOpacity})` as any }}
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:py-6 flex items-center justify-between shadow-sm md:shadow-none"
            >
                {/* Logo */}
                <Link href="/" className="z-50 group">
                    <motion.div
                        style={{ color: isOpen ? "#333" : textColor as any }}
                        className="flex items-center gap-3"
                    >
                        {/* Logo Icon */}
                        <div className="relative w-10 h-10 md:w-12 md:h-12">
                            <Image
                                src="/yamato_logo.png"
                                fill
                                alt="YAMATO Logo"
                                className="object-contain drop-shadow-[0_2px_8px_rgba(197,160,89,0.3)] group-hover:drop-shadow-[0_4px_12px_rgba(197,160,89,0.5)] transition-all duration-300"
                            />
                        </div>

                        {/* Company Name */}
                        <div className="font-serif text-lg md:text-xl font-medium tracking-[0.2em] ml-[0.2em]">
                            やまと不動産
                        </div>
                    </motion.div>
                </Link>


                {/* Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="z-50 p-2 text-current outline-none"
                >
                    <motion.div style={{ color: isOpen ? "#333" : textColor }}>
                        {isOpen ? <X size={32} strokeWidth={1} /> : <Menu size={32} strokeWidth={1} />}
                    </motion.div>
                </button>
            </motion.header>

            {/* Full Screen Menu */}
            <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: isOpen ? "0%" : "-100%" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 bg-y-off-white z-40 flex items-center justify-center text-y-charcoal"
            >
                <div className="text-center space-y-8">
                    <nav className="flex flex-col gap-6 text-2xl font-serif">
                        {["Concept", "Specs", "Lineup", "Works", "Company"].map((item) => (
                            <Link key={item} href={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="hover:text-y-gold transition-colors block">
                                {item}
                            </Link>
                        ))}
                    </nav>
                    <div className="pt-12 border-t border-y-charcoal/10 w-full max-w-xs mx-auto">
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-4 border border-y-charcoal hover:bg-y-charcoal hover:text-white transition-colors text-sm tracking-widest mb-4">
                            資料請求・お問い合わせ
                        </Link>
                        <Link href="/reservation" onClick={() => setIsOpen(false)} className="block py-4 bg-y-brown text-white hover:bg-y-gold transition-colors text-sm tracking-widest shadow-lg">
                            モデルハウス来場予約
                        </Link>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
