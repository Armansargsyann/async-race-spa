import { useGarageStore } from "@/store/useGarageStore";
import { useEffect, useState } from "react";
import { Pagination } from "@/components/ui/pagination";
import { Loader } from "@/components/ui/loader";
import { CarForm } from "@/components/createCarFormUI";
import { CarCard } from "@/components/ui/care-card";
import { NeonButton } from "@/components/ui/NeonButton";
export default function Garage() {
  const { cars, fetchCars, isLoading, selectCar, selectedCarId, removeCar, generateCars } =
    useGarageStore();
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 5;
  const totalPages = Math.ceil(cars.length / carsPerPage);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen p-6 md:p-12 relative">
    <div className="ml-24 mr-24 mb-12 border border-cyan-400/20 bg-black/40 p-6 backdrop-blur-sm">
        <h2 className="text-cyan-400 font-mono text-sm mb-4 uppercase tracking-widest">
          // System: Register New Unit
        </h2>
        
        <div className="flex items-center gap-4">
          <CarForm />
          <NeonButton 
            variant="primary" 
            onClick={generateCars}
            disabled={isLoading}
          >
            {isLoading ? "Generating..." : "Generate Cars"}
          </NeonButton>
        </div>
      </div>

      <div className="absolute left-6 top-0 bottom-0 w-16 border-r-4 border-white/20 flex flex-col items-center justify-center">
        <span className="text-white font-bold tracking-widest [writing-mode:vertical-rl] rotate-180 text-2xl opacity-50">
          START
        </span>
      </div>

      <div className="absolute right-6 top-0 bottom-0 w-16 border-l-4 border-white/20 flex flex-col items-center justify-center">
        <span className="text-white font-bold tracking-widest [writing-mode:vertical-rl] text-2xl opacity-50">
          FINISH
        </span>
      </div>

      <div className="ml-24 mr-24 flex flex-col">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            position={0}
            isSelected={selectedCarId === car.id}
            onSelect={() => selectCar(car.id)}
            onRemove={(id) => removeCar(id)}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
