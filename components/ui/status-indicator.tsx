import React from "react";
import { cn } from "@/lib/utils";
import { Check, Lock, Play } from "lucide-react";

export type StatusType = "in-progress" | "completed" | "now-playing" | "locked";

export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  status: StatusType;
  label?: string;
  showLabel?: boolean;
}

export function StatusIndicator({
  status,
  label,
  showLabel = true,
  className,
  ...props
}: StatusIndicatorProps) {
  const configs: Record<
    StatusType,
    { defaultLabel: string; icon: React.ReactNode; colorClass: string }
  > = {
    "in-progress": {
      defaultLabel: "In Progress",
      colorClass: "text-neutral-800",
      icon: (
        <svg
          className="w-4 h-4 text-primary-500 shrink-0"
          viewBox="0 0 16 16"
          fill="none"
        >
          <circle
            cx="8"
            cy="8"
            r="6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeDasharray="24 12"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    completed: {
      defaultLabel: "Completed",
      colorClass: "text-neutral-800",
      icon: (
        <div className="w-4 h-4 rounded-full border-[1.5px] border-primary-500 flex items-center justify-center shrink-0">
          <Check className="w-2.5 h-2.5 text-primary-500" strokeWidth={3} />
        </div>
      ),
    },
    "now-playing": {
      defaultLabel: "Now Playing",
      colorClass: "text-neutral-800",
      icon: (
        <div className="w-4 h-4 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
          <Play className="w-2 h-2 text-white fill-white ml-0.5" />
        </div>
      ),
    },
    locked: {
      defaultLabel: "Locked",
      colorClass: "text-neutral-500",
      icon: <Lock className="w-4 h-4 text-neutral-500 shrink-0" strokeWidth={2} />,
    },
  };

  const config = configs[status];
  const displayLabel = label || config.defaultLabel;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium",
        config.colorClass,
        className
      )}
      {...props}
    >
      {config.icon}
      {showLabel && <span>{displayLabel}</span>}
    </div>
  );
}
