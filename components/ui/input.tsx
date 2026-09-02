import React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  shortcut?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, shortcut, type = "text", ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {icon && (
          <div className="absolute left-3.5 flex items-center pointer-events-none text-neutral-500">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={cn(
            "w-full h-[44px] rounded-[12px] border border-neutral-200 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-500",
            "transition-colors duration-150 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20",
            icon && "pl-10",
            shortcut && "pr-12",
            className
          )}
          {...props}
        />
        {shortcut && (
          <div className="absolute right-3 flex items-center pointer-events-none">
            <kbd className="inline-flex items-center justify-center px-1.5 py-0.5 text-[11px] font-medium text-neutral-500 bg-neutral-100 border border-neutral-200 rounded-[6px]">
              {shortcut}
            </kbd>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export const SearchInput = React.forwardRef<
  HTMLInputElement,
  Omit<InputProps, "icon">
>(({ placeholder = "Search anything...", shortcut = "⌘ K", ...props }, ref) => {
  return (
    <Input
      ref={ref}
      icon={<Search className="w-4 h-4" strokeWidth={2} />}
      placeholder={placeholder}
      shortcut={shortcut}
      {...props}
    />
  );
});

SearchInput.displayName = "SearchInput";
