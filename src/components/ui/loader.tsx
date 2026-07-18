export const Loader = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center h-full bg-[#05050a]/90 gap-4 z-50 rounded-md">
      <div className="relative w-16 h-16">
        {" "}
        <div className="absolute inset-0 border-4 border-cyan-400/30 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-cyan-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>

      <p className="text-cyan-400 font-mono text-xs tracking-[0.2em] animate-pulse uppercase">
        Loading Garage...
      </p>
    </div>
  );
};
