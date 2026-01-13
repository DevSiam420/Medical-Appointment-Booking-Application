import React from "react";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import { useLoaderData } from "react-router";

const Home = () => {
  const Data = useLoaderData();

  return (
    // ⬇️ changed: overflow-x-hidden -> overflow-hidden
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 overflow-hidden">
      {/* global background glows */}
      <div className="pointer-events-none absolute -top-32 -right-10 h-48 w-48 sm:h-64 sm:w-64 lg:h-72 lg:w-72 rounded-full bg-gradient-to-br from-sky-500/35 via-fuchsia-500/30 to-emerald-400/35 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-32 -left-12 h-52 w-52 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full bg-gradient-to-tr from-indigo-500/35 via-sky-500/30 to-rose-500/30 blur-3xl -z-10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:h-32 md:h-40 bg-gradient-to-b from-slate-900/80 via-slate-950/80 to-transparent -z-10" />

      {/* main content */}
      <main className="relative pb-12 sm:pb-16 lg:pb-20">
        <Banner />

        <section className="mt-8 sm:mt-12 px-3 sm:px-4 md:px-6 max-w-7xl mx-auto">
          {/* ⬇️ added overflow-hidden to clip the neon -inset-px + blur */}
          <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-white/5 bg-slate-950/60 backdrop-blur-xl shadow-[0_18px_80px_rgba(15,23,42,1)]">
            {/* neon frame (kept subtle on mobile) */}
            <div className="pointer-events-none absolute -inset-px rounded-[1.9rem] sm:rounded-[2.1rem] bg-[conic-gradient(from_180deg_at_50%_50%,#38bdf8_0deg,#a855f7_120deg,#22c55e_240deg,#38bdf8_360deg)] opacity-30 sm:opacity-40 blur-[3px]" />
            <div className="relative rounded-[1.6rem] sm:rounded-[1.9rem] bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950/95 px-2 sm:px-4 py-3 sm:py-5 md:py-6">
              <Doctors Data={Data} />
            </div>
          </div>
        </section>
      </main>
    </div> 
  );
};

export default Home;