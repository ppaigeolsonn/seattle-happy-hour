import { Bar, DayOfWeek, HappyHourWindow } from "@/types/bar";

const DAY_NAMES: DayOfWeek[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function isWindowActive(window: HappyHourWindow, now: Date): boolean {
  const today = DAY_NAMES[now.getDay()];
  if (!window.days.includes(today)) return false;

  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const start = timeToMinutes(window.startTime);
  const end = timeToMinutes(window.endTime);
  return nowMinutes >= start && nowMinutes < end;
}

export function isHappyHourNow(bar: Bar, now: Date = new Date()): boolean {
  return bar.happyHours.some((window) => isWindowActive(window, now));
}

export function getTodayName(now: Date = new Date()): DayOfWeek {
  return DAY_NAMES[now.getDay()];
}
