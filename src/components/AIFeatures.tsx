"use client";

import { MessageCircle, Settings, Globe, ArrowRight, CircleDollarSign, ArrowLeftRight, FileCheck, Ban, AlignEndVertical, Bot } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const aiFeatureIcons = [
    <MessageCircle key="0" color="#22c55e" size={32} />,
    <Bot key="1" color="#F97316" size={32} />,
    <Settings key="2" color="#9ca3af" size={32} />,
    <Globe key="3" color="#9ca3af" size={32} />,
    <ArrowRight key="4" color="#22c55e" size={32} />,
    <AlignEndVertical key="5" color="#F97316" size={32} />,
    <CircleDollarSign key="6" color="#eab308" size={32} />,
    <ArrowLeftRight key="7" color="#9ca3af" size={32} />,
    <FileCheck key="8" color="#22c55e" size={32} />,
    <Ban key="9" color="#ef4444" size={32} />,
];

export default function AIFeatures() {
    const { t } = useLanguage();
    const aiFeatures = t.aiFeatures.items.map((feature, index) => ({
        ...feature,
        icon: aiFeatureIcons[index],
    }));

    return (
        <section id="ia-features" className="section section-dark">
            <div className="container" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div className="section-header">
                    <span className="section-tag">{t.aiFeatures.tag}</span>
                    <h2 className="section-title">{t.aiFeatures.title}</h2>
                    <p className="section-description">
                        {t.aiFeatures.description}
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
