"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Mail, Calendar } from "lucide-react";

export function StickyCTA() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const threshold = 600; // Show after passing Hero roughly
        if (latest > threshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none"
                >
                    {/* PC View: Floating Panel */}
                    <div className="hidden md:flex justify-center pb-8 pointer-events-auto">
                        <div className="bg-y-charcoal/90 backdrop-blur-md text-white p-2 rounded-full shadow-2xl flex items-center gap-2 border border-white/20">
                            <Link href="/contact" className="flex items-center gap-2 px-6 py-3 rounded-full hover:bg-white/10 transition-colors group">
                                <Mail size={18} className="text-gray-300 group-hover:text-white" />
                                <span className="font-serif tracking-widest text-sm">資料請求・お問い合わせ</span>
                            </Link>
                            <div className="w-px h-8 bg-white/20" />
                            <Link href="/reservation" className="flex items-center gap-2 px-6 py-3 bg-y-gold rounded-full hover:bg-y-brown transition-colors text-white shadow-lg ml-2">
                                <Calendar size={18} />
                                <span className="font-serif tracking-widest text-sm font-bold">来場予約</span>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile View: Bottom Bar */}
                    <div className="md:hidden flex pointer-events-auto shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
                        <Link href="/contact" className="flex-1 bg-y-charcoal text-white py-4 flex flex-col items-center justify-center gap-1 active:bg-black transition-colors border-t border-white/10">
                            <Mail size={20} className="mb-1" />
                            <span className="text-[10px] font-serif tracking-widest">資料請求・お問い合わせ</span>
                        </Link>
                        <Link href="/reservation" className="flex-1 bg-y-gold text-white py-4 flex flex-col items-center justify-center gap-1 active:bg-y-brown transition-colors">
                            <Calendar size={20} className="mb-1" />
                            <span className="text-[10px] font-serif tracking-widest font-bold">来場予約</span>
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
