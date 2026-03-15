import { Shield } from 'lucide-react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export function Logo({ className = '', showSubtitle = true }: LogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="flex items-center gap-2 md:gap-3">
        <Shield
          className="h-6 w-6 flex-shrink-0 md:h-8 md:w-8"
          strokeWidth={2}
          style={{ color: 'var(--logo-neon)' }}
        />
        <span className="logo-text-lines text-xl font-black uppercase leading-none tracking-[0.1em] text-white md:text-2xl">
          MAPARD
        </span>
      </div>
      {showSubtitle && (
        <span className="mt-1 flex items-center gap-1 text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] md:text-[0.65rem] md:tracking-[0.4em]">
          TÁCTICA • SUPERVIVENCIA • PREPARACIONISMO
        </span>
      )}
    </div>
  );
}
