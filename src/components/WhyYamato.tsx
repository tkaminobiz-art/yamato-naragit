"use client";

import { motion } from "framer-motion";
import { Scale, MapPin, Wallet, Gauge } from "lucide-react";

const merits = [
    {
        icon: <MapPin size={32} />,
        title: "「土地難民」にならない",
        subtitle: "最強の未公開情報を独占",
        desc: "注文住宅の最大の壁は「土地探し」。やまと不動産は常時約150区画の自社分譲地を保有。一般市場に出る前の「鮮度の高い土地」で、土地探しの迷路から即座に脱出できます。",
        delay: 0.1
    },
    {
        icon: <Wallet size={32} />,
        title: "「予算オーバー」がない",
        subtitle: "地盤改良費を会社が負担",
        desc: "契約後に判明する地盤改良費（数十万〜百万）は家づくりの最大のリスク。私たちはこれを全額負担します。資金計画が狂う恐怖を排除した、最強の安心材料です。",
        delay: 0.2
    },
    {
        icon: <Gauge size={32} />,
        title: "「実物との落差」がない",
        subtitle: "ハイグレードな標準仕様",
        desc: "モデルハウスだけ豪華な仕様にはしません。クリナップ「ステディア」、ヘーベルパワーボード、MIRAIE…。最初からプロ仕様の設備が標準で、追加費用のない正当な家づくりを。",
        delay: 0.3
    },
    {
        icon: <Scale size={32} />,
        title: "「情緒」に流されない",
        subtitle: "資産価値×性能の最適解",
        desc: "雰囲気だけのデザインで選び、住み心地や土地で後悔しないために。「土地×性能×コスパ」のバランスを論理的に突き詰めた、賢い層のための選択肢です。",
        delay: 0.4
    }
];

export function WhyYamato() {
    return (
        <section className="py-16 md:py-24 lg:py-32 px-6 bg-y-off-white relative">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-nara-gold font-bold tracking-[0.2em] text-sm block mb-4">SMART CHOICE</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-nara-charcoal leading-relaxed">
                            なぜ、やまと不動産で建てるのか。<br />
                            <span className="text-2xl md:text-3xl mt-4 inline-block">失敗しないための「4つの根拠」</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Grid (Desktop) / Horizontal Scroll (Mobile) */}
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
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
                            <h3 className="text-xl font-serif font-bold text-nara-charcoal mb-2 text-center md:text-left">{item.title}</h3>
                            <div className="h-px w-12 bg-nara-gold mb-4 mx-auto md:mx-0" />
                            <h4 className="text-sm font-bold text-nara-gold mb-4 text-center md:text-left">{item.subtitle}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed font-serif text-justify md:text-left whitespace-normal">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
                {/* Scroll Hint for Mobile */}
                <div className="md:hidden flex justify-center gap-2 mt-2">
                    {merits.map((_, idx) => (
                        <div key={idx} className="w-1.5 h-1.5 rounded-full bg-nara-gold/30" />
                    ))}
                </div>
            </div>
        </section>
    );
}
