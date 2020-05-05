import React from "react";

const Footer = () => (
  <React.Fragment>
    <footer className="site-footer footer-one footer-inner-page">
      <div className="upper-footer">
        <div className="container">
          <div className="social-block">
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-pinterest" />
            </a>
            <a href="#">
              <i className="fa fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fa fa-youtube-play" />
            </a>
          </div>
          {/* /.social-block */}
          <div className="button-block">
            <a className="thm-btn" href="#">
              Request a Consultation
            </a>
            <span className="btn-tagline">
              Looking for expert VA <i className="inston-icon-share" />
            </span>
          </div>
          {/* /.button-block */}
        </div>
        {/* /.container */}
      </div>
      {/* /.upper-footer */}
      <div className="middle-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-widget">
                <a href="index.html" className="footer-logo">
                  <img
                    src="images\resources\logo-lite-1-1.png"
                    alt="Awesome Image"
                  />
                </a>
                <p>
                  Inston is the secret weapon of successful people. Not just in
                  work, but in life. We give you more time to focus on the big
                  picture by taking care of the little details.
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
                  Contact us <br />
                  <strong>000 8888 999</strong>
                </p>
                <p>
                  Request a Consultation <br />
                  <strong>Fill out Form</strong>
                </p>
                <p>
                  Send us Email <br />
                  <strong>needhelp@inston.com</strong>
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
            © Copyright 2019 by <a href="#">Layerdrops.com</a>
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
