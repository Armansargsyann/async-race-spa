export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/front.jpg')" }}
    >
      <div className="min-h-screen w-full bg-black/60 backdrop-blur-[2px]">
        
<header className="flex items-center gap-6 p-10">
  <img 
    src="/logo.png" 
    alt="Logo" 
    className="h-24 w-auto drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]" 
  />
</header>      

        <main className="container mx-auto px-8 py-4 text-white">
          {children}
        </main>
      </div>
    </div>
  );
};