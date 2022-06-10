import { format } from "fecha";

export function readableTime(time: Date): string {
  const now = new Date();
  if (time.getFullYear() === now.getFullYear()
      && time.getMonth() === now.getMonth()
      && time.getDate() === now.getDate()) {
    return format(time, 'HH:mm');
  }
  return format(time, 'YYYY/MM/DD');
}