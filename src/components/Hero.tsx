"use client";

import { useEffect } from "react";

export default function Hero() {
    useEffect(() => {
        const handleScroll = () => {
            const heroContent = document.querySelector(".hero-content") as HTMLElement;
            if (heroContent && window.scrollY < window.innerHeight) {
                heroContent.style.transform = `translateY(${window.scrollY * 0.5}px)`;
                heroContent.style.opacity = (1 - (window.scrollY / window.innerHeight) * 0.5).toString();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href) as HTMLElement;
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="inicio" className="hero">
            {/* Floating decoration cards */}
            <div className="hero-deco hero-deco--tl-1">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
            </div>
            <div className="hero-deco hero-deco--tl-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
            </div>
            <div className="hero-deco hero-deco--left">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
            </div>
            <div className="hero-deco hero-deco--bottom-left">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
            </div>
            <div className="hero-deco hero-deco--right">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
            </div>
            <div className="hero-deco hero-deco--bottom-right">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                </svg>
            </div>

            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span>Convertí</span><span style={{color: '#29b05a'}}> Whatsapp</span>
                        <br />en tu mejor <span className="gradient-text">vendedor</span>
                    </h1>
                    <p className="hero-subtitle">
                        Automatizá atención, turnos y seguimientos desde WhatsApp 24/7 <br /> Y mucho más
                    </p>
                    <div className="hero-buttons">
                        <a href="#planes" className="btn btn-primary" onClick={(e) => handleLinkClick(e, "#planes")}>Ver Planes</a>
                        <a href="#contacto" className="btn btn-secondary" onClick={(e) => handleLinkClick(e, "#contacto")}>Solicitar Demo</a>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
}
