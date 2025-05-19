import React from "react";
import './StatsCard.css';

export interface StatsCardProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    color: string;
}

export default function StatsCard({ icon, title, value, color }: StatsCardProps) {
    return (
        <div className="stats-card" style={{ backgroundColor: color }}>
            <div className="stats-card__icon">
                {icon}
            </div>
            <div className="stats-card__content">
                <h2 className="stats-card__title">{title}</h2>
                <p className="stats-card__value">{value}</p>
            </div>
        </div>
    );
}