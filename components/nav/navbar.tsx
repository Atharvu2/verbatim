import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { Bell } from "lucide-react";

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
    { label: "Courses", href: "/courses", active: false },
    { label: "My Learning", href: "/my-learning", active: false },
  ],
  rightElement,
  className,
}: NavbarProps) {
  return (
    <header
      className={cn(
        "w-full bg-white/70 backdrop-blur-md border-b border-neutral-200/80 sticky top-0 z-40 px-6 py-2.5 sm:py-3",
        className
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="focus-visible:outline-none">
            <Logo size="md" />
          </Link>
          <nav className="flex items-center gap-6" aria-label="Main Navigation">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600 focus-visible:outline-none",
                  item.active
                    ? "text-primary-600 font-semibold"
                    : "text-neutral-700"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {rightElement ? (
          <div className="flex items-center gap-3">{rightElement}</div>
        ) : (
          <div className="flex items-center gap-3.5">
            <button
              type="button"
              className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" strokeWidth={1.8} />
            </button>
            <div className="relative">
              <div className="w-8.5 h-8.5 rounded-full overflow-hidden border border-neutral-200 bg-neutral-100 flex items-center justify-center text-xs font-semibold text-neutral-700 shadow-xs cursor-pointer select-none">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="User profile"
                  width={34}
                  height={34}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
