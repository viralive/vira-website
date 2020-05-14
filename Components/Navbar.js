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
                <a href="index.html">About</a>
                {/* /.submenu */}
              </li>
              <li>
                <a href="/whatwedo">What we do?</a>
              </li>
              <li>
                <a href="/whyvira">Why Vira?</a>
                {/* /.submenu */}
              </li>
              <li>
                <a href="news.html">Hire Vira</a>
                <ul className="submenu">
                  <li>
                    <a href="news.html">Personal Assistance</a>
                  </li>
                  <li>
                    <a href="">Company Representation</a>
                  </li>
                  <li>
                    <a href="">Invoices &amp; Payments</a>
                  </li>
                  <li>
                    <a href="/service/emailmanagement">Email Management</a>
                  </li>
                  <li>
                    <a href="/service/socialmediawork">Social Media Work</a>
                  </li>
                  <li>
                    <a href="/service/research">Research Work</a>
                  </li>
                  <li>
                    <a href="">Marketing Activities</a>
                  </li>
                  <li>
                    <a href="">Travel Planning</a>
                  </li>
                  <li>
                    <a href="">Calander Management</a>
                  </li>
                </ul>
                {/* /.submenu */}
              </li>
              <li>
                <a href="#.">Pricing</a>
                {/* /.submenu */}
              </li>
              <li>
                <a href="#.">Become VIRA</a>
                {/* /.submenu */}
              </li>
              <li>
                <a href="#.">Stories</a>
                {/* /.submenu */}
              </li>
              <li>
                <a
                  href="contact.html"
                  className="p-2 text-white"
                  style={{ background: "#053B81", borderRadius: 5 }}
                >
                  Register
                </a>
                {/* /.submenu */}
              </li>
              <li>
                <a
                  href="contact.html"
                  className="p-2 text-white"
                  style={{ background: "#053B81", borderRadius: 5 }}
                >
                  Login
                </a>
                {/* /.submenu */}
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
