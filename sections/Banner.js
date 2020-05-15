import React from "react";

const Banner = () => (
  <React.Fragment>
    <section className="static-banner-two">
      <div className="container">
        <div className="row align-content-start justify-content-center text-center">
          <div className="col-lg-12">
            <h2
              className="static-banner-two__title"
              style={{ color: "#053B81" }}
            >
              Work. Life. Balanced.
            </h2>
            {/* /.static-banner-two__title */}
            <p className="static-banner-two__text">
              Virtual assistants for entrepreneurs, professionals, <br /> small
              business, and teams.
            </p>
            {/* /.static-banner-two__text */}
          </div>
          {/* /.col-lg-12 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /.static-banner-two */}
  </React.Fragment>
);

export default Banner;
