import React from "react";
import PageLayouts from "../Layouts/PageLayouts";
import Head from "next/head";

const Services = () => (
  <React.Fragment>
    <PageLayouts>
      <div>
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
        </Head>

        <section className="inner-banner ">
          <div className="container flex-column-reverse d-flex justify-content-center align-items-center">
            <h2 className="inner-banner__title">Service Offerings</h2>
            {/* /.inner-banner__title */}
          </div>
          {/* /.container */}
        </section>
        {/* /.inner-banner */}
        <section className="service-two pricing-page">
          <div className="container">
            <div className="sec-title text-center">
              <span className="tag-line ">What we do</span>
              <h2 className="title-line ">
                What can inston help <br /> me with?.
              </h2>
              <span className="line-block " />
            </div>
            {/* /.sec-title */}
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="service-two__single hvr-bounce-to-top">
                  <i className="inston-icon-user-2 service-two__icon" />
                  <h3 className="service-two__title">
                    <a href="#">
                      Personal <br /> Assistant
                    </a>
                  </h3>
                  {/* /.service-two__title */}
                </div>
                {/* /.service-two__single */}
              </div>
              {/* /.col-lg-3 */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="service-two__single hvr-bounce-to-top">
                  <i className="inston-icon-calculator-symbols service-two__icon" />
                  <h3 className="service-two__title">
                    <a href="#">
                      Expensing and <br /> Invoicing
                    </a>
                  </h3>
                  {/* /.service-two__title */}
                </div>
                {/* /.service-two__single */}
              </div>
              {/* /.col-lg-3 */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="service-two__single hvr-bounce-to-top">
                  <i className="inston-icon-appointment service-two__icon" />
                  <h3 className="service-two__title">
                    <a href="#">
                      Scheduling and <br /> Planning
                    </a>
                  </h3>
                  {/* /.service-two__title */}
                </div>
                {/* /.service-two__single */}
              </div>
              {/* /.col-lg-3 */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="service-two__single hvr-bounce-to-top">
                  <i className="inston-icon-like service-two__icon" />
                  <h3 className="service-two__title">
                    <a href="#">
                      Marketing and <br /> Social Media
                    </a>
                  </h3>
                  {/* /.service-two__title */}
                </div>
                {/* /.service-two__single */}
              </div>
              {/* /.col-lg-3 */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="service-two__single hvr-bounce-to-top">
                  <i className="inston-icon-loupe service-two__icon" />
                  <h3 className="service-two__title">
                    <a href="#">
                      Research and <br /> Reports
                    </a>
                  </h3>
                  {/* /.service-two__title */}
                </div>
                {/* /.service-two__single */}
              </div>
              {/* /.col-lg-3 */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="service-two__single hvr-bounce-to-top">
                  <i className="inston-icon-envelope service-two__icon" />
                  <h3 className="service-two__title">
                    <a href="#">
                      Email <br /> Assistant
                    </a>
                  </h3>
                  {/* /.service-two__title */}
                </div>
                {/* /.service-two__single */}
              </div>
              {/* /.col-lg-3 */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="service-two__single hvr-bounce-to-top">
                  <i className="inston-icon-aeroplane service-two__icon" />
                  <h3 className="service-two__title">
                    <a href="#">
                      Travel <br /> Planning
                    </a>
                  </h3>
                  {/* /.service-two__title */}
                </div>
                {/* /.service-two__single */}
              </div>
              {/* /.col-lg-3 */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="service-two__single hvr-bounce-to-top">
                  <i className="inston-icon-price service-two__icon" />
                  <h3 className="service-two__title">
                    <a href="#">
                      Compare Prices <br /> and Products
                    </a>
                  </h3>
                  {/* /.service-two__title */}
                </div>
                {/* /.service-two__single */}
              </div>
              {/* /.col-lg-3 */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="service-two__single hvr-bounce-to-top">
                  <i className="inston-icon-home service-two__icon" />
                  <h3 className="service-two__title">
                    <a href="#">
                      Real Estate <br /> Assistant
                    </a>
                  </h3>
                  {/* /.service-two__title */}
                </div>
                {/* /.service-two__single */}
              </div>
              {/* /.col-lg-3 */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="service-two__single hvr-bounce-to-top">
                  <i className="inston-icon-factory service-two__icon" />
                  <h3 className="service-two__title">
                    <a href="#">
                      Industries <br /> Services
                    </a>
                  </h3>
                  {/* /.service-two__title */}
                </div>
                {/* /.service-two__single */}
              </div>
              {/* /.col-lg-3 */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="service-two__single hvr-bounce-to-top">
                  <i className="inston-icon-team service-two__icon" />
                  <h3 className="service-two__title">
                    <a href="#">
                      Small Business <br /> Support
                    </a>
                  </h3>
                  {/* /.service-two__title */}
                </div>
                {/* /.service-two__single */}
              </div>
              {/* /.col-lg-3 */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="service-two__single hvr-bounce-to-top">
                  <i className="inston-icon-working service-two__icon" />
                  <h3 className="service-two__title">
                    <a href="#">
                      Administrative &amp; <br /> Executive Assistant
                    </a>
                  </h3>
                  {/* /.service-two__title */}
                </div>
                {/* /.service-two__single */}
              </div>
              {/* /.col-lg-3 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.service-two */}

        <section className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="font-weight-bold text-dark">
                  {" "}
                  Go from overwhelmed to organized.
                </h1>
                <p>
                  Zirtual Virtual Assistants remove the most time-consuming
                  administrative tasks from your plate. Instead of trying to do
                  it all yourself, you will have more time to close deals,
                  explore business ventures, and grow your start-up. Not to
                  mention more time to spend with your family.
                </p>
                <button className="btn btn-success btn-lg">See plans</button>
              </div>
              <div className="col-lg-6">
                <img
                  src="https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container pt-5 pb-5">
          <h2 className="text-center font-weight-bold text-dark">
            The simplest way to get more done, faster.
          </h2>
          <p className="text-center text-center pb-5 lead">
            Find the perfect virtual assistant in three easy steps.
          </p>
          <div className="row">
            <div className="col-lg-4 text-center">
              <img
                src="https://image.flaticon.com/icons/svg/2906/2906274.svg"
                className="img-fluid  mx-auto"
                style={{ width: 200 }}
              />
              <br />
              <br />

              <h3 className="text-dark">Select Your Plan</h3>
              <br />
              <p>
                We match you with a Virtual Assistant based on your custom
                preferences.
              </p>
            </div>

            <div className="col-lg-4 text-center">
              <img
                src="https://image.flaticon.com/icons/svg/2906/2906274.svg"
                className="img-fluid  mx-auto"
                style={{ width: 200 }}
              />
              <br />
              <br />
              <h3 className="text-dark">Delegate Your Tasks</h3>
              <br />

              <p>
                We match you with a Virtual Assistant based on your custom
                preferences.
              </p>
            </div>

            <div className="col-lg-4 text-center">
              <img
                src="https://image.flaticon.com/icons/svg/2906/2906274.svg"
                className="img-fluid  mx-auto"
                style={{ width: 200 }}
              />
              <br />
              <br />
              <h3 className="text-dark">Accomplish More</h3>
              <br />

              <p>
                We match you with a Virtual Assistant based on your custom
                preferences.
              </p>
            </div>
          </div>
        </section>

        <section className="how-works-one thm-gray-bg">
          <div className="container">
            <div className="row no-gutters flex-row-reverse">
              <div className="col-lg-6">
                <img
                  src="images\resources\how-works-1-1.jpg"
                  className="how-works-one__image"
                  alt="Awesome Image"
                />
              </div>
              {/* /.col-lg-6 */}
              <div className="col-lg-6 d-flex ">
                <div className="how-works-one__content my-auto">
                  <div className="sec-title">
                    <span className="tag-line ">02 process</span>
                    <h2 className="title-line">
                      Learn how we handle <br /> assistants.
                    </h2>
                    <span className="line-block-two " />
                  </div>
                  {/* /.sec-title */}
                  <p className="how-works-one__text large-paragraph">
                    There are many variations of passages of Ipsum not available
                    but the majority have suffered alteration some form by
                    injected hu randomised words which don't look even slightly
                    believable. If you are going to use a passage of you need to
                    be sure there isn't anything.
                  </p>
                  {/* /.how-works-one__text large-paragraph */}
                  <p className="how-works-one__text large-paragraph">
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary.
                  </p>
                  {/* /.how-works-one__text large-paragraph */}
                </div>
                {/* /.how-works-one__content */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
            <div className="row no-gutters">
              <div className="col-lg-6 clearfix">
                <img
                  src="images\resources\how-works-1-2.jpg"
                  className="how-works-one__image float-right"
                  alt="Awesome Image"
                />
              </div>
              {/* /.col-lg-6 */}
              <div className="col-lg-6 d-flex ">
                <div className="how-works-one__content my-auto">
                  <div className="sec-title">
                    <span className="tag-line ">01 process</span>
                    <h2 className="title-line">
                      Explore our way of <br /> working.
                    </h2>
                    <span className="line-block-two " />
                  </div>
                  {/* /.sec-title */}
                  <p className="how-works-one__text large-paragraph">
                    There are many variations of passages of Ipsum not available
                    but the majority have suffered alteration some form by
                    injected hu randomised words which don't look even slightly
                    believable. If you are going to use a passage of you need to
                    be sure there isn't anything.
                  </p>
                  {/* /.how-works-one__text large-paragraph */}
                  <p className="how-works-one__text large-paragraph">
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary.
                  </p>
                  {/* /.how-works-one__text large-paragraph */}
                </div>
                {/* /.how-works-one__content */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.how-works-one */}
      </div>
    </PageLayouts>
  </React.Fragment>
);

export default Services;
