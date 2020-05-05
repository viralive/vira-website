import React from "react";
import Header from "../../Header";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const HomeLayouts = (props) => (
  <React.Fragment>
    <Header />

    <div class="page-wrapper">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  </React.Fragment>
);

export default HomeLayouts;
