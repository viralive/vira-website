import React from "react";
import PageLayouts from "../Layouts/PageLayouts";
import Head from "next/head";

const Contact = () => (
  <React.Fragment>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>VIRA - Virtual Assistant</title>
      {/* <!-- Favicon Icons --> */}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="images\favicon\apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="images\favicon\apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="images\favicon\apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="images\favicon\apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="images\favicon\apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="images\favicon\apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="images\favicon\apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="images\favicon\apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="images\favicon\apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="images\favicon\android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="images\favicon\favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="images\favicon\favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="images\favicon\favicon-16x16.png"
      />
      <link rel="manifest" href="images\favicon\manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="images/favicon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
      <link rel="stylesheet" type="text/css" href="/css/style.css" />
      <link rel="stylesheet" type="text/css" href="css/responsive.css" />

      <script src="js/jquery.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/swiper.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/theme.js"></script>
    </Head>

    <PageLayouts>
      <section className="inner-banner ">
        <div className="container flex-column-reverse d-flex justify-content-center align-items-center">
          <h2 className="inner-banner__title">Contact Us</h2>
        </div>
        {/* /.container */}
      </section>
      {/* /.inner-banner */}
      <section className="contact-style-one" style={{ paddingBottom: 230 }}>
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
    </PageLayouts>
  </React.Fragment>
);

export default Contact;
