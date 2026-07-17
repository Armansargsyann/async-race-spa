import { useState } from "react";

export const useCreateCarForm = (
  createCar: (name: string, color: string) => Promise<void>,
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
        await createCar(name, color);
        event.currentTarget.reset();
      } catch (error) {
        console.error("System Error: Failed to deploy unit:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting };
};
