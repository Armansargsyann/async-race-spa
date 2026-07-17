import { useGarageStore } from "@/store/useGarageStore";
import { useCreateCarForm } from "@/hooks/create-car-form"; 
import { NeonButton } from "./ui/NeonButton";
export const CreateCarForm = () => {
  const {createCar} = useGarageStore();
  const { handleSubmit, isSubmitting } = useCreateCarForm(async (name, color) => {
  await createCar(name, color);
});

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input name="name" placeholder="Car Name" className="bg-black/50 border border-white/20 p-2 text-white" required />
      <input type="color" name="color" className="w-16 h-10 cursor-pointer" />
      <NeonButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "..." : "ADD"}
      </NeonButton>
    </form>
  );
};