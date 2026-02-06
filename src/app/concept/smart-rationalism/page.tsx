"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { ArrowRight, MapPin, ShieldCheck, ChefHat, Ruler, Wallet } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SmartCalculator } from "@/components/SmartCalculator";

export default function SmartRationalismPage() {
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div className="bg-[#f9f9f9] min-h-screen text-[#222] font-serif selection:bg-nara-gold selection:text-white">
            <Header />

            {/* Progress Bar (The Logic Line) */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-[2px] bg-nara-gold origin-left z-50"
            />

            {/* Hero: The Proposition (Values, not just numbers) */}
            <section className="relative h-screen flex flex-col items-center justify-center bg-[#f0f0f0] overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <Image
                        src="https://images.unsplash.com/photo-1486718448742-166222eb5dcc?auto=format&fit=crop&q=80"
                        alt="Background Texture"
                        fill
                        className="object-cover grayscale"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="z-10 text-center px-6 max-w-4xl"
                >
                    <p className="font-mono text-xs tracking-[0.4em] mb-12 text-gray-500 uppercase">Project: Design K / Yamato</p>

                    <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-tight">
                        <span className="block text-xl md:text-2xl mb-4 text-gray-600 font-normal tracking-widest">性能も、広さも、将来の貯金も。</span>
                        すべてを諦めない、<br />
                        <span className="font-bold border-b-2 border-nara-gold pb-2 inline-block mt-2">3,060万円</span>という解。
                    </h1>

                    <div className="flex flex-col md:flex-row items-baseline justify-center gap-8 mt-16 font-mono text-sm text-gray-500">
                        <div className="flex flex-col items-center">
                            <span className="text-xs tracking-widest mb-2">LAND (YATA)</span>
                            <span className="text-2xl text-black">780</span>
                        </div>
                        <span className="text-xl font-light text-gray-300">+</span>
                        <div className="flex flex-col items-center">
                            <span className="text-xs tracking-widest mb-2">BUILDING (HIGH-GRADE)</span>
                            <span className="text-2xl text-black">2,280</span>
                        </div>
                        <span className="text-xl font-light text-gray-300">=</span>
                        <div className="flex flex-col items-center">
                            <span className="text-xs tracking-widest mb-2 text-nara-gold">TOTAL (TAX INC.)</span>
                            <span className="text-4xl font-bold text-nara-gold">3,060</span>
                        </div>
                    </div>
                </motion.div>

                <div className="absolute bottom-12 left-0 right-0 text-center z-10">
                    <p className="text-[10px] tracking-[0.3em] font-mono text-gray-400">SCROLL TO VERIFY</p>
                    <div className="w-[1px] h-16 bg-gray-300 mx-auto mt-6"></div>
                </div>
            </section>

            {/* Evidence I: Reframing Distance (Weakness as Pride) */}
            <section className="py-24 md:py-40 px-6 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 hidden md:block" />
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-20 items-center">
                        <div className="md:w-1/2">
                            <span className="text-nara-gold font-mono text-xs tracking-[0.3em] block mb-6">01. THE DISTANCE</span>
                            <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-10">
                                1分歩くごとに、<br />
                                <span className="text-gray-400">家は広く、高性能になる。</span>
                            </h2>
                            <div className="space-y-8">
                                <p className="text-gray-600 leading-8 text-justify font-light">
                                    「駅徒歩26分」。不動産ポータルサイトでは、それはネガティブなスペックとして処理されます。
                                    しかし、私たちはその距離を「誇り」と呼びます。
                                    駅からの喧騒を離れたその距離が、780万円という土地価格を実現し、
                                    浮いた予算を、37mmの屈強な外壁や、家族を守る制震装置に変えるからです。
                                </p>
                                <div className="p-8 bg-gray-50 border-l-2 border-nara-gold">
                                    <p className="font-mono text-sm text-gray-500 mb-2">LOGIC:</p>
                                    <p className="text-lg font-medium">不便を買うのではない。<br />「余白」と「安全」を買うのだ。</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 relative">
                            <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?auto=format&fit=crop&q=80"
                                    alt="Spacious Garden Life"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 shadow-sm">
                                    <p className="font-mono text-xs tracking-widest text-gray-500">AREA: 165.29㎡</p>
                                    <p className="text-xl font-medium mt-1">50坪の「自由」</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Evidence II: Materiality & Specs (Macro Textures) */}
            <section className="py-24 md:py-40 px-6 bg-[#1a1a1a] text-white relative">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                        <div className="relative">
                            <span className="text-nara-gold font-mono text-xs tracking-[0.3em] block mb-6">02. THE STANDARD</span>
                            <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-12">
                                もう、地震のニュースに<br />
                                怯える夜は終わらせる。
                            </h2>
                            <p className="text-gray-400 leading-8 mb-12 font-light">
                                見えない部分にこそ、コストをかける。それが「Design K」の流儀です。
                                住友ゴムの制震ダンパー「MIRAIE」標準搭載。
                                繰り返す余震から、家と家族を守り抜くために。
                                これはオプションではなく、私たちが提供する「安心の基準」です。
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                            {/* Material Card 1: Hebel */}
                            <div className="group relative aspect-video overflow-hidden border border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80"
                                    alt="Hebel Texture"
                                    fill
                                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-xl font-medium text-white mb-1">HEBEL POWERBOARD</h3>
                                    <p className="text-xs font-mono text-gray-400">37mm THICKNESS / FIRE RESISTANT</p>
                                </div>
                            </div>

                            {/* Material Card 2: Stainless */}
                            <div className="group relative aspect-video overflow-hidden border border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80"
                                    alt="Stainless Texture"
                                    fill
                                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-xl font-medium text-white mb-1">CLEANUP STEDIA</h3>
                                    <p className="text-xs font-mono text-gray-400">STAINLESS ECO CABINET</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Evidence III: The Future (Calculator) */}
            <section className="py-24 md:py-40 px-6 bg-[#f9f9f9]">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-nara-gold font-mono text-xs tracking-[0.3em] block mb-6">03. THE FUTURE</span>
                        <h2 className="text-3xl md:text-4xl font-medium mb-6">
                            未来への「余白」を、<br />
                            今、ここで確保する。
                        </h2>
                        <p className="text-gray-600">
                            駅近という見栄のために、家族の思い出を犠牲にしますか？
                        </p>
                    </div>

                    <div className="bg-white shadow-2xl p-0 md:p-12 border-t-4 border-nara-gold">
                        <SmartCalculator />
                    </div>
                </div>
            </section>

            {/* Q.E.D (Integrity) */}
            <section className="py-32 px-6 bg-white border-t border-gray-100 text-center">
                <div className="container mx-auto max-w-3xl">
                    <div className="mb-12">
                        <Wallet className="w-12 h-12 text-nara-gold mx-auto mb-6 opacity-80" strokeWidth={1} />
                        <h2 className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                            契約後の「まさか」という追加費用。<br />
                            その不安、私たちが買い取ります。
                        </h2>
                        <p className="text-gray-500 leading-8 mb-12">
                            地盤改良費は、本来お客様が負うべきリスクではありません。<br />
                            私たちが全額負担します。<br />
                            なぜなら、提示した「3,060万円」は、単なる見積もりではなく、<br />
                            あなたとの「誠実な約束」であるべきだと考えるからです。
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/contact" className="group relative inline-flex items-center justify-center gap-4 bg-[#222] text-white px-10 py-5 overflow-hidden transition-all hover:bg-nara-gold">
                            <span className="font-serif tracking-widest relative z-10 transition-colors">現地で「約束」を確かめる</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                        </Link>
                    </div>
                    <p className="mt-8 text-xs text-gray-400 font-mono tracking-widest">NO HIDDEN COSTS. JUST INTEGRITY.</p>
                </div>
            </section>
        </div>
    );
}
