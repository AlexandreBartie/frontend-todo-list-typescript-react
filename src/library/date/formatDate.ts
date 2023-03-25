import { format } from "date-fns"

export function formatDateLong(date: Date): string {
  return format(date, "PPPP")
}

export function formatDate(date: Date): string {
  return format(date, "PPP")
}

export function formatToday(): string {
  return formatDateLong(new Date())
}

export function formatNow(): string {
  const currentDate: Date = new Date()
  const hours: number = currentDate.getHours()
  const minutes: number = currentDate.getMinutes()
  const seconds: number = currentDate.getSeconds()
  const currentTime = `${hours}:${minutes}:${seconds}`
  return currentTime
}
