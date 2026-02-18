'use client';
import { useState, useEffect } from 'react';

const services = [
    {
        title: "Seguimiento automático",
        description: "Dale seguimiento a tus clientes de manera automática y personalizada.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Chatbot",
        description: "Un asistente virtual que responderá las preguntas de tus clientes por ti.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
            </svg>
        )
    },
    {
        title: "Conversaciones omnicanal",
        description: "Todas tus conversaciones en un solo lugar. (WhatsApp, Instagram, Facebook, GMB y Email).",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3.75h9m-9 3.75h9m-9 3.75c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H5.625c-.621 0-1.125.504-1.125 1.125v13.5c0 .621.504 1.125 1.125 1.125h1.875z" />
            </svg>
        )
    },
    {
        title: "Campañas Masivas",
        description: "Envía mensajes masivos por WhatsApp y Correo Electrónico en cuestión de segundos.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.43.872.95 1.111 1.525.264.63.156 1.37-.278 1.865l-.348.375a1.125 1.125 0 01-1.642 0l-.348-.375a2.25 2.25 0 00-.278-1.865 2.25 2.25 0 00-1.111-1.525" />
            </svg>
        )
    },
    {
        title: "Embudos de Venta",
        description: "Rastrea los procesos de ventas de tu negocio e identifica en que etapa se encuentra cada cliente potencial.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
            </svg>
        )
    },
    {
        title: "Recordatorios Automáticos",
        description: "Recordatorios de citas y reservas de manera automática a tus clientes o pacientes.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
        )
    },
    {
        title: "Calendario Online",
        description: "Mantén tu agenda organizada y actualizada en tiempo real.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
        )
    },
    {
        title: "Planificador de Redes Sociales",
        description: "Programa y planifica contenido para Instagram, Facebook, TikTok, Twitter, LinkedIn y Google My Business.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
        )
    },
    {
        title: "Creador de Páginas Web",
        description: "Crea páginas web en minutos. Te damos más de 1,000 plantillas para editar y publicar.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        )
    },
    {
        title: "Formularios & Encuestas",
        description: "Obtén información importante de tus clientes o pacientes.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        )
    },
    {
        title: "Cursos Online",
        description: "Construye y vende cursos o formaciones digitales de forma fácil con nuestra plataforma.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
        )
    },
    {
        title: "Reseñas de Google",
        description: "Automatiza el proceso de solicitud y gestión de reseñas de tus clientes en Google.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        )
    },
    {
        title: "Facturación Global",
        description: "Con nuestra plataforma podrás hacer facturas digitales, cupones, visualizar tus transacciones y suscripciones.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Reportes",
        description: "Analiza el comportamiento de clientes, ventas, tráfico web y reportes de ads.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
        )
    },
];

export default function Services() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const itemsPerPage = isMobile ? 1 : 4;
    const totalPages = Math.ceil(services.length / itemsPerPage);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const currentServices = services.slice(
        activeIndex * itemsPerPage,
        (activeIndex + 1) * itemsPerPage
    );

    return (
        <section id="servicios" className="section section-dark">
            <div className="container" style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', padding: '0 80px' }}>

                <div className="section-header">
                    <span className="section-tag" style={{ color: 'var(--color-gold)' }}>NUESTRO SERVICIO</span>
                    <h2 className="section-title">Servicios</h2>
                    <p className="section-description">
                        Transformamos plataformas CRM existentes en soluciones completamente personalizadas bajo tu marca
                    </p>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    style={{
                        position: 'absolute',
                        left: '20px',
                        top: '50%',
                        transform: 'translateY(-100%)',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--color-gold)',
                        cursor: 'pointer',
                        zIndex: 10,
                        padding: '10px',
                        transition: 'var(--transition)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-100%) scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(-100%) scale(1)'}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" style={{ width: '30px', height: '30px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
                        gap: '2rem',
                        transition: 'opacity 0.5s ease-in-out',
                        minHeight: '300px',
                        alignItems: 'start'
                    }}
                >
                    {currentServices.map((service, index) => (
                        <div
                            key={`${activeIndex}-${index}`}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: '0 1rem',
                                animation: 'fadeIn 0.5s ease-out'
                            }}
                        >
                            <div style={{ marginBottom: '1.5rem', color: 'var(--color-gold)' }}>
                                <div style={{ width: '50px', height: '50px' }}>
                                    {service.icon}
                                </div>
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                marginBottom: '1rem',
                                lineHeight: '1.2',
                                color: 'var(--color-white)'
                            }}>
                                {service.title}
                            </h3>
                            <p style={{
                                color: 'var(--color-text-light)',
                                fontSize: '0.9rem',
                                lineHeight: '1.6',
                                maxWidth: '250px'
                            }}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    style={{
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-100%)',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--color-gold)',
                        cursor: 'pointer',
                        zIndex: 10,
                        padding: '10px',
                        transition: 'var(--transition)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-100%) scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(-100%) scale(1)'}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" style={{ width: '30px', height: '30px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                {/* Pagination Dots */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '3rem', marginBottom: '3rem' }}>
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: activeIndex === idx ? 'var(--color-gold)' : 'rgba(255,255,255,0.2)',
                                cursor: 'pointer',
                                padding: 0,
                                transition: 'var(--transition)'
                            }}
                        />
                    ))}
                </div>

                {/* CTA Button */}
                <div style={{ textAlign: 'center' }}>
                    <a
                        href="#contacto"
                        className="btn btn-primary"
                        style={{
                            fontSize: '1.2rem',
                            padding: '1rem 3rem'
                        }}
                    >
                        Comenza Ahora
                    </a>
                </div>

            </div>
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}
