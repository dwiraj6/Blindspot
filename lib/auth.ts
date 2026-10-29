import { redirect } from 'next/navigation'
import { supabaseServer } from '@/lib/supabase/server'
import type { Profile, UserRole } from '@/lib/types'

export async function getSession() {
  const supabase = await supabaseServer()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { supabase, user: null, profile: null as Profile | null }
  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).maybeSingle()
  return { supabase, user, profile: profile as Profile | null }
}

export function homeFor(role: UserRole | undefined | null) {
  if (role === 'rescuer') return '/field'
  if (role === 'analyst' || role === 'commander' || role === 'admin') return '/console'
  return '/onboarding'
}

// Server-side gate for layouts and pages. The proxy does an optimistic check; this is the real one.
export async function requireRole(roles: UserRole[], next: string) {
  const session = await getSession()
  if (!session.user) redirect(`/login?next=${encodeURIComponent(next)}`)
  if (!session.profile || session.profile.role === 'viewer') redirect('/onboarding')
  if (!roles.includes(session.profile.role)) redirect(homeFor(session.profile.role))
  return session as typeof session & { profile: Profile }
}
