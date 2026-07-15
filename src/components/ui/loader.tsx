export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#05050a] gap-4">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-cyan-400/30 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-cyan-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>
      
      <p className="text-cyan-400 font-mono text-sm tracking-[0.3em] animate-pulse uppercase">
        Loading Track...
      </p>
    </div>
  );
};