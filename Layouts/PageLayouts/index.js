import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const PageLayouts = (props) => (
  <React.Fragment>
    <div class="page-wrapper">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  </React.Fragment>
);

export default PageLayouts;
