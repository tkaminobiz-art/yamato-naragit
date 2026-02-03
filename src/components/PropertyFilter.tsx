"use client";

import { useState } from "react";
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
        <div className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
                {/* モバイル: トグルボタン */}
                <div className="md:hidden py-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between bg-y-charcoal text-white px-4 py-3 rounded"
                    >
                        <div className="flex items-center gap-2">
                            <Filter size={18} />
                            <span className="font-serif text-sm">絞り込み検索</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-nara-gold text-xs font-bold">{resultCount}件</span>
                            <ChevronDown
                                size={18}
                                className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                            />
                        </div>
                    </button>
                </div>

                {/* フィルターパネル */}
                <AnimatePresence>
                    {(isOpen || window.innerWidth >= 768) && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="py-6 space-y-4">
                                {/* エリア・駅 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-serif text-gray-600 mb-2">
                                            エリア（市町村）
                                        </label>
                                        <select
                                            value={filterValues.city}
                                            onChange={(e) =>
                                                onChange({ ...filterValues, city: e.target.value })
                                            }
                                            className="w-full border border-gray-300 px-3 py-2 text-sm rounded focus:outline-none focus:border-y-gold"
                                        >
                                            {CITIES.map((city) => (
                                                <option key={city} value={city}>
                                                    {city}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-serif text-gray-600 mb-2">
                                            最寄り駅
                                        </label>
                                        <select
                                            value={filterValues.station}
                                            onChange={(e) =>
                                                onChange({ ...filterValues, station: e.target.value })
                                            }
                                            className="w-full border border-gray-300 px-3 py-2 text-sm rounded focus:outline-none focus:border-y-gold"
                                        >
                                            {STATIONS.map((station) => (
                                                <option key={station} value={station}>
                                                    {station}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* 価格帯 */}
                                <div>
                                    <label className="block text-xs font-serif text-gray-600 mb-2">
                                        価格帯（万円）
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            placeholder="下限なし"
                                            value={filterValues.priceMin || ""}
                                            onChange={(e) =>
                                                onChange({
                                                    ...filterValues,
                                                    priceMin: Number(e.target.value) || 0,
                                                })
                                            }
                                            className="flex-1 border border-gray-300 px-3 py-2 text-sm rounded focus:outline-none focus:border-y-gold"
                                        />
                                        <span className="text-gray-500">〜</span>
                                        <input
                                            type="number"
                                            placeholder="上限なし"
                                            value={filterValues.priceMax === 10000 ? "" : filterValues.priceMax}
                                            onChange={(e) =>
                                                onChange({
                                                    ...filterValues,
                                                    priceMax: Number(e.target.value) || 10000,
                                                })
                                            }
                                            className="flex-1 border border-gray-300 px-3 py-2 text-sm rounded focus:outline-none focus:border-y-gold"
                                        />
                                    </div>
                                </div>

                                {/* 土地面積 */}
                                <div>
                                    <label className="block text-xs font-serif text-gray-600 mb-2">
                                        土地面積（坪）
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            placeholder="下限なし"
                                            value={filterValues.landSizeMin || ""}
                                            onChange={(e) =>
                                                onChange({
                                                    ...filterValues,
                                                    landSizeMin: Number(e.target.value) || 0,
                                                })
                                            }
                                            className="flex-1 border border-gray-300 px-3 py-2 text-sm rounded focus:outline-none focus:border-y-gold"
                                        />
                                        <span className="text-gray-500">〜</span>
                                        <input
                                            type="number"
                                            placeholder="上限なし"
                                            value={filterValues.landSizeMax === 200 ? "" : filterValues.landSizeMax}
                                            onChange={(e) =>
                                                onChange({
                                                    ...filterValues,
                                                    landSizeMax: Number(e.target.value) || 200,
                                                })
                                            }
                                            className="flex-1 border border-gray-300 px-3 py-2 text-sm rounded focus:outline-none focus:border-y-gold"
                                        />
                                    </div>
                                </div>

                                {/* 建築条件 */}
                                <div>
                                    <label className="block text-xs font-serif text-gray-600 mb-2">
                                        建築条件
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                checked={filterValues.hasConstructionCondition === "all"}
                                                onChange={() =>
                                                    onChange({
                                                        ...filterValues,
                                                        hasConstructionCondition: "all",
                                                    })
                                                }
                                                className="accent-y-gold"
                                            />
                                            <span className="text-sm">指定しない</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                checked={filterValues.hasConstructionCondition === "yes"}
                                                onChange={() =>
                                                    onChange({
                                                        ...filterValues,
                                                        hasConstructionCondition: "yes",
                                                    })
                                                }
                                                className="accent-y-gold"
                                            />
                                            <span className="text-sm">あり</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                checked={filterValues.hasConstructionCondition === "no"}
                                                onChange={() =>
                                                    onChange({
                                                        ...filterValues,
                                                        hasConstructionCondition: "no",
                                                    })
                                                }
                                                className="accent-y-gold"
                                            />
                                            <span className="text-sm">なし</span>
                                        </label>
                                    </div>
                                </div>

                                {/* アクション */}
                                <div className="flex gap-2 pt-2">
                                    <button
                                        onClick={handleReset}
                                        className="flex items-center justify-center gap-2 flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-serif transition-colors"
                                    >
                                        <X size={16} />
                                        リセット
                                    </button>
                                    <div className="flex items-center justify-center bg-nara-gold text-white px-6 py-2 rounded text-sm font-serif font-bold">
                                        {resultCount} 件が該当
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
