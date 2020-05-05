import React from "react";

const Contacts = () => (
  <React.Fragment>
    <section className="cta-one">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="cta-one__single">
              <div className="cta-one__icon">
                <i className="fa fa-phone" />
              </div>
              {/* /.cta-one__icon */}
              <div className="cta-one__content">
                <span className="cta-one__tag-line">Contact With Us</span>
                <h3 className="cta-one__title">+ 000 8888 999</h3>
                {/* /.cta-one__title */}
              </div>
              {/* /.cta-one__content */}
            </div>
            {/* /.cta-one__single */}
          </div>
          {/* /.col-lg-4 */}
          <div className="col-lg-4">
            <div className="cta-one__single">
              <div className="cta-one__icon">
                <i className="fa fa-envelope" />
              </div>
              {/* /.cta-one__icon */}
              <div className="cta-one__content">
                <span className="cta-one__tag-line">Send Us An Email</span>
                <h3 className="cta-one__title">info@inston.com</h3>
                {/* /.cta-one__title */}
              </div>
              {/* /.cta-one__content */}
            </div>
            {/* /.cta-one__single */}
          </div>
          {/* /.col-lg-4 */}
          <div className="col-lg-4">
            <div className="cta-one__single">
              <div className="cta-one__icon">
                <i className="fa fa-pencil" />
              </div>
              {/* /.cta-one__icon */}
              <div className="cta-one__content">
                <span className="cta-one__tag-line">Fill Out Form</span>
                <h3 className="cta-one__title">
                  <a href="contact.html">Request a Consultation</a>
                </h3>
                {/* /.cta-one__title */}
              </div>
              {/* /.cta-one__content */}
            </div>
            {/* /.cta-one__single */}
          </div>
          {/* /.col-lg-4 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /.cta-one */}
  </React.Fragment>
);

export default Contacts;
