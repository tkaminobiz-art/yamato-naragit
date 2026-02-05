"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, ArrowRight, Calculator, MapPin, Home } from "lucide-react";
import Link from "next/link";

export default function SmartRationalismPage() {
    return (
        <div className="bg-white min-h-screen text-nara-charcoal font-serif">
            <Header />

            {/* Hero Section: The Equation */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-slate-50">
                <div className="container mx-auto max-w-5xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-nara-gold font-bold tracking-[0.3em] text-center mb-8"
                    >
                        SMART RATIONALISM
                    </motion.p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
                        {/* Land */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-slate-200 w-full md:w-auto"
                        >
                            <p className="text-gray-500 text-xs tracking-widest mb-2">LAND (YATA)</p>
                            <p className="text-3xl md:text-4xl font-bold">780<span className="text-sm font-normal ml-1">万円</span></p>
                        </motion.div>

                        <div className="text-2xl text-gray-300 font-light">+</div>

                        {/* Building */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-slate-200 w-full md:w-auto"
                        >
                            <p className="text-gray-500 text-xs tracking-widest mb-2">BUILDING (HANA/KAZE)</p>
                            <p className="text-3xl md:text-4xl font-bold">2,280<span className="text-sm font-normal ml-1">万円</span></p>
                        </motion.div>

                        <div className="text-2xl text-gray-300 font-light">=</div>

                        {/* Total */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1.1 }}
                            transition={{ delay: 0.8, type: "spring" }}
                            className="bg-nara-charcoal text-white p-8 md:p-10 rounded-sm shadow-xl w-full md:w-auto relative"
                        >
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-nara-gold text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest whitespace-nowrap">
                                TAX INCLUDED
                            </div>
                            <p className="text-nara-gold text-xs tracking-widest mb-2">TOTAL PRICE</p>
                            <p className="text-5xl md:text-6xl font-bold tracking-tight">3,060<span className="text-base font-normal ml-1 text-gray-400">万円</span></p>
                            <p className="text-[10px] text-gray-500 mt-2 text-center">※ 土地＋建物＋標準付帯工事＋消費税</p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-center mt-12 md:mt-16 max-w-2xl mx-auto"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                            これ以上の「賢い選択」が、<br />他にあるでしょうか。
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            あなたの予算内で、最高等級の耐震性、プロ仕様のキッチン、そして将来の資産価値を守る土地が手に入ります。
                            「なんとなく」で選ぶ家づくりは、もう終わりにしませんか。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Inclusions Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-nara-gold font-bold tracking-widest text-xs mb-4 block">ALL INCLUDED</span>
                            <h3 className="text-3xl font-bold mb-6">3,060万円の中に、<br />すべて含まれています。</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                後から追加費用が発生する「オプション商法」とは無縁です。
                                以下のハイグレード設備も、地盤改良費も、すべてこの価格に含まれています。
                            </p>
                            <Link href="/specs" className="inline-flex items-center gap-2 text-nara-charcoal border-b border-nara-charcoal pb-1 font-bold hover:text-nara-gold hover:border-nara-gold transition-colors">
                                詳細スペックを見る <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: "地盤改良工事費 ¥0", desc: "会社が全額負担", icon: "💎" },
                                { name: "クリナップ ステディア", desc: "ステンレスキャビネット", icon: "🍽️" },
                                { name: "MIRAIE 制震", desc: "住友ゴム工業", icon: "🛡️" },
                                { name: "ヘーベルパワーボード", desc: "37mm厚 断熱・遮音", icon: "🧱" },
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-slate-50 rounded-sm border border-slate-100 flex flex-col gap-3">
                                    <div className="text-2xl">{item.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-nara-charcoal">{item.name}</h4>
                                        <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-nara-charcoal text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        今週末、<span className="text-nara-gold">矢田の現地</span>で<br />
                        その「答え」を確かめる。
                    </h2>
                    <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                        論理的に考えれば、これ以外の選択肢はないはずです。
                        まずは現地を見て、その広さと可能性を体感してください。
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link href="/contact" className="inline-flex justify-center items-center gap-3 bg-nara-gold text-white px-8 py-4 rounded-sm font-bold tracking-widest hover:bg-white hover:text-nara-charcoal transition-colors">
                            <Home size={18} />
                            来場予約（矢田）
                        </Link>
                        <Link href="/subdivision" className="inline-flex justify-center items-center gap-3 bg-transparent border border-white/30 text-white px-8 py-4 rounded-sm font-bold tracking-widest hover:bg-white hover:text-nara-charcoal transition-colors">
                            <MapPin size={18} />
                            分譲地情報を見る
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
