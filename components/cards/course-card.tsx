import React from "react";
import { cn } from "@/lib/utils";
import { BarChart2, Clock, Layers } from "lucide-react";

export interface CourseCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  level?: string;
  duration?: string;
  modulesCount?: number | string;
  className?: string;
  onClick?: () => void;
}

export function CourseCard({
  icon,
  title,
  description,
  level = "Intermediate",
  duration = "18h 24m",
  modulesCount = 12,
  className,
  onClick,
}: CourseCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative flex flex-col justify-between rounded-[12px] border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary-300",
        onClick && "cursor-pointer",
        className
      )}
    >
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          {icon ? (
            <div className="shrink-0">{icon}</div>
          ) : (
            <div className="w-9 h-9 rounded-[8px] bg-neutral-900 text-white flex items-center justify-center font-bold text-sm select-none shrink-0">
              N
            </div>
          )}
          <h3 className="font-sans font-semibold text-base text-neutral-900 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center gap-3 text-xs text-neutral-500">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <BarChart2 className="w-3.5 h-3.5 text-neutral-400" strokeWidth={2} />
          {level}
        </span>
        <span className="text-neutral-300">•</span>
        <span className="inline-flex items-center gap-1.5 font-medium">
          <Clock className="w-3.5 h-3.5 text-neutral-400" strokeWidth={2} />
          {duration}
        </span>
        <span className="text-neutral-300">•</span>
        <span className="inline-flex items-center gap-1.5 font-medium">
          <Layers className="w-3.5 h-3.5 text-neutral-400" strokeWidth={2} />
          {modulesCount} modules
        </span>
      </div>
    </div>
  );
}
