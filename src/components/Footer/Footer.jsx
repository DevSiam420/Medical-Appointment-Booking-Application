import React from "react";

const Footer = () => {
  return (
    <div className="mt-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-base-100/80 backdrop-blur-xl ring-1 ring-base-300/70 shadow-xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="px-6 sm:px-10 py-10 sm:py-14 text-center">
            <a href="/" className="inline-flex items-center gap-3">
              <span className="grid place-items-center size-10 sm:size-11 rounded-full bg-primary text-primary-content shadow-lg ring-8 ring-primary/15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path strokeLinecap="round" d="M12 6v12M6 12h12" />
                </svg>
              </span>
              <span className="text-2xl font-extrabold tracking-tight">
                Phudu
              </span>
            </a>

            <nav className="mt-6 sm:mt-7">
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm sm:text-base text-base-content/80">
                <li>
                  <a
                    href="#"
                    className="link link-hover font-semibold rounded-lg px-2 py-1 hover:bg-base-200/60"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#bookings"
                    className="link link-hover font-semibold rounded-lg px-2 py-1 hover:bg-base-200/60"
                  >
                    My-Bookings
                  </a>
                </li>
                <li>
                  <a
                    href="#blogs"
                    className="link link-hover font-semibold rounded-lg px-2 py-1 hover:bg-base-200/60"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="link link-hover font-semibold rounded-lg px-2 py-1 hover:bg-base-200/60"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="mx-auto my-7 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-base-300 to-transparent" />

            <div className="flex justify-center gap-3 sm:gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="btn btn-circle btn-ghost ring-1 ring-base-300 hover:ring-primary hover:bg-base-200/60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 text-[#1877F2]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06C2 17.08 5.66 21.2 10.44 22v-7.02H7.9v-2.92h2.54V9.75c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.22.2 2.22.2v2.44h-1.25c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.92h-2.34V22C18.34 21.2 22 17.08 22 12.06z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="btn btn-circle btn-ghost ring-1 ring-base-300 hover:ring-primary hover:bg-base-200/60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.9 3H21l-6.54 7.47L22 21h-5.2l-4.07-4.86L7.9 21H3l7.03-8.03L2 3h5.3l3.7 4.49L18.9 3zm-1.82 16.2h1.41L7.01 4.67H5.5l11.58 14.53z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="btn btn-circle btn-ghost ring-1 ring-base-300 hover:ring-primary hover:bg-base-200/60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 text-[#0A66C2]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M6.94 6.5A2.44 2.44 0 1 1 6.93 1.6a2.44 2.44 0 0 1 0 4.9zM3.9 22.4h6.1v-12H3.9v12zM14.2 10.4c2.52 0 3.53 1.38 3.9 2.35V10.4h6.1v12h-6.1v-6.72c0-1.68-.6-2.83-2.1-2.83-1.14 0-1.82.77-2.12 1.52-.11.27-.14.64-.14 1.01v7.02H7.65s.08-11.39 0-12.57h6.55v1.57z"
                    transform="translate(-3.9 -1.6)"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="btn btn-circle btn-ghost ring-1 ring-base-300 hover:ring-primary hover:bg-base-200/60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 text-[#FF0000]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2a3.07 3.07 0 0 0-2.16-2.17C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.34.53A3.07 3.07 0 0 0 .5 6.2 32.42 32.42 0 0 0 0 12a32.42 32.42 0 0 0 .66 5.8 3.07 3.07 0 0 0 2.16 2.17C4.66 20.5 12 20.5 12 20.5s7.5 0 9.34-.53a3.07 3.07 0 0 0 2.16-2.17A32.42 32.42 0 0 0 24 12a32.42 32.42 0 0 0-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
            </div>

            <p className="mt-6 text-xs sm:text-sm text-base-content/60">
              © 2026 Phudu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
