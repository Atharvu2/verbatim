import React from "react";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface HeroSectionProps {
  onExplore?: () => void;
  onSearch?: (query: string) => void;
}

export function HeroSection({ onExplore, onSearch }: HeroSectionProps) {
  return (
    <section className="relative pt-6 sm:pt-20 pb-5 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
      

      {/* Main Headline */}
      <h1 className="font-serif text-4xl sm:text-5xl md:text-[54px] text-neutral-900 tracking-tight leading-[1.08] font-normal mb-3">
        Search your learning
        <br />
        in plain English.
      </h1>

      {/* Subtitle */}
      <p className="font-sans text-sm sm:text-base text-neutral-600 max-w-lg mx-auto leading-relaxed mb-4.5">
        Verbatim understands what you want to learn and finds the exact lessons
        across all your courses.
      </p>

      {/* CTA Button with horizontal inline Arrow */}
      <div className="mb-5 flex justify-center">
        <Button
          variant="primary"
          size="lg"
          onClick={onExplore}
          icon={<ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} />}
          iconPosition="right"
          className="h-11 sm:h-11.5 px-6 rounded-[12px] bg-primary-500 hover:bg-primary-600 text-white font-medium text-sm sm:text-base shadow-sm active:scale-[0.98]"
        >
          Explore Courses
        </Button>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const input = form.elements.namedItem("search") as HTMLInputElement;
            if (input) onSearch?.(input.value);
          }}
          className="relative flex items-center w-full group"
        >
          <div className="absolute left-4.5 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-500 transition-colors">
            <Search className="w-4.5 h-4.5" strokeWidth={2} />
          </div>
          <input
            type="text"
            name="search"
            placeholder="Ask anything about your learning..."
            className="w-full h-12.5 sm:h-13.5 pl-12 pr-14 rounded-[14px] border border-neutral-200/90 bg-white text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 shadow-xs transition-all duration-200 focus:outline-none focus:border-primary-400 focus:ring-3 focus:ring-primary-400/15"
          />
          <div className="absolute right-3.5 flex items-center pointer-events-none">
            <kbd className="inline-flex items-center justify-center px-2 py-0.5 text-[11px] font-semibold text-neutral-500 bg-neutral-100 border border-neutral-200 rounded-[6px] shadow-2xs">
              ⌘ K
            </kbd>
          </div>
        </form>
      </div>
    </section>
  );
}
