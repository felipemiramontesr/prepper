import { Shield } from 'lucide-react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  variant?: 'header' | 'hero';
}

export function Logo({ className = '', showSubtitle = true, variant = 'header' }: LogoProps) {
  const isHero = variant === 'hero';

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`flex items-center ${isHero ? 'gap-4 md:gap-5' : 'gap-2 md:gap-3'}`}>
        <Shield
          className={`flex-shrink-0 ${isHero ? 'h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20' : 'h-6 w-6 md:h-8 md:w-8'}`}
          strokeWidth={isHero ? 1.5 : 2}
          style={{ color: 'var(--logo-neon)' }}
        />
        <span
          className={`font-black uppercase leading-none tracking-[0.1em] text-white ${
            isHero ? 'text-5xl md:text-7xl lg:text-[7rem]' : 'text-xl md:text-2xl'
          }`}
        >
          MAPARD
        </span>
      </div>
      {showSubtitle && (
        <span
          className={`font-semibold uppercase text-[var(--text-secondary)] ${
            isHero
              ? 'mt-4 text-[0.6rem] tracking-[0.4em] md:mt-6 md:text-sm md:tracking-[0.6em] lg:text-base'
              : 'mt-1 flex items-center gap-1 text-[0.55rem] tracking-[0.3em] md:text-[0.65rem] md:tracking-[0.4em]'
          }`}
        >
          TÁCTICA • SUPERVIVENCIA • PREPARACIONISMO
        </span>
      )}
    </div>
  );
}
