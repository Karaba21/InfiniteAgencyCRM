"use client";

import { useState } from "react";
import { Check } from "lucide-react";

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
            <div className="container" style={{ maxWidth: '650px' }}>
                <div className="section-header">
                    <span className="section-tag">Inversión</span>
                    <h2 className="section-title">Plan Único Ilimitado</h2>
                    <p className="section-description">
                        Lleva tu negocio al siguiente nivel con todas las herramientas y funcionalidades en un solo lugar.
                    </p>
                </div>

                <div className="pricing-toggle-container">
                    <span className="toggle-label">Mensual</span>
                    <label className="pricing-toggle">
                        <input type="checkbox" id="pricingToggle" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
                        <span className="toggle-slider"></span>
                    </label>
                    <span className="toggle-label">Anual <span style={{ color: '#22c55e', fontSize: '0.8rem', marginLeft: '5px' }}>Ahorra 16%</span></span>
                </div>

                <div className="pricing-grid" style={{ gridTemplateColumns: '1fr', marginTop: '2rem' }}>
                    <div className="pricing-card pricing-card-plus featured" style={{ padding: '2.5rem 2rem', transform: 'none' }}>
                        <div className="pricing-header">
                            <div className="pricing-price">
                                <span className="price-amount">{isAnnual ? "$4990" : "$499"}</span>
                                <span className="price-period">{isAnnual ? "USD / Año" : "USD / Mes"}</span>
                            </div>
                            <div className="annual-benefit" style={{ display: isAnnual ? "block" : "none", marginTop: '1rem' }}>
                                <span className="benefit-text" style={{ fontSize: '0.9rem', padding: '0.4rem 1rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '20px' }}>¡2 MESES GRATIS!</span>
                            </div>
                        </div>

                        <p className="pricing-description" style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                            Automatiza tus ventas y marketing combinando el poder indiscutible de WhatsApp con Inteligencia Artificial avanzada.
                        </p>

                        <div className="pricing-includes">
                            <p className="includes-label" style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--color-gold)' }}>Todo lo que necesitas para crecer:</p>
                            <ul className="pricing-features" style={{ maxWidth: '400px', margin: '0 auto 2.5rem auto' }}>
                                <li>
                                    <Check className="check-icon" size={20} />
                                    <span>WhatsApp Integrado Omnicanal</span>
                                </li>
                                <li>
                                    <Check className="check-icon" size={20} />
                                    <span>Envíos de WhatsApps Masivos</span>
                                </li>
                                <li>
                                    <Check className="check-icon" size={20} />
                                    <span>Embudos de Ventas y Páginas Web</span>
                                </li>
                                <li>
                                    <Check className="check-icon" size={20} />
                                    <span>Agendamiento y Recordatorios Automáticos</span>
                                </li>
                                <li>
                                    <Check className="check-icon" size={20} />
                                    <span>Acceso Inmediato y Soporte Prioritario</span>
                                </li>
                                <li>
                                    <Check className="check-icon" size={20} />
                                    <span><strong>Usuarios y Contactos Ilimitados</strong></span>
                                </li>
                            </ul>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <a href="#contacto" className="btn btn-primary pricing-cta" onClick={(e) => handleLinkClick(e, "#contacto")} style={{ padding: '1.2rem', fontSize: '1.2rem', maxWidth: '400px', margin: '0 auto', width: '100%' }}>
                                ¡ACCEDER AHORA!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
