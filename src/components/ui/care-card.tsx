import type { CarCardProps } from "@/types";
import { NeonButton } from "@/components/ui/NeonButton";
import { CarIcon } from "@/components/ui/car-icon";
export const CarCard = ({
  car,
  position = 0,
  onSelect,
  onRemove,
}: CarCardProps) => {
  return (
    <div className="flex items-center gap-4 py-2 border-b border-white/5 group hover:bg-white/5 transition-all">
      <div className="flex flex-col gap-1 w-24">
        <NeonButton
          variant="primary"
          className="!px-2 !py-1 text-[10px]"
          onClick={() => onSelect(car.id)}
        >
          SELECT
        </NeonButton>
        <NeonButton
          variant="danger"
          className="!px-2 !py-1 text-[10px]"
          onClick={() => onRemove(car.id)}
        >
          Remove
        </NeonButton>
      </div>

      <div className="flex-grow relative h-16 bg-black/40 border border-white/5 rounded-sm overflow-hidden flex items-center">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 40px, #ffffff 40px, #ffffff 60px)",
          }}
        ></div>

        <div
          className="absolute transition-all duration-[1000ms] ease-out z-10"
          style={{ left: `${position}%` }}
        >
          <CarIcon color={car.color} className="w-12 h-12" />
          <span className="text-white font-mono text-sm uppercase whitespace-nowrap bg-black/50 px-2 py-0.5 rounded">
            {car.name}
          </span>
        </div>

        <div className="absolute right-0 h-full w-2 bg-yellow-500/30 border-l border-yellow-500/50"></div>
      </div>
    </div>
  );
};
