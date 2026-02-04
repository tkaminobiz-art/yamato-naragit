"use client";

import { motion } from "framer-motion";
import { Scale, MapPin, Wallet, Gauge } from "lucide-react";

const merits = [
    {
        icon: <MapPin size={32} />,
        title: "「土地難民」にならない",
        desc: "常時150区画の自社分譲地を保有。土地探しの迷路から即座に脱出。",
        delay: 0.1
    },
    {
        icon: <Wallet size={32} />,
        title: "「予算オーバー」がない",
        desc: "地盤改良費を全額会社負担。資金計画が狂う恐怖を排除。",
        delay: 0.2
    },
    {
        icon: <Gauge size={32} />,
        title: "「実物との落差」がない",
        desc: "最初からプロ仕様の設備が標準。追加費用のない正当な家づくり。",
        delay: 0.3
    },
    {
        icon: <Scale size={32} />,
        title: "「情緒」に流されない",
        desc: "土地・性能・コスパのバランスを論理的に追求した選択肢。",
        delay: 0.4
    }
];

export function WhyYamato() {
    return (
        <section className="section-spacing px-6 bg-y-off-white relative">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-nara-gold font-bold tracking-[0.2em] text-sm block mb-4">SMART CHOICE</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-nara-charcoal text-balance leading-tight">
                            なぜ、やまと不動産で建てるのか。
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 mt-4 md:mt-6 font-serif">
                            失敗しないための「4つの根拠」
                        </p>
                    </motion.div>
                </div>

                {/* Grid (Desktop) / Horizontal Scroll (Mobile) */}
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
                    {merits.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            className="flex-shrink-0 w-[85vw] md:w-auto snap-center bg-white p-8 rounded-sm shadow-lg border-t-4 border-nara-gold hover:translate-y-[-5px] transition-transform duration-300"
                        >
                            <div className="text-nara-charcoal mb-6 bg-nara-paper w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-serif font-bold text-nara-charcoal mb-4 text-center md:text-left leading-snug">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-serif text-center md:text-left">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Scroll Hint for Mobile */}
                <div className="md:hidden flex justify-center gap-2 mt-4">
                    {merits.map((_, idx) => (
                        <div key={idx} className="w-1.5 h-1.5 rounded-full bg-nara-gold/30" />
                    ))}
                </div>
            </div>
        </section>
    );
}
