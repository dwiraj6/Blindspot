import type { PublicIncident } from '@/lib/types'

// Newest active simulated incident, falling back to the newest active one.
export function pickDemoIncident(list: PublicIncident[]) {
  const sorted = [...list].sort((a, b) => +new Date(b.started_at) - +new Date(a.started_at))
  return sorted.find((i) => i.is_simulation) ?? sorted[0] ?? null
}
