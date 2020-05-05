import React from "react";
import HomeLayouts from "../Layouts/HomeLayouts";

const index = () => (
  <React.Fragment>
    <HomeLayouts>
      <section className="inner-banner inner-banner__two">
        <div className="container flex-row d-flex justify-content-between align-items-center">
          <h2 className="inner-banner__title">Contact</h2>
          {/* /.inner-banner__title */}
          <ul className="thm-breadcrumb">
            <li className="thm-breadcrumb__item">
              <a href="index.html" className="thm-breadcrumb__link">
                Home
              </a>
            </li>
            {/* /.thm-breadcrumb__item */}
            <li className="thm-breadcrumb__item current">
              <a href="#" className="thm-breadcrumb__link">
                Contact
              </a>
            </li>
            {/* /.thm-breadcrumb__item */}
          </ul>
          {/* /.thm-breadcrumb */}
        </div>
        {/* /.container */}
      </section>
      {/* /.inner-banner */}
      <section className="contact-style-one">
        <div className="container">
          <div className="inner-container">
            <div className="content-wrapper">
              <div className="sec-title text-center">
                <span className="tag-line light">Contact us</span>
                <h2 className="title-line light">
                  We would love to hear <br /> from you.
                </h2>
                <span className="line-block light" />
              </div>
              {/* /.sec-title */}
              <form action="#" className="contact-form">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" name="name" placeholder="Your name" />
                  </div>
                  {/* /.col-lg-6 */}
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email address"
                    />
                  </div>
                  {/* /.col-lg-6 */}
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone number"
                    />
                  </div>
                  {/* /.col-lg-6 */}
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="subject"
                      placeholder="For business"
                    />
                  </div>
                  {/* /.col-lg-6 */}
                  <div className="col-lg-12">
                    <textarea placeholder="Write message" defaultValue={""} />
                    <div className="submit-btn-block">
                      <button type="submit" className="thm-btn">
                        Submit now
                      </button>
                    </div>
                    {/* /.submit-btn-block */}
                  </div>
                  {/* /.col-lg-12 */}
                </div>
                {/* /.row */}
              </form>
            </div>
            {/* /.content-wrapper */}
          </div>
          {/* /.inner-container */}
        </div>
        {/* /.container */}
      </section>
      {/* /.contact-style-one */}
    </HomeLayouts>
  </React.Fragment>
);

export default index;
