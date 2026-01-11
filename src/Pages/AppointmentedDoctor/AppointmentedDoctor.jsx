import React, { useEffect, useState } from "react";
import { GetStoredData } from "../../Utilitys/AddToDB";
import { useLoaderData } from "react-router";

const AppointmentedDoctor = () => {
  const [appointList, setAppointList] = useState([]);
  const doctors = useLoaderData(); // all doctors data

  useEffect(() => {
    if (!doctors?.length) return;

    // localStorage → ["1","3","5"]
    const storedIds = GetStoredData().map(Number); // [1,3,5]

    // match doctors with stored ids
    const matchedDoctors = doctors.filter((doctor) =>
      storedIds.includes(doctor.id)
    );

    setAppointList(matchedDoctors);
  }, [doctors]);

  return (
    <div className="mx-auto max-w-7xl px-4 mt-10">
      <h1 className="text-3xl font-bold mb-6">
        Appointed Doctors ({appointList.length})
      </h1>

      {appointList.length === 0 ? (
        <p className="text-gray-500">No appointments yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {appointList.map((doctor) => (
            <div
              key={doctor.id}
              className="rounded-2xl bg-base-100 p-5 shadow-xl ring-1 ring-base-300"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <h2 className="text-xl font-bold">{doctor.name}</h2>
              <p className="text-sm text-gray-500">{doctor.speciality}</p>
              <p className="text-sm mt-1">Experience: {doctor.experience}</p>

              <button
                disabled
                className="btn btn-success btn-sm mt-4 rounded-full w-full cursor-not-allowed"
              >
                Appointment Confirmed
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentedDoctor;
