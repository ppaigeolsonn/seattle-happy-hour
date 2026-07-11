"use client";

import { useState } from "react";
import Link from "next/link";
import { bars, DATA_LAST_VERIFIED } from "@/data/bars";
import { getTodayName, isHappyHourNow } from "@/lib/happyHour";
import { formatTime } from "@/lib/format";
import { DealRow } from "@/components/DealRow";
import { Bar } from "@/types/bar";

const NEIGHBORHOODS = Array.from(
  new Set(bars.map((bar) => bar.neighborhood)),
).sort();

function BarCard({ bar }: { bar: Bar }) {
  const activeNow = isHappyHourNow(bar);
  const today = getTodayName();
  const todayWindows = bar.happyHours.filter((w) => w.days.includes(today));
  const hasHappyHourToday = todayWindows.length > 0;

  return (
    <Link
      href={`/bars/${bar.id}`}
      className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-warm-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="aspect-[16/9] w-full shrink-0 bg-neutral-100">
        {bar.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- photos are hotlinked from arbitrary external domains
          <img
            src={bar.photoUrl}
            alt={bar.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-neutral-300">
            {bar.name.charAt(0)}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold text-charcoal">
              {bar.name}
            </h2>
            <p className="text-sm text-neutral-500">{bar.neighborhood}</p>
          </div>
          <span
            className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
              activeNow
                ? "bg-green-100 text-green-700"
                : "bg-neutral-100 text-neutral-500"
            }`}
          >
            {activeNow ? "Active now" : "Not active"}
          </span>
        </div>

        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
            Today&rsquo;s happy hour
          </p>
          {hasHappyHourToday ? (
            <div className="mt-1 space-y-0.5">
              {todayWindows.map((window, i) => (
                <p key={i} className="text-sm text-charcoal">
                  {formatTime(window.startTime)}–{formatTime(window.endTime)}
                </p>
              ))}
            </div>
          ) : (
            <p className="mt-1 text-sm text-neutral-400">No happy hour today</p>
          )}
        </div>

        <ul className="mt-4 flex-1 space-y-2 border-t border-neutral-100 pt-3">
          {hasHappyHourToday ? (
            bar.deals.map((deal, i) => <DealRow key={i} deal={deal} />)
          ) : (
            <li className="text-sm text-neutral-400">No deals today</li>
          )}
        </ul>

        <p className="mt-3 truncate text-xs text-neutral-400">{bar.address}</p>
        <p className="mt-1 truncate text-xs text-neutral-400">
          Last Verified: {DATA_LAST_VERIFIED}
        </p>
      </div>
    </Link>
  );
}

export default function Home() {
  const [neighborhood, setNeighborhood] = useState("All");
  const [onlyActiveNow, setOnlyActiveNow] = useState(false);

  const filteredBars = bars.filter((bar) => {
    if (!bar.active) {
      return false;
    }
    if (neighborhood !== "All" && bar.neighborhood !== neighborhood) {
      return false;
    }
    if (onlyActiveNow && !isHappyHourNow(bar)) {
      return false;
    }
    return true;
  });

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-teal">
        Happy Hour in the 206
      </h1>
      <p className="mt-1 text-lg text-neutral-500">
        Seattle&rsquo;s happy hours, mapped.
      </p>
      <p className="mt-2 text-charcoal">
        {filteredBars.length} of {bars.length} bars with deals nearby.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <select
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
          className="rounded-md border border-neutral-300 bg-warm-white px-3 py-2 text-sm text-charcoal"
        >
          <option value="All">All neighborhoods</option>
          {NEIGHBORHOODS.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>

        <label className="flex cursor-pointer select-none items-center gap-2">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={onlyActiveNow}
            onChange={(e) => setOnlyActiveNow(e.target.checked)}
          />
          <span className="relative h-6 w-11 shrink-0 rounded-full bg-neutral-200 transition-colors peer-checked:bg-coral">
            <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-warm-white transition-transform peer-checked:translate-x-5" />
          </span>
          <span className="text-sm text-charcoal">Happy hour now</span>
        </label>
      </div>

      {filteredBars.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBars.map((bar) => (
            <BarCard key={bar.id} bar={bar} />
          ))}
        </div>
      ) : (
        <p className="mt-6 text-sm text-neutral-500">
          No bars match these filters.
        </p>
      )}
    </main>
  );
}
