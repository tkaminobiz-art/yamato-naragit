"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingDown, PiggyBank, GraduationCap, Plane, Car } from "lucide-react";

export function SmartCalculator() {
    // Default: Station Land 2500man, Cheap House 1500man
    const [stationLandPrice, setStationLandPrice] = useState(2500);
    const stationHousePrice = 1500;

    // Yata: Land 780man, High-Grade House 2280man
    const yataLandPrice = 780;
    const yataHousePrice = 2280;

    // Calc Logic (35 year loan, 0.6% interest for simple estimation)
    // PMT = P * r * (1 + r)^n / ((1 + r)^n - 1)
    const calculateMonthlyPayment = (totalPriceMan: number) => {
        const principal = totalPriceMan * 10000;
        const rate = 0.006 / 12; // Monthly rate
        const payments = 35 * 12; // 35 years

        const monthly = (principal * rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1);
        return Math.round(monthly / 10000 * 10) / 10; // Return in Man-en, 1 decimal
    };

    const stationTotal = stationLandPrice + stationHousePrice;
    const yataTotal = yataLandPrice + yataHousePrice;

    const stationMonthly = calculateMonthlyPayment(stationTotal);
    const yataMonthly = calculateMonthlyPayment(yataTotal);

    const monthlyDiff = Math.max(0, stationMonthly - yataMonthly);
    const totalDiff = Math.round(monthlyDiff * 12 * 35); // 35 years total saving

    return (
        <div className="w-full bg-slate-50 border border-slate-200 rounded-sm overflow-hidden shadow-sm">
            <div className="bg-nara-charcoal text-white p-6 md:p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Calculator size={100} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-serif mb-2 relative z-10">賢者の計算機</h3>
                <p className="text-xs md:text-sm text-gray-400 font-mono tracking-widest relative z-10">THE SMART CALCULATOR</p>
                <p className="mt-4 text-sm text-gray-300 max-w-lg mx-auto relative z-10">
                    「駅近」という条件のために、あなたが支払おうとしているコストと、
                    それを「矢田」に変えた場合に手に入る未来を比較してください。
                </p>
            </div>

            <div className="p-6 md:p-8">
                {/* Input Section */}
                <div className="mb-12">
                    <label className="block text-sm font-bold text-nara-charcoal mb-4 text-center">
                        比較する「駅近」の土地価格は？
                    </label>
                    <div className="flex items-center gap-4 max-w-md mx-auto">
                        <span className="text-xs font-mono text-gray-400">1,000万</span>
                        <input
                            type="range"
                            min="1000"
                            max="4000"
                            step="50"
                            value={stationLandPrice}
                            onChange={(e) => setStationLandPrice(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-nara-charcoal"
                        />
                        <span className="text-xs font-mono text-gray-400">4,000万</span>
                    </div>
                    <div className="text-center mt-2">
                        <span className="text-3xl font-bold text-nara-charcoal">{stationLandPrice}</span>
                        <span className="text-sm font-bold text-gray-500 ml-1">万円</span>
                    </div>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Station Case */}
                    <div className="bg-white p-6 rounded-sm border border-gray-100 opacity-70">
                        <h4 className="text-center font-bold text-gray-500 mb-4 text-sm tracking-widest">TYPICAL CHOICE</h4>
                        <div className="text-center mb-6">
                            <p className="text-xs text-gray-400 mb-1">TOTAL COST</p>
                            <p className="text-3xl font-bold text-gray-700">{stationTotal}<span className="text-sm font-normal ml-1">万円</span></p>
                        </div>
                        <div className="space-y-2 text-sm text-gray-500 font-mono">
                            <div className="flex justify-between"><span>LAND (Station)</span><span>{stationLandPrice}万</span></div>
                            <div className="flex justify-between"><span>HOUSE (Standard)</span><span>{stationHousePrice}万</span></div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-dashed border-gray-200 text-center">
                            <p className="text-xs text-gray-400 mb-1">MONTHLY</p>
                            <p className="text-xl font-bold text-gray-600">約 {stationMonthly} <span className="text-sm font-normal">万円</span></p>
                        </div>
                    </div>

                    {/* Yata Case (Winner) */}
                    <div className="bg-white p-6 rounded-sm border-2 border-nara-gold shadow-lg relative transform md:scale-105 z-10">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-nara-gold text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest whitespace-nowrap">
                            SMART CHOICE
                        </div>
                        <h4 className="text-center font-bold text-nara-gold mb-4 text-sm tracking-widest">YATA / YAMATO</h4>
                        <div className="text-center mb-6">
                            <p className="text-xs text-nara-gold mb-1">TOTAL COST</p>
                            <p className="text-4xl font-bold text-nara-charcoal">{yataTotal}<span className="text-sm font-normal ml-1">万円</span></p>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600 font-mono">
                            <div className="flex justify-between font-bold text-nara-charcoal"><span>LAND (Yata)</span><span>{yataLandPrice}万</span></div>
                            <div className="flex justify-between font-bold text-nara-charcoal"><span>HOUSE (High-Grade)</span><span>{yataHousePrice}万</span></div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-dashed border-gray-200 text-center bg-nara-gold/10 -mx-6 -mb-6 pb-6 pt-6">
                            <p className="text-xs text-nara-gold font-bold mb-1">MONTHLY</p>
                            <p className="text-2xl font-bold text-nara-charcoal">約 {yataMonthly} <span className="text-base font-normal">万円</span></p>
                        </div>
                    </div>
                </div>

                {/* Result: The Savings */}
                <div className="bg-nara-charcoal text-white rounded-sm p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <p className="text-nara-gold text-xs font-bold tracking-widest mb-2">GENERATE VALUE</p>
                            <h3 className="text-2xl font-bold mb-2">人生に残る「余剰資金」</h3>
                            <p className="text-gray-400 text-sm">35年間で生まれる差額は、これだけの未来を作ります。</p>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-gray-400 text-xs mb-1">TOTAL SAVINGS</p>
                            <p className="text-4xl md:text-5xl font-bold text-nara-gold">
                                <span className="text-2xl mr-1">¥</span>
                                {totalDiff}
                                <span className="text-lg ml-1 text-white">万円</span>
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <SavingItem
                            icon={GraduationCap}
                            title="子供の教育費"
                            desc="私立理系大学 4年分相当"
                            active={totalDiff > 500}
                        />
                        <SavingItem
                            icon={Car}
                            title="高級車への乗り換え"
                            desc="7年ごとに新車へ"
                            active={totalDiff > 800}
                        />
                        <SavingItem
                            icon={Plane}
                            title="家族旅行"
                            desc="毎年ハワイ旅行へ"
                            active={totalDiff > 1000}
                        />
                    </div>

                    <p className="text-[10px] text-gray-500 text-center mt-8">
                        ※金利0.6%、35年返済、ボーナス払いなしで試算。諸費用等は考慮していません。<br />
                        ※駅近比較対象は建物1,500万円（一般的仕様）を想定。
                    </p>
                </div>
            </div>
        </div>
    );
}

function SavingItem({ icon: Icon, title, desc, active }: { icon: any, title: string, desc: string, active: boolean }) {
    return (
        <div className={`p-4 rounded-sm border ${active ? "bg-white/10 border-nara-gold/50 text-white" : "bg-white/5 border-white/10 text-gray-500"} transition-colors`}>
            <div className="flex items-center gap-3 mb-2">
                <Icon size={20} className={active ? "text-nara-gold" : "text-gray-600"} />
                <span className="font-bold text-sm">{title}</span>
            </div>
            <p className="text-xs opacity-80">{desc}</p>
        </div>
    );
}
