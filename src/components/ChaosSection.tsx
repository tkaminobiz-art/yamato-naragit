"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const anxieties = [
    { text: "予算オーバー...", x: "10%", y: "20%", size: "text-xl", delay: 0 },
    { text: "追加費用の恐怖", x: "70%", y: "15%", size: "text-2xl", delay: 0.1 },
    { text: "標準仕様って安っぽくない？", x: "80%", y: "60%", size: "text-lg", delay: 0.2 },
    { text: "地盤改良で+100万？", x: "15%", y: "70%", size: "text-3xl", delay: 0.3 },
    { text: "契約後の増額", x: "40%", y: "40%", size: "text-xl", delay: 0.4 },
    { text: "オプション地獄", x: "60%", y: "80%", size: "text-4xl", delay: 0.5 },
    { text: "理想と現実のギャップ", x: "20%", y: "50%", size: "text-lg", delay: 0.15 },
    { text: "本当にこれでいいの？", x: "50%", y: "10%", size: "text-2xl", delay: 0.25 },
];

export function ChaosSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Darkening and blur effect
    const opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
    const overlayOpacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 0.8]);

    // Convergence effect
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
    const textOpacity = useTransform(scrollYProgress, [0.6, 0.9], [1, 0]);

    // Final message appearance
    const messageOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
    const messageScale = useTransform(scrollYProgress, [0.85, 1], [0.8, 1]);

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Background Texture */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-[url('/images/texture-chaos.png')] bg-cover bg-center opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                </div>

                {/* Floating Anxieties */}
                <motion.div
                    style={{ scale, opacity: textOpacity }}
                    className="relative w-full h-full max-w-6xl mx-auto z-10"
                >
                    {anxieties.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 0.7, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: item.delay, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                            animate={{
                                y: [0, -20, 0],
                                x: [0, 10, 0],
                            }}
                            style={{
                                left: item.x,
                                top: item.y,
                            }}
                            className={`absolute font-serif text-gray-400 ${item.size} font-bold tracking-widest pointer-events-none whitespace-nowrap`}
                        >
                            {item.text}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Convergence Center / Black Hole Effect */}
                <motion.div
                    style={{ opacity: overlayOpacity }}
                    className="absolute inset-0 bg-black z-20 flex items-center justify-center pointer-events-none"
                >
                    <div className="w-[50vw] h-[50vw] bg-nara-gold/10 rounded-full blur-[100px]" />
                </motion.div>

                {/* Final Redemption Message */}
                <motion.div
                    style={{ opacity: messageOpacity, scale: messageScale }}
                    className="absolute z-30 text-center px-6"
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-widest text-auto-phrase text-balance">
                        その不安、すべて捨てる。
                    </h2>
                    <p className="text-gray-400 font-serif tracking-[0.2em] text-sm md:text-base">
                        YAMATO STANDARD
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
