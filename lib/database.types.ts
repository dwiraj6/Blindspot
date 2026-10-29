export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      access_codes: {
        Row: {
          code: string
          district_id: string | null
          expires_at: string | null
          role: Database["public"]["Enums"]["user_role"]
          team_id: string | null
          uses_left: number
        }
        Insert: {
          code: string
          district_id?: string | null
          expires_at?: string | null
          role: Database["public"]["Enums"]["user_role"]
          team_id?: string | null
          uses_left?: number
        }
        Update: {
          code?: string
          district_id?: string | null
          expires_at?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          team_id?: string | null
          uses_left?: number
        }
        Relationships: [
          {
            foreignKeyName: "access_codes_district_id_fkey"
            columns: ["district_id"]
            isOneToOne: false
            referencedRelation: "districts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "access_codes_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      alerts: {
        Row: {
          body: string
          channel: Database["public"]["Enums"]["message_channel"]
          created_at: string
          created_by: string | null
          id: string
          incident_id: string
          language: string
          recipients_est: number | null
          reply_help: string
          reply_safe: string
          sent_at: string | null
          status: Database["public"]["Enums"]["message_status"]
          title: string
        }
        Insert: {
          body: string
          channel?: Database["public"]["Enums"]["message_channel"]
          created_at?: string
          created_by?: string | null
          id?: string
          incident_id: string
          language?: string
          recipients_est?: number | null
          reply_help?: string
          reply_safe?: string
          sent_at?: string | null
          status?: Database["public"]["Enums"]["message_status"]
          title: string
        }
        Update: {
          body?: string
          channel?: Database["public"]["Enums"]["message_channel"]
          created_at?: string
          created_by?: string | null
          id?: string
          incident_id?: string
          language?: string
          recipients_est?: number | null
          reply_help?: string
          reply_safe?: string
          sent_at?: string | null
          status?: Database["public"]["Enums"]["message_status"]
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "alerts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alerts_incident_id_fkey"
            columns: ["incident_id"]
            isOneToOne: false
            referencedRelation: "incidents"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_log: {
        Row: {
          action: string
          actor: string | null
          at: string
          detail: Json | null
          entity: string | null
          entity_id: string | null
          id: number
        }
        Insert: {
          action: string
          actor?: string | null
          at?: string
          detail?: Json | null
          entity?: string | null
          entity_id?: string | null
          id?: never
        }
        Update: {
          action?: string
          actor?: string | null
          at?: string
          detail?: Json | null
          entity?: string | null
          entity_id?: string | null
          id?: never
        }
        Relationships: []
      }
      cases: {
        Row: {
          accuracy_m: number | null
          beacon_id: string | null
          closed_at: string | null
          code: string
          confidence: number
          created_at: string
          deadline_at: string | null
          id: string
          incident_id: string
          injured: boolean
          kind: Database["public"]["Enums"]["case_kind"]
          last_signal_at: string | null
          lat: number | null
          lng: number | null
          location_source: Database["public"]["Enums"]["location_source"] | null
          medical_need: string | null
          needs: string[]
          notes: string | null
          people_count: number
          phone_hash: string | null
          priority: number
          priority_reason: Json | null
          radius_m: number | null
          safe_expires_at: string | null
          signal_count: number
          status: Database["public"]["Enums"]["case_status"]
          title: string | null
          tower_id: string | null
          trapped: boolean
          updated_at: string
          water_rising: boolean
        }
        Insert: {
          accuracy_m?: number | null
          beacon_id?: string | null
          closed_at?: string | null
          code?: string
          confidence?: number
          created_at?: string
          deadline_at?: string | null
          id?: string
          incident_id: string
          injured?: boolean
          kind?: Database["public"]["Enums"]["case_kind"]
          last_signal_at?: string | null
          lat?: number | null
          lng?: number | null
          location_source?:
            | Database["public"]["Enums"]["location_source"]
            | null
          medical_need?: string | null
          needs?: string[]
          notes?: string | null
          people_count?: number
          phone_hash?: string | null
          priority?: number
          priority_reason?: Json | null
          radius_m?: number | null
          safe_expires_at?: string | null
          signal_count?: number
          status?: Database["public"]["Enums"]["case_status"]
          title?: string | null
          tower_id?: string | null
          trapped?: boolean
          updated_at?: string
          water_rising?: boolean
        }
        Update: {
          accuracy_m?: number | null
          beacon_id?: string | null
          closed_at?: string | null
          code?: string
          confidence?: number
          created_at?: string
          deadline_at?: string | null
          id?: string
          incident_id?: string
          injured?: boolean
          kind?: Database["public"]["Enums"]["case_kind"]
          last_signal_at?: string | null
          lat?: number | null
          lng?: number | null
          location_source?:
            | Database["public"]["Enums"]["location_source"]
            | null
          medical_need?: string | null
          needs?: string[]
          notes?: string | null
          people_count?: number
          phone_hash?: string | null
          priority?: number
          priority_reason?: Json | null
          radius_m?: number | null
          safe_expires_at?: string | null
          signal_count?: number
          status?: Database["public"]["Enums"]["case_status"]
          title?: string | null
          tower_id?: string | null
          trapped?: boolean
          updated_at?: string
          water_rising?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "cases_incident_id_fkey"
            columns: ["incident_id"]
            isOneToOne: false
            referencedRelation: "incidents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cases_tower_id_fkey"
            columns: ["tower_id"]
            isOneToOne: false
            referencedRelation: "towers"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_points: {
        Row: {
          first_seen_at: string
          phone: string
          phone_hash: string
        }
        Insert: {
          first_seen_at?: string
          phone: string
          phone_hash: string
        }
        Update: {
          first_seen_at?: string
          phone?: string
          phone_hash?: string
        }
        Relationships: []
      }
      districts: {
        Row: {
          created_at: string
          id: string
          lat: number
          lng: number
          name: string
          state: string
        }
        Insert: {
          created_at?: string
          id?: string
          lat: number
          lng: number
          name: string
          state: string
        }
        Update: {
          created_at?: string
          id?: string
          lat?: number
          lng?: number
          name?: string
          state?: string
        }
        Relationships: []
      }
      family_requests: {
        Row: {
          created_at: string
          id: string
          incident_id: string
          last_known_place: string | null
          matched_case_id: string | null
          missing_name: string | null
          missing_phone_hash: string | null
          public_token: string
          reporter_name: string | null
          reporter_phone_hash: string | null
          status: string
        }
        Insert: {
          created_at?: string
          id?: string
          incident_id: string
          last_known_place?: string | null
          matched_case_id?: string | null
          missing_name?: string | null
          missing_phone_hash?: string | null
          public_token?: string
          reporter_name?: string | null
          reporter_phone_hash?: string | null
          status?: string
        }
        Update: {
          created_at?: string
          id?: string
          incident_id?: string
          last_known_place?: string | null
          matched_case_id?: string | null
          missing_name?: string | null
          missing_phone_hash?: string | null
          public_token?: string
          reporter_name?: string | null
          reporter_phone_hash?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "family_requests_incident_id_fkey"
            columns: ["incident_id"]
            isOneToOne: false
            referencedRelation: "incidents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "family_requests_matched_case_id_fkey"
            columns: ["matched_case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
        ]
      }
      hospitals: {
        Row: {
          beds_free: number
          capabilities: string[]
          district_id: string
          id: string
          lat: number
          lng: number
          name: string
        }
        Insert: {
          beds_free?: number
          capabilities?: string[]
          district_id: string
          id?: string
          lat: number
          lng: number
          name: string
        }
        Update: {
          beds_free?: number
          capabilities?: string[]
          district_id?: string
          id?: string
          lat?: number
          lng?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "hospitals_district_id_fkey"
            columns: ["district_id"]
            isOneToOne: false
            referencedRelation: "districts"
            referencedColumns: ["id"]
          },
        ]
      }
      incidents: {
        Row: {
          closed_at: string | null
          created_at: string
          created_by: string | null
          district_id: string
          id: string
          is_simulation: boolean
          lat: number
          lng: number
          name: string
          radius_km: number
          started_at: string
          status: Database["public"]["Enums"]["incident_status"]
          type: Database["public"]["Enums"]["incident_type"]
        }
        Insert: {
          closed_at?: string | null
          created_at?: string
          created_by?: string | null
          district_id: string
          id?: string
          is_simulation?: boolean
          lat: number
          lng: number
          name: string
          radius_km?: number
          started_at?: string
          status?: Database["public"]["Enums"]["incident_status"]
          type: Database["public"]["Enums"]["incident_type"]
        }
        Update: {
          closed_at?: string | null
          created_at?: string
          created_by?: string | null
          district_id?: string
          id?: string
          is_simulation?: boolean
          lat?: number
          lng?: number
          name?: string
          radius_km?: number
          started_at?: string
          status?: Database["public"]["Enums"]["incident_status"]
          type?: Database["public"]["Enums"]["incident_type"]
        }
        Relationships: [
          {
            foreignKeyName: "incidents_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "incidents_district_id_fkey"
            columns: ["district_id"]
            isOneToOne: false
            referencedRelation: "districts"
            referencedColumns: ["id"]
          },
        ]
      }
      missions: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          case_id: string
          code: string
          completed_at: string | null
          distance_km: number | null
          eta_minutes: number | null
          id: string
          match_score: number | null
          notes: string | null
          outcome: string | null
          proposed_at: string
          reason: Json | null
          started_at: string | null
          status: Database["public"]["Enums"]["mission_status"]
          team_id: string
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          case_id: string
          code?: string
          completed_at?: string | null
          distance_km?: number | null
          eta_minutes?: number | null
          id?: string
          match_score?: number | null
          notes?: string | null
          outcome?: string | null
          proposed_at?: string
          reason?: Json | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["mission_status"]
          team_id: string
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          case_id?: string
          code?: string
          completed_at?: string | null
          distance_km?: number | null
          eta_minutes?: number | null
          id?: string
          match_score?: number | null
          notes?: string | null
          outcome?: string | null
          proposed_at?: string
          reason?: Json | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["mission_status"]
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "missions_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "missions_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "missions_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          acknowledged_at: string | null
          acknowledged_by: string | null
          body: string | null
          created_at: string
          entity: string | null
          entity_id: string | null
          id: number
          incident_id: string | null
          level: Database["public"]["Enums"]["notice_level"]
          title: string
        }
        Insert: {
          acknowledged_at?: string | null
          acknowledged_by?: string | null
          body?: string | null
          created_at?: string
          entity?: string | null
          entity_id?: string | null
          id?: never
          incident_id?: string | null
          level?: Database["public"]["Enums"]["notice_level"]
          title: string
        }
        Update: {
          acknowledged_at?: string | null
          acknowledged_by?: string | null
          body?: string | null
          created_at?: string
          entity?: string | null
          entity_id?: string | null
          id?: never
          incident_id?: string | null
          level?: Database["public"]["Enums"]["notice_level"]
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_acknowledged_by_fkey"
            columns: ["acknowledged_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_incident_id_fkey"
            columns: ["incident_id"]
            isOneToOne: false
            referencedRelation: "incidents"
            referencedColumns: ["id"]
          },
        ]
      }
      outbound_messages: {
        Row: {
          body: string
          case_id: string | null
          channel: Database["public"]["Enums"]["message_channel"]
          created_at: string
          id: string
          incident_id: string | null
          sent_at: string | null
          status: Database["public"]["Enums"]["message_status"]
          to_phone_hash: string | null
        }
        Insert: {
          body: string
          case_id?: string | null
          channel?: Database["public"]["Enums"]["message_channel"]
          created_at?: string
          id?: string
          incident_id?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["message_status"]
          to_phone_hash?: string | null
        }
        Update: {
          body?: string
          case_id?: string | null
          channel?: Database["public"]["Enums"]["message_channel"]
          created_at?: string
          id?: string
          incident_id?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["message_status"]
          to_phone_hash?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "outbound_messages_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "outbound_messages_incident_id_fkey"
            columns: ["incident_id"]
            isOneToOne: false
            referencedRelation: "incidents"
            referencedColumns: ["id"]
          },
        ]
      }
      pilot_requests: {
        Row: {
          created_at: string
          district: string | null
          email: string
          id: string
          message: string | null
          name: string
          organisation: string
          phone: string | null
          role_title: string | null
        }
        Insert: {
          created_at?: string
          district?: string | null
          email: string
          id?: string
          message?: string | null
          name: string
          organisation: string
          phone?: string | null
          role_title?: string | null
        }
        Update: {
          created_at?: string
          district?: string | null
          email?: string
          id?: string
          message?: string | null
          name?: string
          organisation?: string
          phone?: string | null
          role_title?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          agency: string | null
          created_at: string
          district_id: string | null
          full_name: string | null
          id: string
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          team_id: string | null
        }
        Insert: {
          agency?: string | null
          created_at?: string
          district_id?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          team_id?: string | null
        }
        Update: {
          agency?: string | null
          created_at?: string
          district_id?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          team_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_district_id_fkey"
            columns: ["district_id"]
            isOneToOne: false
            referencedRelation: "districts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_team_fk"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      road_reports: {
        Row: {
          created_at: string
          expires_at: string
          id: string
          incident_id: string
          lat: number
          lng: number
          note: string | null
          reported_by: string | null
          status: Database["public"]["Enums"]["road_status"]
          team_id: string | null
        }
        Insert: {
          created_at?: string
          expires_at?: string
          id?: string
          incident_id: string
          lat: number
          lng: number
          note?: string | null
          reported_by?: string | null
          status: Database["public"]["Enums"]["road_status"]
          team_id?: string | null
        }
        Update: {
          created_at?: string
          expires_at?: string
          id?: string
          incident_id?: string
          lat?: number
          lng?: number
          note?: string | null
          reported_by?: string | null
          status?: Database["public"]["Enums"]["road_status"]
          team_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "road_reports_incident_id_fkey"
            columns: ["incident_id"]
            isOneToOne: false
            referencedRelation: "incidents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "road_reports_reported_by_fkey"
            columns: ["reported_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "road_reports_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      rule_settings: {
        Row: {
          description: string
          key: string
          value: Json
        }
        Insert: {
          description: string
          key: string
          value: Json
        }
        Update: {
          description?: string
          key?: string
          value?: Json
        }
        Relationships: []
      }
      shelters: {
        Row: {
          capacity: number
          district_id: string
          id: string
          lat: number
          lng: number
          name: string
          occupancy: number
          supplies: Json
        }
        Insert: {
          capacity: number
          district_id: string
          id?: string
          lat: number
          lng: number
          name: string
          occupancy?: number
          supplies?: Json
        }
        Update: {
          capacity?: number
          district_id?: string
          id?: string
          lat?: number
          lng?: number
          name?: string
          occupancy?: number
          supplies?: Json
        }
        Relationships: [
          {
            foreignKeyName: "shelters_district_id_fkey"
            columns: ["district_id"]
            isOneToOne: false
            referencedRelation: "districts"
            referencedColumns: ["id"]
          },
        ]
      }
      signals: {
        Row: {
          accuracy_m: number | null
          battery_pct: number | null
          beacon_id: string | null
          case_id: string | null
          for_someone_else: boolean
          hops: number | null
          id: number
          incident_id: string
          injured: boolean | null
          kind: Database["public"]["Enums"]["signal_kind"]
          lat: number | null
          lng: number | null
          location_source: Database["public"]["Enums"]["location_source"] | null
          medical_need: string | null
          people_count: number | null
          phone_hash: string | null
          raw: Json | null
          received_at: string
          reported_by: string | null
          source: Database["public"]["Enums"]["signal_source"]
          trapped: boolean | null
          water_rising: boolean | null
        }
        Insert: {
          accuracy_m?: number | null
          battery_pct?: number | null
          beacon_id?: string | null
          case_id?: string | null
          for_someone_else?: boolean
          hops?: number | null
          id?: never
          incident_id: string
          injured?: boolean | null
          kind: Database["public"]["Enums"]["signal_kind"]
          lat?: number | null
          lng?: number | null
          location_source?:
            | Database["public"]["Enums"]["location_source"]
            | null
          medical_need?: string | null
          people_count?: number | null
          phone_hash?: string | null
          raw?: Json | null
          received_at?: string
          reported_by?: string | null
          source: Database["public"]["Enums"]["signal_source"]
          trapped?: boolean | null
          water_rising?: boolean | null
        }
        Update: {
          accuracy_m?: number | null
          battery_pct?: number | null
          beacon_id?: string | null
          case_id?: string | null
          for_someone_else?: boolean
          hops?: number | null
          id?: never
          incident_id?: string
          injured?: boolean | null
          kind?: Database["public"]["Enums"]["signal_kind"]
          lat?: number | null
          lng?: number | null
          location_source?:
            | Database["public"]["Enums"]["location_source"]
            | null
          medical_need?: string | null
          people_count?: number | null
          phone_hash?: string | null
          raw?: Json | null
          received_at?: string
          reported_by?: string | null
          source?: Database["public"]["Enums"]["signal_source"]
          trapped?: boolean | null
          water_rising?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "signals_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "signals_incident_id_fkey"
            columns: ["incident_id"]
            isOneToOne: false
            referencedRelation: "incidents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "signals_reported_by_fkey"
            columns: ["reported_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          agency: string
          capabilities: string[]
          district_id: string
          id: string
          last_checkin_at: string | null
          lat: number | null
          lead_user_id: string | null
          lng: number | null
          members: number
          name: string
          status: Database["public"]["Enums"]["team_status"]
        }
        Insert: {
          agency: string
          capabilities?: string[]
          district_id: string
          id?: string
          last_checkin_at?: string | null
          lat?: number | null
          lead_user_id?: string | null
          lng?: number | null
          members?: number
          name: string
          status?: Database["public"]["Enums"]["team_status"]
        }
        Update: {
          agency?: string
          capabilities?: string[]
          district_id?: string
          id?: string
          last_checkin_at?: string | null
          lat?: number | null
          lead_user_id?: string | null
          lng?: number | null
          members?: number
          name?: string
          status?: Database["public"]["Enums"]["team_status"]
        }
        Relationships: [
          {
            foreignKeyName: "teams_district_id_fkey"
            columns: ["district_id"]
            isOneToOne: false
            referencedRelation: "districts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_lead_user_id_fkey"
            columns: ["lead_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tower_baselines: {
        Row: {
          expected: number
          hour_of_week: number
          tower_id: string
        }
        Insert: {
          expected: number
          hour_of_week: number
          tower_id: string
        }
        Update: {
          expected?: number
          hour_of_week?: number
          tower_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tower_baselines_tower_id_fkey"
            columns: ["tower_id"]
            isOneToOne: false
            referencedRelation: "towers"
            referencedColumns: ["id"]
          },
        ]
      }
      tower_readings: {
        Row: {
          id: number
          incident_id: string | null
          observed_at: string
          phone_count: number
          tower_id: string
          tower_status: Database["public"]["Enums"]["tower_status"]
        }
        Insert: {
          id?: never
          incident_id?: string | null
          observed_at?: string
          phone_count: number
          tower_id: string
          tower_status?: Database["public"]["Enums"]["tower_status"]
        }
        Update: {
          id?: never
          incident_id?: string | null
          observed_at?: string
          phone_count?: number
          tower_id?: string
          tower_status?: Database["public"]["Enums"]["tower_status"]
        }
        Relationships: [
          {
            foreignKeyName: "tower_readings_incident_id_fkey"
            columns: ["incident_id"]
            isOneToOne: false
            referencedRelation: "incidents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tower_readings_tower_id_fkey"
            columns: ["tower_id"]
            isOneToOne: false
            referencedRelation: "towers"
            referencedColumns: ["id"]
          },
        ]
      }
      towers: {
        Row: {
          baseline_count: number
          code: string
          district_id: string
          id: string
          last_count: number | null
          last_seen_at: string | null
          lat: number
          lng: number
          name: string
          status: Database["public"]["Enums"]["tower_status"]
        }
        Insert: {
          baseline_count: number
          code: string
          district_id: string
          id?: string
          last_count?: number | null
          last_seen_at?: string | null
          lat: number
          lng: number
          name: string
          status?: Database["public"]["Enums"]["tower_status"]
        }
        Update: {
          baseline_count?: number
          code?: string
          district_id?: string
          id?: string
          last_count?: number | null
          last_seen_at?: string | null
          lat?: number
          lng?: number
          name?: string
          status?: Database["public"]["Enums"]["tower_status"]
        }
        Relationships: [
          {
            foreignKeyName: "towers_district_id_fkey"
            columns: ["district_id"]
            isOneToOne: false
            referencedRelation: "districts"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      acknowledge_notification: { Args: { p_id: number }; Returns: undefined }
      approve_mission: {
        Args: { p_mission: string }
        Returns: {
          approved_at: string | null
          approved_by: string | null
          case_id: string
          code: string
          completed_at: string | null
          distance_km: number | null
          eta_minutes: number | null
          id: string
          match_score: number | null
          notes: string | null
          outcome: string | null
          proposed_at: string
          reason: Json | null
          started_at: string | null
          status: Database["public"]["Enums"]["mission_status"]
          team_id: string
        }
        SetofOptions: {
          from: "*"
          to: "missions"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      citizen_case_status: {
        Args: { p_code: string; p_phone: string }
        Returns: Json
      }
      citizen_reply: {
        Args: {
          p_accuracy_m?: number
          p_for_someone_else?: boolean
          p_incident: string
          p_injured?: boolean
          p_kind: string
          p_lat?: number
          p_lng?: number
          p_medical?: string
          p_people?: number
          p_phone: string
          p_trapped?: boolean
          p_water_rising?: boolean
        }
        Returns: Json
      }
      deadline_for: {
        Args: {
          p_injured: boolean
          p_medical: string
          p_trapped: boolean
          p_water: boolean
        }
        Returns: string
      }
      decline_mission: {
        Args: { p_mission: string; p_reason?: string }
        Returns: string
      }
      expected_count: {
        Args: { p_at: string; p_tower: string }
        Returns: number
      }
      family_create: {
        Args: {
          p_incident: string
          p_last_known: string
          p_missing_name: string
          p_missing_phone: string
          p_reporter_name: string
          p_reporter_phone: string
        }
        Returns: Json
      }
      family_status: { Args: { p_token: string }; Returns: Json }
      field_report: {
        Args: {
          p_case?: string
          p_incident: string
          p_injured?: boolean
          p_kind: Database["public"]["Enums"]["signal_kind"]
          p_lat?: number
          p_lng?: number
          p_note?: string
          p_people?: number
          p_trapped?: boolean
          p_water?: boolean
        }
        Returns: Json
      }
      hash_phone: { Args: { p: string }; Returns: string }
      incident_summary: { Args: { p_incident: string }; Returns: Json }
      ingest_signal: { Args: { p: Json }; Returns: Json }
      is_commander: { Args: never; Returns: boolean }
      is_staff: { Args: never; Returns: boolean }
      km: {
        Args: { lat1: number; lat2: number; lng1: number; lng2: number }
        Returns: number
      }
      log_audit: {
        Args: {
          p_action: string
          p_detail: Json
          p_entity: string
          p_id: string
        }
        Returns: undefined
      }
      my_role: {
        Args: never
        Returns: Database["public"]["Enums"]["user_role"]
      }
      needs_for: {
        Args: {
          p_injured: boolean
          p_medical: string
          p_trapped: boolean
          p_water: boolean
        }
        Returns: string[]
      }
      new_simulation_run: { Args: { p_incident: string }; Returns: string }
      normalize_phone: { Args: { p: string }; Returns: string }
      notify: {
        Args: {
          p_body: string
          p_entity: string
          p_id: string
          p_incident: string
          p_level: Database["public"]["Enums"]["notice_level"]
          p_title: string
        }
        Returns: undefined
      }
      propose_mission: {
        Args: { p_case: string; p_exclude?: string[] }
        Returns: string
      }
      public_active_incidents: { Args: never; Returns: Json }
      public_demo_board: { Args: { p_incident: string }; Returns: Json }
      public_incident: { Args: { p_incident: string }; Returns: Json }
      reassign_mission: { Args: { p_case: string }; Returns: string }
      redeem_access_code: {
        Args: { p_code: string }
        Returns: {
          agency: string | null
          created_at: string
          district_id: string | null
          full_name: string | null
          id: string
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          team_id: string | null
        }
        SetofOptions: {
          from: "*"
          to: "profiles"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      report_road: {
        Args: {
          p_incident: string
          p_lat: number
          p_lng: number
          p_note?: string
          p_status: Database["public"]["Enums"]["road_status"]
        }
        Returns: {
          created_at: string
          expires_at: string
          id: string
          incident_id: string
          lat: number
          lng: number
          note: string | null
          reported_by: string | null
          status: Database["public"]["Enums"]["road_status"]
          team_id: string | null
        }
        SetofOptions: {
          from: "*"
          to: "road_reports"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      rule: { Args: { p_key: string }; Returns: Json }
      run_timers: { Args: never; Returns: undefined }
      send_alert: {
        Args: { p_alert: string }
        Returns: {
          body: string
          channel: Database["public"]["Enums"]["message_channel"]
          created_at: string
          created_by: string | null
          id: string
          incident_id: string
          language: string
          recipients_est: number | null
          reply_help: string
          reply_safe: string
          sent_at: string | null
          status: Database["public"]["Enums"]["message_status"]
          title: string
        }
        SetofOptions: {
          from: "*"
          to: "alerts"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      set_team_status: {
        Args: {
          p_status: Database["public"]["Enums"]["team_status"]
          p_team: string
        }
        Returns: {
          agency: string
          capabilities: string[]
          district_id: string
          id: string
          last_checkin_at: string | null
          lat: number | null
          lead_user_id: string | null
          lng: number | null
          members: number
          name: string
          status: Database["public"]["Enums"]["team_status"]
        }
        SetofOptions: {
          from: "*"
          to: "teams"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      shelter_checkin: {
        Args: { p_people?: number; p_phone: string; p_shelter: string }
        Returns: Json
      }
      simulate: { Args: { p_incident: string; p_step: string }; Returns: Json }
      submit_pilot_request: {
        Args: {
          p_district: string
          p_email: string
          p_message: string
          p_name: string
          p_organisation: string
          p_phone: string
          p_role_title: string
        }
        Returns: Json
      }
      team_checkin: {
        Args: {
          p_lat: number
          p_lng: number
          p_status?: Database["public"]["Enums"]["team_status"]
          p_team: string
        }
        Returns: {
          agency: string
          capabilities: string[]
          district_id: string
          id: string
          last_checkin_at: string | null
          lat: number | null
          lead_user_id: string | null
          lng: number | null
          members: number
          name: string
          status: Database["public"]["Enums"]["team_status"]
        }
        SetofOptions: {
          from: "*"
          to: "teams"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      update_case: {
        Args: { p_case: string; p_patch: Json }
        Returns: {
          accuracy_m: number | null
          beacon_id: string | null
          closed_at: string | null
          code: string
          confidence: number
          created_at: string
          deadline_at: string | null
          id: string
          incident_id: string
          injured: boolean
          kind: Database["public"]["Enums"]["case_kind"]
          last_signal_at: string | null
          lat: number | null
          lng: number | null
          location_source: Database["public"]["Enums"]["location_source"] | null
          medical_need: string | null
          needs: string[]
          notes: string | null
          people_count: number
          phone_hash: string | null
          priority: number
          priority_reason: Json | null
          radius_m: number | null
          safe_expires_at: string | null
          signal_count: number
          status: Database["public"]["Enums"]["case_status"]
          title: string | null
          tower_id: string | null
          trapped: boolean
          updated_at: string
          water_rising: boolean
        }
        SetofOptions: {
          from: "*"
          to: "cases"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      update_mission_status: {
        Args: {
          p_mission: string
          p_notes?: string
          p_outcome?: string
          p_status: Database["public"]["Enums"]["mission_status"]
        }
        Returns: {
          approved_at: string | null
          approved_by: string | null
          case_id: string
          code: string
          completed_at: string | null
          distance_km: number | null
          eta_minutes: number | null
          id: string
          match_score: number | null
          notes: string | null
          outcome: string | null
          proposed_at: string
          reason: Json | null
          started_at: string | null
          status: Database["public"]["Enums"]["mission_status"]
          team_id: string
        }
        SetofOptions: {
          from: "*"
          to: "missions"
          isOneToOne: true
          isSetofReturn: false
        }
      }
    }
    Enums: {
      case_kind: "person" | "area"
      case_status:
        | "no_reply"
        | "at_risk"
        | "life_threat"
        | "relief"
        | "assigned"
        | "rescued"
        | "safe"
        | "closed"
      incident_status: "monitoring" | "active" | "closed"
      incident_type:
        | "flood"
        | "landslide"
        | "earthquake"
        | "cyclone"
        | "glacial_flood"
        | "fire"
        | "other"
      location_source: "gps" | "cell" | "aml" | "rssi" | "manual" | "census"
      message_channel: "cell_broadcast" | "sms" | "ivr" | "push"
      message_status: "draft" | "queued" | "sent" | "failed"
      mission_status:
        | "proposed"
        | "approved"
        | "en_route"
        | "on_site"
        | "completed"
        | "aborted"
      notice_level: "info" | "warn" | "critical"
      road_status:
        | "passable"
        | "blocked"
        | "boat_only"
        | "foot_only"
        | "collapsed"
      signal_kind:
        | "safe"
        | "help"
        | "evacuated"
        | "vanished"
        | "blind"
        | "found"
        | "checkin"
      signal_source:
        | "missed_call"
        | "sms"
        | "web"
        | "ivr"
        | "beacon"
        | "tower"
        | "shelter"
        | "field"
        | "proxy"
      team_status: "available" | "on_mission" | "resting" | "offline"
      tower_status: "up" | "down" | "power_down"
      user_role: "viewer" | "analyst" | "rescuer" | "commander" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      case_kind: ["person", "area"],
      case_status: [
        "no_reply",
        "at_risk",
        "life_threat",
        "relief",
        "assigned",
        "rescued",
        "safe",
        "closed",
      ],
      incident_status: ["monitoring", "active", "closed"],
      incident_type: [
        "flood",
        "landslide",
        "earthquake",
        "cyclone",
        "glacial_flood",
        "fire",
        "other",
      ],
      location_source: ["gps", "cell", "aml", "rssi", "manual", "census"],
      message_channel: ["cell_broadcast", "sms", "ivr", "push"],
      message_status: ["draft", "queued", "sent", "failed"],
      mission_status: [
        "proposed",
        "approved",
        "en_route",
        "on_site",
        "completed",
        "aborted",
      ],
      notice_level: ["info", "warn", "critical"],
      road_status: [
        "passable",
        "blocked",
        "boat_only",
        "foot_only",
        "collapsed",
      ],
      signal_kind: [
        "safe",
        "help",
        "evacuated",
        "vanished",
        "blind",
        "found",
        "checkin",
      ],
      signal_source: [
        "missed_call",
        "sms",
        "web",
        "ivr",
        "beacon",
        "tower",
        "shelter",
        "field",
        "proxy",
      ],
      team_status: ["available", "on_mission", "resting", "offline"],
      tower_status: ["up", "down", "power_down"],
      user_role: ["viewer", "analyst", "rescuer", "commander", "admin"],
    },
  },
} as const
