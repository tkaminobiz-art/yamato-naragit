'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, TrendingUp, Calendar } from 'lucide-react';
import { BuildingPlan, calculateMonthlyPayment, calculateTotalPrice } from '@/data/building_plans';

interface PropertyPlanCardProps {
    landPrice: number; // 土地価格（万円）
    recommendedPlans: BuildingPlan[]; // 推奨プラン
    onInquiry?: () => void; // 問い合わせボタンのコールバック
    onRequestDocument?: () => void; // 資料請求ボタンのコールバック
}

export default function PropertyPlanCard({
    landPrice,
    recommendedPlans,
    onInquiry,
    onRequestDocument
}: PropertyPlanCardProps) {
    const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);

    if (!recommendedPlans || recommendedPlans.length === 0) {
        return null;
    }

    const selectedPlan = recommendedPlans[selectedPlanIndex];
    const totalPrice = calculateTotalPrice(landPrice, selectedPlan.basePrice);
    const monthlyPayment = calculateMonthlyPayment(totalPrice);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-2xl bg-gradient-to-br from-amber-50/80 to-orange-50/80 p-6 border border-amber-200/50 backdrop-blur-sm"
        >
            {/* ヘッダー */}
            <div className="flex items-center gap-2 mb-4">
                <Home className="w-5 h-5 text-amber-600" />
                <h3 className="text-lg font-bold text-gray-900">
                    この土地で建てられるプラン例
                </h3>
            </div>

            {/* プラン選択タブ */}
            {recommendedPlans.length > 1 && (
                <div className="flex gap-2 mb-4">
                    {recommendedPlans.map((plan, index) => (
                        <button
                            key={plan.id}
                            onClick={() => setSelectedPlanIndex(index)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${index === selectedPlanIndex
                                    ? 'bg-amber-600 text-white shadow-md'
                                    : 'bg-white text-gray-600 hover:bg-amber-50'
                                }`}
                        >
                            {plan.series} {plan.tsubo}坪 {plan.layout}
                        </button>
                    ))}
                </div>
            )}

            {/* 選択中のプラン詳細 */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedPlan.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* プラン名 */}
                    <div className="mb-3">
                        <div className="text-sm text-gray-600 mb-1">
                            {selectedPlan.series}シリーズ
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                            {selectedPlan.tsubo}坪 {selectedPlan.layout}
                        </div>
                        {selectedPlan.description && (
                            <p className="text-sm text-gray-600 mt-1">
                                {selectedPlan.description}
                            </p>
                        )}
                    </div>

                    {/* 価格情報 */}
                    <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
                        {/* 土地価格 */}
                        <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-100">
                            <span className="text-sm text-gray-600">土地価格</span>
                            <span className="text-lg font-semibold text-gray-900">
                                {landPrice.toLocaleString()}万円
                            </span>
                        </div>

                        {/* 建物価格 */}
                        <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-200">
                            <span className="text-sm text-gray-600">建物価格（標準仕様）</span>
                            <span className="text-lg font-semibold text-gray-900">
                                {selectedPlan.basePrice.toLocaleString()}万円
                            </span>
                        </div>

                        {/* 総額 */}
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-base font-bold text-gray-900 flex items-center gap-1">
                                <TrendingUp className="w-4 h-4 text-amber-600" />
                                総額（税込）
                            </span>
                            <span className="text-2xl font-bold text-amber-600">
                                {totalPrice.toLocaleString()}万円～
                            </span>
                        </div>

                        {/* 月々の支払い */}
                        <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600 flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    月々の支払い目安
                                </span>
                                <div className="text-right">
                                    <div className="text-xl font-bold text-amber-700">
                                        約 {monthlyPayment.toLocaleString()}万円
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        35年ローン・金利1.5%の場合
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 特徴 */}
                    {selectedPlan.features && selectedPlan.features.length > 0 && (
                        <div className="mb-4">
                            <div className="text-xs font-semibold text-gray-600 mb-2">
                                このプランの特徴
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {selectedPlan.features.map((feature, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-white rounded-full text-xs text-gray-700 border border-gray-200"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTAボタン */}
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={onInquiry}
                            className="px-4 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                        >
                            💬 詳しく相談する
                        </button>
                        <button
                            onClick={onRequestDocument}
                            className="px-4 py-3 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-semibold text-sm transition-all border-2 border-gray-200 hover:border-amber-300"
                        >
                            📄 資料請求
                        </button>
                    </div>

                    {/* 注釈 */}
                    <p className="text-xs text-gray-500 mt-3 text-center">
                        ※表示価格は標準仕様の場合です。諸費用は別途必要です。
                    </p>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}
