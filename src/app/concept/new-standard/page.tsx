"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { ArrowRight, MapPin, Sun, Wind, Coffee } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NewStandardPage() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <div className="bg-[#fcfbf9] min-h-screen text-nara-charcoal font-serif">
            <Header />

            {/* Hero: Magazine Cover Style */}
            <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80"
                        alt="Summer Garden Life"
                        fill
                        className="object-cover brightness-90"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="relative z-10 text-center text-white px-6 mix-blend-difference">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-xs md:text-sm tracking-[0.5em] mb-6 font-sans uppercase"
                    >
                        The New Standard
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                        className="text-5xl md:text-8xl font-thin tracking-wide leading-tight mb-8"
                    >
                        YATA<br />
                        <span className="text-2xl md:text-4xl tracking-widest block mt-4 font-light">RESORT LIFE</span>
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-6 md:left-12 text-white/80 text-xs tracking-widest vertical-rl"
                >
                    NARA / YAMATO-KORIYAMA
                </motion.div>
            </section>

            {/* Editorial Lead */}
            <section className="py-24 md:py-32 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                        <div className="md:w-1/3 pt-4 border-t border-nara-charcoal">
                            <span className="text-xs font-bold tracking-widest block mb-2">ISSUE 01</span>
                            <h2 className="text-3xl font-bold leading-tight">
                                「駅近」より、<br />
                                「庭近」を。
                            </h2>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-lg leading-relaxed text-gray-700 mb-8 indent-8 text-justify">
                                かつて、家の価値は「駅から何分か」で決まりました。
                                しかし、働き方が変わり、休日の過ごし方が変わった今、
                                本当に贅沢なのは「どれだけ自分たちの時間を楽しめるか」ではないでしょうか。
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700 text-justify">
                                矢田（Yata）にあるのは、駅前の喧騒ではなく、
                                広い空と、BBQができる庭と、心地よい風です。
                                ここは、家というより、週末を過ごすための「プライベートリゾート」に近いかもしれません。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Story */}
            <section className="py-12 md:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    {/* Scene 1: BBQ / Garden */}
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-32">
                        <motion.div style={{ y: y1 }} className="md:w-1/2 relative h-[500px] w-full">
                            <Image
                                src="https://images.unsplash.com/photo-1558036117-15ea78886861?auto=format&fit=crop&q=80"
                                alt="Kids playing in garden"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <div className="md:w-1/2 md:-ml-24 z-10 bg-[#fcfbf9] p-8 md:p-12 shadow-xl max-w-lg">
                            <Sun className="w-8 h-8 text-nara-gold mb-6" />
                            <h3 className="text-2xl font-bold mb-4 font-serif">日曜日の朝は、<br />庭で珈琲を。</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                窓を開ければ、そこは第二のリビング。
                                子供たちがプールで遊ぶ声をBGMに、読書をする。
                                夕方からは友人を招いてBBQ。
                                都会の狭小住宅では絶対に手に入らない「余白」が、ここにはあります。
                            </p>
                        </div>
                    </div>

                    {/* Scene 2: Living / Space */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                        <motion.div style={{ y: y2 }} className="md:w-1/2 relative h-[600px] w-full">
                            <Image
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
                                alt="Modern Living Room"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <div className="md:w-1/2 md:-mr-24 z-10 bg-[#fcfbf9] p-8 md:p-12 text-right shadow-sm max-w-lg border-r-4 border-nara-gold">
                            <Wind className="w-8 h-8 text-nara-gold mb-6 ml-auto" />
                            <h3 className="text-2xl font-bold mb-4 font-serif">3,060万円で手に入れる、<br />人生の特等席。</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                この豊かな暮らしを手に入れるのに、億単位の資産は必要ありません。
                                土地（矢田）と建物（最高等級）を合わせて、月々の支払いは家賃並み。
                                「いつか」ではなく「今」、この暮らしを始めませんか。
                            </p>
                            <div className="mt-8 inline-block text-left">
                                <p className="text-xs text-gray-400 tracking-widest mb-1">TOTAL PRICE</p>
                                <p className="text-4xl font-bold text-nara-charcoal">3,060<span className="text-sm font-normal ml-1">万円</span></p>
                                <p className="text-[10px] text-gray-400">※土地＋建物＋付帯工事（税込）</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <p className="text-center text-xs font-bold tracking-[0.3em] mb-12 text-gray-400">SUMMER IN YATA</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 h-[600px] md:h-[400px]">
                        <div className="col-span-1 md:col-span-2 relative h-full group overflow-hidden">
                            <Image src="https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&fit=crop&q=80" alt="BBQ" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            <span className="absolute bottom-4 left-4 text-white font-bold tracking-widest text-xs">BBQ PARTY</span>
                        </div>
                        <div className="relative h-full group overflow-hidden">
                            <Image src="https://images.unsplash.com/photo-1533159346610-d8868db8c6b9?auto=format&fit=crop&q=80" alt="Pool" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <span className="absolute bottom-4 left-4 text-white font-bold tracking-widest text-xs">KIDS POOL</span>
                        </div>
                        <div className="relative h-full group overflow-hidden">
                            <Image src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80" alt="Wine" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <span className="absolute bottom-4 left-4 text-white font-bold tracking-widest text-xs">RELAX</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 text-center bg-[#fcfbf9]">
                <div className="container mx-auto max-w-2xl border border-nara-charcoal p-12 md:p-20 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fcfbf9] px-6">
                        <MapPin className="w-8 h-8 text-nara-gold" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                        矢田の空気を、<br />
                        感じに来てください。
                    </h2>
                    <p className="text-gray-600 mb-10 leading-relaxed font-serif">
                        まずは現地に立って、その広さを体感してください。<br />
                        ここでの暮らしを想像した瞬間、<br />
                        あなたの「新しい基準」が生まれるはずです。
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/contact" className="group inline-flex items-center justify-center gap-2 bg-nara-charcoal text-white px-8 py-4 min-w-[200px] hover:bg-nara-gold transition-all duration-300">
                            <span className="tracking-widest text-sm">現地を見に行く</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/subdivision" className="group inline-flex items-center justify-center gap-2 border border-nara-charcoal text-nara-charcoal px-8 py-4 min-w-[200px] hover:bg-white transition-all duration-300">
                            <span className="tracking-widest text-sm">物件詳細を見る</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
