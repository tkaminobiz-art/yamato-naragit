"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
// Remove Footer import as it's in layout
import { Check, ArrowRight, Calculator, MapPin, Home } from "lucide-react";
import Link from "next/link";
import { HighGradeShowcase } from "@/components/HighGradeShowcase";
import { SpecComparison } from "@/components/SpecComparison";
import { LandSearchCTA } from "@/components/LandSearchCTA";

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

            {/* High Grade Showcase: Visual Proof */}
            <div className="bg-white pt-12">
                <div className="text-center mb-0">
                    <span className="text-nara-charcoal font-bold tracking-[0.2em] text-xs block mb-4">QUALITY ASSURANCE</span>
                    <h3 className="text-2xl md:text-3xl font-bold">価格は抑えても、<br />質は最高峰。</h3>
                    <p className="text-gray-500 mt-4 text-sm">3,060万円の中に、これら全てが含まれています。</p>
                </div>
                <HighGradeShowcase />
            </div>

            {/* Spec Comparison: Logical Proof */}
            <SpecComparison />

            {/* CTA: Action */}
            <LandSearchCTA />

        </div>
    );
}
