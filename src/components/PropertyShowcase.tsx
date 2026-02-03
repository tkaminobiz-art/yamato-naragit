"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export function PropertyShowcase() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect for the background image
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-y-off-white">
            {/* Section Header */}
            <div className="container mx-auto px-6 mb-16 flex items-end justify-between">
                <div>
                    <span className="text-xs font-sans tracking-[0.2em] text-y-gold block mb-2">WORKS</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-y-charcoal">施工事例</h2>
                </div>
                <Link href="/works" className="hidden md:block text-xs font-sans tracking-widest border-b border-y-gold pb-1 hover:text-y-gold transition-colors">
                    VIEW ALL
                </Link>
            </div>

            {/* Immersive Card */}
            <div className="w-full h-[80vh] relative overflow-hidden group">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 bg-cover bg-center"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1.05 }}
                    transition={{ duration: 10 }}
                >
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80')" }} // Minimalist white house
                    />
                </motion.div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8 md:p-16">
                    <div className="text-white transform group-hover:-translate-y-2 transition-transform duration-500">
                        <div className="text-xs font-sans tracking-widest mb-2 opacity-80">NARA CITY</div>
                        <h3 className="text-4xl md:text-6xl font-serif mb-4">白景の邸宅</h3>
                        <Link href="/works" className="inline-block border border-white/30 px-6 py-3 hover:bg-white hover:text-y-charcoal transition-colors duration-300 text-sm tracking-widest backdrop-blur-sm">
                            VIEW PROJECT
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
