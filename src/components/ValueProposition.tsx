"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Shield, Zap, Droplets, Hammer, Bath } from "lucide-react";

export function ValueProposition() {
    return (
        <section className="section-spacing px-6 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                {/* 1. Narrative Intro - "Gap-Free" & "Risk Reversal" */}
                <div className="flex flex-col lg:flex-row items-start gap-16 mb-24">
                    <div className="lg:w-1/2 lg:sticky lg:top-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-nara-charcoal"
                        >
                            <span className="block text-xs font-sans tracking-[0.2em] text-nara-gold mb-6 font-bold">OUR PHILOSOPHY</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-balance leading-tight heading-spacing">
                                「オプション」という言葉をなくしました。
                            </h2>
                            <div className="max-w-prose">
                                <p className="font-serif leading-relaxed text-gray-700 paragraph-spacing">
                                    一般的なハウスメーカーでは、契約後に「あれもオプション、これもオプション」と追加費用が積み上がっていくことが常識とされています。
                                </p>

                                <p className="font-serif text-lg font-bold text-nara-charcoal paragraph-spacing">
                                    しかし、やまと不動産は違います。
                                </p>

                                <p className="font-serif leading-relaxed text-gray-700 paragraph-spacing">
                                    私たちは、プロが選ぶ「最高グレードの設備」を最初から標準にしました。ステンレスキッチンの「ステディア」、制震ダンパー「MIRAIE」、そして37mm厚の「ヘーベルパワーボード」。
                                </p>

                                <p className="font-serif leading-relaxed text-gray-700 paragraph-spacing">
                                    これら全てが、追加費用 0円。さらに、通常はお客様負担となる<span className="text-nara-gold font-bold">「地盤改良費」</span>までも会社が負担します。
                                </p>

                                <p className="font-serif leading-relaxed text-gray-700 mb-8">
                                    これが、私たちの約束する「最強の標準仕様」です。
                                </p>
                            </div>
                            <Link href="/specs" className="w-full md:w-auto justify-center inline-flex items-center gap-2 bg-[#333333] text-white px-8 py-4 rounded-sm hover:bg-black transition-all shadow-xl group border border-transparent hover:border-nara-gold">
                                <span className="font-serif tracking-widest">ハイグレード標準仕様を見る</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* 2. The 5 High-Grade Pillars (Brand Specifics) */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8 p-6 bg-nara-gold/10 border border-nara-gold/30 rounded-sm"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-nara-gold text-white p-2 rounded-full">
                                    <Hammer size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif font-bold text-nara-charcoal mb-2">最強の保証：地盤改良費 100%会社負担</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        調査後に発生しがちな数十万〜百万円の追加コストを、やまと不動産はいただきません。予算オーバーの不安を完全に排除します。
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-4">
                            {/* Kitchen - Stedia */}
                            <FeatureCard
                                icon={<Droplets size={20} />}
                                brand="クリナップ「ステディア」"
                                desc="見えないキャビネット内部までステンレス。カビやニオイを寄せ付けないプロ仕様の耐久性。"
                                color="border-gray-400"
                            />
                            {/* Seismic - MIRAIE */}
                            <FeatureCard
                                icon={<Shield size={20} />}
                                brand="住友ゴム「MIRAIE」"
                                desc="耐震等級3に加え、繰り返す地震波を吸収する制震ダンパーを標準装備。家族の命を守る要。"
                                color="border-nara-charcoal"
                            />
                            {/* Exterior - Hebel */}
                            <FeatureCard
                                icon={<Hammer size={20} />}
                                brand="ヘーベルパワーボード (37mm)"
                                desc="一般的なサイディングの倍以上の厚み。断熱・遮音・防火に優れた、要塞のような外壁材。"
                                color="border-stone-400"
                            />
                            {/* Insulation - Aqua Foam */}
                            <FeatureCard
                                icon={<Zap size={20} />}
                                brand="日本アクア「アクアフォーム」"
                                desc="現場発泡で隙間なく施工。魔法瓶のような気密性で、冬暖かく夏涼しい快適空間を実現。"
                                color="border-blue-400"
                            />
                            {/* Bath - Sazana */}
                            <FeatureCard
                                icon={<Bath size={20} />}
                                brand="TOTO「サザナ」1.25坪"
                                desc="通常1坪（1616）より広い1.25坪（1620）を選択可能。子供と一緒でもゆったり入れる贅沢仕様。"
                                color="border-teal-500"
                            />
                        </div>
                    </div>
                </div>

                {/* 3. Next Steps Navigation */}
                <div className="border-t border-gray-100 pt-16">
                    <p className="text-center font-serif text-gray-500 mb-12 tracking-widest">- NEXT STEP -</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Link href="/lineup" className="group relative h-64 overflow-hidden rounded-sm shadow-md block">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                <span className="text-nara-gold tracking-[0.2em] text-xs mb-2">PRODUCT LINEUP</span>
                                <h3 className="text-2xl font-serif">商品ラインナップ</h3>
                                <ArrowRight className="mt-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300" />
                            </div>
                        </Link>
                        <Link href="/works" className="group relative h-64 overflow-hidden rounded-sm shadow-md block">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                <span className="text-nara-gold tracking-[0.2em] text-xs mb-2">OUR WORKS</span>
                                <h3 className="text-2xl font-serif">施工事例</h3>
                                <ArrowRight className="mt-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, brand, desc, color }: { icon: any, brand: string, desc: string, color: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`bg-white p-5 rounded-sm border-l-4 ${color} shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow`}
        >
            <div className="text-gray-400 mt-1">{icon}</div>
            <div>
                <h4 className="text-lg font-serif font-bold text-nara-charcoal mb-1">{brand}</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-serif">{desc}</p>
            </div>
        </motion.div>
    );
}
