import type { ReactNode } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NeonButton } from "@/components/ui/NeonButton";

export const Layout = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed text-white font-mono"
      style={{ backgroundImage: "url('/front.jpg')" }}
    >
      <div className="min-h-screen w-full bg-black/70 backdrop-blur-[4px]">
        <header className="p-10 flex flex-col items-center gap-8 border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-6">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-20 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
            <h1 className="text-6xl font-black tracking-[0.3em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              ASYNC RACE
            </h1>
          </div>

          <div className="flex gap-6">
            <NeonButton variant="primary" onClick={() => navigate("/")}>Garage</NeonButton>
            <NeonButton variant="secondary" onClick={() => navigate("/winners")}>Winners</NeonButton>
          </div>
        </header>

        <main className="container mx-auto px-10 py-12">
          <div className="bg-black/40 border border-white/5 p-8 rounded-xl backdrop-blur-md">
            {children || <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
};
