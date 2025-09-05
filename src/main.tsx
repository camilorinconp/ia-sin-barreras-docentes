import { createRoot } from 'react-dom/client'
// import App from './App.tsx' // Comment out
// import './index.css' // Comment out

console.log("main.tsx is executing!"); // Add this log

createRoot(document.getElementById("root")!).render(
  // <App /> // Comment out
  <div>Hello from main.tsx!</div> // Simple div instead of App
);
