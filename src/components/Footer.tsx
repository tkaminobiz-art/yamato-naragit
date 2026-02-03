"use client";

import Link from "next/link";
import { ArrowRight, Instagram, Facebook, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-y-charcoal text-white pt-20 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Address */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block group">
                            <div className="font-serif text-2xl font-bold tracking-widest flex items-center gap-2">
                                <span className="w-3 h-3 bg-y-gold rounded-full" />
                                やまと不動産
                            </div>
                        </Link>
                        <address className="not-italic text-sm text-gray-400 font-serif leading-relaxed">
                            〒630-0000<br />
                            奈良県奈良市〇〇町1-2-3<br />
                            TEL: 0742-00-0000<br />
                            Email: info@yamato-example.com
                        </address>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-y-gold transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-y-gold transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-y-gold tracking-widest">CONTENT</h3>
                        <nav className="flex flex-col gap-4 text-sm font-serif">
                            <Link href="/concept" className="text-gray-400 hover:text-white transition-colors">コンセプト</Link>
                            <Link href="/specs" className="text-gray-400 hover:text-white transition-colors">標準仕様</Link>
                            <Link href="/lineup" className="text-gray-400 hover:text-white transition-colors">商品ラインナップ</Link>
                            <Link href="/works" className="text-gray-400 hover:text-white transition-colors">施工事例</Link>
                            <Link href="/company" className="text-gray-400 hover:text-white transition-colors">会社概要</Link>
                        </nav>
                    </div>

                    {/* Contact & Support */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-y-gold tracking-widest">SUPPORT</h3>
                        <nav className="flex flex-col gap-4 text-sm font-serif">
                            <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">よくある質問</Link>
                            <Link href="/flow" className="text-gray-400 hover:text-white transition-colors">家づくりの流れ</Link>
                            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">プライバシーポリシー</Link>
                        </nav>
                    </div>

                    {/* CTA */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-y-gold tracking-widest">CONTACT</h3>
                        <div className="space-y-4">
                            <Link href="/contact" className="group flex items-center justify-between p-4 border border-gray-600 hover:border-y-gold hover:bg-y-gold/10 transition-colors">
                                <span className="font-serif text-sm tracking-widest">資料請求・お問い合わせ</span>
                                <Mail size={16} className="text-gray-400 group-hover:text-y-gold transition-colors" />
                            </Link>
                            <Link href="/reservation" className="group flex items-center justify-between p-4 bg-y-brown hover:bg-y-gold transition-colors shadow-lg">
                                <span className="font-serif text-sm tracking-widest text-white">来場予約</span>
                                <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500 font-serif tracking-widest">
                    &copy; 2024 YAMATO REAL ESTATE CO., LTD. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    );
}
