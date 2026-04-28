"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

const features = [
    {
        title: "Acceso a CRM y Automatizaciones",
        items: [
            "Pipeline de ventas visual",
            "Automatizaciones ilimitadas (workflows)",
            "Formularios y landing pages",
            "Email marketing",
            "Calendario de reservas"
        ]
    },
    {
        title: "Asistente Inteligente (OpenAI)",
        items: [
            "Chatbot automático para WhatsApp",
            "Respuestas inteligentes 24/7",
            "Clasificación y enrutamiento de leads",
            "Generación de respuestas personalizadas"
        ]
    },
    {
        title: "Voz IA (ElevenLabs)",
        items: [
            "Conversión de texto a voz realista",
            "Mensajes de voz automatizados para WhatsApp",
            "Voces naturales en múltiples idiomas"
        ]
    },
    {
        title: "WhatsApp Business y Común",
        items: [
            "Conexión hasta 5 dispositivos sin costo",
            "Mensajería masiva",
            "Plantillas sin aprobación de META"
        ]
    },
    {
        title: "Calendario y Agenda",
        items: [
            "Integración con Google Calendar",
            "Envío automático de recordatorios",
            "Sincronización con disponibilidad real"
        ]
    },
    {
        title: "Automatizaciones Premium",
        items: [
            "Secuencias de seguimiento automáticas",
            "Recordatorios de citas por WhatsApp",
            "Respuesta automática a consultas comunes",
            "Recordatorios de pago",
            "Notificaciones de cambios de estado"
        ]
    }
];

export default function Pricing() {
    const [openFeature, setOpenFeature] = useState<number | null>(null);

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

    const toggleFeature = (index: number) => {
        setOpenFeature(openFeature === index ? null : index);
    };

    return (
        <section id="planes" className="section">
            <div className="container" style={{ maxWidth: '650px' }}>
                <div className="section-header">
                    <span className="section-tag">Inversión</span>
                    <h2 className="section-title">Precio Lanzamiento</h2>
                    <p className="section-description">
                        Lleva tu negocio al siguiente nivel con todas las herramientas y funcionalidades en un solo lugar.
                    </p>
                </div>

                <div className="pricing-grid" style={{ gridTemplateColumns: '1fr', marginTop: '2rem' }}>
                    <div className="pricing-card pricing-card-plus featured" style={{ padding: '2.5rem 2rem', transform: 'none' }}>
                        <div className="pricing-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="pricing-price" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', width: '100%', textAlign: 'center' }}>
                                <span className="price-amount" style={{ fontSize: '3.5rem', fontWeight: 800 }}>$119</span>
                                <span style={{ fontSize: '1.2rem', color: 'var(--color-gold)', fontWeight: 600, marginTop: '0.5rem' }}>USD / mes</span>
                            </div>
                        </div>

                        <p className="pricing-description" style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                            Automatiza tus ventas y marketing combinando el poder indiscutible de WhatsApp con Inteligencia Artificial avanzada.
                        </p>

                        <div className="pricing-includes">
                            <p className="includes-label" style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--color-gold)' }}>¿Qué incluye?</p>
                            <div style={{ maxWidth: '450px', margin: '0 auto 2.5rem auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {features.map((feature, index) => (
                                    <div key={index} style={{ border: '1px solid rgba(0, 0, 0, 0.08)', borderRadius: '12px', overflow: 'hidden', background: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                                        <button
                                            onClick={() => toggleFeature(index)}
                                            style={{
                                                width: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '1rem',
                                                background: 'transparent',
                                                border: 'none',
                                                color: '#1f2937',
                                                cursor: 'pointer',
                                                textAlign: 'left'
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <div style={{ background: 'rgba(34, 197, 94, 0.2)', padding: '4px', borderRadius: '50%' }}>
                                                    <Check color="#22c55e" size={16} />
                                                </div>
                                                <span style={{ fontWeight: 600, fontSize: '1rem' }}>{feature.title}</span>
                                            </div>
                                            <ChevronDown
                                                size={20}
                                                style={{
                                                    transition: 'transform 0.3s ease',
                                                    transform: openFeature === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    color: '#9ca3af'
                                                }}
                                            />
                                        </button>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateRows: openFeature === index ? '1fr' : '0fr',
                                            transition: 'grid-template-rows 0.3s ease-in-out'
                                        }}>
                                            <div style={{ overflow: 'hidden' }}>
                                                <div style={{ padding: '0 1rem 1rem 3.25rem' }}>
                                                    <ul style={{ listStyleType: 'disc', margin: 0, paddingLeft: '1rem', color: '#4b5563', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                        {feature.items.map((item, id) => (
                                                            <li key={id}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
