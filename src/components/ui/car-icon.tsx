import type { CarIconProps } from "@/types";

export const CarIcon = ({ color, className = "w-10 h-10" }: CarIconProps) => {
  return (
    <svg
      viewBox="0 0 60 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="8"
        width="56"
        height="24"
        rx="5"
        stroke={color}
        strokeWidth="2.5"
      />

      <rect
        x="12"
        y="12"
        width="22"
        height="16"
        rx="3"
        stroke={color}
        strokeWidth="2"
        strokeOpacity="0.8"
      />

      <line x1="56" y1="10" x2="56" y2="30" stroke="white" strokeWidth="3" />

      <line
        x1="8"
        y1="2"
        x2="18"
        y2="2"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="38"
        x2="18"
        y2="38"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1="2"
        x2="50"
        y2="2"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1="38"
        x2="50"
        y2="38"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};
