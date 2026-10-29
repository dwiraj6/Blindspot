// Same formula as public.score_case in the database, so the calculator on /how-it-works matches the console.
export type PriorityInput = {
  people: number
  status: 'life_threat' | 'at_risk' | 'no_reply' | 'relief' | 'assigned'
  trapped: boolean
  water: boolean
  injured: boolean
  medical: boolean
  minutesLeft: number | null
  confidence: number
}

export function priority(i: PriorityInput) {
  const lives = 1 + Math.log(Math.max(i.people, 1))
  let urgency = 1
  if (i.status === 'life_threat') urgency += 2
  else if (i.status === 'at_risk' || i.status === 'no_reply') urgency += 1
  if (i.trapped) urgency += 1
  if (i.water) urgency += 1.5
  if (i.injured) urgency += 0.5
  if (i.medical) urgency += 0.5
  const time = i.minutesLeft == null ? 1 : Math.max(0.5, Math.min(4, 180 / Math.max(i.minutesLeft, 15)))
  let base = lives * urgency * time * i.confidence
  if (i.status === 'relief') base *= 0.3
  if (i.status === 'assigned') base *= 0.5
  return { score: Math.round(base * 100) / 10, lives, urgency, time }
}
