"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/data/properties";
import { BuildingPlan, calculateMonthlyPayment, calculateTotalPrice } from "@/data/building_plans";
import { MapPin, Ruler, Calculator, ChevronDown, Check } from "lucide-react";

interface ListingCardProps {
    property: Property;
    index: number;
    plans?: BuildingPlan[];
}

export function ListingCard({ property, index, plans }: ListingCardProps) {
    const isSold = property.status === "Sold";
    const [isSimulateOpen, setIsSimulateOpen] = useState(false);
    const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);

    // Simulation Data
    const hasPlans = plans && plans.length > 0;
    const selectedPlan = hasPlans ? plans![selectedPlanIndex] : null;
    const totalPrice = selectedPlan ? calculateTotalPrice(property.priceNumeric, selectedPlan.basePrice) : 0;
    const monthlyPayment = selectedPlan ? calculateMonthlyPayment(totalPrice) : 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="flex flex-col"
        >
            {/* Main Visual Card */}
            <Link href="/contact" className="block relative aspect-[4/3] overflow-hidden bg-gray-900 group cursor-pointer">
                {/* Image */}
                <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className={`object-cover transition-transform duration-1000 group-hover:scale-110 ${isSold ? 'grayscale' : ''}`}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {property.status === "New" && (
                        <span className="bg-nara-gold text-white text-[10px] tracking-[0.2em] px-3 py-1 font-bold">NEW ARRIVAL</span>
                    )}
                    {property.status === "Reserved" && (
                        <span className="bg-gray-500 text-white text-[10px] tracking-[0.2em] px-3 py-1 font-bold">RESERVED</span>
                    )}
                    {isSold && (
                        <span className="bg-white text-black text-[10px] tracking-[0.2em] px-3 py-1 font-bold">SOLD OUT</span>
                    )}
                </div>

                {/* Hover Reveal Content (Desktop) / Always Content (Mobile) */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">

                    {/* Floating Price (Animated on hover) */}
                    <motion.div
                        className="mb-auto self-end"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="text-white font-serif tracking-widest text-right translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 bg-black/50 backdrop-blur-sm px-4 py-2 border-l-2 border-nara-gold hidden md:block">
                            <span className="text-xl font-bold">{property.price}</span>
                        </div>
                    </motion.div>

                    {/* Main Info */}
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-nara-gold text-xs tracking-[0.2em] mb-2 font-sans">
                            {property.city} {property.station !== "すべて" && `/ ${property.station}`}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-normal">
                            {property.name}
                        </h3>

                        <div className="flex items-center gap-6 text-gray-300 text-sm font-serif border-t border-white/20 pt-4 opacity-80 group-hover:opacity-100 transition-opacity">
                            <div className="flex items-center gap-2">
                                <MapPin size={14} className="text-nara-gold" />
                                <span>{property.address.split(' ').pop()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Ruler size={14} className="text-nara-gold" />
                                <span>{property.landSize}</span>
                            </div>
                            <div className="md:hidden font-bold text-white">
                                {property.price}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sold Overlay */}
                {isSold && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 pointer-events-none">
                        <span className="text-4xl md:text-6xl font-serif text-white tracking-widest opacity-30 -rotate-12 border-4 border-white p-4">
                            SOLD
                        </span>
                    </div>
                )}
            </Link>

            {/* Financing Simulation Trigger & Panel */}
            {hasPlans && !isSold && (
                <div className="bg-[#111] border-x border-b border-white/10">
                    <button
                        onClick={() => setIsSimulateOpen(!isSimulateOpen)}
                        className="w-full flex items-center justify-between p-4 text-xs tracking-[0.2em] text-gray-400 hover:text-nara-gold hover:bg-white/5 transition-colors font-serif"
                    >
                        <span className="flex items-center gap-2">
                            <Calculator size={14} />
                            FINANCING SIMULATION
                        </span>
                        <ChevronDown
                            size={14}
                            className={`transition-transform duration-300 ${isSimulateOpen ? 'rotate-180' : ''}`}
                        />
                    </button>

                    <AnimatePresence>
                        {isSimulateOpen && selectedPlan && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-[#161616]"
                            >
                                <div className="p-6 border-t border-white/5 space-y-6">
                                    {/* Plan Selector */}
                                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                        {plans!.map((plan, idx) => (
                                            <button
                                                key={plan.id}
                                                onClick={() => setSelectedPlanIndex(idx)}
                                                className={`flex-shrink-0 px-4 py-2 border text-xs tracking-wider transition-all ${idx === selectedPlanIndex
                                                        ? 'border-nara-gold text-nara-gold bg-nara-gold/10'
                                                        : 'border-white/20 text-gray-500 hover:border-gray-400'
                                                    }`}
                                            >
                                                {plan.layout} ({plan.tsubo}坪)
                                            </button>
                                        ))}
                                    </div>

                                    {/* Calculation Result */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <p className="text-xs text-gray-500 tracking-wider">TOTAL PRICE</p>
                                            <p className="text-xl font-serif text-white">
                                                {totalPrice.toLocaleString()} <span className="text-xs">万円</span>
                                            </p>
                                            <p className="text-[10px] text-gray-600">土地 + 建物({selectedPlan.series})</p>
                                        </div>
                                        <div className="space-y-1 text-right">
                                            <p className="text-xs text-nara-gold tracking-wider">MONTHLY</p>
                                            <p className="text-xl font-serif text-nara-gold font-bold">
                                                {monthlyPayment.toLocaleString()} <span className="text-xs">万円</span>
                                            </p>
                                            <p className="text-[10px] text-gray-600">35年返済想定</p>
                                        </div>
                                    </div>

                                    {/* Plan Features */}
                                    <div className="space-y-2">
                                        {selectedPlan.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                                                <Check size={10} className="text-nara-gold" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-2 text-[10px] text-gray-600 leading-relaxed">
                                        ※建物価格{selectedPlan.basePrice}万円(税込)での試算です。諸費用・オプションは含みません。
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </motion.div>
    );
}
