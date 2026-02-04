"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Map, Home } from "lucide-react";

export function LandSearchCTA() {
    return (
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden text-white">
            {/* Background Image with Heavy Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: Copywriting */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div>
                        <span className="text-nara-gold text-xs tracking-[0.3em] font-serif font-bold block mb-4">LAND INFORMATION</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-balance leading-tight tracking-wide">
                            理想の土地は、<br />
                            <span className="text-gray-400">ここにある。</span>
                        </h2>
                    </div>

                    <div className="space-y-6 font-serif text-gray-300 leading-loose text-sm md:text-base max-w-lg">
                        <p>
                            良い土地情報が、ポータルサイトに出回ることは<br className="hidden md:inline" />
                            滅多にありません。なぜなら、人気の土地は<br className="hidden md:inline" />
                            <span className="text-white border-b border-nara-gold pb-1">「自社分譲地」</span>として直接販売されるから。
                        </p>
                        <p>
                            やまと不動産は、奈良県内に<span className="text-white text-lg mx-1">150</span>区画以上の<br />
                            自社保有地を展開しています。仲介手数料もかかりません。
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link
                            href="/subdivision"
                            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-transparent border border-white/30 overflow-hidden hover:border-nara-gold/50 transition-colors duration-500"
                        >
                            <span className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            <Map className="w-5 h-5 text-nara-gold z-10" />
                            <span className="font-serif text-white tracking-widest z-10 group-hover:text-nara-gold transition-colors">
                                分譲地一覧を見る
                            </span>
                            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:text-nara-gold transition-all z-10" />
                        </Link>
                    </div>
                </motion.div>

                {/* Right: Visual "Direct Sales" Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Glass Card */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-sm border border-white/10 p-8 flex flex-col items-center justify-center group overflow-hidden">

                        {/* Background blurred map/list hint */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 blur-sm group-hover:scale-110 transition-transform duration-1000" />

                        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                            <div className="w-16 h-16 rounded-full bg-[#0a0a0a] border border-nara-gold/30 flex items-center justify-center shadow-2xl group-hover:border-nara-gold transition-colors duration-500">
                                <Home className="w-6 h-6 text-nara-gold" />
                            </div>

                            <div>
                                <p className="text-nara-gold text-xs tracking-[0.2em] mb-2 font-serif">DIRECT SALES</p>
                                <h3 className="text-2xl font-serif text-white mb-2">自社分譲地リスト</h3>
                                <p className="text-gray-400 text-xs font-serif tracking-in-expand">
                                    売主直売だから、仲介手数料 0円。
                                </p>
                            </div>

                            <div className="flex gap-2 text-xs text-gray-500 font-sans tracking-widest border-t border-white/10 pt-6 mt-2">
                                <span>GAKUEN-MAE</span>
                                <span>•</span>
                                <span>TOMIGAOKA</span>
                                <span>•</span>
                                <span>AYAMEIKE</span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-nara-gold/20" />
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-nara-gold/20" />
                </motion.div>

            </div>
        </section>
    );
}
