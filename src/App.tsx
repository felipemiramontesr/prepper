import { ShieldAlert, Activity, Navigation2, Zap } from 'lucide-react';

function App() {
  return (
    <div className="theme-prepper flex min-h-screen w-full flex-col selection:bg-emerald-900/50">
      {/* Header Logotipo Falso */}
      <header className="flex w-full items-center justify-between border-b border-white/10 px-6 py-4">
        <div className="flex items-center gap-3">
          <ShieldAlert className="h-8 w-8 flex-shrink-0" style={{ color: 'var(--logo-neon)' }} />
          <h1 className="m-0 text-2xl font-black uppercase leading-none tracking-widest text-[#fff]">
            MAPARD
          </h1>
          <span className="ml-2 flex items-center rounded border border-emerald-500/30 bg-emerald-900/20 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-[var(--accent)] shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <span className="mr-1 h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--logo-neon)]"></span>
            Prepper Link
          </span>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex flex-col text-right">
            <span className="text-xs uppercase tracking-widest text-[var(--text-tertiary)]">
              System Status
            </span>
            <span className="flex items-center gap-1 text-sm font-semibold tracking-wider text-[var(--logo-neon)]">
              <Activity className="h-3 w-3" /> ONLINE
            </span>
          </div>
          <div className="h-8 w-px bg-white/10"></div>
          <div className="flex flex-col text-right">
            <span className="text-xs uppercase tracking-widest text-[var(--text-tertiary)]">
              Threat Level
            </span>
            <span className="text-sm font-semibold tracking-wider text-yellow-500">ELEVATED</span>
          </div>
        </div>
      </header>

      {/* Main Content (Above the Fold) */}
      <main className="mx-auto mt-8 flex w-full max-w-[1280px] flex-1 flex-col items-center justify-center p-4 text-center md:mt-16 md:p-8">
        {/* Título Principal H1 */}
        <h2 className="mb-4 max-w-4xl text-4xl font-light tracking-tight text-[#fff] drop-shadow-lg md:text-6xl">
          Terminal de Coordinación <br />
          <span className="font-semibold" style={{ color: 'var(--logo-neon)' }}>
            Táctica y Supervivencia
          </span>
        </h2>

        {/* Subtítulo / Párrafo */}
        <p className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-[var(--text-secondary)] md:text-xl">
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

        {/* Cards / Dashboards preview */}
        <div className="relative z-10 grid w-full grid-cols-1 gap-6 text-left md:grid-cols-3">
          <div className="hud-card group transition-colors duration-300 hover:border-[var(--accent)]">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[.10em] text-[#fff]">
                Inventario Crítico
              </h3>
              <Activity className="h-4 w-4 text-[var(--text-tertiary)] transition-colors group-hover:text-[var(--accent)]" />
            </div>
            <div className="mb-1 text-3xl font-light text-[var(--logo-neon)]">87%</div>
            <p className="flex items-center gap-1 text-xs text-[var(--text-tertiary)]">
              <span className="text-emerald-400">↑ 2%</span> desde última auditoría
            </p>
          </div>

          <div className="hud-card group transition-colors duration-300 hover:border-[var(--accent)]">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[.10em] text-[#fff]">
                Comunicaciones
              </h3>
              <Activity className="h-4 w-4 text-[var(--text-tertiary)] transition-colors group-hover:text-[var(--accent)]" />
            </div>
            <div className="mb-1 text-3xl font-light text-[var(--text-primary)]">ENCRIPTADO</div>
            <p className="text-xs text-[var(--text-tertiary)]">Canal VHF y Satelital activo</p>
          </div>

          <div className="hud-card group transition-colors duration-300 hover:border-[var(--accent)]">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[.10em] text-[#fff]">
                Rutas de Evac
              </h3>
              <Activity className="h-4 w-4 text-[var(--text-tertiary)] transition-colors group-hover:text-[var(--accent)]" />
            </div>
            <div className="mb-1 text-3xl font-light text-[var(--text-primary)]">
              3 <span className="text-sm text-[var(--text-tertiary)]">VÍAS</span>
            </div>
            <p className="flex items-center gap-1 text-xs text-[var(--text-tertiary)]">
              <span className="cursor-pointer text-yellow-500 hover:text-yellow-400">
                Revisar mapa topográfico
              </span>
            </p>
          </div>
        </div>
      </main>

      {/* Decorative HUD Elements */}
      <div className="border-[var(--border-ui)]/30 fixed bottom-0 left-0 z-0 h-1 w-full border-t backdrop-blur-sm"></div>
      <div className="fixed right-4 top-20 z-0 hidden h-32 w-px bg-gradient-to-b from-[var(--logo-neon)] to-transparent opacity-30 lg:block"></div>
      <div className="fixed left-4 top-20 z-0 hidden h-16 w-px bg-gradient-to-b from-[var(--text-tertiary)] to-transparent opacity-20 lg:block"></div>
    </div>
  );
}

export default App;
