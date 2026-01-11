import React from "react";

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-8">
      <div className="relative overflow-hidden rounded-3xl ring-1 ring-base-300 bg-gradient-to-b from-base-100 to-base-200 shadow-xl">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 blur-3xl rounded-full"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-16 w-72 h-72 bg-gradient-to-tr from-accent/10 to-primary/10 blur-3xl rounded-full"
        />

        <div className="relative px-6 sm:px-10 py-12 sm:py-16 md:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Dependable Care, Backed by Trusted
            <span className="block">Professionals.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-base-content/70 max-w-3xl mx-auto">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it’s a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>

          <div className="mt-6 sm:mt-8 mx-auto w-full max-w-2xl">
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <label className="input input-bordered input-lg rounded-full flex items-center gap-2 bg-base-100/90 backdrop-blur ring-1 ring-base-300/70 focus-within:ring-primary/60 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 opacity-60"
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
                  placeholder="Search any doctor..."
                />
              </label>
              <button className="btn btn-primary btn-lg rounded-full px-6 shadow-[0_10px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_14px_40px_rgba(37,99,235,0.45)]">
                Search Now
              </button>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <figure className="relative overflow-hidden rounded-2xl ring-1 ring-base-300 bg-base-100 shadow-xl">
              <img
                src="/banner-img-1.png"
                alt="Friendly doctors in a clinic"
                className="w-full h-56 sm:h-72 object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
              />
            </figure>
            <figure className="relative overflow-hidden rounded-2xl ring-1 ring-base-300 bg-base-100 shadow-xl">
              <img
                src="/banner-img-1.png"
                alt="Healthcare professionals ready to help"
                className="w-full h-56 sm:h-72 object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
