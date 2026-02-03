'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials, Testimonial } from '@/data/testimonials';

interface TestimonialSectionProps {
    filterByCity?: string; // 特定のエリアでフィルタリング
}

export default function TestimonialSection({ filterByCity }: TestimonialSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // フィルタリング
    const filteredTestimonials = filterByCity
        ? testimonials.filter(t => t.city === filterByCity)
        : testimonials;

    if (filteredTestimonials.length === 0) {
        return null;
    }

    const currentTestimonial = filteredTestimonials[currentIndex];

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? filteredTestimonials.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === filteredTestimonials.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* セクションヘッダー */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4"
                    >
                        <MessageCircle className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-semibold text-gray-700">
                            お客様の声
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        実際に建てたお客様の声
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        やまと不動産で理想の家を建てられたお客様の生の声をご紹介します
                    </motion.p>
                </div>

                {/* カードスライダー */}
                <div className="relative">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
                    >
                        {/* ヘッダー情報 */}
                        <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                            <div className="flex-1 min-w-[200px]">
                                <div className="text-2xl font-bold text-gray-900 mb-1">
                                    {currentTestimonial.customerName}
                                </div>
                                {currentTestimonial.age && currentTestimonial.family && (
                                    <div className="text-sm text-gray-600">
                                        {currentTestimonial.age} / {currentTestimonial.family}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                                    <MapPin className="w-3 h-3" />
                                    {currentTestimonial.city}
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm">
                                    <Home className="w-3 h-3" />
                                    {currentTestimonial.plan}
                                </span>
                            </div>
                        </div>

                        {/* コメント */}
                        <div className="mb-6">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                「{currentTestimonial.comment}」
                            </p>
                        </div>

                        {/* メタ情報 */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <div>
                                <span className="font-semibold">建築時期：</span>
                                {currentTestimonial.date}
                            </div>
                            <div>
                                <span className="font-semibold">土地面積：</span>
                                約{currentTestimonial.landSize}坪
                            </div>
                        </div>
                    </motion.div>

                    {/* ナビゲーションボタン */}
                    {filteredTestimonials.length > 1 && (
                        <>
                            <button
                                onClick={handlePrev}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 
                           bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all"
                                aria-label="前のお客様の声"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-700" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 
                           bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all"
                                aria-label="次のお客様の声"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-700" />
                            </button>
                        </>
                    )}
                </div>

                {/* インジケーター */}
                {filteredTestimonials.length > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {filteredTestimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-blue-600 w-8'
                                        : 'bg-gray-300 w-2 hover:bg-gray-400'
                                    }`}
                                aria-label={`${index + 1}番目のお客様の声を表示`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
