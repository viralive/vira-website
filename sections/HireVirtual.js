import React from "react";

const HireVirtual = () => (
  <React.Fragment>
    <section className="pricing-two">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <img
              src="images\resources\pricing-1-1.jpg"
              className="pricing-two__image"
              alt="Awesome Image"
            />
          </div>
          {/* /.col-lg-6 */}
          <div className="col-lg-6 d-flex thm-gray-bg">
            <div className="my-auto">
              <div className="pricing-two__content">
                <h2 className="pricing-two__title">
                  Professional <br />
                  Virtual Assistant.
                </h2>
                {/* /.pricing-two__title */}
                <p className="pricing-two__text">
                  Starting at{" "}
                  <span style={{ color: "#000", fontWeight: "bold" }}>
                    <span className="currency" style={{ color: "#000" }}>
                      $
                    </span>
                    398
                  </span>
                  /mo
                </p>
                {/* /.pricing-two__text */}
                <a
                  href="#"
                  className="thm-btn pricing-two__btn"
                  style={{ background: "#053b81" }}
                >
                  Get Started now
                </a>
              </div>
              {/* /.pricing-two__content */}
            </div>
            {/* /.my-auto */}
          </div>
          {/* /.col-lg-6 */}
        </div>
        {/* /.row no-gutters */}
      </div>
      {/* /.container */}
    </section>
    {/* /.pricing-two */}
  </React.Fragment>
);

export default HireVirtual;
