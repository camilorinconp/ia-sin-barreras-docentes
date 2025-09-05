import { createRoot } from 'react-dom/client'
import App from './App.tsx' // Reintroduce
import './index.css' // Reintroduce
// import { supabase } from './lib/supabase'; // Comment out direct import

// console.log("TOP OF main.tsx is executing!"); // Remove this log
// console.log("main.tsx is executing!"); // Remove this log
// console.log("Supabase client imported directly in main.tsx:", supabase); // Comment out log

// --- BEGIN DEBUGGING SUPABASE CLIENT INLINE ---
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://uewblsnnrmthgzpffxsm.supabase.co"; // HARDCODED FOR DEBUGGING
const supabaseAnonKey = "sb_publishable_js7aPk9mIwEft3qH4_cc_g_LWaNKLdN"; // HARDCODED FOR DEBUGGING

alert("Supabase URL (INLINE DEBUG): " + supabaseUrl); // Use alert
alert("Supabase Anon Key (INLINE DEBUG): " + (supabaseAnonKey ? "Loaded" : "Not Loaded")); // Use alert

let supabaseInstance;
try {
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  alert("Supabase client created successfully (INLINE DEBUG)."); // Use alert
} catch (error) {
  alert("Error creating Supabase client (INLINE DEBUG): " + error.message); // Use alert
}

const supabase = supabaseInstance; // Define supabase here for App.tsx to use
// --- END DEBUGGING SUPABASE CLIENT INLINE ---


createRoot(document.getElementById("root")!).render(
  <App /> // Reintroduce
);
