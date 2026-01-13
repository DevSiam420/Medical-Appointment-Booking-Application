import React from "react";
import { Link } from "react-router";

const Doctor = ({ singleDoctor }) => {
  const { name, id, education, experience, registration } = singleDoctor;

  return (
    <Link to={`/DoctorDetails/${id}`}>
      <div className="group relative w-full cursor-pointer overflow-hidden">
        {/* Neon halo on hover */}
        <div className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,#38bdf8_0deg,#a855f7_120deg,#22c55e_240deg,#38bdf8_360deg)] opacity-0 blur-[3px] transition duration-300 group-hover:opacity-80" />

        <div className="relative h-full rounded-3xl border border-white/10 bg-slate-950/90 backdrop-blur-xl shadow-[0_18px_70px_rgba(15,23,42,1)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_90px_rgba(15,23,42,1)] overflow-hidden">
          {/* inner soft gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/12 via-slate-950/60 to-fuchsia-500/12 opacity-80" />

          {/* Image */}
          <div className="relative p-4">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80">
              <div className="absolute -inset-1 bg-gradient-to-tr from-sky-500/40 via-fuchsia-500/30 to-emerald-400/40 opacity-60 blur-xl transition duration-500 group-hover:opacity-90 group-hover:blur-2xl" />
              <img
                src="/banner-img-1.png"
                alt={name}
                className="relative h-40 sm:h-44 md:h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            </div>

            {/* small status chip */}
            <div className="absolute top-5 left-6 flex items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-200 backdrop-blur">
                Online
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="relative px-4 pb-5 space-y-3">
            {/* divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-2" />

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available
              </span>
              <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-200">
                {experience}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold leading-tight text-slate-50">
                {name}
              </h3>
              <p className="mt-1 text-sm text-slate-300/80 line-clamp-2">
                {education}
              </p>
            </div>

            {/* Registration */}
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-xs sm:text-sm text-slate-300">
              <span className="opacity-70">Reg No:</span>
              <span className="font-semibold text-slate-100 truncate">
                {registration}
              </span>
            </div>

            {/* Button */}
            <button className="relative mt-1 btn btn-sm w-full rounded-full border border-white/10 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 text-white text-[13px] font-semibold shadow-[0_14px_45px_rgba(56,189,248,0.9)] hover:shadow-[0_18px_65px_rgba(56,189,248,1)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              <span className="relative flex w-full items-center justify-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                View Details
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Doctor;