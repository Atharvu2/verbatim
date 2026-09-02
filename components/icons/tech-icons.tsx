import React from "react";
import { cn } from "@/lib/utils";

export function NextJsIcon({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-11 h-11 rounded-[10px] bg-neutral-900 text-white flex items-center justify-center font-bold text-lg select-none shadow-sm shrink-0",
        className
      )}
    >
      <svg className="w-6 h-6" viewBox="0 0 180 180" fill="none">
        <mask
          id="mask0_next"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="180"
          height="180"
        >
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0_next)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
            fill="white"
          />
          <rect x="115" y="54" width="12" height="72" fill="white" />
        </g>
      </svg>
    </div>
  );
}

export function DockerIcon({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-11 h-11 rounded-[10px] bg-[#EAF5FC] text-[#0DB7ED] flex items-center justify-center select-none shadow-sm shrink-0",
        className
      )}
    >
      <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
        {/* Whale body */}
        <path
          d="M44 24C43.5 20.5 40.5 19 37.5 19C36.5 16 33.5 15 31 15.5C30.5 15 29.5 14.5 28.5 14.5H12C11 14.5 9 16.5 9 18.5V26C9 33 16 37 25 37C34 37 42 32 44 24Z"
          fill="#0080FF"
        />
        {/* Tail fin */}
        <path
          d="M44 24C46 22 47 18 46 16C44 17 41 18 39 18"
          stroke="#0080FF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Eye */}
        <circle cx="14" cy="23" r="1.5" fill="white" />
        {/* Containers */}
        <rect x="15" y="16" width="3" height="3" fill="#24B8E8" rx="0.5" />
        <rect x="19" y="16" width="3" height="3" fill="#24B8E8" rx="0.5" />
        <rect x="23" y="16" width="3" height="3" fill="#24B8E8" rx="0.5" />
        <rect x="19" y="12" width="3" height="3" fill="#24B8E8" rx="0.5" />
        <rect x="23" y="12" width="3" height="3" fill="#24B8E8" rx="0.5" />
        <rect x="27" y="16" width="3" height="3" fill="#24B8E8" rx="0.5" />
      </svg>
    </div>
  );
}

export function TypeScriptIcon({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-11 h-11 rounded-[10px] bg-[#3178C6] text-white flex items-center justify-center font-bold text-sm tracking-tighter select-none shadow-sm shrink-0",
        className
      )}
    >
      <span className="font-sans font-bold text-lg tracking-normal">TS</span>
    </div>
  );
}
