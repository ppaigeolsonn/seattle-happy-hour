"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { Bar } from "@/types/bar";

// Simple circle marker instead of Leaflet's default pin icon.
const markerIcon = L.divIcon({
  className: "bar-marker",
  html: '<span style="display:block;width:14px;height:14px;border-radius:9999px;background:#f2765b;border:2px solid #fefbf6;box-shadow:0 1px 3px rgba(0,0,0,0.4);"></span>',
  iconSize: [14, 14],
  iconAnchor: [7, 7],
  popupAnchor: [0, -7],
});

const SEATTLE_CENTER: [number, number] = [47.635, -122.34];

export default function BarMap({ bars }: { bars: Bar[] }) {
  const pinned = bars.filter(
    (bar): bar is Bar & { location: NonNullable<Bar["location"]> } =>
      bar.location !== undefined,
  );

  return (
    <MapContainer
      center={SEATTLE_CENTER}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: "70vh", width: "100%" }}
      className="rounded-2xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pinned.map((bar) => (
        <Marker
          key={bar.id}
          position={[bar.location.lat, bar.location.lng]}
          icon={markerIcon}
        >
          <Popup>
            <div className="text-sm">
              <p className="font-semibold text-charcoal">{bar.name}</p>
              <p className="text-neutral-500">{bar.neighborhood}</p>
              <Link
                href={`/bars/${bar.id}`}
                className="mt-1 inline-block font-medium text-coral hover:underline"
              >
                View details →
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
