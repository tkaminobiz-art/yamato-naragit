"use client";

import { motion } from "framer-motion";
import { Scale, MapPin, Wallet, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function WhyYamato() {
    return (
        <section className="section-spacing px-6 bg-y-off-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">

                {/* Header */}
                <div className="max-w-3xl mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-nara-gold font-bold tracking-[0.2em] text-sm block mb-6">SMART CHOICE</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-y-charcoal leading-tight mb-8">
                            <span className="ib">「賢い選択」の</span><span className="ib">正体。</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 font-serif leading-relaxed text-balance">
                            家づくりにおける最大の恐怖は<span className="ib">「知識不足による損」です。</span><br />
                            やまと不動産は、その不透明なブラックボックスを<br className="hidden md:inline" />
                            <span className="text-nara-charcoal font-bold border-b-2 border-nara-gold/30">圧倒的な透明性と実利</span>で塗り替えます。
                        </p>
                    </motion.div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

                    {/* Card 1: Land (Large) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 bg-white rounded-sm p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow duration-500"
                    >
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6 text-nara-gold">
                                <MapPin className="w-6 h-6" />
                                <span className="text-xs font-bold tracking-widest">ACCESS TO SECRET</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-nara-charcoal mb-4">
                                土地難民からの救済。<br />
                                鮮度の高い<span className="text-nara-gold">「自社地盤」</span>への特権。
                            </h3>
                            <p className="text-gray-600 font-serif leading-relaxed mb-8 max-w-xl">
                                「良い土地はネットに出る前に売れる」のが不動産業界の真実です。
                                私たちは奈良・京都エリアに常時150区画以上の自社分譲地を保有。
                                ポータルサイトの「残り物」ではなく、鮮度の高い情報に直接アクセスできます。
                            </p>
                            <Link href="/subdivision" className="inline-flex items-center text-sm font-bold tracking-widest text-nara-charcoal border-b border-nara-charcoal pb-1 hover:text-nara-gold hover:border-nara-gold transition-colors">
                                分譲地一覧を見る
                            </Link>
                        </div>
                        <div className="absolute right-0 bottom-0 w-2/3 h-full bg-[url('https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mask-gradient-left group-hover:scale-105 transition-transform duration-700" />
                    </motion.div>

                    {/* Card 2: Risk (Vertical) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-nara-charcoal text-white rounded-sm p-8 md:p-10 shadow-lg relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6 text-nara-gold">
                                <Wallet className="w-6 h-6" />
                                <span className="text-xs font-bold tracking-widest">ZERO RISK</span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">
                                地盤改良費の<br /><span className="text-4xl md:text-5xl text-nara-gold">¥0</span> 宣言
                            </h3>
                            <p className="text-gray-400 font-serif leading-relaxed text-sm">
                                契約後に判明し、数百万単位で資金計画を狂わせる「予測不能な地盤改良費」。
                                ヤマト住建はこのリスクを会社が100%負担。
                                顧客にとって最強のリスクリバーサルをお約束します。
                            </p>
                        </div>
                        <div className="absolute -bottom-4 -right-4 text-white/5">
                            <ShieldCheck size={200} strokeWidth={0.5} />
                        </div>
                    </motion.div>

                    {/* Card 3: Standard (Vertical) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-sm p-8 md:p-10 shadow-sm border border-gray-100 group hover:border-nara-gold/30 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-6 text-nara-gold">
                            <CheckCircle2 className="w-6 h-6" />
                            <span className="text-xs font-bold tracking-widest">TRUE STANDARD</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-nara-charcoal mb-4">
                            モデルハウスの<br />「嘘」を暴く。
                        </h3>
                        <p className="text-gray-600 font-serif leading-relaxed text-sm mb-6">
                            「契約してから価格が跳ね上がる」不信感を一掃。
                            プロが選んだ最高グレードを最初から標準装備。
                        </p>
                        <ul className="space-y-3 font-serif text-sm font-bold text-nara-charcoal">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-nara-gold rounded-full" />
                                クリナップ「ステディア」
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-nara-gold rounded-full" />
                                ヘーベルパワーボード 37mm
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-nara-gold rounded-full" />
                                制震ダンパー MIRAIE
                            </li>
                        </ul>
                    </motion.div>

                    {/* Card 4: Logic (Large) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-2 bg-gray-50 rounded-sm p-8 md:p-12 relative overflow-hidden group border border-gray-100"
                    >
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-6 text-nara-gold">
                                    <Scale className="w-6 h-6" />
                                    <span className="text-xs font-bold tracking-widest">LOGICAL CHOICE</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-nara-charcoal mb-4">
                                    「情緒」に溺れない資産価値。<br />
                                    論理的な最適解。
                                </h3>
                                <p className="text-gray-600 font-serif leading-relaxed">
                                    「なんとなく素敵」な雰囲気だけで家を選んでいませんか？
                                    私たちは「土地 × 性能 × コスパ」の三権分立による、数字と理屈で証明できる家づくりを提案します。
                                    30代の子育て世代が将来の資産価値を守るための、最も賢い防衛策です。
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 aspect-square bg-white rounded-full border border-gray-200 flex items-center justify-center relative p-8">
                                <div className="text-center font-serif text-xs text-gray-400 absolute top-4">LAND</div>
                                <div className="text-center font-serif text-xs text-gray-400 absolute bottom-4 right-8">COST</div>
                                <div className="text-center font-serif text-xs text-gray-400 absolute bottom-4 left-8">QUALITY</div>
                                <div className="w-16 h-16 bg-nara-charcoal rounded-full flex items-center justify-center text-nara-gold font-bold shadow-xl z-10">
                                    CORE
                                </div>
                                <div className="absolute inset-0 border-[0.5px] border-nara-gold/30 rounded-full scale-75" />
                                <div className="absolute inset-0 border-[0.5px] border-nara-gold/10 rounded-full scale-50" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
