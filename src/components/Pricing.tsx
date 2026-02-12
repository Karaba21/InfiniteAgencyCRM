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
                    <div className="pricing-card pricing-card-starter">
                        <div className="pricing-header">
                            <h3>STARTER</h3>
                            <div className="pricing-price">
                                <span className="price-amount">{isAnnual ? "$990" : "$99"}</span>
                                <span className="price-period">{isAnnual ? "USD Al Año" : "USD Al Mes"}</span>
                            </div>
                            <div className="annual-benefit" style={{ display: isAnnual ? "block" : "none" }}>
                                <span className="benefit-text">2 MESES GRATIS!</span>
                            </div>
                        </div>
                        <div className="pricing-highlight pricing-highlight-yellow">
                            <span>AUTOMATIZA LO ESENCIAL</span>
                        </div>
                        <p className="pricing-description">Comienza a automatizar el seguimiento a prospectos a través de correo electrónico y posiciónate en medios digitales.</p>
                        <div className="pricing-includes">
                            <p className="includes-label">INCLUYE:</p>
                            <p className="includes-text">CRM ilimitado, embudos de venta, seguimiento automático, emails masivos, planificador de contenido, y más.</p>
                        </div>
                        <a href="#contacto" className="btn btn-primary pricing-cta" onClick={(e) => handleLinkClick(e, "#contacto")}>¡INICIAR YA!</a>
                        <div className="pricing-details">
                            <p>- Acceso inmediato.</p>
                            <p>- Usuarios ilimitados.</p>
                        </div>
                    </div>
                    <div className="pricing-card pricing-card-plus featured">
                        <div className="featured-badge">
                            <span className="star-icon">★</span>
                            <span>¡MÁS POPULAR!</span>
                            <span className="star-icon">★</span>
                        </div>
                        <div className="pricing-header">
                            <h3>PLUS+</h3>
                            <div className="pricing-price">
                                <span className="price-amount">{isAnnual ? "$2990" : "$299"}</span>
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
                    <div className="pricing-card pricing-card-infinite">
                        <div className="pricing-header">
                            <h3>INFINITE</h3>
                            <div className="pricing-price">
                                <span className="price-amount">{isAnnual ? "$5990" : "$599"}</span>
                                <span className="price-period">{isAnnual ? "USD Al Año" : "USD Al Mes"}</span>
                            </div>
                            <div className="annual-benefit" style={{ display: isAnnual ? "block" : "none" }}>
                                <span className="benefit-text">2 MESES GRATIS!</span>
                            </div>
                        </div>
                        <div className="pricing-highlight pricing-highlight-yellow">
                            <span>TODO INCLUIDO</span>
                        </div>
                        <p className="pricing-description">Revoluciona tu negocio incorporando todo el poder de la inteligencia artificial en tus ventas, marketing y operaciones.</p>
                        <div className="pricing-includes">
                            <p className="includes-label">TODO EN EL PLAN PLUS +</p>
                            <p className="includes-text">Chatbot omnicanal, creador de contenido IA, embudos de conversión, creador de cursos, marketing de afiliados y más.</p>
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
