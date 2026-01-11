import React from "react";

const ErrorPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-base-200">
      {/* animated gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 -top-[12%] -translate-x-1/2 w-[75vmax] h-[75vmax] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),transparent_60%)] animate-[spin_40s_linear_infinite]" />
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[55vmax] h-[55vmax] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),transparent_60%)] animate-[spin_55s_linear_infinite_reverse]" />
        <div className="absolute left-[-12%] bottom-[-12%] w-[45vmax] h-[45vmax] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_60%)] animate-[spin_65s_linear_infinite]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 md:py-32">
        <div className="hero">
          <div className="hero-content text-center flex-col">
            {/* glowing 404 orb */}
            <div className="relative mx-auto">
              <div className="absolute inset-0 -z-10 rounded-full blur-3xl bg-gradient-to-tr from-primary/40 via-accent/30 to-secondary/40 animate-[pulse_3.5s_ease-in-out_infinite]" />
              <div className="relative rounded-full p-[3px] sm:p-[4px]">
                <div className="absolute inset-0 rounded-full animate-[spin_9s_linear_infinite] bg-[conic-gradient(var(--tw-gradient-stops))] from-primary via-secondary to-accent" />
                <div className="relative grid place-items-center w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-base-100/80 backdrop-blur-xl ring-1 ring-base-300 shadow-2xl">
                  <span className="text-6xl sm:text-7xl font-black tracking-tight bg-gradient-to-br from-primary via-info to-secondary bg-clip-text text-transparent select-none">
                    404
                  </span>
                </div>
              </div>

              {/* floating pills */}
              <span className="absolute -right-6 -top-3 w-7 h-7 rounded-full grid place-items-center text-primary-content bg-primary shadow-lg animate-[bounce_2.6s_ease-in-out_infinite]">
                !
              </span>
              <span className="absolute -left-7 top-1/3 w-9 h-9 rounded-full grid place-items-center text-secondary-content bg-secondary shadow-lg animate-[bounce_3.2s_ease-in-out_infinite]">
                ?
              </span>
            </div>

            <h1 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-extrabold">
              Oops — page not found
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-base-content/70">
              The page you’re looking for doesn’t exist or has moved. Try
              searching, go back, or head to the homepage.
            </p>

            {/* search */}
            <div className="mt-8 w-full max-w-xl mx-auto">
              <label className="input input-bordered input-lg rounded-full flex items-center gap-2 bg-base-100/80 backdrop-blur ring-1 ring-base-300/70 focus-within:ring-primary/60 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 opacity-70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                  />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Search our site"
                />
                <button className="btn btn-primary btn-sm rounded-full px-4">
                  Search
                </button>
              </label>
            </div>

            {/* actions */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="/"
                className="btn btn-primary rounded-full px-6 shadow-[0_10px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_14px_40px_rgba(37,99,235,0.45)] transition"
              >
                Go Home
              </a>
              <a href="#" className="btn btn-outline rounded-full">
                Go Back
              </a>
              <a
                href="/contact"
                className="btn btn-ghost rounded-full border-base-300 hover:border-primary hover:bg-base-200/60"
              >
                Contact Support
              </a>
            </div>

            {/* tiny code badge */}
            <div className="mt-10 flex justify-center">
              <div className="badge badge-outline gap-2 rounded-full px-4 py-3 bg-base-100/60 backdrop-blur ring-1 ring-base-300/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Error code: 404-NOTFOUND
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
