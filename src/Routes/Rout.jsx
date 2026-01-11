import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
import AppointmentedDoctor from "../Pages/AppointmentedDoctor/AppointmentedDoctor";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/Doctors.json");
          return res.json(); // ✅ MUST
        },
        Component: Home,
      },
      {
        path: "/AppointmentedDoctor",
           loader: async () => {
          const res = await fetch("/Doctors.json");
          return res.json();},
        Component: AppointmentedDoctor,
      },
      {
        path: "/DoctorDetails/:id",
        loader: async () => {
          const res = await fetch("/Doctors.json");
          return res.json(); // ✅ MUST
        },
        Component: DoctorDetails,
      },
    ],
  },
]);
