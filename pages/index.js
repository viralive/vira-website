import React from "react";
import HomeLayouts from "../Layouts/HomeLayouts";
import Banner from "../sections/Banner";
import About from "../sections/About";
import Services from "../sections/Services";
import Features from "../sections/Features";
import AwesomePeople from "../sections/AwesomePeople";
import HireVirtual from "../sections/HireVirtual";

const index = () => (
  <React.Fragment>
    <HomeLayouts>
      <Banner />
      <About />
      <Services />
      <Features />
      <AwesomePeople />
      <HireVirtual />
    </HomeLayouts>
  </React.Fragment>
);

export default index;
