import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-3 sm:px-5">
        <div className="navbar mt-3 relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/85 backdrop-blur-2xl shadow-[0_18px_80px_rgba(15,23,42,0.95)]">
          {/* gradient / glow frame */}
          <div className="pointer-events-none absolute -inset-px rounded-[1.25rem] bg-[conic-gradient(from_180deg_at_50%_50%,#38bdf8_0deg,#a855f7_120deg,#22c55e_240deg,#38bdf8_360deg)] opacity-70 blur-[3px]" />
          <div className="pointer-events-none absolute inset-px rounded-[1.1rem] bg-slate-950/90" />

          {/* Left: mobile menu + brand */}
          <div className="navbar-start relative z-10">
            <div className="dropdown">
              <label
                tabIndex={0}
                role="button"
                aria-label="Open menu"
                className="btn btn-ghost btn-circle lg:hidden text-slate-100 hover:bg-white/5 hover:text-sky-300 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
                className="menu menu-sm dropdown-content mt-4 z-[1] p-3 shadow-[0_20px_80px_rgba(15,23,42,0.9)] bg-slate-950/95 backdrop-blur-2xl rounded-2xl w-56 border border-white/10"
              >
                <li>
                  <Link
                    to="/"
                    className="rounded-xl font-medium text-slate-100 hover:bg-slate-800/70 hover:text-sky-300 transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/AppointmentedDoctor"
                    className="rounded-xl font-medium text-slate-100 hover:bg-slate-800/70 hover:text-sky-300 transition-colors duration-200"
                  >
                    Appointed Doctor
                  </Link>
                </li>

                <li>
                  <a
                    href="#"
                    className="rounded-xl font-medium text-slate-100 hover:bg-slate-800/70 hover:text-sky-300 transition-colors duration-200"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="rounded-xl font-medium text-slate-100 hover:bg-slate-800/70 hover:text-sky-300 transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="btn btn-sm bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 border border-white/10 text-white w-full rounded-full shadow-[0_16px_45px_rgba(56,189,248,0.9)] hover:shadow-[0_22px_70px_rgba(56,189,248,1)] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Emergency
                  </a>
                </li>
              </ul>
            </div>

            <a href="/" className="flex items-center gap-3 pl-1">
              <span className="relative grid place-items-center w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 via-fuchsia-500 to-emerald-400 text-white shadow-[0_12px_40px_rgba(56,189,248,0.8)] ring-2 ring-white/20">
                <span className="absolute -inset-1 rounded-full bg-white/15 blur-sm" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 relative"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path strokeLinecap="round" d="M12 6v12M6 12h12" />
                </svg>
              </span>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-sky-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
                Phudu
              </span>
            </a>
          </div>

          {/* Center: desktop links */}
          <div className="navbar-center hidden lg:flex relative z-10">
            <ul className="menu menu-horizontal px-1 gap-1">
              <li>
                <Link
                  to="/"
                  className="rounded-full px-3 py-1.5 text-[0.95rem] font-medium text-slate-100 hover:bg-slate-800/80 hover:text-sky-300 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/AppointmentedDoctor"
                  className="rounded-full px-3 py-1.5 text-[0.95rem] font-medium text-slate-100 hover:bg-slate-800/80 hover:text-sky-300 transition-colors duration-200"
                >
                  Appointed Doctor
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-full px-3 py-1.5 text-[0.95rem] font-semibold text-slate-100/90 hover:bg-slate-800/80 hover:text-sky-300 focus:bg-slate-800/80 transition-colors duration-200"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-full px-3 py-1.5 text-[0.95rem] font-semibold text-slate-100/90 hover:bg-slate-800/80 hover:text-sky-300 focus:bg-slate-800/80 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right: CTA */}
          <div className="navbar-end relative z-10">
            <a
              href="#emergency"
              className="btn rounded-full px-5 sm:px-7 font-bold text-sm sm:text-[0.95rem] border border-white/10 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 text-white shadow-[0_18px_60px_rgba(56,189,248,0.9)] hover:shadow-[0_22px_80px_rgba(56,189,248,1)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span className="relative flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                Emergency
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;