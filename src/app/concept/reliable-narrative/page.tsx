"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { ArrowRight, Heart, Users, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ReliableNarrativePage() {
    return (
        <div className="bg-[#faf9f7] min-h-screen text-nara-charcoal font-serif selection:bg-y-brown selection:text-white">
            <Header />

            {/* Hero: Human Connection */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="md:w-1/2 relative z-10"
                        >
                            <p className="text-y-brown font-bold tracking-[0.3em] text-xs mb-8 uppercase">Our Promise</p>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                                家を売るな。<br />
                                <span className="text-y-brown">信頼を、築け。</span>
                            </h1>
                            <p className="text-lg leading-relaxed text-gray-700 mb-8 text-justify font-medium">
                                私たちは、不動産屋である前に、<br className="hidden md:inline" />
                                あなたの人生のパートナーでありたい。<br />
                                だからこそ、不都合な真実も隠さずに伝えます。<br />
                                「売れればいい」という仕事は、二度としません。
                            </p>
                            <div className="flex items-center gap-4">
                                <Link href="/contact" className="group inline-flex items-center gap-2 bg-y-charcoal text-white px-8 py-4 rounded-full hover:bg-y-brown transition-all duration-300">
                                    <span className="tracking-widest text-sm font-bold">スタッフと話す</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="md:w-1/2 relative"
                        >
                            <div className="aspect-[3/4] relative rounded-sm overflow-hidden shadow-2xl">
                                {/* Image seeking: Trustworthy Japanese businessman, sincere smile, casual business attire */}
                                <Image
                                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
                                    alt="Senior Managing Director Kobayashi"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-8 left-8 text-white">
                                    <p className="text-xs tracking-widest opacity-80 mb-1">SENIOR MANAGING DIRECTOR</p>
                                    <p className="text-2xl font-bold">小林 専務</p>
                                </div>
                            </div>
                            {/* Decorative Quote */}
                            <div className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 shadow-xl rounded-sm max-w-xs hidden md:block border-l-4 border-y-brown">
                                <MessageSquareQuote className="text-y-brown mb-2 w-6 h-6" />
                                <p className="text-sm text-gray-600 italic">
                                    「お客様が10年後に笑顔でいられるか。判断基準は常にそこにあるべきです。」
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Staff Voices section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-y-brown font-bold tracking-[0.2em] text-xs block mb-4">THE TEAM</span>
                        <h2 className="text-3xl md:text-4xl font-bold">現場を支える、実直なプロたち。</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                        {/* Staff 1: Nishiguchi */}
                        <div className="flex flex-col gap-6">
                            <div className="aspect-square relative rounded-full overflow-hidden w-32 h-32 mx-auto md:mx-0 border-4 border-[#faf9f7]">
                                <Image
                                    src="https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80"
                                    alt="Staff Nishiguchi"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold mb-1">西口 <span className="text-sm font-normal text-gray-500">NISHIGUCHI</span></h3>
                                <p className="text-xs text-y-brown font-bold tracking-widest mb-4">SALES / PLANNER</p>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    「家を売る仕事ではありません。お客様の不安を取り除く仕事だと思っています。地盤改良費の¥0負担も、そんな私たちの想いの形です。」
                                </p>
                            </div>
                        </div>

                        {/* Staff 2: Kurino */}
                        <div className="flex flex-col gap-6">
                            <div className="aspect-square relative rounded-full overflow-hidden w-32 h-32 mx-auto md:mx-0 border-4 border-[#faf9f7]">
                                <Image
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                                    alt="Staff Kurino"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold mb-1">栗野 <span className="text-sm font-normal text-gray-500">KURINO</span></h3>
                                <p className="text-xs text-y-brown font-bold tracking-widest mb-4">CONSTRUCTION MANAGER</p>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    「図面には描かれない『現場の常識』があります。見えない壁の中、基礎の裏側。そこに一切の手抜きを許さないのが、やまと品質です。」
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Price as a Promise */}
            <section className="py-24 bg-[#faf9f7]">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="mb-12">
                        <Heart className="w-12 h-12 text-y-brown mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">3,060万円は、「誠意」の証。</h2>
                        <p className="text-gray-600 leading-relaxed text-lg text-justify md:text-center">
                            なぜ、すべての標準仕様を公開し、総額を表示するのか。<br />
                            それは、「後出しじゃんけん」をしたくないからです。<br />
                            契約後に「あれも別料金、これも別料金」と積み上がる見積書で、<br />
                            お客様を絶望させたくないからです。
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 inline-block text-left w-full max-w-2xl mx-auto relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-y-brown" />
                        <p className="text-xs font-bold tracking-widest text-gray-400 mb-6">TRANSPARENCY PROMISE</p>

                        <div className="space-y-4">
                            <div className="flex justify-between items-baseline border-b border-gray-100 pb-2">
                                <span className="font-bold text-nara-charcoal">土地（矢田）</span>
                                <span className="font-bold text-xl">780<span className="text-sm font-normal">万円</span></span>
                            </div>
                            <div className="flex justify-between items-baseline border-b border-gray-100 pb-2">
                                <span className="font-bold text-nara-charcoal">建物（花・風）</span>
                                <span className="font-bold text-xl">2,280<span className="text-sm font-normal">万円</span></span>
                            </div>
                            <div className="flex justify-between items-baseline border-b border-gray-100 pb-2 text-gray-500 text-sm">
                                <span>地盤改良費</span>
                                <span className="font-bold text-y-brown">会社負担 (¥0)</span>
                            </div>
                            <div className="flex justify-between items-baseline pt-4">
                                <span className="font-bold text-nara-charcoal text-lg">総額（税込）</span>
                                <span className="font-bold text-4xl text-y-brown">3,060<span className="text-sm font-normal text-gray-500">万円</span></span>
                            </div>
                        </div>
                        <p className="mt-6 text-xs text-gray-400 text-center">
                            ※ここからの不当な値上げは一切ありません。<br />
                            これが、私たちの精一杯の、嘘のない価格です。
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA: Meet the People */}
            <section className="py-24 bg-y-charcoal text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        まずは、私たちに会いに来てください。
                    </h2>
                    <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                        家を売るつもりはありません。<br />
                        あなたの理想の暮らしについて、ただ正直に話し合いましょう。
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link href="/contact" className="inline-flex justify-center items-center gap-3 bg-y-brown text-white px-8 py-4 rounded-full font-bold tracking-widest hover:bg-white hover:text-y-charcoal transition-colors">
                            <Users size={18} />
                            スタッフに相談する（無料）
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
