"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export function LandSearchCTA() {
    return (
        <section className="py-24 bg-y-charcoal text-white relative overflow-hidden">
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
                        <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                            理想の土地は、<br />
                            ネットにはない。
                        </h2>
                        <div className="w-16 h-px bg-nara-gold mb-8" />
                        <p className="font-serif text-gray-400 leading-loose mb-8">
                            やまと不動産は、奈良県内に150区画以上の自社分譲地を保有しています。<br />
                            その多くは、WEB公開前に決まってしまう希少な土地。<br />
                            まずは「会員限定」の自社物件リストをご覧ください。
                        </p>

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
