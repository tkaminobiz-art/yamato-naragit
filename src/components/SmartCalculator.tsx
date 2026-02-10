"use client";

import { useState, useEffect } from "react";
import { GraduationCap, Car, Home, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function SmartCalculator() {
    // Default: Station Land 2500man
    const [stationLandPrice, setStationLandPrice] = useState(2500);
    const stationHousePrice = 1500;

    // Yata: Land 780man, High-Grade House 2280man
    const yataLandPrice = 780;
    const yataHousePrice = 2280;

    // Animation state
    const [displayTotalDiff, setDisplayTotalDiff] = useState(0);

    // Calc Logic
    const calculateMonthlyPayment = (totalPriceMan: number) => {
        const principal = totalPriceMan * 10000;
        const rate = 0.006 / 12; // Monthly rate
        const payments = 35 * 12; // 35 years

        const monthly = (principal * rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1);
        return Math.round(monthly / 10000 * 10) / 10;
    };

    const stationTotal = stationLandPrice + stationHousePrice;
    const yataTotal = yataLandPrice + yataHousePrice;
    const stationMonthly = calculateMonthlyPayment(stationTotal);
    const yataMonthly = calculateMonthlyPayment(yataTotal);
    const monthlyDiff = Math.max(0, stationMonthly - yataMonthly);
    const totalDiff = Math.round(monthlyDiff * 12 * 35);

    useEffect(() => {
        const controls = animateValue(displayTotalDiff, totalDiff, 500, setDisplayTotalDiff);
        return () => controls?.stop();
    }, [totalDiff]);

    // Helper for number animation
    const animateValue = (start: number, end: number, duration: number, callback: (val: number) => void) => {
        if (start === end) return;
        const range = end - start;
        let startTime: number;
        let animationFrame: number;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            callback(Math.floor(start + range * progress));
            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            }
        };
        animationFrame = requestAnimationFrame(step);
        return { stop: () => cancelAnimationFrame(animationFrame) };
    };

    return (
        <div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Input Section */}
                <div className="p-8 md:p-12 bg-gray-50 flex flex-col justify-center">
                    <div className="mb-10">
                        <label className="flex items-center justify-between text-sm font-bold text-gray-600 mb-6 tracking-wide">
                            <span>比較対象の土地価格</span>
                            <span className="bg-white px-3 py-1 rounded-full shadow-sm text-[#8c8070]">{stationLandPrice}万円</span>
                        </label>
                        <input
                            type="range"
                            min="1000"
                            max="4000"
                            step="50"
                            value={stationLandPrice}
                            onChange={(e) => setStationLandPrice(Number(e.target.value))}
                            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8c8070] hover:accent-[#7a6f60] transition-all"
                        />
                        <div className="flex justify-between mt-3 text-xs text-gray-400 font-medium font-sans">
                            <span>1,000万円</span>
                            <span>4,000万円</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="group p-5 bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-[#8c8070]/30">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold text-gray-700 flex items-center gap-2">
                                    <MapPin size={16} className="text-gray-400" /> 駅近エリア
                                </span>
                                <span className="text-lg font-medium text-gray-400 font-mono">{stationMonthly}<span className="text-xs ml-1">万円/月</span></span>
                            </div>
                            <p className="text-xs text-gray-400">土地: {stationLandPrice}万 / 建物: {stationHousePrice}万</p>
                        </div>

                        <div className="group p-5 bg-[#faf9f7] rounded-xl border border-[#8c8070] shadow-md relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-[#8c8070] text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold tracking-widest">RECOMMENDED</div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold text-[#8c8070] flex items-center gap-2">
                                    <Home size={16} /> 矢田（やまと不動産）
                                </span>
                                <span className="text-2xl font-bold text-[#4a4a4a] font-mono">{yataMonthly}<span className="text-xs ml-1 font-sans font-normal text-gray-500">万円/月</span></span>
                            </div>
                            <p className="text-xs text-gray-500">土地: {yataLandPrice}万 / 建物: {yataHousePrice}万 (高性能)</p>
                        </div>
                    </div>
                </div>

                {/* Result Section */}
                <div className="p-8 md:p-12 bg-[#8c8070] text-white flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 text-center"
                    >
                        <span className="block text-white/70 text-sm font-medium tracking-widest mb-2">LIFETIME MERIT</span>
                        <h3 className="text-2xl font-serif mb-6">35年で生まれる「ゆとり」</h3>

                        <div className="flex items-end justify-center gap-2 mb-10">
                            <span className="text-6xl md:text-7xl font-bold tracking-tighter">
                                {displayTotalDiff}
                            </span>
                            <span className="text-xl md:text-2xl font-medium mb-4 text-white/80">万円</span>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 border border-white/20 shadow-lg"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                    <GraduationCap className="text-white" size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold">教育費の不安を解消</p>
                                    <p className="text-xs text-white/70">私立理系大学 4年間の学費相当</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 border border-white/20 shadow-lg"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                    <Car className="text-white" size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold">家族の愛車をグレードアップ</p>
                                    <p className="text-xs text-white/70">7年ごとの買い替え予算として</p>
                                </div>
                            </motion.div>
                        </div>

                        <p className="mt-8 text-xs text-white/50 text-center">
                            ※金利0.6%、35年返済、ボーナス払いなしで試算。<br />
                            諸費用・メンテナンス費等は考慮していません。
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
