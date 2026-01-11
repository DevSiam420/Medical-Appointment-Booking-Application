import React from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Review from "../Review/Review";

const Root = () => {
  return (
   <>
       <Navbar></Navbar>
      <Outlet></Outlet>
      <Review></Review>
      <Footer></Footer>
      
   </>
  );
};

export default Root;
