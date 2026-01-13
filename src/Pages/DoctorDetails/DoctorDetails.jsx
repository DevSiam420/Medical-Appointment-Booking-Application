import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { AddToStoreDB } from "../../Utilitys/AddToDB";
import { toast } from "react-toastify";

const DoctorDetails = () => {
  const [isRead, setIsRead] = useState(false);
  const doctors = useLoaderData() || [];
  const { id } = useParams();

  const doctorId = Number(id);

  const singleDoctor = doctors.find((doctor) => Number(doctor.id) === doctorId);

  if (!singleDoctor) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="relative overflow-hidden rounded-3xl border border-red-500/30 bg-red-900/20 px-8 py-6 text-center shadow-[0_18px_60px_rgba(248,113,113,0.4)]">
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-500/40 blur-2xl" />
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-red-400">
            Error
          </p>
          <p className="mt-2 text-xl font-bold text-red-100">
            Doctor not found
          </p>
        </div>
      </div>
    );
  }

  const {
    name,
    image,
    education,
    speciality,
    experience,
    registration,
    designation,
    workplace,
    fee,
    availability,
  } = singleDoctor;

  // --- Handler Function (logic preserved) ---
  const HandleMarkAsRead = (DocId) => {
    AddToStoreDB(Number(DocId));
    setIsRead(true);

    // Toastify on click
    toast.success(`${name} marked as read`, {
      icon: "📘",
      theme: "dark",
      style: {
        borderRadius: "9999px",
        background: "#020617",
        color: "#e5e7eb",
        border: "1px solid rgba(56,189,248,0.5)",
      },
      progressStyle: {
        background: "#22c55e",
      },
    });
  };

  return (
    <div className="my-6">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-10 overflow-hidden">
        {/* Background gradients */}
        <div className="pointer-events-none my-2 absolute inset-0 -z-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 rounded-md" />
        <div className="pointer-events-none absolute -top-24 -right-10 -z-10 h-64 w-64 rounded-full bg-gradient-to-br from-sky-500/40 via-fuchsia-500/30 to-emerald-400/40 blur-3xl opacity-80" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 -z-10 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/40 via-cyan-500/30 to-rose-400/40 blur-3xl opacity-70" />

        {/* Header / intro */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_28px_120px_rgba(15,23,42,0.9)]">
          <div className="absolute inset-px rounded-[2.4rem] bg-gradient-to-br from-white/10 via-sky-500/5 to-fuchsia-500/10 opacity-70" />
          <div className="relative px-6 sm:px-10 py-8 sm:py-10 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-sky-300/80">
              Smart Health • Profile
            </p>
            <h2 className="mt-3 text-[26px] sm:text-4xl font-extrabold tracking-tight text-slate-50">
              Doctor’s Profile Details
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300/80 max-w-2xl mx-auto">
              A deep dive into the doctor’s background, expertise and
              availability, wrapped in a premium interface.
            </p>
          </div>
        </div>

        {/* Main profile card */}
        <div className="mx-auto max-w-6xl">
          <div className="group relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_24px_100px_rgba(15,23,42,0.9)]">
            {/* animated border glow */}
            <div className="pointer-events-none absolute -inset-[1px] rounded-[2.4rem] bg-[conic-gradient(from_180deg_at_50%_50%,#38bdf8_0deg,#a855f7_120deg,#22c55e_240deg,#38bdf8_360deg)] opacity-70 blur-[3px]" />
            <div className="pointer-events-none absolute inset-px rounded-[2.1rem] bg-slate-950/80" />

            {/* top-right ultra-modern twist / badge */}
            <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 via-fuchsia-500 to-emerald-400 opacity-60 blur-md animate-pulse" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/20 bg-slate-900/80 backdrop-blur">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
              </div>
              <div className="hidden sm:flex flex-col text-[10px] uppercase tracking-[0.2em] text-slate-300/80">
                <span className="font-semibold">
                  {isRead ? "Profile synced" : "Live profile"}
                </span>
                <span className="text-[9px] text-slate-400/90">
                  {isRead ? "Marked as read" : "Ready to review"}
                </span>
              </div>
            </div>

            {/* content */}
            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                {/* left: avatar + quick stats */}
                <div className="flex-shrink-0 flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-sky-400/50 via-fuchsia-400/40 to-emerald-400/50 opacity-80 blur-2xl group-hover:opacity-100 group-hover:blur-3xl transition-all duration-500" />
                    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900/80 shadow-[0_18px_70px_rgba(15,23,42,0.9)]">
                      <img
                        src="/banner-img-1.png"
                        alt={name}
                        className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                    </div>
                  </div>

                  {/* mini stats */}
                  <div className="grid grid-cols-2 gap-3 w-full max-w-xs text-xs sm:text-[13px]">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                        Experience
                      </p>
                      <p className="mt-1 font-semibold text-slate-50">
                        {experience}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                        Fee
                      </p>
                      <p className="mt-1 font-semibold text-emerald-400">
                        ৳ {fee}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 col-span-2">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                        Workplace
                      </p>
                      <p className="mt-1 font-semibold text-slate-100 truncate">
                        {workplace}
                      </p>
                    </div>
                  </div>
                </div>

                {/* right: details */}
                <div className="flex-1 space-y-6">
                  {/* name + designation */}
                  <div>
                    <h2 className="text-2xl sm:text-[30px] font-extrabold tracking-tight text-slate-50">
                      {name}
                    </h2>
                    <p className="mt-1 text-sm sm:text-base text-sky-300/90 font-semibold">
                      {designation}
                    </p>
                    <p className="mt-0.5 text-xs sm:text-sm text-slate-300/80">
                      {speciality}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400/90">
                      {education}
                    </p>
                  </div>

                  {/* info grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Registration No.
                      </p>
                      <p className="mt-1 font-semibold text-slate-100 break-all">
                        {registration}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-sky-500/10 via-fuchsia-500/10 to-emerald-500/10 px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Consultation Fee
                      </p>
                      <p className="mt-1 text-lg font-extrabold text-emerald-400">
                        ৳ {fee}
                      </p>
                    </div>
                  </div>

                  {/* availability */}
                  <div className="space-y-3">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
                      Availability
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {availability?.map((day, index) => (
                        <span
                          key={index}
                          className="relative inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/5 px-3 py-1.5 text-[11px] sm:text-xs font-medium text-sky-100/90 backdrop-blur-md"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {day}
                        </span>
                      ))}
                      {!availability?.length && (
                        <span className="text-xs text-slate-400">
                          No schedule information available.
                        </span>
                      )}
                    </div>
                  </div>

                  {/* action button */}
                  <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                    <button
                      onClick={() => HandleMarkAsRead(doctorId)}
                      disabled={isRead}
                      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 sm:px-8 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 disabled:cursor-not-allowed ${
                        isRead
                          ? "bg-emerald-500/90 text-white shadow-[0_0_35px_rgba(34,197,94,0.7)]"
                          : "bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 text-white shadow-[0_18px_60px_rgba(56,189,248,0.8)] hover:shadow-[0_22px_80px_rgba(56,189,248,1)] hover:-translate-y-0.5 active:translate-y-0"
                      }`}
                    >
                      {!isRead && (
                        <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-40 transition-opacity" />
                      )}
                      <span className="relative flex items-center gap-2">
                        {!isRead && (
                          <span className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-60 animate-ping" />
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
                          </span>
                        )}
                        {isRead
                          ? "✔ Appointment Confirmed"
                          : "Book Appointment"}
                      </span>
                    </button>
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

export default DoctorDetails;