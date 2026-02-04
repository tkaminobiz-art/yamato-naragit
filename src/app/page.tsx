"use client";

import { HeroSection } from "@/components/HeroSection";
import { Header } from "@/components/Header";
import { LandSearchCTA } from "@/components/LandSearchCTA";
import { PropertyShowcase } from "@/components/PropertyShowcase";
import { SplashScreen } from "@/components/SplashScreen";
import { WhyYamato } from "@/components/WhyYamato";
import { StickyCTA } from "@/components/StickyCTA";
import { ChaosSection } from "@/components/ChaosSection";
import { HighGradeShowcase } from "@/components/HighGradeShowcase";
import { SpecComparison } from "@/components/SpecComparison";

export default function Home() {
    return (
        <main className="bg-y-off-white">
            <SplashScreen />
            <StickyCTA />
            <Header />
            <HeroSection />
            <WhyYamato />
            <ChaosSection />
            <HighGradeShowcase />
            <SpecComparison />
            <LandSearchCTA />
            <PropertyShowcase />


        </main>
    );
}
