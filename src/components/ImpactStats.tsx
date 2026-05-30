"use client";

import React from "react";

const stats = [
    {
        value: "2,6x",
        label: "Más Ventas Cerradas en los Primeros 6 Meses.",
    },
    {
        value: "936h",
        label: "Horas Ahorradas al Año.",
    },
    {
        value: "33%",
        label: "Ventas Recuperadas con Seguimiento Automático.",
    },
    {
        value: (
            <>
                $895<span className="text-2xl md:text-3xl font-bold ml-2 relative -top-4">USD</span>
            </>
        ),
        label: "Ahorro Mensual en Equipo y Herramientas.",
    },
];

export default function ImpactStats() {
    return (
        <section className="impact-section">
            <div className="container">
                <h2 className="section-header impact-header">
                    ¿Qué Logran Los Negocios con Ananta IA?
                </h2>
                <div className="impact-grid">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="impact-stat"
                        >
                            <span className="impact-value">
                                {stat.value}
                            </span>
                            <p className="impact-label">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
