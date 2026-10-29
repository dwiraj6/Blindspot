-- Run once in the Supabase SQL editor (project blindspot). Closes the engine test incident; deletes nothing.
update public.missions set status = 'aborted', notes = 'Engine test closed'
 where case_id in (select c.id from public.cases c join public.incidents i on i.id = c.incident_id where i.name = 'Engine test (simulation)');
update public.incidents set status = 'closed', closed_at = now() where name = 'Engine test (simulation)';
update public.towers set status = 'up', last_count = baseline_count, last_seen_at = now();
update public.teams set status = 'available', last_checkin_at = now();
