"use client";

import { useState } from "react";
import { GraduationCap, Car, PiggyBank } from "lucide-react";

export function SmartCalculator() {
    // Default: Station Land 2500man, Cheap House 1500man
    const [stationLandPrice, setStationLandPrice] = useState(2500);
    const stationHousePrice = 1500;

    // Yata: Land 780man, High-Grade House 2280man
    const yataLandPrice = 780;
    const yataHousePrice = 2280;

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

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* Input Side */}
                <div>
                    <div className="bg-[#f9f9f9] p-6 rounded-lg mb-8">
                        <label className="block text-sm font-bold text-gray-700 mb-4 text-center">
                            比較対象の土地価格（駅近など）
                        </label>
                        <div className="flex items-center gap-4">
                            <span className="text-xs text-gray-500">1,000万</span>
                            <input
                                type="range"
                                min="1000"
                                max="4000"
                                step="50"
                                value={stationLandPrice}
                                onChange={(e) => setStationLandPrice(Number(e.target.value))}
                                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#8c8070]"
                            />
                            <span className="text-xs text-gray-500">4,000万</span>
                        </div>
                        <div className="text-center mt-2">
                            <span className="text-2xl font-bold text-[#8c8070]">{stationLandPrice}</span>
                            <span className="text-sm font-bold text-gray-600 ml-1">万円</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 border-b border-gray-100">
                            <div className="flex flex-col">
                                <span className="text-gray-600 font-bold">駅近エリアで建てた場合</span>
                                <span className="text-xs text-gray-400">土地にお金がかかり、建物予算が削られるかも…</span>
                            </div>
                            <span className="text-xl font-medium text-gray-400">{stationMonthly}万円/月</span>
                        </div>
                        <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-[#faf9f7]">
                            <div className="flex flex-col">
                                <span className="text-[#8c8070] font-bold">矢田（Design K）で建てた場合</span>
                                <span className="text-xs text-gray-500">建物は最高グレード。でも支払いは楽々。</span>
                            </div>
                            <span className="text-2xl font-bold text-[#4a4a4a]">{yataMonthly}万円/月</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-[#8c8070] text-white rounded-md mt-4 shadow-md">
                            <div className="flex flex-col">
                                <span className="font-bold">毎月のゆとり（貯蓄へ）</span>
                                <span className="text-xs opacity-90">今の家賃と比べてみてください</span>
                            </div>
                            <span className="text-2xl font-bold">+{monthlyDiff.toFixed(1)}万円</span>
                        </div>
                    </div>
                </div>

                {/* Result Side */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-center text-[#8c8070] font-bold mb-6 tracking-widest text-sm">35年後、これだけの差になります</h3>

                    <div className="text-center mb-8">
                        <span className="text-gray-500 text-sm block mb-1">家族に残せるお金</span>
                        <span className="text-5xl font-bold text-[#4a4a4a]">
                            {totalDiff}<span className="text-lg ml-1 text-gray-500 font-normal">万円</span>
                        </span>
                        <p className="text-xs text-gray-400 mt-2">これは単なる節約ではありません。「安心」の総額です。</p>
                    </div>

                    <div className="space-y-4">
                        <div className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${totalDiff > 500 ? "border-[#8c8070] bg-[#fffcf5]" : "border-gray-100 opacity-50"}`}>
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#8c8070] border border-[#f0eee9]">
                                <GraduationCap size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#4a4a4a]">お子様の未来のために</h4>
                                <p className="text-xs text-gray-500">奨学金に頼らず、大学まで行かせてあげられる安心。</p>
                            </div>
                        </div>

                        <div className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${totalDiff > 800 ? "border-[#8c8070] bg-[#fffcf5]" : "border-gray-100 opacity-50"}`}>
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#8c8070] border border-[#f0eee9]">
                                <PiggyBank size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#4a4a4a]">老後のゆとりのために</h4>
                                <p className="text-xs text-gray-500">退職後の生活費や、夫婦での旅行費用として。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
