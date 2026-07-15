import type { PaginationProps } from "@/types";

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-8 font-mono">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-6 py-2 border border-white/20 text-white hover:bg-white/10 disabled:opacity-30 transition-all uppercase tracking-widest"
      >
        Prev
      </button>

      <span className="text-white/50 text-sm">
        PAGE {currentPage} / {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-6 py-2 border border-white/20 text-white hover:bg-white/10 disabled:opacity-30 transition-all uppercase tracking-widest"
      >
        Next
      </button>
    </div>
  );
};
