import React from "react";
import PageLayouts from "../Layouts/PageLayouts";
import Head from "next/head";

const Partnerships = () => (
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
      </Head>

      <section className="inner-banner ">
        <div className="container flex-column-reverse d-flex justify-content-center align-items-center">
          <h2 className="inner-banner__title">Partnerships</h2>
        </div>
      </section>
      <br />
      <br />

      <section className="mx-auto wrapper pt-5 pb-5">
        <h2 className="text-dark">Lorem ipsum</h2>

        <p>
          Lorem Ipsum is simply dummy text of the rinting and typesetting
          industry has been the ndustry standard dummy text ever sincer they
          llam id condimentum purus In non ex at ligula fringilla bortis. Ut et
          mauris auctor, aliquet nulla sed, aliquam mauris. Vestibulum sed
          malesuada dolor. Integer fringilla odio a dolor aliquet, eu euismod
          lectus porttitor. Proin et libero nec eros eleifend commodo Phasellus
          sodales des volutpat diam, id sagittis purus egestas dapibus. Donec
          bibendum est quis mi commodo blandit. Maecenas pellentesque, massa
          vitae faucibus consectetur, ante magna gravida magna, ut venenatis
          massa augue et odio. Aliquam luctus viverra velit, non euismod ligula
          congue sed.
        </p>

        <div>
          <div className="button-block">
            <a className="thm-btn" href="#">
              Request a Consultation
            </a>
          </div>
          {/* /.btn-block */}
        </div>
      </section>
      <br />
      <br />
      <style jsx global>
        {`
          .wrapper {
            width: 45%;
          }

          @media only screen and (max-width: 500px) {
            .wrapper {
              width: 100%;
              padding: 20px;
            }
          }
        `}
      </style>
    </PageLayouts>
  </React.Fragment>
);

export default Partnerships;
