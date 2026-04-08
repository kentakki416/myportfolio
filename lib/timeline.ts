import { expCards, type ExpCard, type YearMonth } from "@/data"

export const toMonths = (d: YearMonth) => d.year * 12 + d.month

const now = new Date()
export const NOW: YearMonth = { year: now.getFullYear(), month: now.getMonth() + 1 }

export const formatDate = (d: YearMonth | null) =>
  d ? `${d.year}年${d.month}月` : "現在"

export const endMonths = (card: ExpCard) =>
  card.endDate ? toMonths(card.endDate) : toMonths(NOW)

export const mainJobs = expCards
  .filter((c) => c.type === "main")
  .sort((a, b) => toMonths(a.startDate) - toMonths(b.startDate))

export const sideJobs = expCards.filter((c) => c.type === "side")

const allCards = [...mainJobs, ...sideJobs]
export const timelineStartM = Math.min(...allCards.map((c) => toMonths(c.startDate)))
export const timelineEndM = Math.max(...allCards.map((c) => endMonths(c)))
const totalMonths = timelineEndM - timelineStartM

export const pct = (months: number) =>
  totalMonths === 0 ? 0 : (months / totalMonths) * 100
