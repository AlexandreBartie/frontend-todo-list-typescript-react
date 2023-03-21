import { addDays, subDays } from "date-fns"

export function Today(days = 0): Date {
  const today = new Date()
  
  if (days >= 1) return addDays(today, days)
  if (days <= -1) return subDays(today, days)

  return today
}
