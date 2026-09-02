import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, value, defaultValue, ...props }, ref) => {
    return (
      <div className="relative inline-flex items-center w-full">
        <select
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          className={cn(
            "w-full h-[44px] appearance-none rounded-[12px] border border-neutral-200 bg-white px-4 pr-10 text-sm font-medium text-neutral-900 cursor-pointer",
            "transition-colors duration-150 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3.5 flex items-center pointer-events-none text-neutral-500">
          <ChevronDown className="w-4 h-4" strokeWidth={2} />
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
