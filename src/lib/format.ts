export function formatTime(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHour = hours % 12 === 0 ? 12 : hours % 12;
  return minutes === 0
    ? `${displayHour}${period}`
    : `${displayHour}:${minutes.toString().padStart(2, "0")}${period}`;
}
