import React from "react";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import { useLoaderData } from "react-router";

const Home = () => {
  const Data = useLoaderData();

  return (
    <>
      <Banner></Banner>
      <Doctors Data={Data}></Doctors>
    </>
  );
};

export default Home;
