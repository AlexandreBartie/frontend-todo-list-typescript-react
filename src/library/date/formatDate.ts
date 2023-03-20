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
