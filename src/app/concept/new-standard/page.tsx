"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { ArrowRight, MapPin, Shield, Zap, ChefHat } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NewStandardPage() {
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 500], [0, 150]);
    const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="bg-[#f5f5f4] min-h-screen text-nara-charcoal font-serif selection:bg-nara-gold selection:text-white">
            <Header />

            {/* Hero: Nara Modern - Solid & Heavy */}
            <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
                    {/* Image seeking: Modern, concrete/solid texture, minimal, evening or calm light */}
                    <Image
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
                        alt="Solid Modern Architecture"
                        fill
                        className="object-cover grayscale-[0.2]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#f5f5f4]" />
                </motion.div>

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        style={{ opacity: opacityHero }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <p className="text-white/80 text-xs md:text-sm tracking-[0.5em] mb-8 font-sans border border-white/30 inline-block px-4 py-2 uppercase">
                            The Real Standard
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-tight text-white mb-6 drop-shadow-2xl">
                            <span className="block text-2xl md:text-3xl font-normal mb-4 tracking-widest">土地を「安く」買う。</span>
                            その分、<br />
                            <span className="text-nara-gold">暮らしを「高く」する。</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Concept: The Luxury of Reversal */}
            <section className="py-24 px-6 bg-[#f5f5f4]">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-1/3 pt-6 border-t-2 border-nara-charcoal">
                            <h2 className="text-2xl font-bold leading-tight">
                                逆転の<br />ラグジュアリー
                            </h2>
                            <p className="mt-4 text-xs font-sans text-gray-500 tracking-widest">PERFORMANCE OVER LOCATION</p>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-lg leading-relaxed text-gray-800 mb-8 font-medium text-justify">
                                「駅近」という条件を外すだけで、土地の価格は劇的に下がります。
                                矢田エリアの土地価格は780万円。
                                浮いた予算は、すべて「家の性能」と「毎日の快適さ」に投資できるのです。
                            </p>
                            <p className="text-lg leading-relaxed text-gray-600 text-justify">
                                駅から遠いことを嘆くのではなく、その距離がもたらす「圧倒的な住宅性能」を享受する。
                                それは、見栄よりも実質を選ぶ、成熟した大人のための「逆転の贅沢」です。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 1: Exterior (Hebel) */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                        <div className="md:w-1/2 relative h-[500px] w-full group overflow-hidden">
                            {/* Image seeking: Texture, wall, detail */}
                            <Image
                                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
                                alt="Textured Wall Detail"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-8 left-8 bg-white/90 p-4 backdrop-blur-sm">
                                <span className="block text-xs font-bold tracking-widest mb-1">WALL THICKNESS</span>
                                <span className="block text-3xl font-bold">37<span className="text-sm">mm</span></span>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="flex items-center gap-3 mb-6 text-nara-gold">
                                <Shield size={24} />
                                <span className="text-xs font-bold tracking-[0.2em]">EXTERIOR</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-nara-charcoal">
                                37mmの<br />重厚な静寂。
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                ペラペラのサイディングではありません。
                                私たちが標準採用するのは、37mm厚のALCコンクリート「ヘーベルパワーボード」。
                                その厚みは、断熱性、遮音性、そして何より、邸宅としての「格」を決定づけます。
                                奈良の風景に静かに鎮座する、揺るぎない質感を約束します。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 2: Kitchen (Stedia) */}
            <section className="py-20 md:py-32 bg-[#eeeeec]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
                        <div className="md:w-1/2 relative h-[500px] w-full group overflow-hidden">
                            {/* Image seeking: Stainless kitchen, modern, clean */}
                            <Image
                                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80"
                                alt="Professional Kitchen"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-8 right-8 bg-black/80 text-white p-4 backdrop-blur-sm">
                                <span className="block text-xs font-bold tracking-widest mb-1">MODEL</span>
                                <span className="block text-xl font-bold">CLEANUP STEDIA</span>
                            </div>
                        </div>
                        <div className="md:w-1/2 text-right md:text-left">
                            <div className="flex items-center justify-end md:justify-start gap-3 mb-6 text-nara-gold">
                                <span className="text-xs font-bold tracking-[0.2em]">KITCHEN</span>
                                <ChefHat size={24} />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-nara-charcoal">
                                料理をする人が、<br />一番偉い場所。
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                リビングから丸見えのキッチンだからこそ、家具のように美しいものを。
                                プロの厨房と同じステンレス構造の「ステディア」なら、カビやニオイを寄せ付けず、数十年後も輝き続けます。
                                「安い家だから」と妥協した設備を使う生活とは、決別してください。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 3: Comfort (Aqua Foam) */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                        <div className="md:w-1/2 relative h-[500px] w-full group overflow-hidden">
                            {/* Image seeking: Cozy indoor scene, warm light, coffee/tea */}
                            <Image
                                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80"
                                alt="Cozy Warm Living Room"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <div className="flex items-center gap-3 mb-6 text-nara-gold">
                                <Zap size={24} />
                                <span className="text-xs font-bold tracking-[0.2em]">INSULATION</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-nara-charcoal">
                                奈良の底冷えを、<br />忘れさせる魔法。
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                現場発泡断熱材「アクアフォーム」が、家全体を隙間なく包み込みます。
                                真冬の朝、布団から出るのが辛くない。Tシャツ一枚で過ごせるリビング。
                                それは、目に見えないけれど、最も贅沢な「日常」です。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Price & CTA */}
            <section className="py-24 px-6 relative bg-nara-charcoal text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Image
                        src="https://images.unsplash.com/photo-1507652313519-d4e917a52471?auto=format&fit=crop&q=80"
                        alt="Background Texture"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="container mx-auto max-w-3xl relative z-10 text-center">
                    <p className="text-nara-gold font-bold tracking-[0.3em] mb-4">THE ANSWER</p>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-12 leading-tight">
                        3,060万円で手に入れる。<br />
                        この「質感」のある暮らし。
                    </h2>

                    <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-8 mb-12 max-w-lg mx-auto">
                        <div>
                            <p className="text-xs text-gray-400 tracking-widest mb-1">LAND</p>
                            <p className="text-xl font-bold">780<span className="text-sm font-normal">万円</span></p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 tracking-widest mb-1">HOUSE</p>
                            <p className="text-xl font-bold">2,280<span className="text-sm font-normal">万円</span></p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 tracking-widest mb-1">TOTAL</p>
                            <p className="text-xl font-bold text-nara-gold">3,060<span className="text-sm font-normal text-white">万円</span></p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/contact" className="group inline-flex items-center justify-center gap-2 bg-white text-nara-charcoal px-8 py-4 min-w-[240px] hover:bg-nara-gold hover:text-white transition-all duration-300 rounded-sm">
                            <span className="tracking-widest font-bold">現地で質感を確認する</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <p className="mt-6 text-xs text-gray-500">※矢田分譲地 + 建物 + 標準付帯工事 + 消費税</p>
                </div>
            </section>
        </div>
    );
}
