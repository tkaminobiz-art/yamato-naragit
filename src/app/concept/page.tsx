"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function ConceptPage() {
    return (
        <main className="bg-y-off-white min-h-screen pb-24">
            <Header />

            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero/hero2.webp"
                        alt="Concept Hero"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center text-white"
                >
                    <h1 className="text-4xl md:text-6xl font-serif mb-4 tracking-widest">CONCEPT</h1>
                    <p className="font-serif text-sm md:text-base tracking-[0.2em] opacity-80">
                        企業理念
                    </p>
                </motion.div>
            </section>

            {/* Corporate Philosophy */}
            <section className="container mx-auto px-6 section-spacing">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-y-charcoal text-balance leading-tight heading-spacing">
                            「当たり前」を、最高に。
                        </h2>
                        <div className="w-16 h-[2px] bg-y-gold mx-auto mb-10 md:mb-12" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose-yamato"
                    >
                        <p>
                            家づくりは、人生において最も大きな「決断」の一つです。
                        </p>
                        <p>
                            しかし、これまでの住宅業界には、不明瞭な価格、複雑なオプション、そして「一生に一度だから仕方ない」という妥協が溢れていました。
                        </p>
                        <p>
                            私たちは、その不透明な常識を打ち破り、本来あるべき「理想の住まい」の姿を再定義します。
                        </p>
                        <p className="font-medium text-y-charcoal text-lg">
                            他社が「特別」と呼ぶものを、私たちは「標準」へと引き上げる。
                        </p>
                        <p>
                            住まいの基準（スタンダード）を極限まで高め、奈良・京都で暮らす人々の人生に、確かな感動と調和をもたらすことが私たちの使命です。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Brand Policy */}
            <section className="bg-white section-spacing">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center font-serif text-3xl md:text-4xl lg:text-5xl text-y-charcoal text-balance leading-tight heading-spacing"
                    >
                        Brand Policy
                        <span className="text-sm md:text-base text-y-gold block mt-4 md:mt-6 tracking-[0.2em] font-normal">3つの約束</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                num: "01",
                                title: "嘘のない価格：\n透明な資金計画",
                                desc: "「31坪 2,080万円〜」という価格設定は、お客様への誠実さの証です。頭金ゼロ・二重家賃ゼロを実現するための具体的な道筋を提示し、不透明な追加費用による不安を排除します。資金計画の段階から、お客様の未来を第一に考えます。"
                            },
                            {
                                num: "02",
                                title: "妥協なき標準：\n最高グレードの日常",
                                desc: "トリプルガラス樹脂サッシ、深型食洗機、高効率給湯器。これらは贅沢品ではなく、快適な暮らしの必需品です。私たちはこれらを標準化することで、検討の初期段階から「質の高い暮らし」を確定させ、お客様の期待を超える住まいを提供します。"
                            },
                            {
                                num: "03",
                                title: "徹底した伴走：\nチームやまと",
                                desc: "家づくりにおける不安や悩みは、一つとして同じものはありません。だからこそ、私たちは打ち合わせ回数に制限を設けません。代表取締役専務の小林 敬昌を筆頭に、経験豊富なプロフェッショナルたちが、お客様が心から納得されるまで何度でも対話を重ね、理想を形にします。"
                            }
                        ].map((policy, idx) => (
                            <motion.div
                                key={policy.num}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2, duration: 0.8 }}
                                className="relative p-8 border border-gray-100 bg-y-off-white hover:shadow-xl transition-shadow duration-500 group"
                            >
                                <div className="absolute -top-6 left-8 text-5xl font-serif font-bold text-gray-200 group-hover:text-y-gold/20 transition-colors">
                                    {policy.num}
                                </div>
                                <h3 className="text-xl font-serif text-y-charcoal font-bold mb-6 mt-4 whitespace-pre-line leading-relaxed">
                                    {policy.title}
                                </h3>
                                <p className="text-gray-600 font-serif leading-relaxed text-sm">
                                    {policy.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
