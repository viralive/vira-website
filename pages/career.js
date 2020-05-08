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
        <title>Inston || Home Two || Responsive HTML 5 Template</title>
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

      <div>
        <section className="inner-banner ">
          <div className="container flex-column-reverse d-flex justify-content-center align-items-center">
            <h2
              className="text-white font-weight-bold"
              style={{ letterSpacing: 1 }}
            >
              We have a seat for you
            </h2>
          </div>
          {/* /.container */}
        </section>
        <section className="container text-center mt-5">
          <button type="button" className="btn btn-outline-primary btn-lg">
            View all positions
          </button>
          <button type="button" className="btn btn-outline-primary ml-2 btn-lg">
            Internship
          </button>
        </section>

        <section className="container mt-5 ">
          <h3 className="text-dark">Open positions in London, UK</h3>

          <div className="row mt-5">
            <div className="col-lg-4 col-sm-12">
              <label for="inputState " className="text-dark">
                Filter by office
              </label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>

            <div
              className="col-lg-8 col-sm-12 text-dark"
              style={{ fontSize: 20 }}
            >
              <p>
                Business Operations & Strategy{" "}
                <span className="float-right">
                  <i class="fas fa-chevron-right ml-2 text-muted"></i>
                </span>
                <span className="float-right p-1 rounded-circle text-center text-white circle">
                  1
                </span>
              </p>

              <hr />
              <p>
                Engineering - Infrastructure
                <span className="float-right">
                  <i class="fas fa-chevron-right ml-2 text-muted"></i>
                </span>
                <span className="float-right p-1 rounded-circle text-center text-white circle">
                  1
                </span>
              </p>
              <hr />
              <p>
                Marketing & Communications
                <span className="float-right">
                  <i class="fas fa-chevron-right ml-2 text-muted"></i>
                </span>
                <span className="float-right p-1 rounded-circle text-center text-white circle">
                  1
                </span>
              </p>
              <hr />
              <p>
                Business Operations & Strategy
                <span className="float-right">
                  <i class="fas fa-chevron-right ml-2 text-muted"></i>
                </span>
                <span className="float-right p-1 rounded-circle text-center text-white circle">
                  1
                </span>
              </p>
              <hr />

              <p>
                Business Operations & Strategy
                <span className="float-right">
                  <i class="fas fa-chevron-right ml-2 text-muted"></i>
                </span>
                <span className="float-right p-1 rounded-circle text-center text-white circle">
                  1
                </span>
              </p>
              <hr />

              <p>
                Business Operations & Strategy
                <span className="float-right">
                  <i class="fas fa-chevron-right ml-2 text-muted"></i>
                </span>
                <span className="float-right p-1 rounded-circle text-center text-white circle">
                  1
                </span>
              </p>

              <br />
              <br />
            </div>
          </div>
        </section>
        {/* /.inner-banner */}
      </div>
      <style jsx global>
        {`
          .circle {
            height: 36px;
            width: 36px;
            background: #98afc7;
          }
        `}
      </style>
    </PageLayouts>
  </React.Fragment>
);

export default About;
