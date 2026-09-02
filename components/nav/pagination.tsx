import React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage = 1,
  totalPages = 8,
  onPageChange,
  className,
}: PaginationProps) {
  const pages: (number | string)[] = [1, 2, 3, "...", totalPages];

  return (
    <nav
      aria-label="Pagination"
      className={cn("inline-flex items-center gap-1.5 select-none", className)}
    >
      <button
        type="button"
        onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
        disabled={currentPage <= 1}
        className="w-8 h-8 rounded-[8px] flex items-center justify-center text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 disabled:opacity-40 disabled:pointer-events-none transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((page, idx) => {
        if (page === "...") {
          return (
            <span
              key={`dots-${idx}`}
              className="w-8 h-8 flex items-center justify-center text-xs text-neutral-400 font-medium"
            >
              ...
            </span>
          );
        }

        const isCurrent = page === currentPage;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange?.(Number(page))}
            className={cn(
              "w-8 h-8 rounded-[8px] flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none",
              isCurrent
                ? "border border-primary-400 bg-primary-100 text-primary-700 font-semibold"
                : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
            )}
            aria-current={isCurrent ? "page" : undefined}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage >= totalPages}
        className="w-8 h-8 rounded-[8px] flex items-center justify-center text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 disabled:opacity-40 disabled:pointer-events-none transition-colors"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
