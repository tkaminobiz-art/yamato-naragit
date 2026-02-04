"use client";

import { motion } from "framer-motion";
import { Shield, ChefHat, Activity, Layers, CheckCircle } from "lucide-react";
import Image from "next/image";

const specs = [
    {
        title: "Kitchen",
        name: "クリナップ｜STEDIA",
        desc: "高温多湿な日本に最適解を。\nカビない、錆びない、ステンレスの輝き。",
        image: "/images/macro-stainless.png",
        icon: <ChefHat className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1} />,
        delay: 0
    },
    {
        title: "Structure",
        name: "住友ゴム｜MIRAIE",
        desc: "繰り返す余震にも、変わらぬ強さを。\n地震エネルギーを最大95%吸収する制震技術。",
        image: "/images/macro-damper.png",
        icon: <Activity className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1} />,
        delay: 0.1
    },
    {
        title: "Exterior",
        name: "ヘーベルパワーボード",
        desc: "37mmの圧倒的な重厚感。\n火に強く、音を防ぎ、家を守り抜く。",
        image: "/images/macro-wall.png",
        icon: <Layers className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1} />,
        delay: 0.2
    }
];

export function HighGradeShowcase() {
    return (
        <section className="section-spacing px-6 bg-[#111] text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="block text-xs md:text-sm font-sans tracking-[0.3em] text-nara-gold mb-6 font-bold">
                        HIGH BRAND SELECTION
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-balance leading-tight text-white mb-6">
                        最強の標準仕様。
                    </h2>
                    <p className="text-gray-400 font-serif md:text-lg">
                        追加費用なしで手に入る、憧れのハイスペック。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[400px]">
                    {specs.map((spec, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: spec.delay }}
                            className="group relative rounded-sm overflow-hidden border border-white/10 hover:border-nara-gold/50 transition-colors duration-500"
                        >
                            {/* Background Image with Zoom Effect */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={spec.image}
                                    alt={spec.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                                <div className="mb-auto opacity-50 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:-translate-y-2">
                                    {spec.icon}
                                </div>
                                <span className="text-nara-gold text-xs tracking-[0.2em] font-bold mb-2 block">
                                    {spec.title}
                                </span>
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white group-hover:text-nara-gold transition-colors duration-300">
                                    {spec.name}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line font-serif">
                                    {spec.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Special Golden Shield Card (Full Width on Mobile, Span 3 on Desktop if wanted, or just below) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="md:col-span-3 relative rounded-sm overflow-hidden border border-nara-gold/30 hover:border-nara-gold transition-colors duration-500 h-[300px] md:h-[400px] group"
                    >
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/macro-shield.png"
                                alt="Golden Shield"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                        </div>

                        <div className="absolute inset-0 z-10 p-8 md:p-16 flex flex-col justify-center items-start max-w-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <Shield className="w-12 h-12 text-nara-gold animate-pulse" strokeWidth={1} />
                                <span className="text-nara-gold text-sm tracking-[0.2em] font-bold">THE STRONGEST SHIELD</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                                地盤改良費、<br />
                                <span className="text-nara-gold text-auto-phrase">100% 会社負担。</span>
                            </h3>
                            <p className="text-gray-300 md:text-lg leading-relaxed font-serif mb-8 text-auto-phrase">
                                想定外の出費で、夢を削らせない。<br />
                                これが、やまと不動産だけが約束できる<span className="ib text-white border-b border-nara-gold ml-1">「最強の安心」</span>です。
                            </p>
                            <div className="flex items-center gap-2 text-nara-gold text-sm tracking-widest font-bold">
                                <CheckCircle size={16} />
                                <span>追加費用ゼロ保証</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
