"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { ArrowRight, MapPin, Home, Calculator, User, Camera } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SmartCalculator } from "@/components/SmartCalculator";

export default function SmartRationalismPage() {
    return (
        <div className="bg-white min-h-screen text-[#333] font-sans selection:bg-[#e0d6c8] selection:text-black">
            <Header />

            {/* Hero Section: Bright & Welcoming */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80"
                    alt="Bright Japanese Living Room"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-white/20"></div>

                <div className="relative z-10 text-center bg-white/95 backdrop-blur-md p-8 md:p-16 max-w-2xl mx-4 shadow-sm rounded-sm">
                    <p className="text-[#8c8070] font-medium tracking-widest mb-4">奈良・矢田で叶える、理想の暮らし</p>
                    <h1 className="text-3xl md:text-5xl font-serif font-medium leading-relaxed mb-6 text-[#4a4a4a]">
                        我慢もしない。<br />
                        無理もしない。<br />
                        <span className="text-2xl md:text-3xl block mt-4 text-[#8c8070]">それが、私たち家族の答えでした。</span>
                    </h1>
                    <p className="text-gray-600 leading-8 mb-8">
                        広いキッチンも、明るいリビングも、将来の教育費も。<br />
                        何かを諦めるのではなく、「場所」を変えるだけで<br />
                        すべてが叶うことに気づきました。
                    </p>
                    <Link href="#concept" className="inline-block border border-[#8c8070] text-[#8c8070] px-8 py-3 hover:bg-[#8c8070] hover:text-white transition-colors rounded-full">
                        3,060万円の理由を知る
                    </Link>
                </div>
            </section>

            {/* CONCEPT: Yamato's Promise */}
            <section id="concept" className="py-24 px-6 bg-[#faf9f7]">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="block text-[#8c8070] text-sm tracking-widest mb-2 font-serif">YAMATO’S PROPOSAL</span>
                        <h2 className="text-3xl font-medium text-[#4a4a4a] mb-8">「いい家」と「将来の安心」<br />やまと不動産なら、両方叶います。</h2>
                        <div className="w-12 h-[1px] bg-[#8c8070] mx-auto mb-8"></div>
                        <p className="leading-8 text-gray-600 max-w-2xl mx-auto">
                            「素敵な家に住みたい」という憧れと、<br />
                            「ローンは大丈夫かな？」という不安。<br /><br />
                            地元・奈良で長年家づくりに携わってきた私たちだからこそ、<br />
                            その両方を解決する「矢田」という答えにたどり着きました。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-white p-12 shadow-sm rounded-lg">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#f0eee9] rounded-full flex items-center justify-center mb-4 text-[#8c8070]">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-[#4a4a4a] mb-2">土地：780万円（矢田）</h3>
                            <p className="text-sm text-gray-500">
                                少し不便かもしれません。<br />
                                でも、車があれば5分で生活圏。<br />
                                浮いた予算は、家族の未来へ。
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-2xl text-[#d4d4d4] hidden md:block">+</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#f0eee9] rounded-full flex items-center justify-center mb-4 text-[#8c8070]">
                                <Home size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-[#4a4a4a] mb-2">建物：2,280万円（高品質）</h3>
                            <p className="text-sm text-gray-500">
                                やまと不動産の標準仕様。<br />
                                耐震等級3・制震ダンパー標準。<br />
                                地震大国に住む家族の安心を守ります。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WORKS: Visual Proof */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="block text-[#8c8070] text-sm tracking-widest mb-2 font-serif">WORKS</span>
                            <h2 className="text-3xl font-medium text-[#4a4a4a]">暮らしの風景</h2>
                        </div>
                        <Link href="/subdivision" className="text-sm text-gray-500 hover:text-[#8c8070] transition-colors border-b border-gray-300 pb-1">
                            一覧を見る
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Image 1: Living */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4 rounded-sm">
                                <Image
                                    src="https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80"
                                    alt="明るいリビング"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-lg font-medium text-[#4a4a4a] mb-1">家族が集う広々リビング</h3>
                            <p className="text-sm text-gray-500">吹き抜けのある開放的な空間</p>
                        </div>

                        {/* Image 2: Kitchen */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4 rounded-sm">
                                <Image
                                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80"
                                    alt="高機能キッチン"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-lg font-medium text-[#4a4a4a] mb-1">Cleanup STEDIA</h3>
                            <p className="text-sm text-gray-500">毎日のお料理が楽しくなる</p>
                        </div>

                        {/* Image 3: Exterior/Garden */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4 rounded-sm">
                                <Image
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
                                    alt="外観と庭"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-lg font-medium text-[#4a4a4a] mb-1">50坪のゆとりある敷地</h3>
                            <p className="text-sm text-gray-500">BBQも楽しめるプライベートガーデン</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SIMULATION: Smart Calculator */}
            <section className="py-24 px-6 bg-[#f5f5f5]">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="block text-[#8c8070] text-sm tracking-widest mb-2 font-serif">SIMULATION</span>
                        <h2 className="text-3xl font-medium text-[#4a4a4a] mb-4">資金計画シミュレーション</h2>
                        <p className="text-gray-600">駅近物件と比較して、どれくらいゆとりが生まれるか確認してみましょう。</p>
                    </div>

                    <div className="bg-white p-2 shadow-lg rounded-lg">
                        <SmartCalculator />
                    </div>
                </div>
            </section>

            {/* STAFF / ABOUT: Trust */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-square">
                            <Image
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                                alt="担当スタッフ"
                                fill
                                className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <div>
                            <span className="block text-[#8c8070] text-sm tracking-widest mb-4 font-serif">ABOUT US</span>
                            <h2 className="text-3xl font-medium text-[#4a4a4a] mb-8 leading-relaxed">
                                「良い家」ではなく、<br />
                                「良い暮らし」をつくる。
                            </h2>
                            <p className="text-gray-600 leading-8 mb-8">
                                私たちが提案したいのは、ただの建物ではありません。<br />
                                ローン返済に追われることのない、ゆとりある毎日。<br />
                                子供の教育や、家族旅行にお金を使える未来です。<br />
                                矢田という場所だからこそ実現できる、賢い選択をサポートします。
                            </p>
                            <Link href="/company" className="text-[#8c8070] border-b border-[#8c8070] pb-1 hover:opacity-70 transition-opacity">
                                スタッフ紹介を見る
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#4a4a4a] text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif mb-8">まずは、現地をご覧ください</h2>
                    <p className="text-gray-300 mb-12 max-w-lg mx-auto leading-7">
                        写真だけでは伝わらない、空気感や周辺環境を<br />
                        ぜひご自身の目でお確かめください。
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-[#4a4a4a] px-12 py-4 text-lg font-medium tracking-wide hover:bg-gray-100 transition-colors rounded-sm">
                        見学予約・お問い合わせ
                    </Link>
                </div>
            </section>
        </div>
    );
}
