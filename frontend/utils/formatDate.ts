export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  return date
    .toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // 24-hour format, remove if you want AM/PM
    })
    .replace(",", " at");
}
