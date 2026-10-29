import type { CaseStatus, MissionStatus, RoadStatus, TeamStatus } from '@/lib/types'

const IST = 'Asia/Kolkata'

export const fmtTime = (iso: string | null | undefined) =>
  iso ? new Intl.DateTimeFormat('en-IN', { timeZone: IST, hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date(iso)) : ''

export const fmtDateTime = (iso: string | null | undefined) =>
  iso
    ? new Intl.DateTimeFormat('en-IN', { timeZone: IST, day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date(iso))
    : ''

export const fmtNum = (n: number | null | undefined) => (n == null ? '' : new Intl.NumberFormat('en-IN').format(n))

export function ago(iso: string | null | undefined, now = Date.now()) {
  if (!iso) return ''
  const m = Math.round((now - new Date(iso).getTime()) / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m} min ago`
  const h = Math.floor(m / 60)
  return `${h} h ${m % 60} min ago`
}

export function minutesLeft(deadline: string | null | undefined, now = Date.now()) {
  if (!deadline) return null
  return Math.round((new Date(deadline).getTime() - now) / 60000)
}

export function timeLeftLabel(deadline: string | null | undefined, now = Date.now()) {
  const m = minutesLeft(deadline, now)
  if (m == null) return 'No deadline'
  if (m <= 0) return 'Past the safe window'
  if (m < 60) return `${m} min left`
  return `${Math.floor(m / 60)} h ${m % 60} min left`
}

export const STATUS_LABEL: Record<CaseStatus, string> = {
  no_reply: 'No reply',
  at_risk: 'At risk',
  life_threat: 'Life threat',
  relief: 'Needs relief',
  assigned: 'Help assigned',
  rescued: 'Rescued',
  safe: 'Safe',
  closed: 'Closed',
}

export const STATUS_COLOR: Record<CaseStatus, string> = {
  no_reply: 'var(--st-none)',
  at_risk: 'var(--st-risk)',
  life_threat: 'var(--st-life)',
  relief: 'var(--st-relief)',
  assigned: 'var(--st-assigned)',
  rescued: 'var(--st-safe)',
  safe: 'var(--st-safe)',
  closed: 'var(--st-none)',
}

export const MISSION_LABEL: Record<MissionStatus, string> = {
  proposed: 'Waiting for approval',
  approved: 'Approved',
  en_route: 'En route',
  on_site: 'On site',
  completed: 'Completed',
  aborted: 'Aborted',
}

export const ROAD_LABEL: Record<RoadStatus, string> = {
  passable: 'Passable',
  blocked: 'Blocked',
  boat_only: 'Boat only',
  foot_only: 'Foot only',
  collapsed: 'Collapsed',
}

export const TEAM_LABEL: Record<TeamStatus, string> = {
  available: 'Available',
  on_mission: 'On a mission',
  resting: 'Resting',
  offline: 'Offline',
}

export const NEED_LABEL: Record<string, string> = {
  boat: 'boat',
  heavy_rescue: 'heavy rescue',
  medical: 'medical',
  drone: 'drone',
  relief: 'relief',
  rescue: 'rescue',
  helicopter: 'helicopter',
  bridging: 'bridging',
}

export const OUTCOME_LABEL: Record<string, string> = {
  rescued: 'Rescued',
  handed_to_medical: 'Handed to medical',
  not_found: 'Not found',
  relief_delivered: 'Relief delivered',
}

export function caseSummary(c: { title?: string | null; people_count?: number; people?: number; trapped?: boolean; water_rising?: boolean; injured?: boolean; medical_need?: string | null }) {
  if (c.title) return c.title
  const people = c.people_count ?? c.people ?? 1
  const flags = [c.water_rising && 'water rising', c.trapped && 'trapped', c.injured && 'injured', c.medical_need].filter(Boolean)
  return `${people} ${people === 1 ? 'person' : 'people'}${flags.length ? ', ' + flags.join(', ') : ''}`
}

export function survivalAdvice(o: { water_rising?: boolean; trapped?: boolean; injured?: boolean }) {
  if (o.water_rising) return 'Move to the highest point you can reach safely. Stay off the water and away from walls that are cracking.'
  if (o.trapped) return 'Stay still and save your battery. Tap on metal or pipes every few minutes so rescuers can hear you.'
  if (o.injured) return 'Press firmly on any bleeding. Keep the injured person warm and still until the team arrives.'
  return 'Stay where you are if it is safe, keep your phone on, and keep the screen dim to save battery.'
}

export function errorText(e: unknown) {
  if (e && typeof e === 'object' && 'message' in e) return String((e as { message: string }).message)
  return 'Something went wrong. Try again.'
}
