export interface Car {
  id: number;
  name: string;
  color: string;
}
export interface CarIconProps {
  color: string;
  className?: string;
}

export interface CarCardProps {
  car: Car;
  position?: number;
  isSelected?: boolean;
  onSelect: (id: number) => void;
  onRemove: (id: number) => void;
}
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface EngineResponse {
  velocity: number;
  distance: number;
}

export interface DriveResponse {
  success: boolean;
}
