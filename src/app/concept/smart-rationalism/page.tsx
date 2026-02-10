"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { ArrowRight, MapPin, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SmartCalculator } from "@/components/SmartCalculator";

export default function SmartRationalismPage() {
    return (
        <div className="bg-[#faf9f7] min-h-screen text-[#333] font-sans antialiased selection:bg-[#8c8070] selection:text-white">
            <Header />

            {/* Hero Section: Premium Cinematic */}
            <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80"
                    alt="Bright Japanese Living Room"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient Overlay for Text Readability & Mood */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-white/10 to-white/90"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 text-center max-w-4xl mx-auto px-6"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/40 text-[#8c8070] text-xs font-bold tracking-[0.2em] mb-8 shadow-sm">
                        YAMATO REAL ESTATE
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-8 text-[#2a2a2a] drop-shadow-sm">
                        我慢もしない。<br />
                        無理もしない。<br />
                        <span className="text-3xl md:text-4xl block mt-6 text-[#8c8070]">それが、私たち家族の答え。</span>
                    </h1>
                    <p className="text-gray-700 text-lg leading-loose mb-10 max-w-2xl mx-auto font-medium">
                        広いキッチンも、明るいリビングも、将来の教育費も。<br className="hidden md:block" />
                        「場所」を少し変えるだけで、すべてが叶う賢い選択があります。
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="#concept" className="inline-flex items-center gap-3 bg-[#8c8070] text-white px-10 py-4 rounded-full shadow-lg hover:shadow-[#8c8070]/40 transition-all font-medium tracking-wide">
                            3,060万円の理由を知る <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* CONCEPT: Bento Grid Layout */}
            <section id="concept" className="py-32 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-20">
                        <span className="text-[#8c8070] text-sm font-bold tracking-widest uppercase mb-4 block">Yamato’s Proposal</span>
                        <h2 className="text-4xl font-serif text-[#2a2a2a] mb-6">「いい家」と「将来の安心」<br />その両立を叶える方程式</h2>
                        <div className="w-20 h-1 bg-[#8c8070] mx-auto rounded-full opacity-30"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                        {/* Card 1: The Problem (Span 3) */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-3 bg-white rounded-3xl p-10 shadow-xl shadow-gray-100 flex flex-col md:flex-row items-center justify-between gap-10 border border-gray-100"
                        >
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-[#2a2a2a] mb-4">多くの人が抱える「板挟み」</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    「素敵な家に住みたい」という理想。<br />
                                    「ローン返済に追われたくない」という現実。<br />
                                    この2つの間で揺れ動き、結局どちらかを諦めてしまう家族があまりにも多いのです。
                                </p>
                            </div>
                            <div className="flex-1 w-full relative h-48 rounded-2xl overflow-hidden shadow-inner">
                                <Image src="https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&q=80" fill alt="Conflict" className="object-cover opacity-80 hover:scale-105 transition-transform duration-700" />
                            </div>
                        </motion.div>

                        {/* Card 2: Land (Span 1) */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-100 border border-gray-100 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <MapPin size={100} className="text-[#8c8070]" />
                            </div>
                            <div className="w-14 h-14 bg-[#f0eee9] rounded-2xl flex items-center justify-center mb-6 text-[#8c8070]">
                                <MapPin size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2a2a2a] mb-2">土地：780万円</h3>
                            <p className="text-sm font-bold text-[#8c8070] mb-4 tracking-widest">AREA: YATA</p>
                            <p className="text-gray-500 leading-7">
                                車で5分走れば、便利な生活圏。<br />
                                「駅近」というブランドを手放すだけで、驚くほどの予算が浮きます。
                            </p>
                        </motion.div>

                        {/* Card 3: Plus (Center Visual) */}
                        <div className="hidden md:flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-[#8c8070] text-white flex items-center justify-center text-3xl font-light shadow-lg">
                                +
                            </div>
                        </div>

                        {/* Card 4: Building (Span 1) */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-[#2a2a2a] text-white rounded-3xl p-8 shadow-xl shadow-gray-900/20 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Home size={100} className="text-white" />
                            </div>
                            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-white backdrop-blur-sm">
                                <Home size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">建物：2,280万円</h3>
                            <p className="text-sm font-bold text-[#d4c4b0] mb-4 tracking-widest">HIGH SPEC</p>
                            <p className="text-gray-300 leading-7">
                                耐震等級3・制震ダンパー標準。<br />
                                浮いた土地代を、家族の命を守る「家の性能」に投資する。これがやまとクオリティ。
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* WORKS: High-End Visuals */}
            <section className="py-24 bg-white">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-[#8c8070] text-sm font-bold tracking-widest uppercase mb-4 block">Life Scenes</span>
                            <h2 className="text-4xl font-serif text-[#2a2a2a]">暮らしの解像度を上げる</h2>
                        </div>
                        <Link href="/subdivision" className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#8c8070] transition-colors">
                            VIEW ALL WORKS <div className="w-8 h-[1px] bg-gray-300 group-hover:bg-[#8c8070] transition-colors"></div>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80",
                                title: "吹き抜けのリビング",
                                desc: "光と風が通り抜ける、家族のメインステージ"
                            },
                            {
                                img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80",
                                title: "Cleanup STEDIA",
                                desc: "プロ仕様のキッチンで、毎日の料理を特別に"
                            },
                            {
                                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
                                title: "プライベートガーデン",
                                desc: "50坪の敷地だから叶う、週末のBBQ"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 shadow-md bg-gray-100">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#2a2a2a] mb-2 group-hover:text-[#8c8070] transition-colors">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SIMULATION: New "Web-Design-Expert" Calculator */}
            <section className="py-32 px-6 bg-[#f2f0eb]">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-[#8c8070] text-sm font-bold tracking-widest uppercase mb-4 block">Financial Security</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-[#2a2a2a] mb-6">人生を変える資金計画</h2>
                        <p className="text-gray-600 max-w-lg mx-auto leading-7">
                            駅近という「条件」ではなく、ゆとりという「実利」を。<br />
                            その選択が将来どれだけの差を生むか、ご確認ください。
                        </p>
                    </div>

                    <SmartCalculator />
                </div>
            </section>

            {/* TRUST: About Us */}
            <section className="py-32 px-6 bg-white">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-[#2a2a2a] rounded-3xl p-10 md:p-20 relative overflow-hidden text-white shadow-2xl">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="block text-[#d4c4b0] text-sm font-bold tracking-widest mb-6">OUR PHILOSOPHY</span>
                                <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-8">
                                    建てるのは、<br />
                                    「未来」です。
                                </h2>
                                <p className="text-gray-400 leading-8 mb-10 text-lg">
                                    私たちが提供したいのは、豪華なカタログスペックではありません。<br />
                                    家族が笑顔で過ごせる時間。将来への安心。<br />
                                    そして、無理のない支払いで手に入れる「本当に豊かな暮らし」です。
                                </p>
                                <Link href="/company" className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:text-[#d4c4b0] hover:border-[#d4c4b0] transition-colors">
                                    やまと不動産について <ArrowRight size={16} />
                                </Link>
                            </div>
                            <div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-lg border border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                                    alt="Staff"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#fff] text-center border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif text-[#2a2a2a] mb-6">百聞は一見に如かず</h2>
                    <p className="text-gray-500 mb-10">現地モデルハウスで、その「ゆとり」を体感してください。</p>
                    <Link href="/contact" className="inline-block bg-[#8c8070] text-white px-12 py-5 text-lg font-bold tracking-wide rounded-full shadow-xl hover:bg-[#7a6f60] hover:scale-105 transition-all">
                        来場予約・お問い合わせ
                    </Link>
                </div>
            </section>
        </div>
    );
}
