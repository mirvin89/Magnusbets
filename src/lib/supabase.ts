import { createClient } from '@supabase/supabase-js'

// These will be replaced with actual values from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export type Database = {
  public: {
    Tables: {
      bets: {
        Row: {
          id: number
          created_at: string
          user_id: string | null
          event: string
          wager: number
          odds: number
          outcome: 'pending' | 'win' | 'loss' | 'push'
          date: string
          sport: string | null
          league: string | null
          notes: string | null
        }
        Insert: {
          id?: number
          created_at?: string
          user_id?: string | null
          event: string
          wager: number
          odds: number
          outcome?: 'pending' | 'win' | 'loss' | 'push'
          date?: string
          sport?: string | null
          league?: string | null
          notes?: string | null
        }
        Update: {
          id?: number
          created_at?: string
          user_id?: string | null
          event?: string
          wager?: number
          odds?: number
          outcome?: 'pending' | 'win' | 'loss' | 'push'
          date?: string
          sport?: string | null
          league?: string | null
          notes?: string | null
        }
      }
    }
  }
}