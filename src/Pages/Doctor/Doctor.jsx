import React from "react";
import { Link } from "react-router";

const Doctor = ({ singleDoctor }) => {
  const { name, id, education, experience, registration } = singleDoctor;

  return (
    <Link to={`/DoctorDetails/${id}`}>
      <div className="group relative w-full">
        {/* Hover glow */}
        <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-primary/0 via-primary/30 to-fuchsia-500/0 opacity-0 blur-xl transition group-hover:opacity-100" />

        <div className="relative h-full rounded-3xl bg-base-100 ring-1 ring-base-300 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
          {/* Image */}
          <div className="p-4">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/banner-img-1.png"
                alt={name}
                className="h-40 sm:h-44 md:h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div className="px-4 pb-5 space-y-3">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-success badge-sm rounded-full">
                Available
              </span>
              <span className="badge badge-outline badge-sm rounded-full text-primary border-primary">
                {experience}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold leading-tight">{name}</h3>
              <p className="text-sm text-base-content/70">{education}</p>
            </div>

            {/* Registration */}
            <div className="flex items-center gap-2 rounded-xl border border-base-300 px-3 py-2 text-sm">
              <span className="opacity-70">Reg No:</span>
              <span className="font-medium">{registration}</span>
            </div>

            {/* Button */}
            <button className="btn btn-outline btn-sm w-full rounded-full border-2 hover:border-primary hover:bg-primary/10">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Doctor;
