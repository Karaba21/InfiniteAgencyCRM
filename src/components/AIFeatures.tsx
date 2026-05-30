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
        icon: <Bot color="#F97316" size={32} />
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
        description: "Escanea el código QR, conecta tu teléfono y visualiza todos tus mensajes de WhatsApp directamente en tu cuenta de Antana IA.",
        icon: <ArrowRight color="#22c55e" size={32} />
    },
    {
        title: "IA de Voz con ElevenLabs",
        description: "Responde enviando notas de voz de forma manual o automáticamente mediante la integración con ElevenLabs.",
        icon: <AlignEndVertical color="#F97316" size={32} />
    },
    {
        title: "Sin Costos Adicionales",
        description: "Una tarifa única que incluye mensajes ilimitados sin cobros sorpresa.",
        icon: <CircleDollarSign color="#eab308" size={32} />
    },
    {
        title: "Sincronización Bidireccional",
        description: "Los mensajes enviados y recibidos desde tu teléfono se sincronizan automáticamente en tiempo real con el CRM.",
        icon: <ArrowLeftRight color="#9ca3af" size={32} />
    },
    {
        title: "Sin Aprobaciones de Plantillas",
        description: "Enviá mensajes libremente sin necesitar aprobación previa de plantillas de la API oficial de WhatsApp.",
        icon: <FileCheck color="#22c55e" size={32} />
    },
    {
        title: "Sin Límite de 24 Horas",
        description: "Enviá mensajes promocionales en cualquier momento sin la restricción de la ventana de 24 horas.",
        icon: <Ban color="#ef4444" size={32} />
    }
];

export default function AIFeatures() {
    return (
        <section id="ia-features" className="section section-dark">
            <div className="container" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div className="section-header">
                    <span className="section-tag">INTELIGENCIA ARTIFICIAL</span>
                    <h2 className="section-title">Integración con IA</h2>
                    <p className="section-description">
                        Lleva tus comunicaciones al siguiente nivel automatizando interacciones y flujos de trabajo con nuestras herramientas de Inteligencia Artificial.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.25rem',
                }}>
                    {aiFeatures.map((feature, idx) => (
                        <div key={idx} className="ai-feature-card" style={{
                            background: 'var(--color-white)',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                            borderRadius: '16px',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'var(--transition)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.borderColor = 'var(--color-gold)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(249, 115, 22, 0.12)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';
                            }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                <div style={{ flexShrink: 0 }}>{feature.icon}</div>
                                <h3 style={{
                                    color: 'var(--color-text)',
                                    fontSize: '1rem',
                                    fontWeight: '700',
                                    margin: 0
                                }}>{feature.title}</h3>
                            </div>
                            <p style={{
                                color: 'var(--color-text-light)',
                                fontSize: '0.875rem',
                                lineHeight: '1.6',
                                margin: 0
                            }}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
