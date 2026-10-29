import type { Database } from '@/lib/database.types'

type T = Database['public']['Tables']
type E = Database['public']['Enums']

export type Profile = T['profiles']['Row']
export type Incident = T['incidents']['Row']
export type Tower = T['towers']['Row']
export type TowerReading = T['tower_readings']['Row']
export type Team = T['teams']['Row']
export type Case = T['cases']['Row']
export type Signal = T['signals']['Row']
export type Mission = T['missions']['Row']
export type RoadReport = T['road_reports']['Row']
export type Shelter = T['shelters']['Row']
export type Hospital = T['hospitals']['Row']
export type Alert = T['alerts']['Row']
export type OutboundMessage = T['outbound_messages']['Row']
export type FamilyRequest = T['family_requests']['Row']
export type Notice = T['notifications']['Row']
export type AuditEntry = T['audit_log']['Row']
export type RuleSetting = T['rule_settings']['Row']
export type District = T['districts']['Row']

export type UserRole = E['user_role']
export type CaseStatus = E['case_status']
export type MissionStatus = E['mission_status']
export type RoadStatus = E['road_status']
export type TeamStatus = E['team_status']
export type SignalKind = E['signal_kind']

export type PriorityReason = {
  lives?: number
  urgency?: number
  time_factor?: number
  minutes_left?: number | null
  confidence?: number
  note?: string
}

export type MissionReason = {
  needs?: string[]
  matched?: number
  mode?: 'road' | 'boat' | 'air' | 'foot'
  blocked_roads_near?: number
}

export type PublicIncident = {
  id: string
  name: string
  type: string
  status?: string
  district: string
  state: string
  started_at: string
  is_simulation: boolean
  lat: number
  lng: number
  alert?: { title: string; body: string; reply_safe: string; reply_help: string; sent_at: string } | null
  shelters?: { id: string; name: string; lat: number; lng: number; capacity: number; occupancy: number }[]
}

export type DemoBoard = {
  incident: { id: string; name: string; status: string; started_at: string; lat: number; lng: number }
  cases: {
    code: string; kind: 'person' | 'area'; status: CaseStatus; people: number; priority: number
    trapped: boolean; water_rising: boolean; injured: boolean; lat: number | null; lng: number | null
    radius_m: number | null; title: string | null; updated_at: string
  }[]
  towers: { code: string; name: string; lat: number; lng: number; baseline: number; count: number; status: 'up' | 'down' | 'power_down' }[]
  teams: { name: string; status: TeamStatus; capabilities: string[]; lat: number; lng: number }[]
  missions: { code: string; case: string; team: string; status: MissionStatus; eta_minutes: number | null }[]
}

export type Summary = {
  by_status: Partial<Record<CaseStatus, number>>
  people_waiting: number
  people_safe: number
  silent_areas: number
  teams_available: number
  teams_on_mission: number
  missions_waiting_approval: number
  median_minutes_to_assign: number | null
  signals_last_hour: number
  rescued: number
}
