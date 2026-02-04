"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { PropertyFilter, FilterValues } from "@/components/PropertyFilter";
import { ListingCard } from "@/components/ListingCard";
import TestimonialSection from "@/components/TestimonialSection";
import PropertyFAQSection from "@/components/PropertyFAQSection";
import { properties } from "@/data/properties";
import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";

export default function SubdivisionPage() {
    // フィルター状態管理
    const [filterValues, setFilterValues] = useState<FilterValues>({
        city: "すべて",
        station: "すべて",
        priceMin: 0,
        priceMax: 10000,
        landSizeMin: 0,
        landSizeMax: 200,
        hasConstructionCondition: "all",
    });

    const [displayCount, setDisplayCount] = useState(30);
    const ITEMS_PER_PAGE = 30;

    // フィルタリングロジック
    const filteredProperties = useMemo(() => {
        return properties.filter((property) => {
            if (filterValues.city !== "すべて" && property.city !== filterValues.city) return false;
            if (filterValues.station !== "すべて" && property.station !== filterValues.station) return false;
            if (property.priceNumeric > 0) {
                if (property.priceNumeric < filterValues.priceMin || property.priceNumeric > filterValues.priceMax) return false;
            }
            if (property.landSizeNumeric < filterValues.landSizeMin || property.landSizeNumeric > filterValues.landSizeMax) return false;
            if (filterValues.hasConstructionCondition === "yes" && !property.hasConstructionCondition) return false;
            if (filterValues.hasConstructionCondition === "no" && property.hasConstructionCondition) return false;
            return true;
        });
    }, [filterValues]);

    const displayedProperties = useMemo(() => {
        return filteredProperties.slice(0, displayCount);
    }, [filteredProperties, displayCount]);

    const handleLoadMore = () => {
        setDisplayCount(prev => Math.min(prev + ITEMS_PER_PAGE, filteredProperties.length));
    };

    const handleFilterChange = (newFilters: FilterValues) => {
        setFilterValues(newFilters);
        setDisplayCount(30);
    };

    const hasMore = displayCount < filteredProperties.length;

    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white">
            <Header />

            {/* Gallery Hero Section */}
            <section className="relative h-[80svh] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80"
                        alt="Nara Landscape"
                        fill
                        className="object-cover opacity-30 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#0a0a0a]" />
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="block text-nara-gold text-xs tracking-[0.4em] mb-6 font-bold">
                            THE GALLERY
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif tracking-widest leading-tight mb-8">
                            奈良の土壌を、<br className="md:hidden" />選ぶ。
                        </h1>
                        <p className="text-gray-400 font-serif tracking-[0.2em] text-sm md:text-base">
                            あなたの人生を刻む、<br className="md:hidden" />唯一無二のキャンバス。
                        </p>
                    </motion.div>
                </div>

                {/* Filter Trigger Placement */}
                <div className="absolute bottom-0 w-full z-20">
                    <PropertyFilter
                        filterValues={filterValues}
                        onChange={handleFilterChange}
                        resultCount={filteredProperties.length}
                    />
                </div>
            </section>

            {/* Listing Section */}
            <section className="bg-[#0a0a0a] pb-32 px-4 md:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* Header Info */}
                    <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-4">
                        <div className="text-gray-500 font-serif text-sm tracking-widest">
                            <span className="text-white text-lg mr-2">{filteredProperties.length}</span>
                            WORKS ON DISPLAY
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
                        {displayedProperties.map((item, idx) => {
                            // Inject Chaos Block after 5th item
                            if (idx === 5) {
                                return (
                                    <div key="chaos-injection" className="md:col-span-2 lg:col-span-3 py-24 my-12 relative overflow-hidden group cursor-pointer">
                                        <Link href="/contact" className="block relative w-full h-full">
                                            <div className="absolute inset-0 bg-[url('/images/texture-chaos.png')] opacity-20 mix-blend-overlay animate-pulse" />
                                            <div className="absolute inset-0 border-y border-nara-gold/30" />

                                            <div className="relative z-10 text-center flex flex-col items-center justify-center p-8">
                                                <Lock className="text-nara-gold mb-6 w-8 h-8" />
                                                <h3 className="text-2xl md:text-4xl font-serif text-white tracking-widest mb-4">
                                                    公開できない、<span className="text-nara-gold">理由</span>がある。
                                                </h3>
                                                <p className="text-gray-400 font-serif tracking-widest text-sm mb-8">
                                                    WEBには載らない「極秘物件」リストへの招待状。
                                                </p>
                                                <span className="inline-block border border-nara-gold text-nara-gold px-8 py-3 text-xs tracking-[0.3em] hover:bg-nara-gold hover:text-white transition-colors">
                                                    UNLOCK SECRET
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            }

                            return (
                                <ListingCard key={item.id} property={item} index={idx} />
                            );
                        })}
                    </div>

                    {/* Load More */}
                    {hasMore && (
                        <div className="mt-24 text-center">
                            <button
                                onClick={handleLoadMore}
                                className="text-white hover:text-nara-gold transition-colors font-serif tracking-[0.2em] border-b border-white/30 hover:border-nara-gold pb-1"
                            >
                                VIEW MORE COLLECTION
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Dark Styled Footer Sections */}
            <div className="bg-[#111] py-24 border-t border-white/5">
                <TestimonialSection />
            </div>
            <div className="bg-[#0a0a0a] py-24">
                <PropertyFAQSection />
            </div>
        </main>
    );
}
