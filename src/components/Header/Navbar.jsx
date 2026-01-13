import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-transparent backdrop-blur-xl border-b border-white/5">
      <div className="mx-auto max-w-7xl px-3 sm:px-5">
        {/* Outer container with glow / rounded corners */}
        <div className="mt-3 relative rounded-2xl border border-white/10 bg-slate-950/90 backdrop-blur-2xl shadow-[0_18px_80px_rgba(15,23,42,0.95)]">
          {/* gradient / glow frame */}
          <div className="pointer-events-none absolute -inset-px rounded-[1.25rem] bg-[conic-gradient(from_180deg_at_50%_50%,#38bdf8_0deg,#a855f7_120deg,#22c55e_240deg,#38bdf8_360deg)] opacity-70 blur-[3px]" />
          <div className="pointer-events-none absolute inset-px rounded-[1.1rem] bg-slate-950/95" />

          {/* subtle top gradient line */}
          <div className="pointer-events-none absolute inset-x-6 top-1 h-px bg-gradient-to-r from-sky-500/60 via-fuchsia-500/60 to-emerald-500/60 opacity-80" />

          {/* Real navbar (no overflow-hidden so dropdown can overflow) */}
          <div className="navbar relative z-10 px-1 sm:px-3 min-h-[3.75rem] sm:min-h-[4.25rem]">
            {/* Left: mobile menu + brand */}
            <div className="navbar-start gap-1 sm:gap-3">
              <div className="dropdown">
                <label
                  tabIndex={0}
                  role="button"
                  aria-label="Open menu"
                  className="btn btn-ghost btn-circle lg:hidden text-slate-100 hover:bg-slate-900/70 hover:text-sky-300 transition-colors duration-200 border border-transparent hover:border-sky-500/60"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-200 group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-4 z-50 p-3 shadow-[0_20px_80px_rgba(15,23,42,0.9)] bg-slate-950/95 backdrop-blur-2xl rounded-2xl w-56 border border-white/10 space-y-1 animate-fadeIn"
                >
                  <li>
                    <Link
                      to="/"
                      className="rounded-xl font-medium text-slate-100/90 hover:text-sky-300 hover:bg-slate-900/70 transition-colors duration-200 px-3 py-2 flex items-center justify-between"
                    >
                      <span>Home</span>
                      <span className="h-1 w-1 rounded-full bg-sky-400/60" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/AppointmentedDoctor"
                      className="rounded-xl font-medium text-slate-100/90 hover:text-sky-300 hover:bg-slate-900/70 transition-colors duration-200 px-3 py-2 flex items-center justify-between"
                    >
                      <span>Appointed Doctor</span>
                      <span className="h-1 w-1 rounded-full bg-emerald-400/60" />
                    </Link>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="rounded-xl font-medium text-slate-100/90 hover:text-sky-300 hover:bg-slate-900/70 transition-colors duration-200 px-3 py-2 flex items-center justify-between"
                    >
                      <span>Blogs</span>
                      <span className="h-1 w-1 rounded-full bg-fuchsia-400/60" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="rounded-xl font-medium text-slate-100/90 hover:text-sky-300 hover:bg-slate-900/70 transition-colors duration-200 px-3 py-2 flex items-center justify-between"
                    >
                      <span>Contact Us</span>
                      <span className="h-1 w-1 rounded-full bg-sky-400/60" />
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="btn btn-sm bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 border border-white/15 text-white w-full rounded-full shadow-[0_16px_45px_rgba(56,189,248,0.9)] hover:shadow-[0_22px_70px_rgba(56,189,248,1)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 tracking-wide"
                    >
                      Emergency
                    </a>
                  </li>
                </ul>
              </div>

              <a
                href="/"
                className="group flex items-center gap-3 pl-1 sm:pl-2"
              >
                <span className="relative grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-sky-500 via-fuchsia-500 to-emerald-400 text-white shadow-[0_14px_45px_rgba(56,189,248,0.95)] ring-2 ring-white/15 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
                  <span className="absolute -inset-1 rounded-full bg-white/15 blur-sm" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 sm:w-6 sm:h-6 relative"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path strokeLinecap="round" d="M12 6v12M6 12h12" />
                  </svg>
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-sky-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
                    Phudu
                  </span>
                  <span className="text-[0.68rem] sm:text-[0.7rem] uppercase tracking-[0.2em] text-slate-400/90">
                    Health Platform
                  </span>
                </div>
              </a>
            </div>

            {/* Center: desktop links */}
            <div className="navbar-center hidden lg:flex">
              <div className="relative rounded-full border border-white/10 bg-slate-950/80 backdrop-blur-2xl px-2 py-1 shadow-[0_14px_40px_rgba(15,23,42,0.9)]">
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-white/5 via-transparent to-white/5" />
                <ul className="relative menu menu-horizontal px-1 gap-1">
                  <li>
                    <Link
                      to="/"
                      className="group relative overflow-hidden rounded-full px-3.5 py-1.5 text-[0.9rem] font-medium text-slate-100/90 hover:text-sky-300 focus-visible:text-sky-300 hover:bg-slate-900/80 focus:bg-slate-900/80 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent"
                    >
                      <span className="relative z-10">Home</span>
                      <span className="pointer-events-none absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-sky-500/0 via-sky-500/80 to-sky-500/0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/AppointmentedDoctor"
                      className="group relative overflow-hidden rounded-full px-3.5 py-1.5 text-[0.9rem] font-medium text-slate-100/90 hover:text-emerald-300 focus-visible:text-emerald-300 hover:bg-slate-900/80 focus:bg-slate-900/80 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                    >
                      <span className="relative z-10">Appointed Doctor</span>
                      <span className="pointer-events-none absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/80 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group relative overflow-hidden rounded-full px-3.5 py-1.5 text-[0.9rem] font-semibold text-slate-100/85 hover:text-fuchsia-300 focus-visible:text-fuchsia-300 hover:bg-slate-900/80 focus:bg-slate-900/80 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
                    >
                      <span className="relative z-10">Blogs</span>
                      <span className="pointer-events-none absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/80 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group relative overflow-hidden rounded-full px-3.5 py-1.5 text-[0.9rem] font-semibold text-slate-100/85 hover:text-sky-300 focus-visible:text-sky-300 hover:bg-slate-900/80 focus:bg-slate-900/80 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
                    >
                      <span className="relative z-10">Contact Us</span>
                      <span className="pointer-events-none absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-sky-500/0 via-sky-500/80 to-sky-500/0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="navbar-end">
              <a
                href="#emergency"
                className="btn rounded-full px-4 sm:px-7 font-semibold text-xs sm:text-[0.95rem] border border-sky-300/50 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 text-white shadow-[0_18px_60px_rgba(56,189,248,0.9)] hover:shadow-[0_22px_80px_rgba(56,189,248,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 tracking-wide"
              >
                <span className="relative flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-white/80 opacity-60 animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(248,250,252,0.9)]" />
                  </span>
                  <span className="flex flex-col items-start leading-tight">
                    <span>Emergency</span>
                    <span className="hidden sm:inline text-[0.6rem] uppercase tracking-[0.18em] text-sky-100/80">
                      24/7 Support
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
