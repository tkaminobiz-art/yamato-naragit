"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { Check, ArrowRight, MapPin, Database, ShieldCheck, ChefHat, Ruler } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SmartRationalismPage() {
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div className="bg-[#f0f0f0] min-h-screen text-[#111] font-serif selection:bg-black selection:text-white">
            <Header />

            {/* Progress Bar (The Logic Line) */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-1 bg-nara-gold origin-left z-50 mix-blend-difference"
            />

            {/* Hero: The Axiom (公理) */}
            <section className="relative h-screen flex flex-col items-center justify-center bg-[#e5e5e5] overflow-hidden border-b border-gray-300">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 text-center px-4"
                >
                    <p className="font-mono text-xs tracking-[0.3em] mb-6 text-gray-500">PROJECT: YAMATO / YATA</p>
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 font-mono">
                        3,060<span className="text-2xl md:text-4xl text-gray-400 font-light ml-2">JPY</span>
                    </h1>
                    <div className="flex flex-col md:flex-row items-center justify-center text-sm font-mono gap-4 md:gap-12 mt-8 text-gray-600">
                        <span className="flex items-center gap-2"><Database size={14} /> LAND: 780</span>
                        <span className="hidden md:inline text-gray-300">+</span>
                        <span className="flex items-center gap-2"><HomeIcon size={14} /> BLDG: 2,280</span>
                        <span className="hidden md:inline text-gray-300">=</span>
                        <span className="flex items-center gap-2 text-black font-bold">TOTAL</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-0 right-0 text-center"
                >
                    <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400">Scroll to Prove</p>
                    <div className="w-[1px] h-12 bg-gray-400 mx-auto mt-4"></div>
                </motion.div>
            </section>

            {/* Evidence I: LAND (Reframing Distance) */}
            <section className="py-32 px-6 bg-white border-b border-gray-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <h2 className="text-xs font-mono font-bold tracking-widest mb-4 text-nara-gold">EVIDENCE_01 // LAND</h2>
                            <div className="text-5xl md:text-7xl font-mono font-bold mb-2">780<span className="text-xl text-gray-400 ml-1">MAN</span></div>
                            <p className="text-gray-500 text-sm font-mono border-l-2 border-gray-100 pl-4 my-8">
                                LOC: Yamatokoriyama, Yata<br />
                                AREA: 165.29㎡ (50.00 tsubo)<br />
                                STATUS: Owned (No fees)
                            </p>
                            <p className="text-gray-800 leading-relaxed font-medium">
                                「駅からの距離」は、バスで埋まる。<br />
                                だが、「隣家との距離」は金でしか買えない。
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4 text-sm mt-4">
                                50坪の整形地。南向き。
                                都市部の狭小地で3000万円を土地だけに費やすか。
                                ここで780万円で土地を手に入れ、残りを「城」に充てるか。
                                論理的な正解は明白です。
                            </p>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-2 gap-2 h-[500px]">
                            <div className="relative bg-gray-100 col-span-2 md:col-span-1 border border-gray-200 p-8 flex flex-col justify-between">
                                <Ruler className="text-gray-300 w-12 h-12" />
                                <div>
                                    <div className="text-4xl font-bold font-mono">50.0</div>
                                    <div className="text-xs tracking-widest text-gray-500">TSUBO (165㎡)</div>
                                </div>
                            </div>
                            <div className="relative bg-black col-span-2 md:col-span-1">
                                <Image
                                    src="https://images.unsplash.com/photo-1599809275372-bde87060318b?auto=format&fit=crop&q=80"
                                    alt="Wide Open Land"
                                    fill
                                    className="object-cover opacity-80"
                                />
                                <div className="absolute top-4 left-4 text-white font-mono text-xs border border-white/30 px-2 py-1">WIDE SPAN</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Evidence II: STRUCTURE (The Core Value) */}
            <section className="py-32 px-6 bg-[#111] text-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row-reverse gap-16">
                        <div className="md:w-1/3">
                            <h2 className="text-xs font-mono font-bold tracking-widest mb-4 text-nara-gold">EVIDENCE_02 // BUILDING</h2>
                            <div className="text-5xl md:text-7xl font-mono font-bold mb-2">2,280<span className="text-xl text-gray-500 ml-1">MAN</span></div>
                            <p className="text-gray-500 text-sm font-mono border-l-2 border-gray-800 pl-4 my-8">
                                MODEL: HANA / KAZE<br />
                                GRADE: Highest (3)<br />
                                WALL: Hebel Powerboard
                            </p>
                            <p className="text-gray-200 leading-relaxed font-medium">
                                見栄にお金を払うな。<br />
                                物理的な「性能」に払え。
                            </p>
                            <p className="text-gray-400 leading-relaxed mt-4 text-sm mt-4">
                                地震王国・日本において、デザインよりも優先すべきは「死なない家」であること。
                                住友ゴムの制震ダンパー「MIRAIE」。37mmのALC外壁。
                                2,280万円の内訳は、すべて「家族の命」を守るための物理的なコストです。
                            </p>
                        </div>
                        <div className="md:w-2/3 relative h-[600px] border border-gray-800 bg-[#0a0a0a]">
                            {/* X-Ray / Tech visual feel */}
                            <Image
                                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
                                alt="Structural Frame"
                                fill
                                className="object-cover opacity-50 grayscale"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                            {/* Hotspots */}
                            <div className="absolute top-1/3 left-1/4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-nara-gold rounded-full animate-pulse" />
                                    <span className="text-xs font-mono text-nara-gold bg-black/50 px-1">MIRAIE (DAMPER)</span>
                                </div>
                            </div>
                            <div className="absolute bottom-1/3 right-1/4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-white rounded-full" />
                                    <span className="text-xs font-mono text-white bg-black/50 px-1">HEBEL (37mm)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Evidence III: STANDARD (No Options Needed) */}
            <section className="py-32 px-6 bg-[#f0f0f0]">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-xs font-mono font-bold tracking-widest mb-4 text-nara-gold">EVIDENCE_03 // INCLUSIONS</h2>
                        <h3 className="text-3xl font-bold font-serif mb-4">オプションという概念の廃棄。</h3>
                        <p className="text-gray-500 text-sm">必要な機能は、最初から全て実装済みです。</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                        {[
                            { title: "KITCHEN", name: "Cleanup STEDIA", spec: "Stainless Eco Cabi", icon: ChefHat },
                            { title: "BATHROOM", name: "TOTO Sazana", spec: "Hokkkarari Floor", icon: ShieldCheck },
                            { title: "INSULATION", name: "Aqua Foam", spec: "Blow-in Method", icon: ShieldCheck },
                        ].map((item, i) => (
                            <div key={item.title} className="bg-white p-8 border border-gray-200 hover:border-nara-gold transition-colors group">
                                <div className="flex justify-between items-start mb-8">
                                    <span className="text-[10px] font-mono tracking-widest bg-gray-100 px-2 py-1">{item.title}</span>
                                    <item.icon className="w-5 h-5 text-gray-300 group-hover:text-nara-gold transition-colors" />
                                </div>
                                <h4 className="font-bold text-lg mb-1">{item.name}</h4>
                                <p className="text-xs font-mono text-gray-400">{item.spec}</p>
                                <div className="mt-8 pt-4 border-t border-dashed border-gray-200 text-right">
                                    <span className="text-xs font-bold text-nara-gold">INCLUDED</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-1 text-right">
                        <Link href="/specs" className="inline-block text-xs font-mono border-b border-black pb-1 hover:text-nara-gold hover:border-nara-gold transition-colors">&gt;&gt; VIEW FULL SPECS LIST</Link>
                    </div>
                </div>
            </section>

            {/* Q.E.D (Conclusion) */}
            <section className="py-32 px-6 bg-white border-t border-gray-200 text-center">
                <div className="container mx-auto max-w-4xl border-2 border-nara-charcoal p-12 md:p-20 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                        <span className="font-mono text-2xl font-bold">Q.E.D.</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-8 font-serif leading-tight">
                        結論。<br />
                        これ以上に<br />「合理的」な解はない。
                    </h2>

                    <p className="text-gray-600 mb-12 leading-relaxed max-w-xl mx-auto">
                        780万円の土地と、2,280万円の高性能住宅。<br />
                        この組み合わせが導き出す「3,060万円」という答え。<br />
                        感情ではなく、論理で家を選ぶあなたのための最適解です。
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/contact" className="group inline-flex items-center justify-center gap-3 bg-nara-charcoal text-white px-8 py-4 hover:opacity-90 transition-all">
                            <span className="tracking-widest text-sm font-bold">現地で検証する</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/subdivision" className="group inline-flex items-center justify-center gap-3 border border-nara-charcoal text-nara-charcoal px-8 py-4 hover:bg-gray-50 transition-all">
                            <span className="tracking-widest text-sm font-bold">物件リストを見る</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

function HomeIcon({ size }: { size: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
    )
}
