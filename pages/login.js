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

      <div>
        {/* <section className="inner-banner ">
          <div className="container flex-column-reverse d-flex justify-content-center align-items-center">
            <h2
              className="text-white font-weight-bold"
              style={{ letterSpacing: 1 }}
            >
              Login
            </h2>
          </div>
        
        </section> */}

        <section>
          <div id="login" className="pb-5">
            <div className="container">
              <div
                id="login-row"
                className="row justify-content-center align-items-center"
              >
                <div id="login-column" className="col-md-6">
                  <div id="login-box" className="col-md-12">
                    <form id="login-form" className="form" action method="post">
                      <h3 className="text-center text-dark font-weight-bold">
                        Login
                      </h3>
                      <div className="form-group">
                        <label
                          htmlFor="username"
                          className="text-dark font-weight-bold textspacing"
                        >
                          Username:
                        </label>
                        <br />
                        <input
                          type="text"
                          name="username"
                          id="username"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="password"
                          className="text-dark font-weight-bold textspacing"
                        >
                          Password:
                        </label>
                        <br />
                        <input
                          type="text"
                          name="password"
                          id="password"
                          className="form-control"
                        />
                      </div>
                      <div>
                        <label htmlFor="remember-me" className="text-dark">
                          <span>Remember me</span>&nbsp;
                          <span>
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                            />
                          </span>
                        </label>
                        <br />
                      </div>

                      <div className="text-center">
                        <button
                          type="button"
                          className="btn btn-success text-center"
                        >
                          Submit
                        </button>
                      </div>
                      <br />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </section>
      </div>
      <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
            background-color: #000;
            height: 100vh;
          }
          #login .container #login-row #login-column #login-box {
            margin-top: 120px;
            max-width: 600px;
            height: 340px;
            border-radius: 10px;
            background-color: #e3e3e3;
          }
          #login .container #login-row #login-column #login-box #login-form {
            padding: 20px;
          }
          #login
            .container
            #login-row
            #login-column
            #login-box
            #login-form
            #register-link {
            margin-top: -85px;
          }
          .textspacing {
            letter-spacing: 1px;
          }
        `}
      </style>
    </PageLayouts>
  </React.Fragment>
);

export default About;
