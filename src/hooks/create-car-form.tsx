import type { Car } from "@/types";
import { useState } from "react";

export const useCarForm = (
  createCar: (name: string, color: string) => Promise<Car | void>,
 updateCar: (id: number, data: { name: string; color: string }) => Promise<Car | void>,
  selectedCarId: number | null
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const color = formData.get("color") as string;

    if (name?.trim() && color) {
      try {
        if (selectedCarId) {
         await updateCar(selectedCarId, { name, color });
        } else {
          await createCar(name, color);
        }
        event.currentTarget.reset();
      } catch (error) {
        console.error("System Error: Failed to perform operation:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting };
};