import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { router } from "./Routes/Rout.jsx";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Global neon / glass background wrapper */}
    <div className="py-5 relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 text-slate-50">
      {/* background glows */}
      <div className="pointer-events-none absolute -top-5 -right-10 h-72 w-72 rounded-full bg-gradient-to-br from-sky-500/35 via-fuchsia-500/30 to-emerald-400/35 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-4 -left-12 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-500/35 via-sky-500/30 to-rose-500/30 blur-3xl -z-10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-900/80 via-slate-950/80 to-transparent -z-10" />

      {/* App content */}
      <div className="relative z-10">
        <RouterProvider router={router} />
      </div>
    </div>
  </StrictMode>
);