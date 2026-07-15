import { CarIcon } from "@/components/ui/car-icon";
import { useGarageStore } from "@/store/useGarageStore";
import { useEffect, useState } from "react";
import { Pagination } from "@/components/ui/pagination";
export default function Garage() {
  const { cars, fetchCars } = useGarageStore();
const [currentPage, setCurrentPage] = useState(1);
const carsPerPage = 5;
const totalPages = Math.ceil(cars.length / carsPerPage);
  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  return (
    <div className="min-h-screen p-6 md:p-12 relative">
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
          <div
            key={car.id}
            className="flex items-center h-24 border-b border-white/10 relative group"
          >
            <div className="absolute left-0">
              <CarIcon color={car.color} className="w-16 h-16" />
            </div>

            <h3 className="ml-24 text-xl font-mono text-white/70 uppercase tracking-widest">
              {car.name}
            </h3>
          </div>
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
