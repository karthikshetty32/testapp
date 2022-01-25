import React from "react";
import web from "../src/images/img2.jpg";

import Commom from "./Commom";

const About = () => {
  return (
    <>
      <Commom
        name="About Us:"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;

