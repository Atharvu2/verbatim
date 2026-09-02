"use client";

import React, { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { ProgressBar } from "@/components/ui/progress-bar";
import { CourseCard } from "@/components/cards/course-card";
import { LessonVideoCard } from "@/components/cards/lesson-video-card";
import { LessonCard } from "@/components/cards/lesson-card";
import { ResourceCard } from "@/components/cards/resource-card";
import { Navbar } from "@/components/nav/navbar";
import { Breadcrumbs } from "@/components/nav/breadcrumbs";
import { Pagination } from "@/components/nav/pagination";
import {
  Bell,
  Search,
  FileText,
  Bookmark,
  BarChart2,
  Clock,
  User,
  ChevronRight,
  ExternalLink,
  Eye,
  LayoutGrid,
  Target,
  Accessibility,
} from "lucide-react";

function PlayCircleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.75" />
      <polygon points="8.5,6.5 13.5,10 8.5,13.5" fill="currentColor" />
    </svg>
  );
}

export default function DesignSystemPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [progressValue, setProgressValue] = useState(35);

  const primaryColors = [
    { name: "Primary 500", hex: "#438E74", bg: "bg-primary-500", text: "text-white" },
    { name: "Primary 400", hex: "#6CAE91", bg: "bg-primary-400", text: "text-white" },
    { name: "Primary 300", hex: "#9CCBB5", bg: "bg-primary-300", text: "text-neutral-900" },
    { name: "Primary 200", hex: "#C6E2D5", bg: "bg-primary-200", text: "text-neutral-900" },
    { name: "Primary 100", hex: "#E5F2EC", bg: "bg-primary-100", text: "text-neutral-900" },
  ];

  const neutralColors = [
    { name: "Neutral 900", hex: "#0F172A", bg: "bg-neutral-900", text: "text-white" },
    { name: "Neutral 700", hex: "#334155", bg: "bg-neutral-700", text: "text-white" },
    { name: "Neutral 500", hex: "#64748B", bg: "bg-neutral-500", text: "text-white" },
    { name: "Neutral 300", hex: "#CBD5E1", bg: "bg-neutral-300", text: "text-neutral-900" },
    { name: "Neutral 200", hex: "#E2E8F0", bg: "bg-neutral-200", text: "text-neutral-900" },
    { name: "Neutral 100", hex: "#F1F5F9", bg: "bg-neutral-100", text: "text-neutral-900" },
    { name: "Neutral 50", hex: "#FAFAFC", bg: "bg-neutral-50", text: "text-neutral-900", border: true },
    { name: "White", hex: "#FFFFFF", bg: "bg-white", text: "text-neutral-900", border: true },
  ];

  const spacingTokens = [
    { label: "4", rem: "0.25rem", size: "w-4 h-4" },
    { label: "8", rem: "0.5rem", size: "w-6 h-6" },
    { label: "12", rem: "0.75rem", size: "w-8 h-8" },
    { label: "16", rem: "1rem", size: "w-10 h-10" },
    { label: "24", rem: "1.5rem", size: "w-12 h-12" },
    { label: "32", rem: "2rem", size: "w-14 h-14" },
    { label: "40", rem: "2.5rem", size: "w-16 h-16" },
    { label: "48", rem: "3rem", size: "w-18 h-18" },
    { label: "64", rem: "4rem", size: "w-20 h-20" },
  ];

  const radiusTokens = [
    { label: "4px", sub: "(xs)", className: "rounded-[4px]" },
    { label: "8px", sub: "(sm)", className: "rounded-[8px]" },
    { label: "12px", sub: "(md)", className: "rounded-[12px]" },
    { label: "16px", sub: "(lg)", className: "rounded-[16px]" },
    { label: "24px", sub: "(xl)", className: "rounded-[24px]" },
    { label: "Full", sub: "(circle)", className: "rounded-full" },
  ];

  const shadowTokens = [
    { name: "Sm", spec: "0 1px 2px 0\nrgba(15, 23, 42, 0.05)", shadowClass: "shadow-sm" },
    { name: "Md", spec: "0 4px 12px -2px\nrgba(15, 23, 42, 0.08)", shadowClass: "shadow-md" },
    { name: "Lg", spec: "0 12px 24px -4px\nrgba(15, 23, 42, 0.10)", shadowClass: "shadow-lg" },
    { name: "Xl", spec: "0 20px 40px -8px\nrgba(15, 23, 42, 0.12)", shadowClass: "shadow-xl" },
  ];

  const outlineIcons = [
    Bell,
    Search,
    FileText,
    Bookmark,
    BarChart2,
    Clock,
    User,
    ChevronRight,
  ];

  return (
    <div className="min-h-screen bg-[#FAFCF9] text-neutral-900 pb-24">
      {/* Top Banner / System Header */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10 border-b border-neutral-200">
          <div className="space-y-4 max-w-xl">
            <Logo size="lg" />
            <h1 className="font-serif text-5xl md:text-6xl text-neutral-900 font-normal tracking-tight leading-[1.15]">
              Design System
            </h1>
            <p className="text-neutral-600 text-base leading-relaxed">
              A unified design language for Verbatim learning platform. Clean,
              modern and focused on clarity, consistency and intuitive learning
              experiences.
            </p>
            <div className="pt-2 text-xs font-semibold tracking-wider text-neutral-400 uppercase">
              VERSION 1.0 • MAY 2025
            </div>
          </div>

          {/* 01 COLORS */}
          <div className="w-full md:w-auto space-y-6">
            <div>
              <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3">
                01 COLORS
              </div>
              <div className="text-xs font-semibold text-neutral-700 mb-2">
                Primary
              </div>
              <div className="grid grid-cols-5 gap-3">
                {primaryColors.map((c) => (
                  <div key={c.name} className="flex flex-col gap-1.5">
                    <div
                      className={`h-16 w-16 sm:w-20 rounded-[10px] ${c.bg} shadow-sm border border-black/5`}
                    />
                    <span className="text-[11px] font-medium text-neutral-800">
                      {c.name}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono">
                      {c.hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-neutral-700 mb-2">
                Neutral
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                {neutralColors.map((c) => (
                  <div key={c.name} className="flex flex-col gap-1.5">
                    <div
                      className={`h-14 w-full rounded-[10px] ${c.bg} ${
                        c.border ? "border border-neutral-200" : ""
                      } shadow-sm`}
                    />
                    <span className="text-[11px] font-medium text-neutral-800">
                      {c.name}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono">
                      {c.hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* 02 TYPOGRAPHY & 03 TYPE SCALE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 border-b border-neutral-200 pb-16">
          <div className="lg:col-span-4 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                02 TYPOGRAPHY
              </span>
            </div>
            <div className="space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-5xl text-neutral-900 leading-none">
                  Ag
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-neutral-900 tracking-tight">
                    Instrument Serif
                  </h3>
                  <p className="text-xs text-neutral-500 font-sans mt-0.5">
                    Elegant • Readable • Timeless
                  </p>
                </div>
              </div>

              <div className="flex items-baseline gap-4 pt-4 border-t border-neutral-200/60">
                <span className="font-sans font-bold text-5xl text-neutral-900 leading-none">
                  Ag
                </span>
                <div>
                  <h3 className="font-sans font-semibold text-2xl text-neutral-900 tracking-tight">
                    Inter
                  </h3>
                  <p className="text-xs text-neutral-500 font-sans mt-0.5">
                    Clean • Modern • Highly legible
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                03 TYPE SCALE
              </span>
            </div>
            <div className="overflow-x-auto bg-white rounded-[12px] border border-neutral-200 p-5 shadow-sm">
              <table className="w-full text-left text-xs text-neutral-700">
                <thead>
                  <tr className="border-b border-neutral-100 text-neutral-400 font-semibold uppercase">
                    <th className="pb-3 font-medium">Style</th>
                    <th className="pb-3 font-medium">Font</th>
                    <th className="pb-3 font-medium">Size / Line Height</th>
                    <th className="pb-3 font-medium">Weight</th>
                    <th className="pb-3 font-medium">Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="py-3.5 font-serif text-3xl text-neutral-900 tracking-tight leading-tight">
                      Display 1
                    </td>
                    <td className="py-3.5 font-medium text-neutral-600">Instrument Serif</td>
                    <td className="py-3.5 font-mono text-neutral-500">48 / 56</td>
                    <td className="py-3.5 text-neutral-600">Regular</td>
                    <td className="py-3.5 text-neutral-500">Page titles</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-serif text-2xl text-neutral-900 tracking-tight leading-tight">
                      Display 2
                    </td>
                    <td className="py-3 font-medium text-neutral-600">Instrument Serif</td>
                    <td className="py-3 font-mono text-neutral-500">36 / 44</td>
                    <td className="py-3 text-neutral-600">Regular</td>
                    <td className="py-3 text-neutral-500">Section titles</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-sans font-semibold text-lg text-neutral-900 tracking-tight">
                      Heading 1
                    </td>
                    <td className="py-3 font-medium text-neutral-600">Inter</td>
                    <td className="py-3 font-mono text-neutral-500">28 / 36</td>
                    <td className="py-3 text-neutral-600">Semi Bold</td>
                    <td className="py-3 text-neutral-500">Card titles</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-sans font-semibold text-base text-neutral-900">
                      Heading 2
                    </td>
                    <td className="py-3 font-medium text-neutral-600">Inter</td>
                    <td className="py-3 font-mono text-neutral-500">22 / 30</td>
                    <td className="py-3 text-neutral-600">Semi Bold</td>
                    <td className="py-3 text-neutral-500">Sub section</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-sans font-medium text-sm text-neutral-900">
                      Heading 3
                    </td>
                    <td className="py-3 font-medium text-neutral-600">Inter</td>
                    <td className="py-3 font-mono text-neutral-500">18 / 26</td>
                    <td className="py-3 text-neutral-600">Medium</td>
                    <td className="py-3 text-neutral-500">Small titles</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-sans text-sm text-neutral-800">
                      Body Large
                    </td>
                    <td className="py-3 font-medium text-neutral-600">Inter</td>
                    <td className="py-3 font-mono text-neutral-500">16 / 24</td>
                    <td className="py-3 text-neutral-600">Regular</td>
                    <td className="py-3 text-neutral-500">Body copy</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-sans text-xs text-neutral-700">
                      Body
                    </td>
                    <td className="py-3 font-medium text-neutral-600">Inter</td>
                    <td className="py-3 font-mono text-neutral-500">14 / 20</td>
                    <td className="py-3 text-neutral-600">Regular</td>
                    <td className="py-3 text-neutral-500">Supporting text</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-sans text-[11px] text-neutral-600">
                      Small
                    </td>
                    <td className="py-3 font-medium text-neutral-600">Inter</td>
                    <td className="py-3 font-mono text-neutral-500">12 / 16</td>
                    <td className="py-3 text-neutral-600">Regular</td>
                    <td className="py-3 text-neutral-500">Captions, meta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 04 SPACING & 05 RADIUS & SHADOWS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-b border-neutral-200 pb-16">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                04 SPACING SYSTEM
              </span>
              <p className="text-xs text-neutral-500 mt-1">Base unit: 4px</p>
            </div>
            <div className="flex items-end gap-3.5 flex-wrap">
              {spacingTokens.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-2">
                  <div
                    className={`${s.size} bg-primary-200/80 rounded-[4px] border border-primary-300`}
                  />
                  <div className="text-center">
                    <div className="text-xs font-semibold text-neutral-800">
                      {s.label}
                    </div>
                    <div className="text-[10px] text-neutral-400 font-mono">
                      ({s.rem})
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                05 RADIUS & SHADOWS
              </span>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-semibold text-neutral-700">Radius</div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {radiusTokens.map((r) => (
                  <div key={r.label} className="flex flex-col items-center gap-2">
                    <div
                      className={`w-14 h-14 bg-white border border-neutral-300 shadow-sm ${r.className}`}
                    />
                    <div className="text-center">
                      <div className="text-xs font-semibold text-neutral-800">
                        {r.label}
                      </div>
                      <div className="text-[10px] text-neutral-400">{r.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-neutral-100">
              <div className="text-xs font-semibold text-neutral-700">
                Shadows
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {shadowTokens.map((s) => (
                  <div
                    key={s.name}
                    className={`bg-white rounded-[12px] p-4 border border-neutral-100 flex flex-col justify-between ${s.shadowClass}`}
                  >
                    <div className="text-xs font-semibold text-neutral-800 mb-2">
                      {s.name}
                    </div>
                    <div className="text-[10px] text-neutral-400 font-mono whitespace-pre-line leading-tight">
                      {s.spec}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 06 ICONS, 07 BUTTONS, 08 INPUTS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-b border-neutral-200 pb-16">
          {/* 06 ICONS */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                06 ICONS
              </span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-xs font-semibold text-neutral-600 mb-2.5">
                  Outline Style
                </div>
                <div className="flex items-center gap-3.5 flex-wrap text-neutral-800">
                  <PlayCircleIcon className="w-5 h-5 text-neutral-800" />
                  {outlineIcons.map((IconComp, idx) => (
                    <IconComp
                      key={idx}
                      className="w-5 h-5 hover:text-primary-600 transition-colors"
                      strokeWidth={2}
                    />
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <div className="text-xs font-semibold text-neutral-600 mb-2.5">
                  Filled Style
                </div>
                <div className="flex items-center gap-3.5 flex-wrap text-neutral-900">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Bell className="w-5 h-5 fill-neutral-900 stroke-none" />
                  </div>
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Search className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[5px] border-l-white border-b-[3px] border-b-transparent ml-0.5" />
                    </div>
                  </div>
                  <div className="w-5 h-5 flex items-center justify-center">
                    <FileText className="w-5 h-5 fill-neutral-900 stroke-none" />
                  </div>
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Bookmark className="w-5 h-5 fill-neutral-900 stroke-none" />
                  </div>
                  <div className="w-5 h-5 flex items-center justify-center">
                    <BarChart2 className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Clock className="w-5 h-5 fill-neutral-900 stroke-none text-white" />
                  </div>
                  <div className="w-5 h-5 flex items-center justify-center">
                    <User className="w-5 h-5 fill-neutral-900 stroke-none" />
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-100 text-[11px] text-neutral-500 space-y-1">
                <p>• 24x24px grid</p>
                <p>• 2px stroke width (outline)</p>
                <p>• Rounded line caps</p>
                <p>• Consistent optical balance</p>
              </div>
            </div>
          </div>

          {/* 07 BUTTONS */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                07 BUTTONS
              </span>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-3 text-[11px] font-semibold text-neutral-400 uppercase text-center">
                <span>Primary</span>
                <span>Secondary</span>
                <span>Tertiary</span>
                <span>Text</span>
              </div>

              {/* Default */}
              <div className="grid grid-cols-4 gap-2.5 items-center">
                <Button variant="primary" size="sm">
                  Get Started
                </Button>
                <Button variant="secondary" size="sm">
                  Explore
                </Button>
                <Button
                  variant="tertiary"
                  size="sm"
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  Lesson
                </Button>
                <Button
                  variant="text"
                  size="sm"
                  icon={<PlayCircleIcon className="w-4 h-4 text-primary-500" />}
                >
                  Watch Video
                </Button>
              </div>

              {/* Hover Demonstration */}
              <div className="grid grid-cols-4 gap-2.5 items-center">
                <Button
                  variant="primary"
                  size="sm"
                  className="bg-primary-600"
                >
                  Get Started
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-primary-50 border-primary-400"
                >
                  Explore
                </Button>
                <Button
                  variant="tertiary"
                  size="sm"
                  className="bg-neutral-100"
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  Lesson
                </Button>
                <Button
                  variant="text"
                  size="sm"
                  className="text-primary-600 bg-primary-100/60"
                  icon={<PlayCircleIcon className="w-4 h-4 text-primary-600" />}
                >
                  Watch Video
                </Button>
              </div>

              {/* Disabled */}
              <div className="grid grid-cols-4 gap-2.5 items-center">
                <Button variant="primary" size="sm" disabled>
                  Get Started
                </Button>
                <Button variant="secondary" size="sm" disabled>
                  Explore
                </Button>
                <Button
                  variant="tertiary"
                  size="sm"
                  disabled
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  Lesson
                </Button>
                <Button
                  variant="text"
                  size="sm"
                  disabled
                  icon={<PlayCircleIcon className="w-4 h-4 text-primary-200" />}
                >
                  Watch Video
                </Button>
              </div>

              <div className="pt-3 border-t border-neutral-100 text-[11px] text-neutral-500 space-y-1">
                <p>• Height: 44px (default)</p>
                <p>• Padding: 0 16px (lg), 0 12px (md)</p>
                <p>• Radius: 12px</p>
                <p>• Font: Inter Medium (14–16px)</p>
              </div>
            </div>
          </div>

          {/* 08 INPUTS */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                08 INPUTS
              </span>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-1.5">
                  Search / Text Input
                </label>
                <SearchInput placeholder="Search anything..." shortcut="⌘ K" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-1.5">
                  Select
                </label>
                <Select
                  defaultValue="relevant"
                  options={[
                    { label: "Most Relevant", value: "relevant" },
                    { label: "Newest First", value: "newest" },
                    { label: "Popular", value: "popular" },
                  ]}
                />
              </div>

              <div className="pt-3 border-t border-neutral-100 text-[11px] text-neutral-500 space-y-1">
                <p>• Height: 44px</p>
                <p>• Radius: 12px</p>
                <p>• Border: 1px solid #E2E8F0</p>
                <p>• Focus: Border color #6CAE91 + ring</p>
              </div>
            </div>
          </div>
        </section>

        {/* 09 BADGES, 10 STATUS, 11 PROGRESS BAR */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-neutral-200 pb-16">
          {/* 09 BADGES */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                09 BADGES / TAGS
              </span>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="space-y-1 text-center">
                <div className="text-[11px] text-neutral-400 font-medium">Video</div>
                <Badge variant="video">VIDEO</Badge>
              </div>
              <div className="space-y-1 text-center">
                <div className="text-[11px] text-neutral-400 font-medium">Lesson</div>
                <Badge variant="lesson">LESSON</Badge>
              </div>
              <div className="space-y-1 text-center">
                <div className="text-[11px] text-neutral-400 font-medium">Popular</div>
                <Badge variant="popular">POPULAR</Badge>
              </div>
            </div>
          </div>

          {/* 10 STATUS / INDICATORS */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                10 STATUS / INDICATORS
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <StatusIndicator status="in-progress" />
              <StatusIndicator status="completed" />
              <StatusIndicator status="now-playing" />
              <StatusIndicator status="locked" />
            </div>
          </div>

          {/* 11 PROGRESS BAR */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                11 PROGRESS BAR
              </span>
            </div>
            <div className="space-y-4">
              <ProgressBar value={progressValue} />
              <div className="flex items-center gap-2">
                <Button
                  variant="tertiary"
                  size="sm"
                  onClick={() => setProgressValue((p) => Math.max(0, p - 10))}
                >
                  -10%
                </Button>
                <Button
                  variant="tertiary"
                  size="sm"
                  onClick={() => setProgressValue((p) => Math.min(100, p + 10))}
                >
                  +10%
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 12 CARDS */}
        <section className="space-y-6 border-b border-neutral-200 pb-16">
          <div>
            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
              12 CARDS
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Course Card */}
            <div>
              <div className="text-xs font-semibold text-neutral-500 mb-2">
                Course Card
              </div>
              <CourseCard
                title="Next.js for Production"
                description="Build scalable, high-performance web applications with Next.js."
                level="Intermediate"
                duration="18h 24m"
                modulesCount={12}
              />
            </div>

            {/* Lesson Card (Video) */}
            <div>
              <div className="text-xs font-semibold text-neutral-500 mb-2">
                Lesson Card (Video)
              </div>
              <LessonVideoCard
                badgeLabel="VIDEO"
                title="Data Fetching in Server Components"
                description="Learn how to fetch data on the server using async/await and Next.js best practices."
                lessonNumber="Lesson 5.1"
                timestamp="12:45"
              />
            </div>

            {/* Lesson Card (Lesson) */}
            <div>
              <div className="text-xs font-semibold text-neutral-500 mb-2">
                Lesson Card (Lesson)
              </div>
              <LessonCard
                badgeLabel="LESSON"
                title="Data Fetching & Caching"
                description="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
                moduleLabel="Module 5"
              />
            </div>

            {/* Resource Card */}
            <div>
              <div className="text-xs font-semibold text-neutral-500 mb-2">
                Resource Card
              </div>
              <ResourceCard
                title="Caching and Revalidation Guide"
                description="Deep dive into Next.js caching strategies."
                fileType="PDF"
                fileSize="1.2 MB"
              />
            </div>
          </div>
        </section>

        {/* 13 NAVIGATION */}
        <section className="space-y-8 border-b border-neutral-200 pb-16">
          <div>
            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
              13 NAVIGATION
            </span>
          </div>

          {/* Header Preview */}
          <div className="rounded-[12px] border border-neutral-200 overflow-hidden shadow-sm">
            <Navbar
              items={[
                { label: "Courses", href: "#", active: true },
                { label: "My Learning", href: "#", active: false },
              ]}
              rightElement={
                <div className="flex items-center gap-3">
                  <Button variant="tertiary" size="sm">
                    Sign In
                  </Button>
                  <Button variant="primary" size="sm">
                    Enroll
                  </Button>
                </div>
              }
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Breadcrumbs */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-neutral-500">
                Breadcrumbs
              </div>
              <Breadcrumbs
                items={[
                  { label: "All Courses", href: "#" },
                  { label: "Next.js for Production", href: "#" },
                  { label: "Data Fetching & Caching" },
                ]}
              />
            </div>

            {/* Pagination */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-neutral-500">
                Pagination
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={8}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </section>

        {/* 14 PRINCIPLES */}
        <section className="space-y-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
              14 PRINCIPLES
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-[12px] border border-neutral-200 bg-white p-6 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                <Eye className="w-5 h-5" strokeWidth={2} />
              </div>
              <h4 className="font-sans font-semibold text-neutral-900 text-base">
                Clarity First
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Every element should communicate clearly without visual clutter or ambiguity.
              </p>
            </div>

            <div className="rounded-[12px] border border-neutral-200 bg-white p-6 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                <LayoutGrid className="w-5 h-5" strokeWidth={2} />
              </div>
              <h4 className="font-sans font-semibold text-neutral-900 text-base">
                Consistency
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Use components and patterns consistently across the entire platform.
              </p>
            </div>

            <div className="rounded-[12px] border border-neutral-200 bg-white p-6 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                <Target className="w-5 h-5" strokeWidth={2} />
              </div>
              <h4 className="font-sans font-semibold text-neutral-900 text-base">
                Focus & Calm
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Remove noise and help learners focus on what matters most in their lessons.
              </p>
            </div>

            <div className="rounded-[12px] border border-neutral-200 bg-white p-6 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                <Accessibility className="w-5 h-5" strokeWidth={2} />
              </div>
              <h4 className="font-sans font-semibold text-neutral-900 text-base">
                Accessible
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Design with high contrast, semantic structure, and accessibility in mind.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
