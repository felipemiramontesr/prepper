import { ShieldAlert, Activity, Navigation2, Zap } from 'lucide-react';

function App() {
  return (
    <div className="theme-prepper min-h-screen flex flex-col w-full selection:bg-emerald-900/50">
      
      {/* Header Logotipo Falso */}
      <header className="border-b border-white/10 w-full px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-8 h-8 flex-shrink-0" style={{ color: 'var(--logo-neon)' }} />
          <h1 className="font-black tracking-widest text-[#fff] uppercase text-2xl m-0 leading-none">MAPARD</h1>
          <span className="ml-2 px-2 py-0.5 border border-emerald-500/30 bg-emerald-900/20 text-[var(--accent)] text-xs font-bold tracking-widest uppercase rounded flex items-center shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--logo-neon)] mr-1 animate-pulse"></span>
            Prepper Link
          </span>
        </div>
        <div className="hidden md:flex gap-6 items-center">
            <div className="flex flex-col text-right">
                <span className="text-[var(--text-tertiary)] text-xs tracking-widest uppercase">System Status</span>
                <span className="text-[var(--logo-neon)] text-sm font-semibold tracking-wider flex items-center gap-1"><Activity className="w-3 h-3" /> ONLINE</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="flex flex-col text-right">
                <span className="text-[var(--text-tertiary)] text-xs tracking-widest uppercase">Threat Level</span>
                <span className="text-yellow-500 text-sm font-semibold tracking-wider">ELEVATED</span>
            </div>
        </div>
      </header>

      {/* Main Content (Above the Fold) */}
      <main className="flex-1 w-full max-w-[1280px] mx-auto p-4 md:p-8 flex flex-col items-center justify-center text-center mt-8 md:mt-16">
        
        {/* Título Principal H1 */}
        <h2 className="font-light text-4xl md:text-6xl text-[#fff] tracking-tight mb-4 max-w-4xl drop-shadow-lg">
          Terminal de Coordinación <br/><span className="font-semibold" style={{ color: 'var(--logo-neon)' }}>Táctica y Supervivencia</span>
        </h2>
        
        {/* Subtítulo / Párrafo */}
        <p className="font-light text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          Enlace seguro al sistema central de respuesta ante crisis. Monitoreo de suministros, topografía y protocolos de emergencia en tiempo real.
        </p>

        {/* Acciones */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center mb-16">
          <button className="btn btn-primary w-full sm:w-auto gap-2">
            <Navigation2 className="w-5 h-5" />
            Ingresar al HUB
          </button>
          <button className="btn w-full sm:w-auto gap-2">
            <Zap className="w-5 h-5" />
            Protocolo Rápido
          </button>
        </div>

        {/* Cards / Dashboards preview */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left relative z-10">
          
          <div className="hud-card group hover:border-[var(--accent)] transition-colors duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-sm tracking-[.10em] text-[#fff] uppercase">Inventario Crítico</h3>
              <Activity className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors" />
            </div>
            <div className="text-3xl font-light text-[var(--logo-neon)] mb-1">87%</div>
            <p className="text-xs text-[var(--text-tertiary)] flex items-center gap-1">
              <span className="text-emerald-400">↑ 2%</span> desde última auditoría
            </p>
          </div>

          <div className="hud-card group hover:border-[var(--accent)] transition-colors duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-sm tracking-[.10em] text-[#fff] uppercase">Comunicaciones</h3>
              <Activity className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors" />
            </div>
            <div className="text-3xl font-light text-[var(--text-primary)] mb-1">ENCRIPTADO</div>
            <p className="text-xs text-[var(--text-tertiary)]">Canal VHF y Satelital activo</p>
          </div>

          <div className="hud-card group hover:border-[var(--accent)] transition-colors duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-sm tracking-[.10em] text-[#fff] uppercase">Rutas de Evac</h3>
              <Activity className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors" />
            </div>
            <div className="text-3xl font-light text-[var(--text-primary)] mb-1">3 <span className="text-sm text-[var(--text-tertiary)]">VÍAS</span></div>
            <p className="text-xs text-[var(--text-tertiary)] flex items-center gap-1">
              <span className="text-yellow-500 hover:text-yellow-400 cursor-pointer">Revisar mapa topográfico</span>
            </p>
          </div>

        </div>

      </main>

      {/* Decorative HUD Elements */}
      <div className="fixed bottom-0 left-0 w-full h-1 border-t border-[var(--border-ui)]/30 backdrop-blur-sm z-0"></div>
      <div className="fixed top-20 right-4 w-px h-32 bg-gradient-to-b from-[var(--logo-neon)] to-transparent opacity-30 z-0 hidden lg:block"></div>
      <div className="fixed top-20 left-4 w-px h-16 bg-gradient-to-b from-[var(--text-tertiary)] to-transparent opacity-20 z-0 hidden lg:block"></div>
    </div>
  )
}

export default App
