import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "text";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      disabled,
      children,
      icon,
      iconPosition = "right",
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-150 rounded-[12px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 select-none active:scale-[0.99] whitespace-nowrap shrink-0";

    const sizeStyles = {
      sm: "h-9 px-3 text-xs gap-1.5",
      md: "h-[44px] px-4 text-sm gap-2",
      lg: "h-11 sm:h-12 px-6 text-sm sm:text-base gap-2",
    };

    const variantStyles = {
      primary: cn(
        "bg-primary-500 text-white shadow-sm hover:bg-primary-600 active:bg-primary-700",
        disabled &&
          "bg-primary-100 text-primary-300 shadow-none hover:bg-primary-100 cursor-not-allowed active:scale-100"
      ),
      secondary: cn(
        "border border-primary-300 bg-white text-primary-600 hover:bg-primary-50 hover:border-primary-400",
        disabled &&
          "border-primary-100 bg-white text-primary-200 hover:bg-white hover:border-primary-100 cursor-not-allowed active:scale-100"
      ),
      tertiary: cn(
        "border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900",
        disabled &&
          "border-neutral-100 bg-white text-neutral-300 hover:bg-white hover:text-neutral-300 cursor-not-allowed active:scale-100"
      ),
      text: cn(
        "bg-transparent text-primary-500 hover:text-primary-600 hover:bg-primary-100/50 px-2.5 py-1.5 h-auto rounded-[8px] font-medium gap-2",
        disabled &&
          "text-primary-200 bg-transparent hover:bg-transparent hover:text-primary-200 cursor-not-allowed active:scale-100"
      ),
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          baseStyles,
          variant !== "text" && sizeStyles[size],
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="inline-flex shrink-0 items-center justify-center">{icon}</span>
        )}
        <span className="inline-flex items-center">{children}</span>
        {icon && iconPosition === "right" && (
          <span className="inline-flex shrink-0 items-center justify-center">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
