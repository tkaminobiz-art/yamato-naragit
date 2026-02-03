"use client";

import { HeroSection } from "@/components/HeroSection";
import { Header } from "@/components/Header";
import { ValueProposition } from "@/components/ValueProposition";
import { LandSearchCTA } from "@/components/LandSearchCTA";
import { PropertyShowcase } from "@/components/PropertyShowcase";
import { SplashScreen } from "@/components/SplashScreen";
import { WhyYamato } from "@/components/WhyYamato";
import { StickyCTA } from "@/components/StickyCTA";

export default function Home() {
    return (
        <main className="bg-y-off-white">
            <SplashScreen />
            <StickyCTA />
            <Header />
            <HeroSection />
            <WhyYamato />
            <ValueProposition />
            <LandSearchCTA />
            <PropertyShowcase />


        </main>
    );
}
