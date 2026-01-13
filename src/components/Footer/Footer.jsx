import React from "react";

const Footer = () => {
  return (
    <div className="mt-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 overflow-hidden">
        {/* background glows */}
        <div className="pointer-events-none absolute -top-20 -left-10 h-52 w-52 rounded-2xl bg-gradient-to-br from-sky-500/30 via-fuchsia-500/25 to-emerald-400/30 blur-3xl -z-10" />
        <div className="pointer-events-none absolute -bottom-3 -right-10 h-56 w-56 rounded-full bg-gradient-to-tr from-indigo-500/30 via-sky-500/25 to-rose-500/25 blur-3xl -z-10" />

        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/90 backdrop-blur-2xl shadow-[0_24px_100px_rgba(15,23,42,1)]">
          {/* neon frame */}
          <div className="pointer-events-none absolute -inset-px rounded-[2.4rem] bg-[conic-gradient(from_180deg_at_50%_50%,#38bdf8_0deg,#a855f7_120deg,#22c55e_240deg,#38bdf8_360deg)] opacity-60 blur-[3px]" />
          <div className="pointer-events-none absolute inset-px rounded-[2.1rem] bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />

          {/* top line accent */}
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

          <div className="relative px-6 sm:px-10 py-10 sm:py-14 text-center">
            <a href="/" className="inline-flex items-center gap-3">
              <span className="relative grid place-items-center size-10 sm:size-11 rounded-full bg-gradient-to-br from-sky-500 via-fuchsia-500 to-emerald-400 text-white shadow-[0_14px_45px_rgba(56,189,248,0.9)] ring-4 ring-white/15">
                <span className="absolute -inset-1 rounded-full bg-white/15 blur-sm" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 relative"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path strokeLinecap="round" d="M12 6v12M6 12h12" />
                </svg>
              </span>
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-sky-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
                Phudu
              </span>
            </a>

            <nav className="mt-6 sm:mt-7">
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm sm:text-base text-slate-300/85">
                <li>
                  <a
                    href="#"
                    className="font-semibold rounded-full px-3 py-1 hover:bg-slate-800/80 hover:text-sky-300 transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#bookings"
                    className="font-semibold rounded-full px-3 py-1 hover:bg-slate-800/80 hover:text-sky-300 transition-colors duration-200"
                  >
                    My-Bookings
                  </a>
                </li>
                <li>
                  <a
                    href="#blogs"
                    className="font-semibold rounded-full px-3 py-1 hover:bg-slate-800/80 hover:text-sky-300 transition-colors duration-200"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="font-semibold rounded-full px-3 py-1 hover:bg-slate-800/80 hover:text-sky-300 transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="mx-auto my-7 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="flex justify-center gap-3 sm:gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="btn btn-circle btn-ghost border border-white/10 bg-slate-900/70 hover:bg-slate-800/80 hover:border-sky-400/60 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 text-[#1877F2]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06C2 17.08 5.66 21.2 10.44 22v-7.02H7.9v-2.92h2.54V9.75c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.22.2 2.22.2v2.44h-1.25c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.92h-2.34V22C18.34 21.2 22 17.08 22 12.06z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="btn btn-circle btn-ghost border border-white/10 bg-slate-900/70 hover:bg-slate-800/80 hover:border-sky-400/60 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.9 3H21l-6.54 7.47L22 21h-5.2l-4.07-4.86L7.9 21H3l7.03-8.03L2 3h5.3l3.7 4.49L18.9 3zm-1.82 16.2h1.41L7.01 4.67H5.5l11.58 14.53z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="btn btn-circle btn-ghost border border-white/10 bg-slate-900/70 hover:bg-slate-800/80 hover:border-sky-400/60 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 text-[#0A66C2]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M6.94 6.5A2.44 2.44 0 1 1 6.93 1.6a2.44 2.44 0 0 1 0 4.9zM3.9 22.4h6.1v-12H3.9v12zM14.2 10.4c2.52 0 3.53 1.38 3.9 2.35V10.4h6.1v12h-6.1v-6.72c0-1.68-.6-2.83-2.1-2.83-1.14 0-1.82.77-2.12 1.52-.11.27-.14.64-.14 1.01v7.02H7.65s.08-11.39 0-12.57h6.55v1.57z"
                    transform="translate(-3.9 -1.6)"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="btn btn-circle btn-ghost border border-white/10 bg-slate-900/70 hover:bg-slate-800/80 hover:border-sky-400/60 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 text-[#FF0000]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2a3.07 3.07 0 0 0-2.16-2.17C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.34.53A3.07 3.07 0 0 0 .5 6.2 32.42 32.42 0 0 0 0 12a32.42 32.42 0 0 0 .66 5.8 3.07 3.07 0 0 0 2.16 2.17C4.66 20.5 12 20.5 12 20.5s7.5 0 9.34-.53a3.07 3.07 0 0 0 2.16-2.17A32.42 32.42 0 0 0 24 12a32.42 32.42 0 0 0-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
            </div>

            <p className="mt-6 text-xs sm:text-sm text-slate-400/80">
              © 2026 Phudu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;