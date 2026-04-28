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
            <div className="hero-background">
                <div className="gradient-overlay"></div>
            </div>
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="gradient-text">Convertí WhatsApp</span>
                        <br />en tu mejor vendedor
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
