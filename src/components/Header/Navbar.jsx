import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-transparent">
      <div className="mx-auto max-w-7xl px-3 sm:px-5">
        <div className="navbar mt-3 rounded-2xl bg-base-100/80 backdrop-blur-xl ring-1 ring-base-300/70 shadow-xl">
          {/* Left: mobile menu + brand */}
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                role="button"
                aria-label="Open menu"
                className="btn btn-ghost btn-circle lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-56 ring-1 ring-base-300/70"
              >
                <li>
                  <Link to="/" className="rounded-lg font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/AppointmentedDoctor"
                    className="rounded-lg font-medium"
                  >
                    Appointed Doctor
                  </Link>
                </li>

                <li>
                  <a href="#" className="rounded-lg font-medium">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="rounded-lg font-medium">
                    Contact Us
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className="btn btn-primary w-full rounded-full">
                    Emergency
                  </a>
                </li>
              </ul>
            </div>

            <a href="/" className="flex items-center gap-3 pl-1">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-primary text-primary-content shadow-lg ring-8 ring-primary/15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path strokeLinecap="round" d="M12 6v12M6 12h12" />
                </svg>
              </span>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Phudu
              </span>
            </a>
          </div>

          {/* Center: desktop links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-1">
              <li>
                <Link to="/" className="rounded-lg font-medium">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/AppointmentedDoctor"
                  className="rounded-lg font-medium"
                >
                  Appointed Doctor
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-xl px-3 text-[0.95rem] font-semibold hover:bg-base-200/60 focus:bg-base-200/80"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-xl px-3 text-[0.95rem] font-semibold hover:bg-base-200/60 focus:bg-base-200/80"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right: CTA */}
          <div className="navbar-end">
            <a
              href="#emergency"
              className="btn btn-primary rounded-full px-5 sm:px-6 font-bold shadow-[0_10px_30px_rgba(37,99,235,0.35)]"
            >
              Emergency
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
