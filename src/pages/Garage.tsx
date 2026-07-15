import { CarIcon } from "@/components/ui/car-icon";
import { useGarageStore } from "@/store/useGarageStore";
import { useEffect } from "react";

export default function Garage() {
    const {cars, fetchCars, isLoading} = useGarageStore()
    useEffect(() => {
        fetchCars()
    }, [fetchCars])
    if (isLoading) {
        return <div>Loading...</div>
    }
return (
    <div className="garage-page">
      <h1>Garage ({cars.length})</h1>
      
      <div className="cars-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card flex items-center gap-4 p-4 border-b">
            <CarIcon color={car.color} className="w-12 h-12" />
            
            <div>
              <h3>{car.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
