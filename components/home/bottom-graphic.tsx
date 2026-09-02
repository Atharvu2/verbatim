import React from "react";

export function BottomGraphic() {
  const bars = [
    { height: "45%", opacity: "0.18" },
    { height: "65%", opacity: "0.28" },
    { height: "85%", opacity: "0.40" },
    { height: "70%", opacity: "0.32" },
    { height: "55%", opacity: "0.22" },
    { height: "35%", opacity: "0.15" },
    { height: "50%", opacity: "0.20" },
    { height: "75%", opacity: "0.35" },
    { height: "95%", opacity: "0.45" },
    { height: "80%", opacity: "0.38" },
    { height: "60%", opacity: "0.26" },
    { height: "40%", opacity: "0.18" },
    { height: "68%", opacity: "0.30" },
    { height: "88%", opacity: "0.42" },
  ];

  return (
    <div
      className="relative w-full h-44 sm:h-56 mt-auto overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex items-end justify-between gap-1.5 sm:gap-3 px-4 max-w-6xl mx-auto">
        {bars.map((bar, idx) => (
          <div
            key={idx}
            className="flex-1 rounded-t-[6px] sm:rounded-t-[8px] transition-all duration-500"
            style={{
              height: bar.height,
              background: `linear-gradient(to top, rgba(67, 142, 116, ${bar.opacity}) 0%, rgba(108, 174, 145, ${Number(bar.opacity) * 0.4}) 60%, rgba(229, 242, 236, 0) 100%)`,
            }}
          />
        ))}
      </div>
      {/* Bottom subtle baseline fade */}
      <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-primary-500/10 to-transparent" />
    </div>
  );
}
