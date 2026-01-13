import React from "react";

const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-4 overflow-hidden">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/90 backdrop-blur-2xl shadow-[0_28px_120px_rgba(15,23,42,1)]">
        {/* outer glow / frame */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-[2.7rem] bg-[conic-gradient(from_180deg_at_50%_50%,#38bdf8_0deg,#a855f7_120deg,#22c55e_240deg,#38bdf8_360deg)] opacity-70 blur-[3px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-px rounded-[2.4rem] bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950/90"
        />

        {/* subtle background glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[80%] h-56 bg-gradient-to-r from-sky-500/25 via-fuchsia-500/25 to-emerald-400/25 blur-3xl rounded-full"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-20 w-80 h-80 bg-gradient-to-tr from-fuchsia-500/25 via-sky-500/25 to-emerald-400/25 blur-3xl rounded-full"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-emerald-400/20 blur-3xl rounded-full"
        />

        <div className="relative px-6 sm:px-10 py-12 sm:py-16 md:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-50">
            <span className="block">
              Dependable Care, Backed by Trusted
            </span>
            <span className="mt-1 block bg-gradient-to-r from-sky-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
              Professionals.
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300/85 max-w-3xl mx-auto">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it’s a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>

          {/* Search */}
          <div className="mt-6 sm:mt-8 mx-auto w-full max-w-2xl">
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <label className="input input-bordered input-lg rounded-full flex items-center gap-2 bg-slate-950/90 border-white/10 backdrop-blur-xl ring-1 ring-white/10 focus-within:ring-sky-400/70 focus-within:border-sky-400/70 transition-all duration-200 shadow-[0_18px_60px_rgba(15,23,42,1)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                  />
                </svg>
                <input
                  type="text"
                  className="grow bg-transparent outline-none text-slate-100 placeholder:text-slate-500"
                  placeholder="Search any doctor..."
                />
              </label>
              <button className="btn btn-primary btn-lg rounded-full px-6 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 border border-white/10 text-white shadow-[0_18px_60px_rgba(56,189,248,0.9)] hover:shadow-[0_22px_80px_rgba(56,189,248,1)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                <span className="relative flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-60 animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                  </span>
                  Search Now
                </span>
              </button>
            </div>
          </div>

          {/* Images */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-[0_20px_80px_rgba(15,23,42,1)]">
              <img
                src="/banner-img-1.png"
                alt="Friendly doctors in a clinic"
                className="w-full h-56 sm:h-72 object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
              />
              {/* overlay gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300/80">
                    Top Rated
                  </p>
                  <p className="mt-1 text-sm sm:text-base font-semibold text-slate-50">
                    24/7 Online Consultation
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900/80 border border-white/15 text-emerald-300 backdrop-blur">
                  4.9★
                </span>
              </div>
            </figure>

            <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-[0_20px_80px_rgba(15,23,42,1)]">
              <img
                src="/banner-img-1.png"
                alt="Healthcare professionals ready to help"
                className="w-full h-56 sm:h-72 object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300/80">
                    Trusted Network
                  </p>
                  <p className="mt-1 text-sm sm:text-base font-semibold text-slate-50">
                    Verified & Experienced Doctors
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900/80 border border-white/15 text-sky-300 backdrop-blur">
                  1500+ Doctors
                </span>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;