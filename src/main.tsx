import { createRoot } from 'react-dom/client'
import App from './App.tsx' // Reintroduce
import './index.css' // Reintroduce
import { supabase } from './lib/supabase'; // Force import Supabase client

// console.log("TOP OF main.tsx is executing!"); // Remove this log
// console.log("main.tsx is executing!"); // Remove this log
console.log("Supabase client imported directly in main.tsx:", supabase); // Log the imported client

createRoot(document.getElementById("root")!).render(
  <App /> // Reintroduce
);
