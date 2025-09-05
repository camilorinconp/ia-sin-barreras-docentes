import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Anon Key:", supabaseAnonKey ? "Loaded" : "Not Loaded"); // Don't log the key itself

let supabaseInstance;
try {
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  console.log("Supabase client created successfully.");
} catch (error) {
  console.error("Error creating Supabase client:", error);
  // Optionally, re-throw or handle more gracefully
}

export const supabase = supabaseInstance;