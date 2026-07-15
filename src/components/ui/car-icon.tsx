import type { CarIconProps } from "@/types";

export const CarIcon = ({ color, className = "w-10 h-10" }: CarIconProps) => {
  return (
    <svg
      viewBox="0 0 64 28"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 18.5L5 11H14L19 6h27l5 5.5h9l4 7.5v4.5h-58v-4.5zM19 11v5M45 11v5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 6L25 2H41L46 6H20Z" fill={color} fillOpacity="0.4" />
    </svg>
  );
};
