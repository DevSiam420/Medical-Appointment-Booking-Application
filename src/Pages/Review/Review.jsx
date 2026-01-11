import React from "react";

const Review = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 my-10">
      <div className="relative overflow-hidden rounded-3xl bg-base-200 ring-1 ring-base-300/70">
        {/* subtle accents */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80%] h-36 rounded-full bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 blur-2xl" />
        </div>

        <div className="px-6 sm:px-10 sm:py-5">
          <div className="mt-5 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              We Provide Best Medical Services
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-base-content/70">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* stat 1 */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/0 via-primary/20 to-fuchsia-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative rounded-2xl bg-base-100 ring-1 ring-base-300 shadow-sm p-6 sm:p-7 transition-all duration-400 group-hover:-translate-y-1.5 group-hover:shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="size-12 grid place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight">
                      199+
                    </div>
                    <div className="mt-1 text-sm text-base-content/70">
                      Total Doctors
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* stat 2 */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-warning/0 via-warning/20 to-secondary/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative rounded-2xl bg-base-100 ring-1 ring-base-300 shadow-sm p-6 sm:p-7 transition-all duration-400 group-hover:-translate-y-1.5 group-hover:shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="size-12 grid place-items-center rounded-xl bg-warning/10 text-warning ring-1 ring-warning/20">
                    <span className="text-2xl">⭐️</span>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight">
                      467+
                    </div>
                    <div className="mt-1 text-sm text-base-content/70">
                      Total Reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* stat 3 */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-secondary/0 via-secondary/25 to-primary/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative rounded-2xl bg-base-100 ring-1 ring-base-300 shadow-sm p-6 sm:p-7 transition-all duration-400 group-hover:-translate-y-1.5 group-hover:shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="size-12 grid place-items-center rounded-xl bg-secondary/10 text-secondary ring-1 ring-secondary/20">
                    <span className="text-2xl">🩺</span>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight">
                      1900+
                    </div>
                    <div className="mt-1 text-sm text-base-content/70">
                      Patients
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* stat 4 */}
            <div className="group relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/0 via-accent/25 to-primary/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative rounded-2xl bg-base-100 ring-1 ring-base-300 shadow-sm p-6 sm:p-7 transition-all duration-400 group-hover:-translate-y-1.5 group-hover:shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="size-12 grid place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight">
                      300+
                    </div>
                    <div className="mt-1 text-sm text-base-content/70">
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
