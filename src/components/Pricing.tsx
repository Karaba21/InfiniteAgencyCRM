"use client";

import { useState } from "react";

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false);

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
        <section id="planes" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Nuestros Planes</span>
                    <h2 className="section-title">Elige el Plan Perfecto</h2>
                    <p className="section-description">
                        Soluciones adaptadas a diferentes necesidades empresariales
                    </p>
                </div>

                <div className="pricing-toggle-container">
                    <span className="toggle-label">Mensual</span>
                    <label className="pricing-toggle">
                        <input type="checkbox" id="pricingToggle" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
                        <span className="toggle-slider"></span>
                    </label>
                    <span className="toggle-label">Anual</span>
                </div>
                <div className="pricing-grid">

                    <div className="pricing-card pricing-card-plus featured">
                        <div className="featured-badge">
                            <span className="star-icon">★</span>
                            <span>¡MÁS POPULAR!</span>
                            <span className="star-icon">★</span>
                        </div>
                        <div className="pricing-header">
                            <h3>PLUS+</h3>
                            <div className="pricing-price">
                                <span className="price-amount">{isAnnual ? "$4990" : "$499"}</span>
                                <span className="price-period">{isAnnual ? "USD Al Año" : "USD Al Mes"}</span>
                            </div>
                            <div className="annual-benefit" style={{ display: isAnnual ? "block" : "none" }}>
                                <span className="benefit-text">2 MESES GRATIS!</span>
                            </div>
                        </div>
                        <div className="pricing-highlight pricing-highlight-red">
                            <span>¡MÁS POPULAR!</span>
                        </div>
                        <p className="pricing-description">Automatiza tus procesos de ventas y marketing combinando el poder de WhatsApp con inteligencia artificial.</p>
                        <div className="pricing-includes">
                            <p className="includes-label">TODO EN EL PLAN STARTER +</p>
                            <p className="includes-text">WhatsApp integrado, WhatsApps masivos, calendarios, recordatorios automáticos, páginas web y más.</p>
                        </div>
                        <a href="#contacto" className="btn btn-primary pricing-cta" onClick={(e) => handleLinkClick(e, "#contacto")}>¡INICIAR YA!</a>
                        <div className="pricing-details">
                            <p>- Acceso inmediato.</p>
                            <p>- Usuarios ilimitados.</p>
                        </div>
                    </div>
                </div>
                <div className="pricing-note">
                    <p>💡 Todos nuestros planes son personalizables. <a href="#contacto" onClick={(e) => handleLinkClick(e, "#contacto")}>Contáctanos</a> para una cotización adaptada a tus necesidades específicas.</p>
                </div>
            </div>
        </section>
    );
}
