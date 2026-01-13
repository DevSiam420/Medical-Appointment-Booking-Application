import React from "react";

const Review = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 my-10 relative">
      {/* background glows to match rest of UI */}
      <div className="pointer-events-none absolute -top-32 -right-10 h-64 w-64 rounded-full bg-gradient-to-br from-sky-500/30 via-fuchsia-500/25 to-emerald-400/30 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/30 via-sky-500/25 to-rose-500/25 blur-3xl -z-10" />

      <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/90 backdrop-blur-2xl shadow-[0_24px_100px_rgba(15,23,42,1)]">
        {/* neon frame */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-[2.4rem] bg-[conic-gradient(from_180deg_at_50%_50%,#38bdf8_0deg,#a855f7_120deg,#22c55e_240deg,#38bdf8_360deg)] opacity-70 blur-[3px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-px rounded-[2.1rem] bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950"
        />

        {/* subtle inner accent */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80%] h-36 rounded-full bg-gradient-to-r from-sky-500/15 via-fuchsia-500/15 to-emerald-400/15 blur-2xl" />
        </div>

        <div className="relative px-6 sm:px-10 sm:py-5">
          <div className="mt-5 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
              We Provide{" "}
              <span className="bg-gradient-to-r from-sky-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
                Best Medical Services
              </span>
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-slate-300/85">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* stat 1 */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-500/0 via-sky-500/25 to-fuchsia-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/85 backdrop-blur p-6 sm:p-7 shadow-[0_16px_70px_rgba(15,23,42,1)] transition-all duration-400 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_90px_rgba(15,23,42,1)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 grid place-items-center rounded-xl bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/30">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight text-slate-50">
                      199+
                    </div>
                    <div className="mt-1 h-1 w-12 rounded-full bg-gradient-to-r from-sky-400 via-sky-300 to-fuchsia-400 opacity-80" />
                    <div className="mt-2 text-sm text-slate-300/80">
                      Total Doctors
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* stat 2 */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-400/0 via-amber-400/25 to-fuchsia-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/85 backdrop-blur p-6 sm:p-7 shadow-[0_16px_70px_rgba(15,23,42,1)] transition-all duration-400 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_90px_rgba(15,23,42,1)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 grid place-items-center rounded-xl bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/30">
                    <span className="text-2xl">⭐️</span>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight text-slate-50">
                      467+
                    </div>
                    <div className="mt-1 h-1 w-12 rounded-full bg-gradient-to-r from-amber-300 via-yellow-300 to-fuchsia-300 opacity-80" />
                    <div className="mt-2 text-sm text-slate-300/80">
                      Total Reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* stat 3 */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-fuchsia-500/0 via-fuchsia-500/25 to-sky-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/85 backdrop-blur p-6 sm:p-7 shadow-[0_16px_70px_rgba(15,23,42,1)] transition-all duration-400 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_90px_rgba(15,23,42,1)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 grid place-items-center rounded-xl bg-fuchsia-500/10 text-fuchsia-300 ring-1 ring-fuchsia-500/30">
                    <span className="text-2xl">🩺</span>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight text-slate-50">
                      1900+
                    </div>
                    <div className="mt-1 h-1 w-12 rounded-full bg-gradient-to-r from-fuchsia-300 via-pink-300 to-emerald-300 opacity-80" />
                    <div className="mt-2 text-sm text-slate-300/80">
                      Patients
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* stat 4 */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-400/0 via-emerald-400/25 to-sky-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/85 backdrop-blur p-6 sm:p-7 shadow-[0_16px_70px_rgba(15,23,42,1)] transition-all duration-400 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_90px_rgba(15,23,42,1)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 grid place-items-center rounded-xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/30">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight text-slate-50">
                      300+
                    </div>
                    <div className="mt-1 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-300 via-sky-300 to-fuchsia-300 opacity-80" />
                    <div className="mt-2 text-sm text-slate-300/80">
                      Total Staffs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;