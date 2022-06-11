import { format } from "fecha";

const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

export function readableTime(time: Date): string {
  const now = new Date();
  if (time.getFullYear() === now.getFullYear()
      && time.getMonth() === now.getMonth()
      && time.getDate() === now.getDate()) {
    return format(time, 'HH:mm');
  }
  return format(time, 'YYYY/MM/DD');
}

export function moreReadableTime(time: Date): string {
  const now = new Date();
  if (time.getFullYear() === now.getFullYear()
      && time.getMonth() === now.getMonth()
      && time.getDate() === now.getDate()) {
    return format(time, 'HH:mm');
  }
  const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
  if (time.getFullYear() === yesterday.getFullYear()
      && time.getMonth() === yesterday.getMonth()
      && time.getDate() === yesterday.getDate()) {
    return `昨天 ${format(time, 'HH:mm')}`;
  }
  const oneWeekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6);
  if (time >= oneWeekAgo) {
    return `星期${weekDays[time.getDay()]} ${format(time, 'HH:mm')}`;
  }
  return format(time, 'YYYY年M月D日 HH:mm');
}