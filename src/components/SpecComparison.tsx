"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
    {
        category: "KITCHEN",
        label: "キッチン",
        standard: "木製キャビネット\n(腐食・カビリスクあり)",
        yamato: "ステンレスキャビネット\n(STEDIA標準)",
        highlight: true
    },
    {
        category: "WINDOW",
        label: "窓サッシ",
        standard: "アルミ樹脂複合\n(結露しやすい)",
        yamato: "オール樹脂サッシ\nAPW330 (結露ゼロ)",
        highlight: true
    },
    {
        category: "GLASS",
        label: "ガラス",
        standard: "ペアガラス",
        yamato: "トリプルガラス\n(世界トップレベルの断熱)",
        highlight: true
    },
    {
        category: "WALL",
        label: "外壁材",
        standard: "サイディング 14mm",
        yamato: "ヘーベルパワーボード 37mm\n(耐久性・断熱性2倍)",
        highlight: true
    },
    {
        category: "DAMPER",
        label: "制震装置",
        standard: "オプション (+50万円)",
        yamato: "住友ゴム MIRAIE\n標準装備",
        highlight: true
    },
    {
        category: "GROUND",
        label: "地盤改良費",
        standard: "お客様負担\n(平均 +80〜150万円)",
        yamato: "100% 会社負担\n(追加費用ゼロ)",
        highlight: true
    }
];

export function SpecComparison() {
    return (
        <section className="section-spacing px-4 md:px-6 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="block text-xs md:text-sm font-sans tracking-[0.3em] text-y-gold mb-4 font-bold">
                        VISUAL COMPARISON
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-y-charcoal leading-tight mb-6">
                        一目でわかる、圧倒的優位性。
                    </h2>
                    <p className="text-gray-500 font-serif text-sm md:text-base">
                        他社では「贅沢」とされるものが、ここでは「日常」です。
                    </p>
                </motion.div>

                {/* Desktop Table View */}
                <div className="hidden md:block relative">
                    {/* Header */}
                    <div className="grid grid-cols-10 gap-4 mb-4 text-sm font-bold tracking-widest text-gray-400 border-b border-gray-200 pb-4">
                        <div className="col-span-2 text-left pl-2">ITEM</div>
                        <div className="col-span-4 text-center">GENERAL STANDARD</div>
                        <div className="col-span-4 text-center text-nara-gold">YAMATO STANDARD</div>
                    </div>

                    {/* Rows */}
                    <div className="space-y-2">
                        {comparisonData.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group grid grid-cols-10 gap-4 items-center p-6 rounded-sm hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100 relative overflow-hidden"
                            >
                                {/* Category/Label */}
                                <div className="col-span-2 relative z-10">
                                    <span className="block text-[10px] text-gray-400 font-sans tracking-widest mb-1">
                                        {item.category}
                                    </span>
                                    <h3 className="text-lg font-serif font-bold text-gray-800">
                                        {item.label}
                                    </h3>
                                </div>

                                {/* General Standard (Greyed out) */}
                                <div className="col-span-4 text-center relative z-10 opacity-50 group-hover:opacity-40 transition-opacity">
                                    <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed font-serif">
                                        {item.standard}
                                    </p>
                                </div>

                                {/* Yamato Standard (Highlighted) */}
                                <div className="col-span-4 text-center relative z-10">
                                    <div className={`
                                        inline-block px-6 py-3 rounded-sm 
                                        ${item.highlight ? 'bg-nara-charcoal text-white shadow-lg group-hover:bg-nara-gold group-hover:scale-105' : 'bg-gray-100 text-gray-800'}
                                        transition-all duration-300
                                    `}>
                                        <p className="text-base font-bold whitespace-pre-line leading-relaxed font-serif flex items-center justify-center gap-2">
                                            {item.highlight && <Check size={14} className="w-4 h-4" />}
                                            {item.yamato}
                                        </p>
                                    </div>
                                </div>

                                {/* Active Line Indicator */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-nara-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-8">
                    {comparisonData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-gray-50 p-6 rounded-sm border border-gray-100"
                        >
                            <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
                                <h3 className="font-serif font-bold text-lg text-gray-800">
                                    {item.label}
                                </h3>
                                <span className="text-[10px] text-gray-400 font-sans tracking-widest">
                                    {item.category}
                                </span>
                            </div>

                            {/* Comparison Flex */}
                            <div className="flex flex-col gap-4">
                                {/* General */}
                                <div className="text-center opacity-60">
                                    <p className="text-xs text-gray-500 mb-1 font-bold">一般的な住宅</p>
                                    <p className="text-sm text-gray-700 font-serif leading-relaxed whitespace-pre-line">
                                        {item.standard}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <div className="flex justify-center text-gray-300">
                                    ↓
                                </div>

                                {/* Yamato */}
                                <div className={`
                                    text-center p-4 rounded-sm relative overflow-hidden
                                    ${item.highlight ? 'bg-nara-charcoal text-white' : 'bg-white border border-gray-200'}
                                `}>
                                    <div className="absolute -right-4 -top-4 w-12 h-12 bg-nara-gold rotate-45 opacity-20" />
                                    <p className="text-xs text-nara-gold mb-1 font-bold tracking-widest">YAMATO</p>
                                    <p className="text-base font-bold font-serif leading-relaxed whitespace-pre-line flex flex-col items-center gap-1">
                                        {item.yamato}
                                    </p>
                                    {item.highlight && (
                                        <div className="absolute bottom-2 right-2 text-nara-gold/50">
                                            <Check size={16} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-xs text-gray-400 font-serif">※ 比較内容は一般的な建売住宅・ハウスメーカーの標準仕様との比較です。</p>
                </div>
            </div>
        </section>
    );
}
