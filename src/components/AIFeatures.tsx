"use client";

import { MessageCircle, Settings, Globe, ArrowRight, CircleDollarSign, ArrowLeftRight, FileCheck, Ban, AlignEndVertical, Bot } from "lucide-react";

const aiFeatures = [
    {
        title: "Vincular Números Ilimitados",
        description: "Vincula tus primeros 5 dispositivos WhatsApp sin cargo adicional.",
        icon: <MessageCircle color="#22c55e" size={32} />
    },
    {
        title: "Integración con OpenAI",
        description: "Crea tu propio Agente de IA para automatizar el primer contacto, seguimiento, recordatorios de citas y gestión de ausencias.",
        icon: <Bot color="#ffffff" size={32} />
    },
    {
        title: "Automatizaciones en WhatsApp",
        description: "Elige entre envíos manuales o recordatorios mediante IA por WhatsApp.",
        icon: <Settings color="#9ca3af" size={32} />
    },
    {
        title: "Cualquier Código de País",
        description: "Utiliza números locales para generar mayor confianza en tus prospectos.",
        icon: <Globe color="#9ca3af" size={32} />
    },
    {
        title: "Integración Rápida en 1 Minuto",
        description: "¡Escanea el código QR, conecta tu teléfono y visualiza todos tus mensajes de WhatsApp directamente en tu cuenta de Infinite Agency CRM!",
        icon: <ArrowRight color="#22c55e" size={32} />
    },
    {
        title: "IA de Voz con ElevenLabs",
        description: "Puedes responder enviando notas de voz de forma manual o automáticamente mediante la integración con ElevenLabs.",
        icon: <AlignEndVertical color="#ffffff" size={32} />
    },
    {
        title: "Sin Costos Adicionales",
        description: "Una tarifa única que incluye mensajes ilimitados.",
        icon: <CircleDollarSign color="#eab308" size={32} />
    },
    {
        title: "Sincronización Bidireccional",
        description: "¡Escanea el código QR, conecta tu teléfono y visualiza todos tus mensajes de WhatsApp directamente en tu cuenta de Infinite Agency CRM!",
        icon: <ArrowLeftRight color="#ffffff" size={32} />
    },
    {
        title: "Sin Aprobaciones de Plantillas de API",
        description: "Una tarifa única que incluye mensajes ilimitados.",
        icon: <FileCheck color="#22c55e" size={32} />
    },
    {
        title: "Sin Límite de 24 Horas",
        description: "Envía mensajes promocionales en cualquier momento sin la restricción de 24 horas.",
        icon: <Ban color="#ef4444" size={32} />
    }
];

export default function AIFeatures() {
    return (
        <section id="ia-features" className="section section-dark">
            <div className="container" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div className="section-header">
                    <span className="section-tag" style={{ color: 'var(--color-gold)' }}>INTELIGENCIA ARTIFICIAL</span>
                    <h2 className="section-title">Integración con IA</h2>
                    <p className="section-description">
                        Lleva tus comunicaciones al siguiente nivel automatizando interacciones y flujos de trabajo con nuestras herramientas de Inteligencia Artificial.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {aiFeatures.map((feature, idx) => (
                        <div key={idx} className="ai-feature-card" style={{
                            background: 'var(--color-dark-gray)',
                            border: '1px solid rgba(212, 175, 55, 0.1)',
                            borderRadius: '16px',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'var(--transition)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--color-gold)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{ flexShrink: 0 }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{
                                    color: 'var(--color-white)',
                                    fontSize: '1.1rem',
                                    fontWeight: '700',
                                    margin: 0
                                }}>{feature.title}</h3>
                            </div>
                            <p style={{
                                color: 'var(--color-text-light)',
                                fontSize: '0.9rem',
                                lineHeight: '1.5',
                                margin: 0
                            }}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
