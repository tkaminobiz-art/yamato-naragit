"use client";

import { useState } from "react";
import { GraduationCap, Plane, Car, TrendingUp } from "lucide-react";

export function SmartCalculator() {
    // Default: Station Land 2500man, Cheap House 1500man
    const [stationLandPrice, setStationLandPrice] = useState(2500);
    const stationHousePrice = 1500;

    // Yata: Land 780man, High-Grade House 2280man
    const yataLandPrice = 780;
    const yataHousePrice = 2280;

    // Calc Logic (35 year loan, 0.6% interest for simple estimation)
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

    // Dynamic visualization width based on savings
    const savingsPercentage = Math.min(100, Math.max(0, (totalDiff / 1500) * 100));

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                {/* Visual Input Side */}
                <div className="md:w-1/2">
                    <label className="block text-sm font-mono tracking-widest text-gray-400 mb-8 uppercase">
                        Simulation: Station-Front Land Price
                    </label>

                    <div className="relative mb-12">
                        <input
                            type="range"
                            min="1000"
                            max="4000"
                            step="50"
                            value={stationLandPrice}
                            onChange={(e) => setStationLandPrice(Number(e.target.value))}
                            className="w-full h-1 bg-gray-200 appearance-none cursor-pointer accent-nara-gold"
                        />
                        <div className="mt-6 flex justify-between items-baseline">
                            <div className="text-4xl font-serif font-medium text-[#333]">
                                {stationLandPrice}<span className="text-xl ml-1 text-gray-400">万円</span>
                            </div>
                            <div className="text-xs text-gray-400 font-mono">ASSUMED LAND PRICE</div>
                        </div>
                    </div>

                    <div className="space-y-6 pt-8 border-t border-gray-100">
                        <div className="flex justify-between items-center text-gray-500">
                            <span className="text-sm font-serif">月々の支払額（駅近）</span>
                            <span className="font-mono text-xl">{stationMonthly}万円</span>
                        </div>
                        <div className="flex justify-between items-center text-nara-gold">
                            <span className="text-sm font-serif">月々の支払額（矢田）</span>
                            <span className="font-mono text-2xl font-bold">{yataMonthly}万円</span>
                        </div>
                        <div className="h-px bg-gray-100 my-4" />
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-[#333]">月々の差額（余剰資金）</span>
                            <span className="font-mono text-3xl font-bold text-[#333]">+{monthlyDiff.toFixed(1)}万円</span>
                        </div>
                    </div>
                </div>

                {/* Impact Output Side */}
                <div className="md:w-1/2 flex flex-col justify-center bg-nara-charcoal text-white p-8 md:p-12 relative overflow-hidden group">
                    <div className="absolute inset-0 z-0">
                        {/* Abstract bar chart background */}
                        <div className="absolute bottom-0 left-0 w-full bg-nara-gold transition-all duration-1000 ease-out opacity-20" style={{ height: `${savingsPercentage}%` }} />
                    </div>

                    <div className="relative z-10">
                        <p className="font-mono text-xs tracking-[0.3em] text-nara-gold mb-4 uppercase">Lifetime Value</p>
                        <h3 className="text-lg font-serif opacity-80 mb-2">35年間で生まれる「財産」</h3>

                        <div className="text-5xl md:text-6xl font-bold font-mono tracking-tighter mb-8">
                            {totalDiff}<span className="text-xl ml-2 font-light opacity-50">MAN</span>
                        </div>

                        <div className="space-y-4">
                            <div className={`p-4 border-l-2 transition-all duration-500 ${totalDiff > 500 ? "border-nara-gold bg-white/5 opacity-100" : "border-gray-700 opacity-30"}`}>
                                <div className="flex items-center gap-3 mb-1">
                                    <GraduationCap size={16} className="text-nara-gold" />
                                    <span className="text-sm font-bold">子供の教育費</span>
                                </div>
                                <p className="text-xs text-gray-400">理系私大 4年間の学費を完済可能</p>
                            </div>

                            <div className={`p-4 border-l-2 transition-all duration-500 ${totalDiff > 800 ? "border-nara-gold bg-white/5 opacity-100" : "border-gray-700 opacity-30"}`}>
                                <div className="flex items-center gap-3 mb-1">
                                    <Car size={16} className="text-nara-gold" />
                                    <span className="text-sm font-bold">愛車のアップグレード</span>
                                </div>
                                <p className="text-xs text-gray-400">7年ごとに新車へ乗り換え可能</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
