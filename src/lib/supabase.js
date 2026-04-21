import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_bhoomi_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.bhoomi_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_bhoomi_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.bhoomi_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_bhoomi_SUPABASE_PUBLISHABLE_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Database features will be disabled.');
}

export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;
