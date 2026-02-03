"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { PropertyFilter, FilterValues } from "@/components/PropertyFilter";
import PropertyPlanCard from "@/components/PropertyPlanCard";
import TestimonialSection from "@/components/TestimonialSection";
import PropertyFAQSection from "@/components/PropertyFAQSection";
import { properties } from "@/data/properties";
import { buildingPlans, getBuildingPlanById } from "@/data/building_plans";
import Image from "next/image";
import { MapPin, Ruler, Tag } from "lucide-react";
import Link from "next/link";

// Status Badge Helper
const getStatusBadge = (status: string) => {
    switch (status) {
        case "New":
            return <span className="bg-nara-gold text-white text-xs px-2 py-1 font-bold tracking-widest">NEW</span>;
        case "Reserved":
            return <span className="bg-nara-charcoal text-white text-xs px-2 py-1 font-bold tracking-widest">商談中</span>;
        case "Sold":
            return <span className="bg-gray-400 text-white text-xs px-2 py-1 font-bold tracking-widest">SOLD OUT</span>;
        default:
            return <span className="bg-green-600 text-white text-xs px-2 py-1 font-bold tracking-widest">販売中</span>;
    }
};

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

    // ページネーション状態管理
    const [displayCount, setDisplayCount] = useState(30);
    const ITEMS_PER_PAGE = 30;

    // フィルタリングロジック
    const filteredProperties = useMemo(() => {
        return properties.filter((property) => {
            // エリア（市町村）フィルター
            if (filterValues.city !== "すべて" && property.city !== filterValues.city) {
                return false;
            }

            // 駅フィルター
            if (filterValues.station !== "すべて" && property.station !== filterValues.station) {
                return false;
            }

            // 価格フィルター（成約済みは除外しない）
            if (property.priceNumeric > 0) {
                if (
                    property.priceNumeric < filterValues.priceMin ||
                    property.priceNumeric > filterValues.priceMax
                ) {
                    return false;
                }
            }

            // 土地面積フィルター
            if (
                property.landSizeNumeric < filterValues.landSizeMin ||
                property.landSizeNumeric > filterValues.landSizeMax
            ) {
                return false;
            }

            // 建築条件フィルター
            if (filterValues.hasConstructionCondition === "yes" && !property.hasConstructionCondition) {
                return false;
            }
            if (filterValues.hasConstructionCondition === "no" && property.hasConstructionCondition) {
                return false;
            }

            return true;
        });
    }, [filterValues]);

    // 表示する物件（ページネーション適用）
    const displayedProperties = useMemo(() => {
        return filteredProperties.slice(0, displayCount);
    }, [filteredProperties, displayCount]);

    // さらに表示ボタンのハンドラー
    const handleLoadMore = () => {
        setDisplayCount(prev => Math.min(prev + ITEMS_PER_PAGE, filteredProperties.length));
    };

    // フィルター変更時にページネーションをリセット
    const handleFilterChange = (newFilters: FilterValues) => {
        setFilterValues(newFilters);
        setDisplayCount(30);
    };

    // すべて表示されているか
    const hasMore = displayCount < filteredProperties.length;

    return (
        <main className="bg-y-off-white min-h-screen">
            <Header />

            {/* Header Hero */}
            <section className="bg-y-charcoal pt-32 pb-16 px-6 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-serif mb-4"
                >
                    分譲地情報
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-nara-gold text-xs tracking-[0.2em] font-sans"
                >
                    REAL ESTATE LISTINGS
                </motion.p>
            </section>

            {/* Filter Section */}
            <PropertyFilter
                filterValues={filterValues}
                onChange={handleFilterChange}
                resultCount={filteredProperties.length}
            />

            {/* List Section */}
            <section className="py-16 px-4 md:px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-8 flex flex-col md:flex-row justify-between items-end gap-4 border-b border-gray-200 pb-4">
                        <div>
                            <h2 className="text-xl font-serif text-y-charcoal font-bold mb-2">公開物件一覧</h2>
                            <p className="text-sm text-gray-500">※WEB未公開の物件も多数ございます。詳細はお問い合わせください。</p>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl font-serif font-bold text-nara-gold">{filteredProperties.length}</span>
                            <span className="text-sm text-gray-500 ml-1">件 表示中</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedProperties.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white group overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-2 border-transparent hover:border-nara-gold"
                            >
                                {/* Image Area */}
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute top-2 left-2 z-10 flex gap-2">
                                        {getStatusBadge(item.status)}
                                    </div>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {item.status === "Sold" && (
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                            <span className="text-white font-serif text-2xl tracking-widest border-2 border-white px-6 py-2 transform -rotate-12">SOLD OUT</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content Area */}
                                <div className="p-6">
                                    <h3 className="text-lg font-serif font-bold text-y-charcoal mb-2 group-hover:text-nara-gold transition-colors">{item.name}</h3>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-start gap-3 text-sm text-gray-600">
                                            <MapPin size={16} className="mt-0.5 text-gray-400 shrink-0" />
                                            <span>{item.address}</span>
                                        </div>
                                        <div className="flex items-start gap-3 text-sm text-gray-600">
                                            <Ruler size={16} className="mt-0.5 text-gray-400 shrink-0" />
                                            <span>{item.landSize}</span>
                                        </div>
                                        <div className="flex items-start gap-3 text-sm text-gray-600">
                                            <Tag size={16} className="mt-0.5 text-gray-400 shrink-0" />
                                            <span className="font-bold text-y-charcoal text-lg">{item.price}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {item.features.map((tag, i) => (
                                            <span key={i} className="text-[10px] border border-gray-200 text-gray-500 px-2 py-1 bg-gray-50">{tag}</span>
                                        ))}
                                    </div>

                                    {/* セットプラン表示 */}
                                    {item.recommendedPlanIds && item.recommendedPlanIds.length > 0 && (
                                        <PropertyPlanCard
                                            landPrice={item.priceNumeric}
                                            recommendedPlans={item.recommendedPlanIds
                                                .map(id => getBuildingPlanById(id))
                                                .filter((plan): plan is NonNullable<typeof plan> => plan !== undefined)}
                                        />
                                    )}

                                    <Link href="/contact" className="block w-full text-center bg-gray-900 text-white py-3 text-sm font-serif hover:bg-nara-gold transition-colors mt-6">
                                        詳細資料を請求する
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* さらに表示ボタン */}
                    {hasMore && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-12 text-center"
                        >
                            <button
                                onClick={handleLoadMore}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-nara-gold text-nara-gold hover:bg-nara-gold hover:text-white transition-all duration-300 font-serif text-lg shadow-md hover:shadow-xl"
                            >
                                <span>さらに表示</span>
                                <span className="text-sm">（残り {filteredProperties.length - displayCount} 件）</span>
                            </button>
                            <p className="text-sm text-gray-500 mt-4">
                                {displayCount} / {filteredProperties.length} 件を表示中
                            </p>
                        </motion.div>
                    )}

                    {/* CSV Upload CTA Logic (Visual Representation of the "System") */}
                    <div className="mt-24 p-8 bg-gray-100 border-dashed border-2 border-gray-300 rounded-lg text-center opacity-50 hover:opacity-100 transition-opacity">
                        <p className="text-gray-500 font-serif mb-2">管理者用エリア</p>
                        <p className="text-xs text-gray-400">CSVファイルをチャットにアップロードして、このリストを更新できます。</p>
                    </div>
                </div>
            </section>

            {/* お客様の声セクション */}
            <TestimonialSection />

            {/* FAQセクション */}
            <PropertyFAQSection />
        </main>
    );
}
