// lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('Supabase URL  Key is missing');
}

if (!supabaseAnonKey) {
  throw new Error('Supabase Anon Key is missing');
}


export const supabase = createClient(supabaseUrl, supabaseAnonKey);
