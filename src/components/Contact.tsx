"use client";

import { FormEvent } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const company = formData.get("company") as string;
        const message = formData.get("message") as string;

        if (!name || !email || !message) {
            return;
        }

        let whatsappMessage = `¡Hola! Me interesa conocer más sobre Ananta IA.\n\n`;
        whatsappMessage += `*Nombre:* ${name}\n`;
        whatsappMessage += `*Email:* ${email}\n`;
        if (company) whatsappMessage += `*Empresa:* ${company}\n`;
        whatsappMessage += `\n*Mensaje:*\n${message}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/59896671516?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section id="contacto" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">{t.contact.tag}</span>
                    <h2 className="section-title">{t.contact.title}</h2>
                    <p className="section-description">
                        {t.contact.description}
                    </p>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h4>{t.contact.emailLabel}</h4>
                                <p><a href="mailto:ananta.ia.uy@gmail.com">ananta.ia.uy@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                            </div>
                            <div>
                                <h4>{t.contact.phoneLabel}</h4>
                                <p>+598 96 671 516</p>
                            </div>
                        </div>
                    </div>
                    <form className="contact-form" id="contactForm" onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <input type="text" name="name" id="name" placeholder={t.contact.namePlaceholder} required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" id="email" placeholder={t.contact.emailPlaceholder} required />
                        </div>
                        <div className="form-group">
                            <input type="text" name="company" id="company" placeholder={t.contact.companyPlaceholder} />
                        </div>
                        <div className="form-group">
                            <textarea name="message" id="message" rows={5} placeholder={t.contact.messagePlaceholder} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-full">{t.contact.submitButton}</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
