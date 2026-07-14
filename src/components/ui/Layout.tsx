import { Outlet } from "react-router-dom";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed text-white font-mono"
      style={{ backgroundImage: "url('/front.jpg')" }}
    >
      {/* Տարբերությունն այստեղ է՝ bg-black/70 (ավելի մուգ ասֆալտի համար) */}
      <div className="min-h-screen w-full bg-black/70 backdrop-blur-[2px]">
        
        {/* Նեոնային Header */}
        <header className="p-8 border-b border-purple-500/20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-24 w-auto drop-shadow-[0_0_15px_rgba(192,38,211,0.6)]" 
            />
            <h1 className="text-4xl font-bold tracking-[0.2em] text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              ASYNC RACE
            </h1>
          </div>

          <div className="flex gap-4">
            <button className="px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all rounded uppercase tracking-widest font-bold">
              Garage
            </button>
            <button className="px-8 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(192,38,211,0.5)] transition-all rounded uppercase tracking-widest font-bold">
              Winners
            </button>
          </div>
        </header>

        <main className="container mx-auto p-8">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};