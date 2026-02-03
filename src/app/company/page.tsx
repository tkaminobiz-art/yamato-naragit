"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/Header";

export default function CompanyPage() {
    return (
        <main className="bg-y-off-white min-h-screen pb-24">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[40vh] bg-y-charcoal flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="/images/hero/hero1.webp"
                        alt="Company Hero"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-black/40" />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10 text-4xl md:text-5xl font-serif text-white tracking-widest"
                >
                    企業情報
                </motion.h1>
            </section>

            {/* Message Section */}
            <section className="container mx-auto px-6 py-24 max-w-4xl">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3">
                        <div className="aspect-[3/4] relative bg-gray-200 rounded-sm overflow-hidden shadow-lg">
                            {/* Placeholder for Representative Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-serif bg-gray-300">
                                <span className="p-4 text-center">古谷泰彦<br />(写真)</span>
                            </div>
                        </div>
                        <div className="mt-4 text-center md:text-left">
                            <p className="font-serif text-lg text-gray-500">代表取締役社長</p>
                            <p className="font-serif text-2xl font-bold mt-1 text-y-charcoal">古谷 泰彦</p>
                        </div>
                    </div>

                    <div className="md:w-2/3 space-y-8 font-serif leading-loose text-y-charcoal">
                        <h2 className="text-3xl text-nara-gold border-b border-nara-gold/30 pb-4 inline-block">
                            「誠実」という土台の上に、<br />理想の家を。
                        </h2>
                        <div className="text-justify space-y-6 text-gray-700">
                            <p>
                                やまと不動産のウェブサイトをご覧いただき、誠にありがとうございます。代表取締役社長の古谷 泰彦です。
                            </p>
                            <p>
                                私たちが家づくりにおいて最も大切にしているのは、お客様に対する「誠実さ」です。<br />
                                家は、完成がゴールではありません。そこから始まる何十年という暮らしを、いかに豊かで安心できるものにするか。そのために、私たちは派手な広告宣伝費や豪華な展示場にコストをかけることをやめました。
                            </p>
                            <div className="border-l-2 border-y-gold pl-4 italic text-gray-600 my-8">
                                「その予算があるなら、お客様の家の断熱性能を一段階上げよう」<br />
                                「その費用があるなら、お客様のキッチンを最高級の設備にしよう」
                            </div>
                            <p>
                                この愚直なまでのこだわりが、私たちの「ハイグレード標準仕様」の原点です。<br />
                                私は現場の人間として、お客様が住み始めてから「やまと不動産で建てて本当に良かった」と実感していただく瞬間に、何よりも喜びを感じます。
                            </p>
                            <p>
                                奈良・京都という素晴らしい土地で、無理のない資金計画と共に、最高グレードの暮らしを手に入れていただく。そのために、私、そして専務の小林をはじめ、チーム全員がお客様の「一番の理解者」として伴走いたします。
                            </p>
                            <p>
                                建てる前も、建てる時も、そして建てた後も。<br />
                                お客様の人生を支えるパートナーであり続けることをお約束いたします。
                            </p>
                            <p className="text-right mt-8 font-bold text-lg">
                                株式会社やまと不動産 代表取締役社長　古谷 泰彦
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Staff Section */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-center text-3xl font-serif text-y-charcoal mb-16 tracking-widest">
                        スタッフ紹介
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Kobayashi (Senior Managing Director) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden mb-6">
                                <div className="absolute inset-0 bg-y-charcoal/5 group-hover:bg-y-charcoal/0 transition-colors duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-serif">
                                    小林専務 (写真)
                                </div>
                            </div>
                            <div className="text-center space-y-2">
                                <p className="text-y-gold font-serif text-sm">代表取締役専務</p>
                                <h3 className="text-xl font-serif text-y-charcoal font-bold">小林 敬昌</h3>
                                <p className="text-gray-500 text-sm font-serif mt-4 px-4 leading-relaxed">
                                    「徹底した伴走で、お客様の理想を形にします。」
                                </p>
                            </div>
                        </motion.div>

                        {/* Other placeholders (can be generic for now as user only mentioned Kobayashi specifically) */}
                        {[2, 3].map((item) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item * 0.1 }}
                                className="group"
                            >
                                <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden mb-6">
                                    <div className="absolute inset-0 bg-y-charcoal/5 group-hover:bg-y-charcoal/0 transition-colors duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-serif">
                                        Staff {item}
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <p className="text-y-gold font-serif text-sm">設計・コーディネーター</p>
                                    <h3 className="text-xl font-serif text-y-charcoal">スタッフ {item}</h3>
                                    <p className="text-gray-500 text-sm font-serif mt-4">
                                        「お客様の暮らしに寄り添った提案を心がけています。」
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Outline */}
            <section className="container mx-auto px-6 py-24 max-w-4xl">
                <h2 className="text-center text-3xl font-serif text-y-charcoal mb-16 tracking-widest">
                    会社概要
                </h2>
                <div className="border-t border-gray-200 font-serif">
                    <dl className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200">
                        <dt className="py-6 font-bold text-y-charcoal md:col-span-1">会社名</dt>
                        <dd className="py-6 text-gray-600 md:col-span-3">株式会社やまと不動産</dd>

                    </dl>
                    <dl className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200">
                        <dt className="py-6 font-bold text-y-charcoal md:col-span-1">所在地</dt>
                        <dd className="py-6 text-gray-600 md:col-span-3">
                            〒630-0000<br />
                            奈良県奈良市〇〇町1-2-3 (確認要)
                        </dd>
                    </dl>
                    <dl className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200">
                        <dt className="py-6 font-bold text-y-charcoal md:col-span-1">設立</dt>
                        <dd className="py-6 text-gray-600 md:col-span-3">2010年4月</dd>
                    </dl>
                    <dl className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200">
                        <dt className="py-6 font-bold text-y-charcoal md:col-span-1">代表者</dt>
                        <dd className="py-6 text-gray-600 md:col-span-3">代表取締役 古谷 泰彦</dd>
                    </dl>
                    <dl className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200">
                        <dt className="py-6 font-bold text-y-charcoal md:col-span-1">事業内容</dt>
                        <dd className="py-6 text-gray-600 md:col-span-3">
                            注文住宅の設計・施工<br />
                            不動産売買・仲介<br />
                            リノベーション事業
                        </dd>
                    </dl>
                    <dl className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200">
                        <dt className="py-6 font-bold text-y-charcoal md:col-span-1">許認可</dt>
                        <dd className="py-6 text-gray-600 md:col-span-3">
                            建設業許可 奈良県知事（般-〇）第〇〇〇〇号<br />
                            宅地建物取引業免許 奈良県知事（〇）第〇〇〇〇号
                        </dd>
                    </dl>
                </div>
            </section>

        </main >
    );
}
