import React from "react";
import PageLayouts from "../Layouts/PageLayouts";
import Head from "next/head";

const About = () => (
  <React.Fragment>
    <PageLayouts>
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

        <script
          defer
          src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        ></script>
      </Head>

      <section className="contact-two contact-two__home-four">
        <div className="container">
          <div className="row mx-auto wrapper">
            <div className="col-lg-12">
              <div className="contact-two__content ">
                <div className="sec-title text-left">
                  <h2 className="title-line ">Career / Internship</h2>
                </div>
                {/* /.sec-title */}
                <form action="#" className="contact-two__form">
                  <div className="row">
                    <div className="col-lg-12">
                      <input type="text" name="name" placeholder="Your name" />
                    </div>
                    {/* /.col-lg-6 */}
                    <div className="col-lg-12">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email address"
                      />
                    </div>
                    {/* /.col-lg-6 */}
                    <div className="col-lg-12">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone number"
                      />
                    </div>
                    {/* /.col-lg-6 */}
                    <div className="col-lg-12">
                      <input
                        type="text"
                        name="subject"
                        placeholder="For business"
                      />
                    </div>
                    {/* /.col-lg-6 */}
                    <div className="col-lg-12">
                      <textarea placeholder="Write message" defaultValue={""} />
                      <button type="submit" className="thm-btn">
                        Submit now
                      </button>
                    </div>
                    {/* /.col-lg-12 */}
                  </div>
                  {/* /.row */}
                </form>
              </div>
              {/* /.contact-two__content */}
            </div>
            {/* /.col-lg-7 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.contact-two */}
    </PageLayouts>
    <style jsx global>
      {`
        .wrapper {
          width: 70%;
        }
        @media only screen and (max-width: 600px) {
          .wrapper {
            width: 100%;
          }
        }
      `}
    </style>
  </React.Fragment>
);

export default About;
