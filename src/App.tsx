import { Activity, Navigation2, Zap } from 'lucide-react';
import { Logo } from './components/ui/Logo';
import { HudCard } from './components/ui/HudCard';

function App() {
  return (
    <div className="theme-prepper flex min-h-screen w-full flex-col selection:bg-emerald-900/50">
      {/* Header (Navegación / Logotipo) */}
      <header
        className="bg-[var(--bg-dark-start)]/80 relative z-50 w-full flex-none border-b border-white/10 pt-[env(safe-area-inset-top)] shadow-2xl backdrop-blur-xl"
        style={{ height: 'var(--header-height)' }}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-[var(--fluid-container)]">
          <div className="flex items-center gap-4">
            {/* Nuevo Logotipo MAPARD */}
            <Logo showSubtitle={false} />

            <span className="ml-2 hidden items-center rounded border border-emerald-500/30 bg-emerald-900/20 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-[var(--accent)] shadow-[0_0_10px_rgba(16,185,129,0.2)] sm:flex">
              <span className="mr-1 h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--logo-neon)]"></span>
              Prepper Link
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col text-right">
              <span className="text-[10px] uppercase tracking-widest text-[var(--text-tertiary)] sm:text-xs">
                System Status
              </span>
              <span className="flex items-center justify-end gap-1 text-xs font-semibold tracking-wider text-[var(--logo-neon)] sm:text-sm">
                <Activity className="h-3 w-3" /> ONLINE
              </span>
            </div>
            <div className="hidden h-8 w-px bg-white/10 md:block"></div>
            <div className="hidden flex-col text-right md:flex">
              <span className="text-xs uppercase tracking-widest text-[var(--text-tertiary)]">
                Threat Level
              </span>
              <span className="text-sm font-semibold tracking-wider text-yellow-500">ELEVATED</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content (Above the Fold Logic) */}
      <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-center p-[var(--fluid-container)] text-center">
        {/* Logotipo Hero Gigante */}
        <div className="mb-8 flex w-full justify-center lg:mb-12">
          <Logo variant="hero" />
        </div>

        {/* Subtítulo / Párrafo Fluido */}
        <p
          className="mx-auto mb-10 max-w-3xl font-light leading-relaxed text-[var(--text-secondary)]"
          style={{ fontSize: 'var(--fluid-para)' }}
        >
          Enlace seguro al sistema central de respuesta ante crisis. Monitoreo de suministros,
          topografía y protocolos de emergencia en tiempo real.
        </p>

        {/* Acciones */}
        <div className="mb-16 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <button className="btn btn-primary w-full gap-2 sm:w-auto">
            <Navigation2 className="h-5 w-5" />
            Ingresar al HUB
          </button>
          <button className="btn w-full gap-2 sm:w-auto">
            <Zap className="h-5 w-5" />
            Protocolo Rápido
          </button>
        </div>

        {/* Cards / Dashboards preview - Adaptive Auto-Grid */}
        <div className="relative z-10 grid w-full grid-cols-1 gap-[var(--fluid-container)] text-left sm:grid-cols-2 lg:grid-cols-3">
          <HudCard
            title="Inventario Crítico"
            value="87%"
            valueClassName="text-[var(--logo-neon)]"
            Icon={Activity}
            trend={{ label: '↑ 2%', isPositive: true }}
            subtitle="desde última auditoría"
          />

          <HudCard
            title="Comunicaciones"
            value="CIFRADO"
            Icon={Activity}
            subtitle="Canal VHF y Satelital activo"
          />

          <HudCard
            title="Rutas de Evac"
            value={
              <>
                3 <span className="text-sm text-[var(--text-tertiary)]">VÍAS</span>
              </>
            }
            Icon={Activity}
            trend={{ label: 'Revisar mapa topográfico', isWarning: true }}
          />
        </div>
      </main>

      {/* Footer (Aviso Legal / Versión) */}
      <footer
        className="relative z-50 flex w-full flex-none items-center justify-center border-t border-white/10 bg-black/80 px-[var(--fluid-container)] pb-[env(safe-area-inset-bottom)] backdrop-blur-md"
        style={{ height: 'var(--footer-height)' }}
      >
        <p className="max-w-2xl text-center text-[9px] uppercase tracking-[0.2em] text-white/40 sm:text-[11px]">
          MAPA-RD © {new Date().getFullYear()} • PREPPER LINK NODE ACTIVE • SECURE CONNECTION
        </p>
      </footer>

      {/* Decorative HUD Elements */}
      <div className="fixed right-4 top-20 z-0 hidden h-32 w-px bg-gradient-to-b from-[var(--logo-neon)] to-transparent opacity-30 lg:block"></div>
      <div className="fixed left-4 top-20 z-0 hidden h-16 w-px bg-gradient-to-b from-[var(--text-tertiary)] to-transparent opacity-20 lg:block"></div>
    </div>
  );
}

export default App;
