import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export interface LessonCardProps {
  badgeLabel?: string;
  title: string;
  description: string;
  moduleLabel?: string;
  onView?: () => void;
  className?: string;
}

export function LessonCard({
  badgeLabel = "LESSON",
  title,
  description,
  moduleLabel = "Module 5",
  onView,
  className,
}: LessonCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col justify-between rounded-[12px] border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary-300",
        className
      )}
    >
      <div className="space-y-2.5">
        <div>
          <Badge variant="lesson">{badgeLabel}</Badge>
        </div>
        <h3 className="font-sans font-semibold text-base text-neutral-900 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
        <span className="text-neutral-500 font-medium">{moduleLabel}</span>
        <button
          type="button"
          onClick={onView}
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary-500 hover:text-primary-600 transition-colors focus-visible:outline-none focus-visible:underline"
        >
          <span>View lesson</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
