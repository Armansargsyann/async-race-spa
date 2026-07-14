export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/front.jpg')" }}
    >
      <div className="min-h-screen w-full bg-black/50 backdrop-blur-[1px]">
        <main className="container mx-auto p-4">{children}</main>
      </div>
    </div>
  );
};
