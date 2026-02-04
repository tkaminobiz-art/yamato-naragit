"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export function LandSearchCTA() {
    return (
        <section className="section-spacing bg-y-charcoal text-white relative overflow-hidden">
            {/* Background Map/Texture Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] mix-blend-overlay" />
            </div>

            <div className="container mx-auto max-w-6xl px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-nara-gold text-xs tracking-[0.2em] font-sans font-bold block mb-4">LAND INFORMATION</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-balance leading-tight heading-spacing text-auto-phrase">
                            <span className="ib">理想の土地は、</span><span className="ib">ネットにはない。</span>
                        </h2>
                        <div className="w-16 h-px bg-nara-gold mb-6 md:mb-8" />
                        <div className="max-w-prose text-auto-phrase">
                            <p className="font-serif text-gray-300 leading-relaxed paragraph-spacing">
                                <span className="ib">やまと不動産は、</span>奈良県内に150区画以上の<span className="ib">自社分譲地を</span><span className="ib">保有しています。</span>
                            </p>
                            <p className="font-serif text-gray-300 leading-relaxed mb-8">
                                <span className="ib">その多くは、</span>WEB公開前に決まってしまう<span className="ib">希少な土地。</span><span className="ib">まずは</span>「会員限定」の<span className="ib">自社物件リストを</span><span className="ib">ご覧ください。</span>
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/subdivision" className="group inline-flex items-center justify-center gap-3 bg-white text-y-charcoal px-8 py-4 rounded-sm hover:bg-nara-gold hover:text-white transition-all duration-300">
                                <MapPin size={18} />
                                <span className="font-serif tracking-widest text-sm font-bold">自社分譲地を見る</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Visual / Abstract Card */}
                <div className="md:w-1/2 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] w-full rounded-sm overflow-hidden group border border-white/10"
                    >
                        {/* Image */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542367523-2804b4d61899?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-y-charcoal/40 group-hover:bg-y-charcoal/20 transition-colors" />

                        {/* Overlay Text */}
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-sm shadow-xl">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1 font-sans tracking-widest">LATEST UPDATE</p>
                                        <p className="text-xl font-serif font-bold text-y-charcoal">学園前・登美ヶ丘エリア</p>
                                    </div>
                                    <span className="text-nara-gold font-bold font-serif text-lg">公開中</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
