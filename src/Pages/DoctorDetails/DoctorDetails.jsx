import React from "react";
import { useLoaderData, useParams } from "react-router";
import { AddToStoreDB } from "../../Utilitys/AddToDB";

const DoctorDetails = () => {
  const doctors = useLoaderData() || [];
  const { id } = useParams();

  // 🔥 IMPORTANT FIX
  const doctorId = Number(id);

  const singleDoctor = doctors.find((doctor) => Number(doctor.id) === doctorId);

  if (!singleDoctor) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Doctor not found
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
  // --- Handler Function --
  const HandleMarkAsRead = (id) => {
    AddToStoreDB(id);
  };
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 my-10 space-y-10">
      {/* Intro card */}
      <div className="relative overflow-hidden rounded-[2rem] bg-base-100/80 backdrop-blur-xl ring-1 ring-base-300/60 shadow-[0_10px_40px_rgba(2,8,23,0.06)]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[86%] h-24 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
          <div className="absolute -bottom-28 -right-10 w-80 h-80 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 blur-3xl" />
        </div>
        <div className="px-6 sm:px-10 py-10 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-base-300/70 bg-base-100/70 px-3 py-1 text-[11px] sm:text-xs">
            <span className="size-2 rounded-full bg-primary" /> Verified Profile
          </div>
          <h2 className="mt-4 text-[28px] sm:text-4xl font-extrabold tracking-tight">
            Doctor’s Profile Details
          </h2>
          <p className="mt-3 text-sm sm:text-base text-base-content/70 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
            amet. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
            turpis imperdiet mattis donec dignissim volutpat.
          </p>
        </div>
      </div>

      {/* Profile card */}
      <div className="mx-auto max-w-6xl">
        <div className="group relative overflow-hidden rounded-[2rem] bg-base-100/90 backdrop-blur ring-1 ring-base-300/70 shadow-[0_10px_40px_rgba(2,8,23,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(2,8,23,0.10)]">
          <div
            aria-hidden
            className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-primary/0 via-primary/20 to-fuchsia-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="relative p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Avatar */}
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-base-300/70 shadow-md">
                <img
                  src="/banner-img-1.png"
                  alt={name}
                  className="w-44 h-44 sm:w-52 sm:h-52 object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl sm:text-[28px] font-extrabold tracking-tight leading-tight">
                  {name}
                </h2>
                <p className="text-sm text-base-content/70">{education}</p>
                <p className="text-sm text-base-content/70">{speciality}</p>

                {/* Info rows */}
                <div className="mt-5 grid gap-2.5 text-sm">
                  <div className="flex items-center gap-2 rounded-xl border border-base-300/70 bg-base-100/80 px-3 py-2">
                    <span className="text-base-content/60 font-semibold">
                      Designation:
                    </span>
                    <span className="font-medium">{designation}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-base-300/70 bg-base-100/80 px-3 py-2">
                    <span className="text-base-content/60 font-semibold">
                      Experience:
                    </span>
                    <span className="font-medium">{experience}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-base-300/70 bg-base-100/80 px-3 py-2">
                    <span className="text-base-content/60 font-semibold">
                      Workplace:
                    </span>
                    <span className="font-medium">{workplace}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-base-300/70 bg-base-100/80 px-3 py-2">
                    <span className="text-base-content/60 font-semibold">
                      Registration:
                    </span>
                    <span className="font-medium">{registration}</span>
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {availability?.map((day, index) => (
                    <span
                      key={index}
                      className="badge badge-success badge-sm rounded-full transition-transform duration-200 hover:scale-105"
                    >
                      {day}
                    </span>
                  ))}
                </div>

                {/* Fee */}
                <div className="mt-5 flex flex-wrap items-center gap-2 text-primary font-semibold">
                  <span className="badge badge-outline badge-sm border-primary text-primary rounded-full">
                    Fee
                  </span>
                  <span className="leading-none">
                    Consultation Fee: ৳ {fee}
                  </span>
                </div>

                {/* CTA row (optional, looks premium) */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => HandleMarkAsRead(id)}
                    className="btn btn-primary rounded-full px-6 shadow-[0_10px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_16px_44px_rgba(37,99,235,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-transform"
                  >
                    Book Appointment
                  </button>
                  <button className="btn btn-ghost rounded-full px-5 border-base-300 hover:bg-base-200/60">
                    Contact Clinic
                  </button>
                </div>
              </div>
            </div>

            {/* Hairline divider */}
            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-base-300 to-transparent" />
          </div>
        </div>
      </div>

      {/* Appointment card */}
      <div className="group relative overflow-hidden rounded-[2rem] bg-base-100/90 backdrop-blur ring-1 ring-base-300/70 shadow-[0_10px_40px_rgba(2,8,23,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(2,8,23,0.10)]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -bottom-20 right-0 w-72 h-72 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 blur-3xl" />
          <div className="absolute -top-14 left-0 w-56 h-56 rounded-full bg-gradient-to-br from-secondary/10 to-primary/10 blur-3xl" />
        </div>

        <div className="px-6 sm:px-8 py-8">
          <div className="relative text-center">
            <h4 className="text-lg sm:text-xl font-extrabold tracking-tight">
              Book an Appointment
            </h4>
            <span className="absolute right-0 top-0 badge badge-success badge-sm sm:badge-md rounded-full">
              Doctor Available Today
            </span>
          </div>

          <div className="mt-5 border-t border-dashed border-base-300/80 pt-4">
            <p className="text-sm font-semibold">Availability</p>
          </div>

          <div className="mt-3">
            <div className="alert alert-warning rounded-2xl py-3 shadow-sm">
              <span className="text-sm">
                Due to high patient volume, we are currently accepting
                appointments for today only. We appreciate your understanding
                and cooperation.
              </span>
            </div>
          </div>

          <div className="mt-6">
            <button className="btn btn-primary btn-lg w-full rounded-full font-bold tracking-tight shadow-[0_10px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_16px_44px_rgba(37,99,235,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-transform">
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
