import { createRoot } from 'react-dom/client'
import App from './App.tsx' // Reintroduce
import './index.css' // Reintroduce

// console.log("TOP OF main.tsx is executing!"); // Remove this log
// console.log("main.tsx is executing!"); // Remove this log

createRoot(document.getElementById("root")!).render(
  <App /> // Reintroduce
);
