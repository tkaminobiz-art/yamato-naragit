"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

// ... imports remain the same

export function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const timer = setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = "auto";
        }, 3000); // Shortened for quick access

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, []);

    // Cinematic Particle System
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        class Particle {
            x: number;
            y: number;
            rx: number;
            ry: number;
            angle: number;
            speed: number;
            size: number;
            color: string;
            alpha: number;

            constructor() {
                this.rx = (Math.random() * canvas!.width) / 1.2; // Wider spread
                this.ry = (Math.random() * canvas!.height) / 1.2;
                this.angle = Math.random() * Math.PI * 2;
                this.speed = Math.random() * 0.002 + 0.001; // Slower, more majestic
                this.size = Math.random() * 2 + 0.5;
                // Deep Gold & faint white
                this.color = Math.random() > 0.4 ? "197, 160, 89" : "255, 255, 255";
                this.alpha = 0;

                const cx = canvas!.width / 2;
                const cy = canvas!.height / 2;
                this.x = cx + Math.cos(this.angle) * this.rx;
                this.y = cy + Math.sin(this.angle) * this.ry;
            }

            update(t: number) {
                // Slower convergence
                if (t < 400) {
                    this.angle += this.speed;
                    this.rx *= 0.998;
                    this.ry *= 0.998;
                    this.alpha = Math.min(this.alpha + 0.005, 0.6);
                } else {
                    this.angle += this.speed * 0.5;
                    this.alpha *= 0.99;
                }

                const cx = canvas!.width / 2;
                const cy = canvas!.height / 2;
                this.x = cx + Math.cos(this.angle) * this.rx;
                this.y = cy + Math.sin(this.angle) * this.ry;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        let animationFrameId: number;
        let particles: Particle[] = [];
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < 180; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            // Clear with very transparent fade for smooth trails
            ctx.fillStyle = "rgba(10, 25, 15, 0.15)"; // Very dark green/black base
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            time++;
            particles.forEach(particle => {
                particle.update(time);
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        initParticles();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const containerVariants: Variants = {
        exit: {
            opacity: 0,
            transition: { duration: 1.8, ease: "easeInOut" }
        }
    };

    const logoVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: { delay: 0.2, duration: 0.8, ease: "easeOut" }
        }
    };

    const textContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.6
            }
        }
    };

    const textItemVariants: Variants = {
        hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a190f] overflow-hidden"
                    variants={containerVariants}
                    initial={{ opacity: 1 }}
                    exit="exit"
                >
                    {/* Premium Gradient Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1B3224] via-[#0d1f14] to-[#000000] opacity-80" />

                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 pointer-events-none mix-blend-screen"
                    />

                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                        {/* Logo Mark */}
                        <motion.div
                            variants={logoVariants}
                            initial="hidden"
                            animate="visible"
                            className="relative w-48 h-48 md:w-64 md:h-64 mb-12 drop-shadow-[0_0_30px_rgba(197,160,89,0.2)]"
                        >
                            <Image
                                src="/yamato_logo_mark_high_res.png"
                                fill
                                alt="YAMATO Logo"
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        {/* Text Container */}
                        <motion.div
                            variants={textContainerVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-center space-y-4"
                        >
                            {/* Main Japanese Text with Gold Gradient */}
                            <motion.h1
                                variants={textItemVariants}
                                className="font-serif text-3xl md:text-5xl font-medium tracking-[0.3em] ml-[0.3em]"
                                style={{
                                    background: "linear-gradient(to bottom, #f3e7c9, #c5a059, #8a6e3e)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    textShadow: "0px 10px 20px rgba(0,0,0,0.5)"
                                }}
                            >
                                やまと不動産
                            </motion.h1>

                            {/* Divider Line */}
                            <motion.div
                                variants={textItemVariants}
                                className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#c5a059] to-transparent mx-auto opacity-50 my-6"
                            />

                            {/* Subtitle English */}
                            <motion.p
                                variants={textItemVariants}
                                className="font-manrope text-[#8a8a8a] text-xs md:text-sm tracking-[0.5em] uppercase font-light pl-[0.5em]"
                            >
                                Yamato Real Estate
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Add this to your global css or tailwind config for text-shadow if needed, 
// or simplified here:
// .text-shadow-gold { text-shadow: 0 2px 10px rgba(212, 175, 55, 0.5); }
