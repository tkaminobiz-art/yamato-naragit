"use client";

import { motion } from 'framer-motion';
import { Check, X, Shield, Droplets, Zap, Thermometer, Box } from 'lucide-react';
import { Header } from '@/components/Header';

export default function SpecsPage() {
    return (
        <div className="bg-nara-paper selection:bg-nara-charcoal selection:text-nara-gold">
            <Header />
            <SpecsHero />
            <SeriesPricing />
            <HighGradeFeatures />
            <PriceComparison />
            <Philosophy />
            <div className="h-32" />
        </div>
    );
}

function SeriesPricing() {
    return (
        <section className="bg-nara-paper section-spacing px-6 border-b border-gray-100">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-serif text-nara-charcoal mb-6">
                        「最初の提示価格」で、<br className="md:hidden" />理想の家は建ちます。
                    </h2>
                    <p className="text-gray-600 font-serif leading-loose max-w-2xl mx-auto">
                        「最終的にいくらになるのか分からない」という不安をなくすために。<br />
                        やまと不動産は、最高等級の性能と設備をパッケージ化した<br className="hidden md:inline" />
                        「花鳥風月」シリーズをご用意しました。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Kyo Grade */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-8 rounded-sm shadow-lg border-t-4 border-nara-charcoal relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 bg-nara-charcoal text-white text-xs px-3 py-1 font-serif tracking-widest">人気No.1</div>
                        <h3 className="text-4xl font-serif text-nara-charcoal mb-2">京<span className="text-base ml-2 opacity-60">- Kyo -</span></h3>
                        <p className="text-gray-500 text-sm font-serif mb-6 h-12">
                            洗練された機能美とコストパフォーマンスを両立した、やまと不動産のスタンダード。
                        </p>
                        <div className="text-center py-6 bg-gray-50 -mx-8">
                            <p className="text-xs text-gray-500 mb-1">建物本体価格</p>
                            <p className="text-3xl font-serif text-nara-gold font-bold">
                                2,180<span className="text-sm text-gray-600 font-normal ml-1">万円〜</span>
                            </p>
                        </div>
                        <ul className="mt-6 space-y-3 text-sm text-gray-600 font-serif">
                            <li className="flex items-center gap-2"><Check size={14} className="text-nara-gold" /> トリプル樹脂サッシ</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-nara-gold" /> 深型食洗機</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-nara-gold" /> 耐震等級3 + MIRAIE</li>
                        </ul>
                    </motion.div>

                    {/* Hana Grade */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white p-8 rounded-sm shadow-md border-t-4 border-nara-brown"
                    >
                        <h3 className="text-4xl font-serif text-nara-brown mb-2">花<span className="text-base ml-2 opacity-60">- Hana -</span></h3>
                        <p className="text-gray-500 text-sm font-serif mb-6 h-12">
                            意匠性にこだわり、素材の質感やデザイン性をさらに高めたハイグレードモデル。
                        </p>
                        <div className="text-center py-6 bg-gray-50 -mx-8">
                            <p className="text-xs text-gray-500 mb-1">建物本体価格</p>
                            <p className="text-3xl font-serif text-nara-charcoal font-bold">
                                2,380<span className="text-sm text-gray-600 font-normal ml-1">万円〜</span>
                            </p>
                        </div>
                        <ul className="mt-6 space-y-3 text-sm text-gray-600 font-serif">
                            <li className="flex items-center gap-2"><Check size={14} className="text-nara-brown" /> 京グレード全装備</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-nara-brown" /> ハイドア・無垢床</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-nara-brown" /> 造作洗面台</li>
                        </ul>
                    </motion.div>

                    {/* Kaze Grade */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white p-8 rounded-sm shadow-md border-t-4 border-nara-gold"
                    >
                        <h3 className="text-4xl font-serif text-nara-gold mb-2">風<span className="text-base ml-2 opacity-60">- Kaze -</span></h3>
                        <p className="text-gray-500 text-sm font-serif mb-6 h-12">
                            自然素材と通気性、光の採り込みに特化した、心安らぐ邸宅モデル。
                        </p>
                        <div className="text-center py-6 bg-gray-50 -mx-8">
                            <p className="text-xs text-gray-500 mb-1">建物本体価格</p>
                            <p className="text-3xl font-serif text-nara-charcoal font-bold">
                                2,380<span className="text-sm text-gray-600 font-normal ml-1">万円〜</span>
                            </p>
                        </div>
                        <ul className="mt-6 space-y-3 text-sm text-gray-600 font-serif">
                            <li className="flex items-center gap-2"><Check size={14} className="text-nara-gold" /> 京グレード全装備</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-nara-gold" /> 漆喰・珪藻土壁</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-nara-gold" /> パッシブ設計</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function SpecsHero() {
    return (
        <section className="h-[70vh] relative flex items-center justify-center overflow-hidden bg-nara-charcoal text-white">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/images/specs/hero.png')] bg-cover bg-center" />

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 text-center p-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="drop-shadow-md"
                >
                    <p className="text-xl md:text-2xl font-serif text-nara-gold mb-6 tracking-widest font-bold">
                        「これ、本当にオプションじゃないんですか？」
                    </p>
                    <h1 className="text-3xl md:text-5xl font-serif leading-relaxed mb-8 font-medium">
                        お客様が絶句する、<br />
                        やまと不動産の「ハイグレ標準」
                    </h1>
                    <p className="text-sm md:text-base font-serif tracking-wider text-gray-200">
                        大手ハウスメーカーなら＋300万円相当の装備を、<br className="visible md:hidden" />
                        私たちは「当たり前」にしました。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function HighGradeFeatures() {
    const features = [
        {
            title: "1. トリプルガラス樹脂サッシ",
            desc: "世界最高水準の断熱性能。アルミの1,000倍熱を伝えない樹脂枠を採用。夏の熱気、冬の冷気をシャットアウトし、結露も電気代も抑えます。",
            icon: <Box className="w-8 h-8 text-nara-gold" />,
            img: "/images/specs/sash.png"
        },
        {
            title: "2. 深型食洗機",
            desc: "フライパンも入る大容量タイプを標準採用。「入り切らないから手洗い」のストレスが消え、家族と過ごす時間が毎日20分増えます。",
            icon: <Droplets className="w-8 h-8 text-nara-gold" />,
            img: "/images/specs/dishwasher.png"
        },
        {
            title: "3. タッチレス自動水栓",
            desc: "センサーに手をかざすだけで吐水・止水。ハンバーグをこねた手でも触れずに洗え、キッチンが驚くほど清潔に保てます。",
            icon: <Zap className="w-8 h-8 text-nara-gold" />,
            img: "/images/specs/faucet.png"
        },
        {
            title: "4. エコキュート",
            desc: "大気の熱でお湯を沸かす高効率給湯システム。深夜電力を賢く使い光熱費を大幅カット。災害時の非常用水としても安心です。",
            icon: <Thermometer className="w-8 h-8 text-nara-gold" />,
            img: "/images/specs/ecocute.png"
        },
        {
            title: "5. 高気密・高断熱＋耐震等級3",
            desc: "「吹付ウレタン断熱」で家を隙間なく包み込み、最高等級の耐震性能と制震ダンパー「MIRAIE」で家族の命を守り抜きます。",
            icon: <Shield className="w-8 h-8 text-nara-gold" />,
            img: "/images/specs/structure.png"
        }
    ];

    return (
        <section className="section-spacing container mx-auto px-4">
            <h2 className="text-center text-3xl font-serif text-nara-charcoal mb-16">
                暮らしを変える、5つのハイグレード標準
            </h2>
            <div className="space-y-24">
                {features.map((feature, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-xl aspect-video relative group">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${feature.img})` }}
                            />
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-nara-charcoal rounded-full">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-serif text-nara-charcoal">{feature.title}</h3>
                            </div>
                            <p className="text-gray-600 leading-loose font-serif text-justify border-l-2 border-nara-gold pl-6">
                                {feature.desc}
                            </p>

                            {/* Review Bubble */}
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 italic text-sm text-gray-500 relative mt-4">
                                <span className="absolute -top-3 left-6 text-2xl text-nara-gold">❝</span>
                                実際に使ってみて、違いに驚きました！（30代・施主様）
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function PriceComparison() {
    return (
        <section className="bg-gray-50 section-spacing px-4 overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-center text-3xl font-serif text-nara-charcoal mb-12">
                    結局、いくらお得なのか？
                </h2>

                <div className="overflow-x-auto rounded-lg shadow-lg">
                    <table className="w-full text-left border-collapse bg-white">
                        <thead>
                            <tr className="bg-nara-charcoal text-white font-serif">
                                <th className="p-4 md:p-6 text-sm md:text-base">装備</th>
                                <th className="p-4 md:p-6 text-nara-gold text-lg md:text-xl font-bold bg-nara-charcoal/90">やまと不動産の標準</th>
                                <th className="p-4 md:p-6 text-sm md:text-base text-gray-300">一般的な他社 (オプション時)</th>
                            </tr>
                        </thead>
                        <tbody className="font-serif">
                            <tr className="border-b border-gray-100">
                                <td className="p-4 md:p-6 font-bold text-gray-700">窓サッシ</td>
                                <td className="p-4 md:p-6 text-nara-brown font-bold text-lg">トリプルガラス樹脂</td>
                                <td className="p-4 md:p-6 text-gray-500">＋約60万円 <span className="text-xs block">(アルミ樹脂複合)</span></td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="p-4 md:p-6 font-bold text-gray-700">食洗機</td>
                                <td className="p-4 md:p-6 text-nara-brown font-bold text-lg">深型タイプ</td>
                                <td className="p-4 md:p-6 text-gray-500">＋約15万円 <span className="text-xs block">(浅型)</span></td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="p-4 md:p-6 font-bold text-gray-700">水栓</td>
                                <td className="p-4 md:p-6 text-nara-brown font-bold text-lg">タッチレス自動水栓</td>
                                <td className="p-4 md:p-6 text-gray-500">＋約6万円 <span className="text-xs block">(手動)</span></td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="p-4 md:p-6 font-bold text-gray-700">断熱・耐震</td>
                                <td className="p-4 md:p-6 text-nara-brown font-bold text-lg">大手HM級 (等級3+MIRAIE)</td>
                                <td className="p-4 md:p-6 text-gray-500">＋約150万円 <span className="text-xs block">(基準値)</span></td>
                            </tr>
                            <tr className="bg-nara-paper/30">
                                <td className="p-4 md:p-6 text-xl font-bold text-nara-charcoal">合計差額</td>
                                <td className="p-4 md:p-6 text-3xl font-bold text-kasuga-red">0円 (標準内)</td>
                                <td className="p-4 md:p-6 text-xl font-bold text-gray-400">＋約231万円<span className="text-sm font-normal">以上</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function Philosophy() {
    return (
        <section className="section-spacing container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8 bg-white p-12 shadow-sm border border-gray-100 rounded-lg">
                <h2 className="text-2xl md:text-3xl font-serif text-nara-charcoal">
                    私たちは、家づくりに「誠実」でありたい。
                </h2>
                <div className="w-16 h-[1px] bg-nara-gold mx-auto" />
                <p className="text-gray-600 leading-loose font-serif text-justify md:text-center">
                    豪華なカタログ、有名タレントを起用したCM、維持費のかかる巨大な展示場。<br className="hidden md:inline" />
                    それらの「家そのものには関係ないコスト」をすべて削ぎ落としました。<br /><br />
                    削ったコストのすべてを、お客様が毎日触れる「窓」や「キッチン」の質に充てています。<br />
                    <span className="text-xl md:text-2xl text-nara-brown font-bold block mt-6">
                        「31坪 2,080万円〜」
                    </span>
                    <span className="text-sm md:text-base text-gray-500 block mt-2">
                        という価格は、私たちの企業努力の証です。
                    </span>
                </p>
            </div>
        </section>
    );
}
