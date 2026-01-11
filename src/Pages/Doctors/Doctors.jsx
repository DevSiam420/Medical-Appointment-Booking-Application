import React, { Suspense } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = ({ Data }) => {
  console.log(Data);

  return (
    <div>
      <h1 className="text-4xl"> HI , i a m doctors</h1>
      <Suspense
        fallback={
          <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-10">
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-base-300 bg-base-100/80 backdrop-blur-xl shadow-xl">
              {/* soft glows */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
              >
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[85%] h-40 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-10 w-72 h-72 rounded-full bg-gradient-to-tr from-accent/15 to-primary/15 blur-3xl" />
              </div>

              <div
                className="px-6 sm:px-10 py-12 sm:py-16 md:py-20 text-center"
                role="status"
                aria-live="polite"
              >
                {/* spinner + progress */}
                <div className="mx-auto flex items-center justify-center gap-3">
                  <span className="loading loading-ring loading-lg text-primary" />
                  <span className="text-sm text-base-content/60">
                    Loading content…
                  </span>
                </div>
                <div className="mx-auto mt-4 w-full max-w-md">
                  <progress className="progress progress-primary w-full" />
                </div>

                {/* headline skeleton */}
                <div className="mt-8 grid place-items-center gap-3">
                  <div className="skeleton h-8 sm:h-10 w-[92%] max-w-3xl rounded-xl" />
                  <div className="skeleton h-8 sm:h-10 w-2/3 max-w-xl rounded-xl" />
                </div>

                {/* paragraph skeleton */}
                <div className="mt-5 grid place-items-center gap-2">
                  <div className="skeleton h-4 w-[90%] max-w-2xl rounded-lg" />
                  <div className="skeleton h-4 w-[85%] max-w-2xl rounded-lg" />
                  <div className="skeleton h-4 w-[70%] max-w-2xl rounded-lg" />
                </div>

                {/* search bar skeleton */}
                <div className="mt-7 sm:mt-8 mx-auto w-full max-w-2xl">
                  <div className="flex flex-col sm:flex-row items-stretch gap-3">
                    <div className="skeleton h-12 sm:h-14 rounded-full flex-1" />
                    <div className="skeleton h-12 sm:h-14 rounded-full w-40 sm:w-44" />
                  </div>
                </div>

                {/* cards skeleton */}
                <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div className="skeleton h-56 sm:h-72 w-full rounded-2xl" />
                  <div className="skeleton h-56 sm:h-72 w-full rounded-2xl" />
                </div>

                {/* tip */}
                <div className="mt-8 flex justify-center">
                  <div className="badge badge-outline rounded-full px-4 py-3 bg-base-100/70 backdrop-blur ring-1 ring-base-300/70">
                    This is a fallback view. Content will appear automatically.
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      >
        {/* map Data */}
        {
          
        }
      </Suspense>
    </div>
  );
};

export default Doctors;
