import { useGarageStore } from "@/store/useGarageStore";
import { useCarForm } from "@/hooks/create-car-form";
import { NeonButton } from "./ui/NeonButton";
import { useEffect, useRef } from "react";

export const CarForm = () => {
  const { createCar, updateCar, selectedCarId, cars } = useGarageStore();
  const formRef = useRef<HTMLFormElement>(null);

  const selectedCar = cars.find((c) => c.id === selectedCarId);

useEffect(() => {
  if (formRef.current) {
    
    const form = formRef.current;
    
    if (selectedCar) {
      (form.elements.namedItem("name") as HTMLInputElement).value = selectedCar.name;
      (form.elements.namedItem("color") as HTMLInputElement).value = selectedCar.color;
    } else {
      form.reset();
    }
  }
}, [selectedCar]);

  const { handleSubmit, isSubmitting } = useCarForm(createCar, updateCar, selectedCarId ?? null);

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex gap-4">
      <input name="name" placeholder="Car Name" className="bg-black/50 border border-white/20 p-2 text-white" required />
      <input type="color" name="color" className="w-16 h-10 cursor-pointer" />
      <NeonButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "..." : selectedCarId ? "UPDATE" : "ADD"}
      </NeonButton>
    </form>
  );
};