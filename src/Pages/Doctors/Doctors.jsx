import React, { Suspense } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = ({ Data }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10">
      {/* Title */}
      <div className="px-6 sm:px-10 py-10 sm:py-12 text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight
                 text-base-content dark:text-gray-100"
        >
          Our Best Doctors
        </h2>

        <div className="mt-4 flex justify-center">
          <span
            className="h-1 w-24 sm:w-32 md:w-40 rounded-full
                     bg-gradient-to-r
                     from-primary via-secondary to-primary
                     dark:from-primary/80 dark:via-secondary/80 dark:to-primary/80"
          />
        </div>

        <p
          className="mt-4 max-w-3xl mx-auto text-xs sm:text-sm md:text-base
                text-base-content/70 dark:text-gray-400"
        >
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it’s a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="skeleton h-56 sm:h-64 rounded-3xl"></div>
            ))}
          </div>
        }
      >
        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Data.map((singleDoctor) => (
            <Doctor key={singleDoctor.id} singleDoctor={singleDoctor} />
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default Doctors;