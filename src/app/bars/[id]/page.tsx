import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bars, DATA_LAST_VERIFIED } from "@/data/bars";
import { formatTime } from "@/lib/format";
import { DealRow } from "@/components/DealRow";

export function generateStaticParams() {
  return bars.map((bar) => ({ id: bar.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const bar = bars.find((b) => b.id === id);
  return {
    title: bar
      ? `${bar.name} — Happy Hour in the 206`
      : "Happy Hour in the 206",
  };
}

export default async function BarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bar = bars.find((b) => b.id === id);

  if (!bar) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-10">
      <Link
        href="/"
        className="text-sm font-medium text-coral hover:underline"
      >
        ← All bars
      </Link>

      <div className="mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100">
        {bar.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- photos are hotlinked from arbitrary external domains
          <img
            src={bar.photoUrl}
            alt={bar.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-5xl font-semibold text-neutral-300">
            {bar.name.charAt(0)}
          </div>
        )}
      </div>

      <h1 className="mt-4 text-3xl font-bold text-charcoal">{bar.name}</h1>
      <p className="mt-1 text-neutral-500">{bar.neighborhood}</p>
      <p className="mt-1 text-neutral-500">{bar.address}</p>
      <p className="mt-1 text-sm text-neutral-400">
        Last Verified: {bar.lastVerified ?? DATA_LAST_VERIFIED}
      </p>

      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
        {bar.website && (
          <a
            href={bar.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-coral hover:underline"
          >
            Visit website ↗
          </a>
        )}
        {bar.googleMapsUrl && (
          <a
            href={bar.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-coral hover:underline"
          >
            View on Google Maps ↗
          </a>
        )}
      </div>

      <section className="mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
          Weekly happy hour hours
        </h2>
        {bar.happyHours.length > 0 ? (
          <ul className="mt-2 space-y-1">
            {bar.happyHours.map((window, i) => (
              <li key={i} className="text-charcoal">
                <span className="font-medium">{window.days.join(", ")}:</span>{" "}
                {formatTime(window.startTime)}–{formatTime(window.endTime)}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-neutral-400">
            No confirmed happy hour hours.
          </p>
        )}
        {bar.happyHoursText && (
          <p className="mt-2 text-sm text-neutral-400">
            As listed by source: {bar.happyHoursText}
          </p>
        )}
      </section>

      <section className="mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
          Deals
        </h2>
        <ul className="mt-2 space-y-2 border-t border-neutral-100 pt-3">
          {bar.deals.map((deal, i) => (
            <DealRow key={i} deal={deal} />
          ))}
        </ul>
      </section>
    </main>
  );
}
