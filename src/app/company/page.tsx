"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/Header";
import { MapPin, Phone, Mail } from "lucide-react";

export default function CompanyPage() {
    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white pb-32">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                        alt="Corporate Architecture"
                        fill
                        className="object-cover opacity-20 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center"
                >
                    <span className="block text-nara-gold text-xs tracking-[0.4em] mb-4 font-bold">
                        WHO WE ARE
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif tracking-widest leading-tight">
                        会社概要
                    </h1>
                </motion.div>
            </section>

            {/* Principle / Philosophy */}
            <section className="container mx-auto px-6 py-24 border-b border-white/5">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 relative aspect-[4/3] w-full"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80"
                            alt="Philosophy"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 border border-nara-gold/30 translate-x-4 translate-y-4 -z-10" />
                    </motion.div>

                    {/* Content */}
                    <div className="md:w-1/2 space-y-8">
                        <div>
                            <span className="text-nara-gold text-xs tracking-[0.2em] block mb-2">PRINCIPLE</span>
                            <h2 className="text-3xl md:text-4xl font-serif leading-relaxed">
                                地域に<span className="text-nara-gold">希望</span>を描き、<br />
                                次代へつなぐ。
                            </h2>
                        </div>
                        <p className="text-gray-400 font-serif leading-loose tracking-wide text-sm md:text-base">
                            私たちやまと不動産は、単に土地や建物を扱うだけでなく、
                            そこに住まう人々の「未来」と「幸福」を創造企業でありたいと考えています。<br /><br />
                            奈良という歴史ある美しき土壌に敬意を払い、
                            一過性の利益ではなく、100年先の街並みに誇れる仕事を。
                            その想いを胸に、誠実な家づくりと、透明性の高い不動産取引を追求し続けます。
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership / Management Team */}
            <section className="container mx-auto px-6 py-24 border-b border-white/5">
                <div className="max-w-6xl mx-auto">
                    <span className="text-nara-gold text-xs tracking-[0.2em] block mb-12 text-center">LEADERSHIP</span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                        {/* President */}
                        <div className="group text-center">
                            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
                                    alt="古谷 泰彦"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 border border-nara-gold/30 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                            </div>
                            <h3 className="text-sm text-nara-gold tracking-widest mb-2 font-serif">代表取締役社長</h3>
                            <p className="text-2xl text-white font-serif tracking-widest font-bold">古谷 泰彦</p>
                        </div>

                        {/* Senior Managing Director */}
                        <div className="group text-center">
                            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src="https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80"
                                    alt="小林 敬昌"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 border border-nara-gold/30 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                            </div>
                            <h3 className="text-sm text-nara-gold tracking-widest mb-2 font-serif">代表取締役専務</h3>
                            <p className="text-2xl text-white font-serif tracking-widest font-bold">小林 敬昌</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Profile (About Us) */}
            <section className="container mx-auto px-6 py-24 border-b border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-16">
                        {/* Info Column */}
                        <div className="md:w-1/2">
                            <span className="text-nara-gold text-xs tracking-[0.2em] block mb-8">ABOUT US</span>
                            <h2 className="text-3xl font-serif mb-12">本社概要</h2>

                            <dl className="space-y-6 font-serif">
                                <div className="border-b border-white/10 pb-6 grid grid-cols-1 md:grid-cols-3 gap-2">
                                    <dt className="text-gray-500 text-sm tracking-widest">商号</dt>
                                    <dd className="col-span-2 text-white text-lg">株式会社やまと不動産</dd>
                                </div>
                                <div className="border-b border-white/10 pb-6 grid grid-cols-1 md:grid-cols-3 gap-2">
                                    <dt className="text-gray-500 text-sm tracking-widest">代表者</dt>
                                    <dd className="col-span-2 text-white">
                                        代表取締役社長　古谷 泰彦<br />
                                        代表取締役専務　小林 敬昌
                                    </dd>
                                </div>
                                <div className="border-b border-white/10 pb-6 grid grid-cols-1 md:grid-cols-3 gap-2">
                                    <dt className="text-gray-500 text-sm tracking-widest">所在地</dt>
                                    <dd className="col-span-2 text-white">
                                        〒639-0226<br />
                                        奈良県香芝市五位堂3-432-1
                                    </dd>
                                </div>
                                <div className="border-b border-white/10 pb-6 grid grid-cols-1 md:grid-cols-3 gap-2">
                                    <dt className="text-gray-500 text-sm tracking-widest">資本金</dt>
                                    <dd className="col-span-2 text-white">1,000万円</dd>
                                </div>
                                <div className="border-b border-white/10 pb-6 grid grid-cols-1 md:grid-cols-3 gap-2">
                                    <dt className="text-gray-500 text-sm tracking-widest">免許番号</dt>
                                    <dd className="col-span-2 text-white">奈良県知事 (4) 第3836号</dd>
                                </div>
                                <div className="border-b border-white/10 pb-6 grid grid-cols-1 md:grid-cols-3 gap-2">
                                    <dt className="text-gray-500 text-sm tracking-widest">加盟団体</dt>
                                    <dd className="col-span-2 text-white text-sm leading-relaxed">
                                        (社)全日本不動産協会員<br />
                                        (社)不動産保証協会会員<br />
                                        近畿圏不動産流通機構会員
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        {/* Image & Map Column */}
                        <div className="md:w-1/2 space-y-8">
                            <div className="relative aspect-video w-full bg-[#111] overflow-hidden group">
                                <Image
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                                    alt="Head Office"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            {/* Map Placeholder */}
                            <div className="w-full h-[300px] bg-[#111] relative border border-white/10 overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.0772776361735!2d135.7118!3d34.5512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDMzJzA0LjMiTiAxMzXCsDQyJzQyLjUiRQ!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                                    allowFullScreen
                                    loading="lazy"
                                />
                                <div className="absolute top-4 left-4 bg-black/80 px-4 py-2 text-xs text-white border-l border-nara-gold">
                                    HEAD OFFICE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Branch Info (Support) */}
            <section className="container mx-auto px-6 py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row-reverse gap-16">
                        {/* Info Column */}
                        <div className="md:w-1/2">
                            <span className="text-nara-gold text-xs tracking-[0.2em] block mb-8">BRANCH</span>
                            <h2 className="text-3xl font-serif mb-12">支店情報</h2>

                            <dl className="space-y-6 font-serif">
                                <div className="border-b border-white/10 pb-6 grid grid-cols-1 md:grid-cols-3 gap-2">
                                    <dt className="text-gray-500 text-sm tracking-widest">支店名</dt>
                                    <dd className="col-span-2 text-white text-lg">やまと不動産 奈良大宮店</dd>
                                </div>
                                <div className="border-b border-white/10 pb-6 grid grid-cols-1 md:grid-cols-3 gap-2">
                                    <dt className="text-gray-500 text-sm tracking-widest">所在地</dt>
                                    <dd className="col-span-2 text-white">
                                        〒630-0000<br />
                                        奈良県奈良市大宮町X-X-X
                                    </dd>
                                </div>
                                <div className="border-b border-white/10 pb-6 grid grid-cols-1 md:grid-cols-3 gap-2">
                                    <dt className="text-gray-500 text-sm tracking-widest">連絡先</dt>
                                    <dd className="col-span-2 text-white flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <Phone size={14} className="text-nara-gold" /> 0742-XX-XXXX
                                        </div>
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        {/* Image & Map Column */}
                        <div className="md:w-1/2 space-y-8">
                            <div className="relative aspect-video w-full bg-[#111] overflow-hidden group">
                                <Image
                                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
                                    alt="Branch Office"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            {/* Map Placeholder */}
                            <div className="w-full h-[300px] bg-[#111] relative border border-white/10 overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1528.0!2d135.8!3d34.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNara!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                                    allowFullScreen
                                    loading="lazy"
                                />
                                <div className="absolute top-4 left-4 bg-black/80 px-4 py-2 text-xs text-white border-l border-nara-gold">
                                    NARA OMIYA BRANCH
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
