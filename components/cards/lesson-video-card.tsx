import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface LessonVideoCardProps {
  badgeLabel?: string;
  title: string;
  description: string;
  lessonNumber?: string;
  timestamp?: string;
  onWatch?: () => void;
  className?: string;
}

export function LessonVideoCard({
  badgeLabel = "VIDEO",
  title,
  description,
  lessonNumber = "Lesson 5.1",
  timestamp = "12:45",
  onWatch,
  className,
}: LessonVideoCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col justify-between rounded-[12px] border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary-300",
        className
      )}
    >
      <div className="space-y-2.5">
        <div>
          <Badge variant="video">{badgeLabel}</Badge>
        </div>
        <h3 className="font-sans font-semibold text-[15px] text-neutral-900 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
        <span className="text-neutral-500 font-medium">
          {lessonNumber} <span className="text-neutral-300 mx-1">•</span> {timestamp}
        </span>
        <button
          type="button"
          onClick={onWatch}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-500 hover:text-primary-600 transition-colors focus-visible:outline-none focus-visible:underline"
        >
          <span>Watch from {timestamp}</span>
          <svg
            className="w-3.5 h-3.5 text-primary-500 fill-none"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.75" />
            <polygon points="8.5,6.5 13.5,10 8.5,13.5" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
}
