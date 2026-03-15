import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface HudCardProps {
  title: string;
  value: React.ReactNode;
  valueClassName?: string;
  trend?: {
    label: string;
    isPositive?: boolean;
    isWarning?: boolean;
  };
  subtitle?: string;
  Icon: LucideIcon;
  className?: string;
}

export const HudCard: React.FC<HudCardProps> = ({
  title,
  value,
  valueClassName = '',
  trend,
  subtitle,
  Icon,
  className = '',
}) => {
  return (
    <div
      className={`hud-card group transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_20px_rgba(16,185,129,0.05)] ${className}`}
    >
      <div className="mb-4 flex items-start justify-between">
        <h3
          className="font-semibold uppercase tracking-[.10em] text-[#fff]"
          style={{ fontSize: 'var(--fluid-card-title)' }}
        >
          {title}
        </h3>
        <Icon className="h-4 w-4 text-[var(--text-tertiary)] transition-colors group-hover:text-[var(--accent)]" />
      </div>

      <div
        className={`mb-1 font-light tracking-tight ${valueClassName || 'text-[var(--text-primary)]'}`}
        style={{ fontSize: 'var(--fluid-card-value)' }}
      >
        {value}
      </div>

      {trend && (
        <p className="flex items-center gap-1 text-xs text-[var(--text-tertiary)]">
          <span
            className={`${trend.isPositive ? 'text-emerald-400' : trend.isWarning ? 'text-yellow-500' : ''}`}
          >
            {trend.label}
          </span>
          {subtitle && <span>{subtitle}</span>}
        </p>
      )}

      {!trend && subtitle && <p className="text-xs text-[var(--text-tertiary)]">{subtitle}</p>}
    </div>
  );
};
