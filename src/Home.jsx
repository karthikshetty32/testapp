import React from "react";
import web from "../src/images/img1.jpg";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        name="Experience Excellence At"
        imgsrc={web}
        visit="/course"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
