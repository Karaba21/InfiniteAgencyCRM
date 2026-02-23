"use client";

import { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ImpactStats from "./ImpactStats";
import Services from "./Services";
import Benefits from "./Benefits";
import Pricing from "./Pricing";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import Savings from "./Savings";
import AIFeatures from "./AIFeatures";

export default function LandingPage() {
    // Intersection Observer for animations
    useEffect(() => {
        // ... existing options
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -100px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("fade-in-up-init");
                    entry.target.classList.add("fade-in-up");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elementsToAnimate = document.querySelectorAll(
            ".feature-card, .ai-feature-card, .benefit-card, .pricing-card, .section-header, .about-text, .about-visual, .contact-content, .services-table"
        );

        elementsToAnimate.forEach((el) => {
            el.classList.add("fade-in-up-init");
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <ImpactStats />
            <Services />
            <AIFeatures />
            <Benefits />
            <Pricing />
            <Savings />
            <About />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </>
    );
}
