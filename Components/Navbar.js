import React from "react";

const Navbar = () => (
  <React.Fragment>
    <header className="site-header header-one site-header__header-two">
      <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky">
        <div className="container clearfix">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="logo-box clearfix">
            <a className="navbar-brand" href="index.html">
              <img
                src="/blue.png"
                className="main-logo img-fluid"
                alt="Awesome Image"
                style={{ width: 80 }}
              />
            </a>
            <button className="menu-toggler" data-target=".main-navigation">
              <span className="fa fa-bars" />
            </button>
          </div>
          {/* /.logo-box */}
          {/* Collect the nav links, forms, and other content for toggling */}
          <div
            className="main-navigation"
            style={{ float: "right", paddingRight: "6em" }}
          >
            <ul className=" navigation-box">
              <li className="current">
                <a href="index.html">Home</a>
                <ul className="submenu">
                  <li>
                    <a href="index.html">Home One</a>
                  </li>
                  <li>
                    <a href="index2.html">Home Two</a>
                  </li>
                  <li>
                    <a href="index3.html">Home Three</a>
                  </li>
                  <li>
                    <a href="index4.html">Home Four</a>
                  </li>
                </ul>
                {/* /.submenu */}
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="#.">Pages</a>
                <ul className="submenu">
                  <li>
                    <a href="what-we-do.html">What we do</a>
                  </li>
                  <li>
                    <a href="why-choose.html">Why choose us</a>
                  </li>
                  <li>
                    <a href="how-works.html">How they works</a>
                  </li>
                  <li>
                    <a href="pricing.html">Plans &amp; Pricing</a>
                  </li>
                  <li>
                    <a href="success.html">Success Stories</a>
                  </li>
                </ul>
                {/* /.submenu */}
              </li>
              <li>
                <a href="news.html">News</a>
                <ul className="submenu">
                  <li>
                    <a href="news.html">News Page</a>
                  </li>
                  <li>
                    <a href="news-details.html">News Details</a>
                  </li>
                </ul>
                {/* /.submenu */}
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}

          {/* /.right-side-box */}
        </div>
        {/* /.container */}
      </nav>
    </header>
    {/* /.header-one */}
  </React.Fragment>
);

export default Navbar;
