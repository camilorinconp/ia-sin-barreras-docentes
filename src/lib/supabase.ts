console.log("Attempting to import src/lib/supabase.ts"); // New log
throw new Error("FORCED ERROR: Supabase module is being imported!"); // Force an error

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://uewblsnnrmthgzpffxsm.supabase.co"; // HARDCODED FOR DEBUGGING
const supabaseAnonKey = "sb_publishable_js7aPk9mIwEft3qH4_cc_g_LWaNKLdN"; // HARDCODED FOR DEBUGGING

console.log("Supabase URL (Hardcoded):", supabaseUrl);
console.log("Supabase Anon Key (Hardcoded):", supabaseAnonKey ? "Loaded" : "Not Loaded");

let supabaseInstance;
try {
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  console.log("Supabase client created successfully (Hardcoded).");
} catch (error) {
  console.error("Error creating Supabase client (Hardcoded):", error);
}

export const supabase = supabaseInstance;