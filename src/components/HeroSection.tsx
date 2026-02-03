"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Calendar } from "lucide-react";

const images = [
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80", // Modern House with nature
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", // Living room with view
];

export function HeroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-y-charcoal">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${images[index]})` }}
                />
            </AnimatePresence>

            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="text-white text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="writing-vertical-rl text-4xl md:text-7xl font-serif tracking-[0.2em] h-[50vh] mx-auto leading-loose drop-shadow-2xl mt-12 md:mt-0"
                    >
                        奈良の刻を、住まう。
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 2 }}
                        className="mt-8 font-sans text-xs tracking-[0.3em] uppercase opacity-80"
                    >
                        Yamato Real Estate
                    </motion.p>

                    {/* Price Display - Modern Series Layout */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                        className="mt-8 mx-auto w-full max-w-4xl px-4"
                    >
                        <div className="bg-y-charcoal/60 md:bg-black/70 border border-white/20 backdrop-blur-sm p-6 md:p-8 relative overflow-hidden group hover:border-nara-gold/50 transition-colors duration-500 rounded-sm">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nara-gold to-transparent opacity-50" />
                            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-nara-gold/10 blur-3xl rounded-full pointer-events-none" />

                            <div className="text-center mb-6 md:mb-8 relative">
                                <h2 className="text-nara-gold text-base md:text-xl font-serif tracking-[0.4em] mb-2">花鳥風月シリーズ</h2>
                                <p className="text-white/60 text-[10px] md:text-xs tracking-widest uppercase hidden md:block">Kacho Fugetsu Series / All High-Grade Standard</p>
                            </div>

                            <div className="grid grid-cols-3 gap-2 md:gap-0 items-center justify-center relative z-10 max-w-3xl mx-auto divide-x divide-white/10 md:divide-none">
                                {/* Kyo */}
                                <div className="flex flex-col items-center relative md:border-r md:border-white/10 p-0 md:p-2">
                                    <span className="text-xl md:text-3xl font-serif text-white mb-1 md:mb-2">京</span>
                                    <div className="flex items-baseline gap-0.5 md:gap-1 text-white">
                                        <span className="text-2xl md:text-4xl font-medium tracking-tighter">2,180</span>
                                        <span className="text-[10px] md:text-sm opacity-70">万</span>
                                    </div>
                                    <span className="text-[9px] md:text-[10px] text-nara-gold mt-1 tracking-widest uppercase opacity-80">Standard</span>
                                </div>

                                {/* Hana */}
                                <div className="flex flex-col items-center relative md:border-r md:border-white/10 p-0 md:p-2">
                                    <span className="text-xl md:text-3xl font-serif text-white mb-1 md:mb-2">花</span>
                                    <div className="flex items-baseline gap-0.5 md:gap-1 text-white">
                                        <span className="text-2xl md:text-4xl font-medium tracking-tighter">2,380</span>
                                        <span className="text-[10px] md:text-sm opacity-70">万</span>
                                    </div>
                                    <span className="text-[9px] md:text-[10px] text-nara-gold mt-1 tracking-widest uppercase opacity-80">Luxury</span>
                                </div>

                                {/* Kaze */}
                                <div className="flex flex-col items-center p-0 md:p-2">
                                    <span className="text-xl md:text-3xl font-serif text-white mb-1 md:mb-2">風</span>
                                    <div className="flex items-baseline gap-0.5 md:gap-1 text-white">
                                        <span className="text-2xl md:text-4xl font-medium tracking-tighter">2,380</span>
                                        <span className="text-[10px] md:text-sm opacity-70">万</span>
                                    </div>
                                    <span className="text-[9px] md:text-[10px] text-nara-gold mt-1 tracking-widest uppercase opacity-80">Nature</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 3 }}
                        className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center pointer-events-auto"
                    >
                        <Link href="/contact" className="min-w-[240px] bg-nara-charcoal text-white border border-white/20 px-8 py-4 hover:bg-black hover:scale-105 transition-all duration-300 font-serif text-sm tracking-widest shadow-xl flex items-center justify-center gap-3">
                            <Mail size={18} />
                            資料請求・お問い合わせ
                        </Link>
                        <Link href="/reservation" className="min-w-[240px] bg-nara-gold text-white px-8 py-4 hover:bg-nara-brown hover:scale-105 transition-all duration-300 font-serif text-sm tracking-widest shadow-xl flex items-center justify-center gap-3">
                            <Calendar size={18} />
                            来場予約
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            >
                <span className="text-[10px] tracking-widest text-white/80">SCROLL</span>
                <div className="w-[1px] h-16 bg-white/50 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-white"
                        animate={{ top: ["0%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
