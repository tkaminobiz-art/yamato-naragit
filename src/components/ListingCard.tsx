"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/data/properties";
import { MapPin, Ruler } from "lucide-react";

interface ListingCardProps {
    property: Property;
    index: number;
}

export function ListingCard({ property, index }: ListingCardProps) {
    const isSold = property.status === "Sold";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="group relative"
        >
            <Link href="/contact" className="block relative aspect-[4/3] overflow-hidden bg-gray-900 cursor-point">
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
        </motion.div>
    );
}
