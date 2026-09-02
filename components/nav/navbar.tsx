import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarProps {
  items?: NavItem[];
  className?: string;
  rightElement?: React.ReactNode;
}

export function Navbar({
  items = [
    { label: "Courses", href: "/courses", active: true },
    { label: "My Learning", href: "/my-learning", active: false },
  ],
  rightElement,
  className,
}: NavbarProps) {
  return (
    <header
      className={cn(
        "w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 sticky top-0 z-40 px-6 py-3.5",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="focus-visible:outline-none">
            <Logo size="md" />
          </Link>
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600 focus-visible:outline-none",
                  item.active
                    ? "text-primary-600 font-semibold"
                    : "text-neutral-600"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {rightElement && (
          <div className="flex items-center gap-3">{rightElement}</div>
        )}
      </div>
    </header>
  );
}
