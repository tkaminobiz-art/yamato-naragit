"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Check, Shield, Zap, Droplets, Layers, Anchor } from "lucide-react";

export default function SpecsPage() {
    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white selection:bg-nara-gold selection:text-black">
            <Header />
            <HeroSection />
            <ChaosSection />
            <SpecsGrid />
            <ComparisonTable />
            <FooterMessage />
        </main>
    );
}

function HeroSection() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

    return (
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
            <motion.div
                style={{ opacity, scale }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&q=80"
                    alt="Happy Family"
                    fill
                    className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#0a0a0a]" />
            </motion.div>

            <div className="relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="font-serif text-3xl md:text-6xl lg:text-7xl font-bold tracking-widest leading-tight"
                >
                    <span className="block text-sm md:text-xl text-nara-gold mb-6 tracking-[0.5em]">REALITY CHECK</span>
                    住宅展示場の<br className="md:hidden" />マジックを解く。
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-8 text-gray-400 font-serif text-sm md:text-base tracking-widest"
                >
                    その「豪華さ」は、<br className="md:hidden" />本当に標準仕様ですか？
                </motion.p>
            </div>
        </section>
    );
}

function ChaosSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [0, 1, 0]);
    const messageOpacity = useTransform(scrollYProgress, [0.6, 0.85], [0, 1]);
    const messageScale = useTransform(scrollYProgress, [0.6, 0.85], [0.9, 1]);

    const anxieties = [
        { text: "標準だと安っぽくなりませんか？", x: "10%", y: "20%" },
        { text: "このキッチンはオプションですよね...？", x: "60%", y: "15%" },
        { text: "あとから追加費用が怖いです", x: "20%", y: "60%" },
        { text: "CMで見たアレはついてないの？", x: "70%", y: "70%" },
    ];

    return (
        <section ref={containerRef} className="relative h-[200vh]">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Floating Anxieties */}
                {anxieties.map((item, i) => (
                    <motion.div
                        key={i}
                        style={{
                            left: item.x,
                            top: item.y,
                            opacity: textOpacity,
                            y: i % 2 === 0 ? y1 : y2
                        }}
                        className="absolute z-10 text-gray-400 font-serif text-xl md:text-3xl font-bold whitespace-nowrap opacity-70 blur-[0.5px]"
                    >
                        {item.text}
                    </motion.div>
                ))}

                {/* Core Message */}
                <motion.div
                    style={{ opacity: messageOpacity, scale: messageScale }}
                    className="relative z-20 text-center px-6"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold leading-normal">
                        やまとの「標準」は、<br />
                        他社の<span className="text-nara-gold">「特別」</span>です。
                    </h2>
                    <div className="w-24 h-[1px] bg-nara-gold mx-auto my-8" />
                    <p className="text-gray-400 font-serif leading-loose">
                        カタログの隅に小さく書かれた「※オプション」の文字に<br className="hidden md:inline" />
                        怯える必要はもうありません。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function SpecsGrid() {
    const specs = [
        {
            title: "一生腐食しない聖域",
            subtitle: "STAINLESS KITCHEN",
            desc: "プロの厨房と同じステンレス構造。カビ、ニオイ、Gを寄せ付けない最高級の清潔性能。",
            img: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80",
            icon: <Droplets />,
            brand: "CLEANUP STEDIA"
        },
        {
            title: "地震のエネルギーを吸収",
            subtitle: "SEISMIC DAMPER",
            desc: "住友ゴムの制震ダンパー「MIRAIE」を標準装備。繰り返す余震から家の構造を守り抜く。",
            img: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&q=80",
            icon: <Zap />,
            brand: "MIRAIE sigma"
        },
        {
            title: "37mmの鎧",
            subtitle: "HEBEL POWERBOARD",
            desc: "断熱、遮音、防災。すべてを兼ね備えたALCコンクリート外壁で、家を要塞化する。",
            img: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80",
            icon: <Shield />,
            brand: "HEBEL POWERBOARD"
        },
        {
            title: "見えない防護壁",
            subtitle: "TRIPLE GLASS",
            desc: "世界最高水準の断熱性能を持つトリプルガラス樹脂サッシ。結露なき冬を約束する。",
            img: "https://images.unsplash.com/photo-1506509036595-3cd5db369c7d?auto=format&fit=crop&q=80",
            icon: <Layers />,
            brand: "YKK AP APW330"
        }
    ];

    return (
        <section className="container mx-auto px-6 pb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {specs.map((spec, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative h-[400px] overflow-hidden rounded-sm border border-white/10"
                    >
                        {/* Background Image with Zoom Effect */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={spec.img}
                                alt={spec.subtitle}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                            <div className="flex items-center gap-3 text-nara-gold mb-2">
                                {spec.icon}
                                <span className="text-xs tracking-[0.2em] font-bold">{spec.brand}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">{spec.title}</h3>
                            <p className="text-gray-400 font-serif text-sm leading-relaxed max-w-md">
                                {spec.desc}
                            </p>
                        </div>

                        {/* Decoration */}
                        <div className="absolute top-8 right-8 text-white/10 font-black text-6xl font-serif z-0">
                            0{i + 1}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function ComparisonTable() {
    const rows = [
        { label: "地盤改良工事費", yamato: "当社負担 (0円)", other: "自己負担 (約100万円〜)", highlight: true },
        { label: "窓サッシ", yamato: "トリプル樹脂", other: "ペアガラスアルミ樹脂" },
        { label: "外壁材", yamato: "37mm ヘーベル板", other: "14mm サイディング" },
        { label: "制震ダンパー", yamato: "標準搭載 (MIRAIE)", other: "オプション (約50万円)" },
        { label: "キッチン", yamato: "最上位 (STEDIA)", other: "中級グレード" },
        { label: "アフター保証", yamato: "最長60年", other: "10年〜20年" },
    ];

    return (
        <section className="container mx-auto px-6 py-32 relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-nara-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-center font-serif text-3xl mb-16">
                    <span className="text-nara-gold text-sm tracking-[0.3em] block mb-4">COMPARISON</span>
                    コストパフォーマンスの真実
                </h2>

                <div className="overflow-hidden rounded-lg border border-white/10 backdrop-blur-md bg-white/5">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="p-6 text-gray-500 font-serif text-sm font-normal w-1/4">比較項目</th>
                                <th className="p-6 text-white font-serif text-lg bg-nara-gold/10 w-2/5 border-x border-white/10">
                                    やまと不動産
                                    <span className="block text-xs text-nara-gold mt-1">High Grade Standard</span>
                                </th>
                                <th className="p-6 text-gray-500 font-serif text-sm font-normal w-1/3">
                                    一般的な住宅会社
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-6 text-gray-400 font-serif text-sm">{row.label}</td>

                                    {/* Yamato Column */}
                                    <td className={`p-6 border-x border-white/10 font-serif ${row.highlight ? 'relative' : ''}`}>
                                        {row.highlight && (
                                            <div className="absolute inset-0 bg-nara-gold/20 border border-nara-gold animate-pulse opacity-50" />
                                        )}
                                        <span className={`relative z-10 font-bold ${row.highlight ? 'text-nara-gold text-lg' : 'text-white'}`}>
                                            {row.yamato}
                                        </span>
                                    </td>

                                    {/* Other Column */}
                                    <td className="p-6 text-gray-600 font-serif text-sm">
                                        {row.other}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="text-center text-gray-500 text-xs mt-8 font-serif">
                    ※地盤改良費の負担条件については、営業担当者にご確認ください。比較内容は当社調べによる一般的な例です。
                </p>
            </div>
        </section>
    );
}

function FooterMessage() {
    return (
        <section className="py-32 text-center">
            <Anchor className="mx-auto text-nara-gold mb-8 w-8 h-8 opacity-50" />
            <h2 className="text-2xl md:text-3xl font-serif mb-6 leading-relaxed">
                「見えない不安」をなくすことが、<br />
                私たちの最初の仕事です。
            </h2>
        </section>
    );
}
