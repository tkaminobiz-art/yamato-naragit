"use client";

import { useState, useEffect } from "react";
import { Filter, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FilterValues {
    city: string;
    station: string;
    priceMin: number;
    priceMax: number;
    landSizeMin: number;
    landSizeMax: number;
    hasConstructionCondition: "all" | "yes" | "no";
}

interface PropertyFilterProps {
    filterValues: FilterValues;
    onChange: (filters: FilterValues) => void;
    resultCount: number;
}

// エリア（市町村）のリスト
const CITIES = [
    "すべて",
    "京田辺市",
    "木津川市",
    "奈良市",
    "大和郡山市",
    "天理市",
    "橿原市",
    "生駒市",
    "生駒郡斑鳩町",
];

// 駅のリスト（ユーザー提供データから）
const STATIONS = [
    "すべて",
    "新田辺",
    "菜畑",
    "新大宮",
    "白庭台",
    "大和小泉",
    "学園前",
    "前栽",
    "法隆寺",
    "高の原",
    "畝傍",
    "八木西口",
    "東生駒",
    "尼ヶ辻",
];

export function PropertyFilter({ filterValues, onChange, resultCount }: PropertyFilterProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // クライアントサイドでのみ実行
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkDesktop();
        window.addEventListener('resize', checkDesktop);

        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    const handleReset = () => {
        onChange({
            city: "すべて",
            station: "すべて",
            priceMin: 0,
            priceMax: 10000,
            landSizeMin: 0,
            landSizeMax: 200,
            hasConstructionCondition: "all",
        });
    };

    return (

        <>
            {/* Filter Trigger Button */}
            <div className="flex justify-end container mx-auto px-6 py-8">
                <button
                    onClick={() => setIsOpen(true)}
                    className="group flex items-center gap-3 px-6 py-3 border border-white/20 hover:border-nara-gold transition-colors duration-300 rounded-sm"
                >
                    <span className="font-serif text-white tracking-[0.2em] text-sm group-hover:text-nara-gold transition-colors">FILTER</span>
                    <Filter size={16} className="text-nara-gold" />
                </button>
            </div>

            {/* Filter Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-y-charcoal/95 backdrop-blur-md flex items-center justify-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            className="w-full max-w-4xl bg-[#1a1a1a] border border-white/10 rounded-sm p-8 md:p-12 max-h-[90vh] overflow-y-auto"
                        >
                            <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
                                <h3 className="text-2xl font-serif text-white tracking-widest">
                                    条件を絞り込む
                                </h3>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="space-y-12">
                                {/* エリア・駅 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-xs font-sans text-nara-gold tracking-widest mb-4">
                                            AREA
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={filterValues.city}
                                                onChange={(e) =>
                                                    onChange({ ...filterValues, city: e.target.value })
                                                }
                                                className="w-full bg-transparent border-b border-gray-700 text-white py-3 pr-8 focus:outline-none focus:border-nara-gold transition-colors appearance-none rounded-none"
                                            >
                                                {CITIES.map((city) => (
                                                    <option key={city} value={city} className="bg-y-charcoal text-white">
                                                        {city}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-sans text-nara-gold tracking-widest mb-4">
                                            STATION
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={filterValues.station}
                                                onChange={(e) =>
                                                    onChange({ ...filterValues, station: e.target.value })
                                                }
                                                className="w-full bg-transparent border-b border-gray-700 text-white py-3 pr-8 focus:outline-none focus:border-nara-gold transition-colors appearance-none rounded-none"
                                            >
                                                {STATIONS.map((station) => (
                                                    <option key={station} value={station} className="bg-y-charcoal text-white">
                                                        {station}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                                        </div>
                                    </div>
                                </div>

                                {/* 価格・土地面積 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-xs font-sans text-nara-gold tracking-widest mb-4">
                                            PRICE (万円)
                                        </label>
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="number"
                                                placeholder="MIN"
                                                value={filterValues.priceMin || ""}
                                                onChange={(e) =>
                                                    onChange({
                                                        ...filterValues,
                                                        priceMin: Number(e.target.value) || 0,
                                                    })
                                                }
                                                className="flex-1 bg-transparent border-b border-gray-700 text-white py-3 focus:outline-none focus:border-nara-gold transition-colors placeholder-gray-700"
                                            />
                                            <span className="text-gray-500">〜</span>
                                            <input
                                                type="number"
                                                placeholder="MAX"
                                                value={filterValues.priceMax === 10000 ? "" : filterValues.priceMax}
                                                onChange={(e) =>
                                                    onChange({
                                                        ...filterValues,
                                                        priceMax: Number(e.target.value) || 10000,
                                                    })
                                                }
                                                className="flex-1 bg-transparent border-b border-gray-700 text-white py-3 focus:outline-none focus:border-nara-gold transition-colors placeholder-gray-700"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-sans text-nara-gold tracking-widest mb-4">
                                            SIZE (坪)
                                        </label>
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="number"
                                                placeholder="MIN"
                                                value={filterValues.landSizeMin || ""}
                                                onChange={(e) =>
                                                    onChange({
                                                        ...filterValues,
                                                        landSizeMin: Number(e.target.value) || 0,
                                                    })
                                                }
                                                className="flex-1 bg-transparent border-b border-gray-700 text-white py-3 focus:outline-none focus:border-nara-gold transition-colors placeholder-gray-700"
                                            />
                                            <span className="text-gray-500">〜</span>
                                            <input
                                                type="number"
                                                placeholder="MAX"
                                                value={filterValues.landSizeMax === 200 ? "" : filterValues.landSizeMax}
                                                onChange={(e) =>
                                                    onChange({
                                                        ...filterValues,
                                                        landSizeMax: Number(e.target.value) || 200,
                                                    })
                                                }
                                                className="flex-1 bg-transparent border-b border-gray-700 text-white py-3 focus:outline-none focus:border-nara-gold transition-colors placeholder-gray-700"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 建築条件 */}
                                <div>
                                    <label className="block text-xs font-sans text-nara-gold tracking-widest mb-4">
                                        CONDITION
                                    </label>
                                    <div className="flex gap-8">
                                        {[
                                            { label: "指定しない", value: "all" },
                                            { label: "建築条件あり", value: "yes" },
                                            { label: "建築条件なし", value: "no" }
                                        ].map((opt) => (
                                            <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                                                <div className={`w-4 h-4 border transition-colors flex items-center justify-center ${filterValues.hasConstructionCondition === opt.value ? 'border-nara-gold bg-nara-gold' : 'border-gray-600 group-hover:border-gray-400'}`}>
                                                    {filterValues.hasConstructionCondition === opt.value && <div className="w-2 h-2 bg-y-charcoal" />}
                                                </div>
                                                <input
                                                    type="radio"
                                                    value={opt.value}
                                                    checked={filterValues.hasConstructionCondition === opt.value}
                                                    onChange={() =>
                                                        onChange({
                                                            ...filterValues,
                                                            hasConstructionCondition: opt.value as any,
                                                        })
                                                    }
                                                    className="hidden"
                                                />
                                                <span className={`text-sm transition-colors ${filterValues.hasConstructionCondition === opt.value ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                                                    {opt.label}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* アクション */}
                                <div className="flex gap-6 pt-8 border-t border-white/10">
                                    <button
                                        onClick={handleReset}
                                        className="px-8 py-4 text-gray-500 hover:text-white transition-colors text-sm font-serif tracking-widest"
                                    >
                                        RESET
                                    </button>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="flex-1 bg-white text-y-charcoal hover:bg-nara-gold hover:text-white transition-all duration-300 py-4 text-sm font-serif tracking-widest font-bold flex items-center justify-center gap-4"
                                    >
                                        <span>検索結果を見る</span>
                                        <span className="bg-y-charcoal text-white text-xs px-2 py-1 rounded-full">{resultCount}</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
