import React from "react";

const Footer = () => (
  <React.Fragment>
    <footer className="site-footer footer-one footer-inner-page">
      <div className="middle-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-widget">
                <a href="index.html" className="footer-logo">
                  <img
                    src="/virawhite.png"
                    alt="Awesome Image"
                    style={{ width: 80 }}
                  />
                </a>
                <p>
                  Inston is the secret weapon of successful people. Not just in
                  work, but in life.
                </p>
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-2">
              <div className="footer-widget explore-widget">
                <div className="widget-title">
                  <h3>About</h3>
                </div>
                {/* /.widget-title */}
                <ul className="links-list">
                  <li>
                    <a href="#">Why Vira?</a>
                  </li>
                  <li>
                    <a href="#">Refer & Earn</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
                {/* /.links-list */}
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-lg-3 */}
            <div className="col-lg-2">
              <div className="footer-widget legal-widget">
                <div className="widget-title">
                  <h3>Resources</h3>
                </div>
                {/* /.widget-title */}
                <ul className="links-list">
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Partnership</a>
                  </li>
                </ul>
                {/* /.links-list */}
              </div>
              {/* /.footer-widget */}
            </div>

            <div className="col-lg-2">
              <div className="footer-widget legal-widget">
                <div className="widget-title">
                  <h3>Legal</h3>
                </div>
                {/* /.widget-title */}
                <ul className="links-list">
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Non Disclosure</a>
                  </li>
                </ul>
                {/* /.links-list */}
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-lg-2 */}
            <div className="col-lg-3">
              <div className="footer-widget contact-widget">
                <div className="widget-title">
                  <h3>You have any Question?</h3>
                </div>
                {/* /.widget-title */}
                <p>
                  Send us Email <br />
                  <strong>info@vira.live</strong>
                </p>
                <p>
                  Request a Consultation <br />
                  <strong>Fill out Form</strong>
                </p>

              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-lg-3 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.middle-footer */}
      <div className="bottom-footer text-center">
        <div className="container">
          <p>
            © Copyright 2020 by Relive Technology Pvt Ltd
          </p>
        </div>
        {/* /.container */}
      </div>
      {/* /.bottom-footer */}
    </footer>
    {/* /.site-footer footer-one */}
  </React.Fragment>
);

export default Footer;
