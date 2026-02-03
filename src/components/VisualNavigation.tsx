"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navItems = [
    {
        title: "標準仕様",
        subtitle: "HIGH-GRADE SPECS",
        desc: "「え、これも標準？」\n驚きの設備を標準装備。",
        link: "/specs",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80", // Kitchen detail
        delay: 0
    },
    {
        title: "商品ラインナップ",
        subtitle: "PRODUCT LINEUP",
        desc: "京・花・風。\n選べる3つのグレード。",
        link: "/lineup",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80", // Modern Japanese exterior
        delay: 0.1
    },
    {
        title: "施工事例",
        subtitle: "OUR WORKS",
        desc: "理想の暮らしを叶えた\nオーナー様の実例。",
        link: "/works",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80", // Living room
        delay: 0.2
    }
];

export function VisualNavigation() {
    return (
        <section className="bg-nara-paper py-0 md:py-12 relative z-20 -mt-10 md:-mt-20 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {navItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: item.delay }}
                        >
                            <Link href={item.link} className="group block relative h-[400px] overflow-hidden rounded-sm shadow-2xl">
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                                {/* Gradual Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-nara-charcoal/90 via-nara-charcoal/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                                    <p className="text-nara-gold text-xs tracking-[0.3em] mb-2 font-serif">{item.subtitle}</p>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300">
                                        {item.title}
                                        <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-nara-gold" size={24} />
                                    </h3>
                                    <p className="font-serif text-sm leading-loose opacity-80 whitespace-pre-line border-l-2 border-nara-gold pl-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Hover Border Effect */}
                                <div className="absolute inset-4 border border-white/20 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
