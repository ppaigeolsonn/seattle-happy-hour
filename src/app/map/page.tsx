"use client";

import dynamic from "next/dynamic";
import { bars } from "@/data/bars";

const BarMap = dynamic(() => import("@/components/BarMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[70vh] w-full items-center justify-center rounded-2xl bg-neutral-100 text-sm text-neutral-400">
      Loading map…
    </div>
  ),
});

export default function MapPage() {
  const activeBars = bars.filter((bar) => bar.active);
  const pinnedCount = activeBars.filter((bar) => bar.location).length;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-orange-600">Map</h1>
      <p className="mt-2 text-neutral-600">
        {pinnedCount} of {activeBars.length} bars pinned.
      </p>

      <div className="mt-6">
        <BarMap bars={activeBars} />
      </div>
    </main>
  );
}
