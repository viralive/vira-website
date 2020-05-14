import React from "react";
import PageLayouts from "../Layouts/PageLayouts";
import Testimonial from "react-testimonial";
import Head from "next/head";

const Workasvira = () => (
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
          <h2 className="text-center text-white" style={{ fontSize: 40 }}>
            We have a seat for you
          </h2>
        </div>
        {/* /.container */}
      </section>

      <section>
        <div className="text-center mt-5">
          <button type="button" class="btn btn-outline-primary">
            View positions
          </button>
          <button type="button" class="btn btn-outline-primary ml-3">
            Internship
          </button>
        </div>
      </section>
      <section className="about-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-one__content">
                <div className="sec-title text-left">
                  <h2 className="title-line ">
                    Streamline your success <br /> in work and life.
                  </h2>
                  <span className="line-block line-block-two" />
                </div>
                {/* /.sec-title */}
                <p className="about-one__text">
                  Inston is the secret weapon of successful people. Not just in
                  work, but in life. We give you more time to focus on the big
                  picture by taking care of the little details. Stuff like
                  scheduling meetings, paying bills, and booking travel. As a
                  Inston client, you get your very own Virtual Assistant (VA) —
                  a smart, highly trained US-based point person who works
                  remotely as your right hand and left brain. You delegate a
                  task and your VA is on it.
                </p>
                {/* /.about-one__text */}
              </div>
              {/* /.about-one__content */}
            </div>
            {/* /.col-lg-6 */}
            <div className="col-lg-6">
              <div className="about-one__image">
                <img src="images\resources\about-1-1.jpg" alt="Awesome Image" />
              </div>
              {/* /.about-one__image */}
            </div>
            {/* /.col-lg-6 */}
            <div className="col-lg-6">
              <div className="about-one__image">
                <img src="images\resources\about-1-1.jpg" alt="Awesome Image" />
              </div>
              {/* /.about-one__video */}
            </div>
            {/* /.col-lg-6 */}
            <div className="col-lg-6">
              <div className="about-one__content">
                <div className="sec-title text-left">
                  <h2 className="title-line ">
                    Streamline your success <br /> in work and life.
                  </h2>
                  <span className="line-block line-block-two" />
                </div>
                {/* /.sec-title */}
                <p className="about-one__text">
                  Inston is the secret weapon of successful people. Not just in
                  work, but in life. We give you more time to focus on the big
                  picture by taking care of the little details. Stuff like
                  scheduling meetings, paying bills, and booking travel. As a
                  Inston client, you get your very own Virtual Assistant (VA) —
                  a smart, highly trained US-based point person who works
                  remotely as your right hand and left brain. You delegate a
                  task and your VA is on it.
                </p>
                {/* /.about-one__text */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-one__content">
                <div className="sec-title text-left">
                  <h2 className="title-line ">
                    Streamline your success <br /> in work and life.
                  </h2>
                  <span className="line-block line-block-two" />
                </div>
                {/* /.sec-title */}
                <p className="about-one__text">
                  Inston is the secret weapon of successful people. Not just in
                  work, but in life. We give you more time to focus on the big
                  picture by taking care of the little details. Stuff like
                  scheduling meetings, paying bills, and booking travel. As a
                  Inston client, you get your very own Virtual Assistant (VA) —
                  a smart, highly trained US-based point person who works
                  remotely as your right hand and left brain. You delegate a
                  task and your VA is on it.
                </p>
                {/* /.about-one__text */}
              </div>
              {/* /.about-one__content */}
            </div>
            {/* /.col-lg-6 */}
            <div className="col-lg-6">
              <div className="about-one__image">
                <img src="images\resources\about-1-1.jpg" alt="Awesome Image" />
              </div>
              {/* /.about-one__image */}
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.about-one */}

      <section className="container text-center">
        <h2 style={{ color: "#000" }}>What people say</h2>
        <Testimonial>
          <div className="card content mx-auto border-0">
            <div className="card-body">
              <span style={{ fontSize: 25 }}>
                I had the pleasure of working with him on an exciting project
                for over 18 months. We have shared some highs, lows and some
                real head scratching moments. He has been a real asset to the
                team and to me personally.
              </span>
              <p
                className="mt-3"
                style={{ fontSize: 25, fontWeight: "bold", color: "#000" }}
              >
                <img
                  src="https://pluspng.com/img-png/user-png-icon-male-user-icon-512.png"
                  className="rounded-circle"
                  style={{ width: 40 }}
                />{" "}
                ABC
              </p>
            </div>
          </div>
          <div className="card content mx-auto border-0">
            <div className="card-body">
              <span style={{ fontSize: 25 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </span>
              <p
                className="mt-3"
                style={{ fontSize: 25, fontWeight: "bold", color: "#000" }}
              >
                <img
                  src="https://pluspng.com/img-png/user-png-icon-male-user-icon-512.png"
                  className="rounded-circle"
                  style={{ width: 40 }}
                />{" "}
                XYX
              </p>
            </div>
          </div>
        </Testimonial>
      </section>

      <section className="service-two pricing-page">
        <div className="container">
          <div className="sec-title text-center">
            <h2 className="title-line ">Choose your office</h2>
            <span className="line-block " />
          </div>
          {/* /.sec-title */}
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-two__single hvr-bounce-to-top">
                <h3 className="service-two__title">
                  <a href="#">San Fransisco , SA</a>
                </h3>
                {/* /.service-two__title */}
              </div>
              {/* /.service-two__single */}
            </div>
            {/* /.col-lg-3 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-two__single hvr-bounce-to-top">
                <h3 className="service-two__title">
                  <a href="#">San Fransisco , SA</a>
                </h3>
                {/* /.service-two__title */}
              </div>
              {/* /.service-two__single */}
            </div>
            {/* /.col-lg-3 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-two__single hvr-bounce-to-top">
                <h3 className="service-two__title">
                  <a href="#">San Fransisco , SA</a>
                </h3>
                {/* /.service-two__title */}
              </div>
              {/* /.service-two__single */}
            </div>
            {/* /.col-lg-3 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-two__single hvr-bounce-to-top">
                <h3 className="service-two__title">
                  <a href="#">San Fransisco , SA</a>
                </h3>
                {/* /.service-two__title */}
              </div>
              {/* /.service-two__single */}
            </div>
            {/* /.col-lg-3 */}
          </div>
        </div>
      </section>
      {/* /.service-two */}

      <section>
        <div className="text-center mt-2 pb-5">
          <button type="button" class="btn btn-outline-primary">
            View positions
          </button>
          <button type="button" class="btn btn-outline-primary ml-3">
            Internship
          </button>
        </div>
      </section>

      <section className="cta-three thm-gray-bg">
        <div className="container">
          <img
            src="images\resources\moc-1-2.png"
            alt="Awesome Image"
            className="cta-three__moc"
          />
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="cta-three__content">
                <div className="sec-title text-left">
                  <h2 className="title-line ">
                    Sit back, relax and <br /> enjoy coffee.
                  </h2>
                  <span className="line-block line-block-two" />
                </div>
                {/* /.sec-title */}
                <p className="cta-three__text large-paragraph">
                  Your inbox is overflowing, your appointments are a mess, you
                  have travel that needs booked, and your "to do" list is
                  endless. VA's have all of the skills to handle both your work
                  and personal needs, and can start relieving your stress
                  immediately.
                </p>
                {/* /.cta-three__text */}
              </div>
              {/* /.cta-three__content */}
            </div>
            {/* /.col-lg-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>

      <section className="container pt-5 pb-5">
        <p>
          Your inbox is overflowing, your appointments are a mess, you have
          travel that needs booked, and your "to do" list is endless. VA's have
          all of the skills to handle both your work and personal needs, and can
          start relieving your stress immediately. Your inbox is overflowing,
          your appointments are a mess, you have travel that needs booked, and
          your "to do" list is endless. VA's have all of the skills to handle
          both your work and personal needs, and can start relieving your stress
          immediately.
        </p>
      </section>
    </PageLayouts>
  </React.Fragment>
);

export default Workasvira;
