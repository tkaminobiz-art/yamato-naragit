'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { faqItems, FAQItem } from '@/data/faq_items';

interface PropertyFAQSectionProps {
    maxItems?: number; // 表示する最大件数
}

export default function PropertyFAQSection({ maxItems = 10 }: PropertyFAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const displayItems = faqItems.slice(0, maxItems);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* セクションヘッダー */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full shadow-sm mb-4"
                    >
                        <HelpCircle className="w-5 h-5 text-amber-600" />
                        <span className="text-sm font-semibold text-gray-700">
                            よくある質問
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        FAQ
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600"
                    >
                        お客様からよくいただく質問をまとめました
                    </motion.p>
                </div>

                {/* FAQアコーディオン */}
                <div className="space-y-3">
                    {displayItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-shadow"
                        >
                            {/* 質問ヘッダー */}
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-6 py-5 flex items-start gap-4 text-left hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                                    <span className="text-amber-700 font-bold text-sm">Q</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 text-base md:text-lg pr-4">
                                        {item.question}
                                    </h3>
                                </div>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                </motion.div>
                            </button>

                            {/* 回答コンテンツ */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-5 pl-[4.5rem]">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                                    <span className="text-blue-700 font-bold text-sm">A</span>
                                                </div>
                                                <p className="text-gray-700 leading-relaxed pt-1">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* さらに質問するCTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100">
                        <MessageSquare className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            その他のご質問はお気軽に
                        </h3>
                        <p className="text-gray-600 mb-6">
                            専門スタッフが丁寧にお答えします
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="/contact"
                                className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
                            >
                                📧 お問い合わせ
                            </a>
                            <a
                                href="/reservation"
                                className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-semibold transition-all border-2 border-gray-200 hover:border-amber-300"
                            >
                                📅 来場予約
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
