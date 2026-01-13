import React, { useEffect, useState } from "react";
import { GetStoredData } from "../../Utilitys/AddToDB";
import { useLoaderData } from "react-router";

const AppointmentedDoctor = () => {
  const [appointList, setAppointList] = useState([]);
  const doctorsData = useLoaderData() || [];

  useEffect(() => {
    if (!doctorsData.length) return;

    const storedIds = GetStoredData(); // numbers only

    const matchedDoctors = doctorsData.filter((doctor) =>
      storedIds.includes(Number(doctor.id))
    );

    setAppointList(matchedDoctors);
  }, [doctorsData]);

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 mt-10 overflow-hidden">
      {/* background glows */}
      <div className="pointer-events-none absolute -top-32 -right-16 h-72 w-72 rounded-full bg-gradient-to-br from-sky-500/30 via-fuchsia-500/25 to-emerald-400/30 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/30 via-sky-500/25 to-rose-500/25 blur-3xl -z-10" />

      {/* header */}
      <div className="mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-sky-300/80">
          Your Appointments
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-50">
          Appointed Doctors{" "}
          <span className="ml-1 inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-sm font-semibold text-sky-300">
            {appointList.length}
          </span>
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-300/80 max-w-2xl">
          All the doctors you’ve confirmed an appointment with — neatly
          organized in one place.
        </p>
      </div>

      {appointList.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-dashed border-white/15 bg-slate-950/80 backdrop-blur-xl px-6 py-10 sm:px-8 shadow-[0_18px_80px_rgba(15,23,42,1)]">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="relative h-12 w-12">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 via-fuchsia-500 to-emerald-400 opacity-60 blur-md" />
              <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/20 bg-slate-900/80">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
              </div>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
              No appointments yet
            </h2>
            <p className="text-sm text-slate-400 max-w-md">
              You haven’t confirmed any doctor appointments. Browse doctors and
              mark them to see them listed here.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {appointList.map((doctor) => (
            <div
              key={doctor.id}
              className="group relative rounded-3xl border border-white/10 bg-slate-950/90 backdrop-blur-xl p-4 sm:p-5 shadow-[0_18px_80px_rgba(15,23,42,1)] overflow-hidden"
            >
              {/* neon border halo */}
              <div className="pointer-events-none absolute -inset-[1px] rounded-[1.9rem] bg-[conic-gradient(from_180deg_at_50%_50%,#38bdf8_0deg,#a855f7_120deg,#22c55e_240deg,#38bdf8_360deg)] opacity-0 blur-[3px] transition duration-300 group-hover:opacity-80" />
              <div className="pointer-events-none absolute inset-px rounded-[1.7rem] bg-gradient-to-br from-slate-950 via-slate-950/95 to-slate-950/90" />

              <div className="relative z-10">
                <img
                  src="/banner-img-1.png"
                  alt={doctor.name}
                  className="w-full h-44 sm:h-48 object-cover rounded-2xl border border-white/10 mb-4 shadow-[0_16px_60px_rgba(15,23,42,1)] transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <h2 className="text-lg sm:text-xl font-bold text-slate-50">
                  {doctor.name}
                </h2>
                <p className="mt-0.5 text-sm text-sky-300/90 font-medium">
                  {doctor.speciality}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-slate-300/80">
                  Experience:{" "}
                  <span className="font-semibold text-slate-100">
                    {doctor.experience}
                  </span>
                </p>

                {/* small info chips */}
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-300">
                  <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-1 font-medium text-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse mr-1" />
                    Confirmed
                  </span>
                  <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-2.5 py-1 font-medium text-sky-200">
                    Reg: {doctor.registration}
                  </span>
                </div>

                <button
                  disabled
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/80 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-[0_16px_50px_rgba(34,197,94,0.8)] cursor-not-allowed"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-60 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                  </span>
                  Appointment Confirmed
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentedDoctor;