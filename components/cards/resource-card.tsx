import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, FileText } from "lucide-react";

export interface ResourceCardProps {
  title: string;
  description: string;
  fileType?: string;
  fileSize?: string;
  url?: string;
  onOpen?: () => void;
  className?: string;
}

export function ResourceCard({
  title,
  description,
  fileType = "PDF",
  fileSize = "1.2 MB",
  url,
  onOpen,
  className,
}: ResourceCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col justify-between rounded-[12px] border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary-300",
        className
      )}
    >
      <div className="space-y-2.5">
        <div className="w-8 h-8 rounded-[8px] bg-neutral-100 flex items-center justify-center text-neutral-700">
          <FileText className="w-4 h-4" strokeWidth={2} />
        </div>
        <h3 className="font-sans font-semibold text-base text-neutral-900 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
        <span className="text-neutral-500 font-medium">
          {fileType} <span className="text-neutral-300 mx-1">•</span> {fileSize}
        </span>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-neutral-400 hover:text-neutral-700 transition-colors focus-visible:outline-none"
            aria-label="Open resource"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        ) : (
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center text-neutral-400 hover:text-neutral-700 transition-colors focus-visible:outline-none"
            aria-label="Open resource"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
