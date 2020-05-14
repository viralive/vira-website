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
      </Head>

      <div>
        <section className="inner-banner ">
          <div className="container flex-column-reverse d-flex justify-content-center align-items-center">
            <h2 className="inner-banner__title">Client Success Stories</h2>
            {/* /.inner-banner__title */}
          </div>
          {/* /.container */}
        </section>

        <section className="success-stories">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="success-stories__content">
                  <div className="sec-title text-left">
                    <h2 className="title-line ">
                      Casimira Chalifoux <br /> Co Founder of{" "}
                      <span>FastLane</span>
                    </h2>
                    <span className="line-block-two" />
                  </div>
                  {/* /.sec-title */}
                  <p className="success-stories__tag-line">
                    Fastlane is a technology platform to increase <br /> PR
                    performance.
                  </p>
                  {/* /.success-stories__tag-line */}
                  <p className="success-stories__text large-paragraph">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesettin industry has been the industry's standard dummy
                    text ever since the when an unknown printer took a galley of
                    type scrmbled.
                  </p>
                  {/* /.success-stories__text large-paragraph */}
                  <p className="success-stories__text large-paragraph">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form by injected humour, or randomised words.
                  </p>
                  {/* /.success-stories__text large-paragraph */}
                  <a href="#" className="thm-btn success-stories__btn">
                    Visit Website
                  </a>
                </div>
                {/* /.success-stories__content */}
              </div>
              {/* /.col-lg-6 */}
              <div className="col-lg-6">
                <div className="success-stories__blockqoute thm-gray-bg">
                  <p className="success-stories__blockqoute-text">
                    There are so many variations of is available but the majorit
                    have suffer alteration some form by inject humour isnot
                    random words which don't look even slightly.
                  </p>
                  {/* /.success-stories__blockqoute-text */}
                  <div className="success-stories__blockqoute-info">
                    <img
                      src="images\testimonials\testi-2-1.jpg"
                      alt="Awesome Image"
                    />
                    <div className="success-stories__blockqoute-info-content">
                      <h3 className="success-stories__blockqoute-title">
                        Casimira Chalifoux
                      </h3>
                      {/* /.success-stories__blockqoute-title */}
                      <p className="success-stories__blockqoute-designation">
                        Co Founder of Fast Lane
                      </p>
                      {/* /.success-stories__blockqoute-designation */}
                    </div>
                    {/* /.success-stories__blockqoute-info-content */}
                  </div>
                  {/* /.success-stories__blockqoute-info */}
                </div>
                {/* /.success-stories__blockqoute */}
                <div className="about-one__video">
                  <img
                    src="images\resources\video1-2.jpg"
                    alt="Awesome Image"
                  />
                  <a href="#" className="about-one__video-link hvr-pulse">
                    <i className="fa fa-play" />
                  </a>
                </div>
                {/* /.about-one__video */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.success-stories */}

        <section
          className="success-stories"
          style={{ backgroundColor: "#F8F6F3" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="success-stories__blockqoute bg-white">
                  <p className="success-stories__blockqoute-text">
                    There are so many variations of is available but the majorit
                    have suffer alteration some form by inject humour isnot
                    random words which don't look even slightly.
                  </p>
                  {/* /.success-stories__blockqoute-text */}
                  <div className="success-stories__blockqoute-info">
                    <img
                      src="images\testimonials\testi-2-1.jpg"
                      alt="Awesome Image"
                    />
                    <div className="success-stories__blockqoute-info-content">
                      <h3 className="success-stories__blockqoute-title">
                        Casimira Chalifoux
                      </h3>
                      {/* /.success-stories__blockqoute-title */}
                      <p className="success-stories__blockqoute-designation">
                        Co Founder of Fast Lane
                      </p>
                      {/* /.success-stories__blockqoute-designation */}
                    </div>
                    {/* /.success-stories__blockqoute-info-content */}
                  </div>
                  {/* /.success-stories__blockqoute-info */}
                </div>
                {/* /.success-stories__blockqoute */}
                <div className="about-one__video">
                  <img
                    src="images\resources\video1-2.jpg"
                    alt="Awesome Image"
                  />
                  <a href="#" className="about-one__video-link hvr-pulse">
                    <i className="fa fa-play" />
                  </a>
                </div>
                {/* /.about-one__video */}
              </div>
              {/* /.col-lg-6 */}
              <div className="col-lg-6">
                <div className="success-stories__content">
                  <div className="sec-title text-left">
                    <h2 className="title-line ">
                      Casimira Chalifoux <br /> Co Founder of{" "}
                      <span>FastLane</span>
                    </h2>
                    <span className="line-block-two" />
                  </div>
                  {/* /.sec-title */}
                  <p className="success-stories__tag-line">
                    Fastlane is a technology platform to increase <br /> PR
                    performance.
                  </p>
                  {/* /.success-stories__tag-line */}
                  <p className="success-stories__text large-paragraph">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesettin industry has been the industry's standard dummy
                    text ever since the when an unknown printer took a galley of
                    type scrmbled.
                  </p>
                  {/* /.success-stories__text large-paragraph */}
                  <p className="success-stories__text large-paragraph">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form by injected humour, or randomised words.
                  </p>
                  {/* /.success-stories__text large-paragraph */}
                  <a href="#" className="thm-btn success-stories__btn">
                    Visit Website
                  </a>
                </div>
                {/* /.success-stories__content */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.success-stories */}

        <section className="success-stories">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="success-stories__content">
                  <div className="sec-title text-left">
                    <h2 className="title-line ">
                      Casimira Chalifoux <br /> Co Founder of{" "}
                      <span>FastLane</span>
                    </h2>
                    <span className="line-block-two" />
                  </div>
                  {/* /.sec-title */}
                  <p className="success-stories__tag-line">
                    Fastlane is a technology platform to increase <br /> PR
                    performance.
                  </p>
                  {/* /.success-stories__tag-line */}
                  <p className="success-stories__text large-paragraph">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesettin industry has been the industry's standard dummy
                    text ever since the when an unknown printer took a galley of
                    type scrmbled.
                  </p>
                  {/* /.success-stories__text large-paragraph */}
                  <p className="success-stories__text large-paragraph">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form by injected humour, or randomised words.
                  </p>
                  {/* /.success-stories__text large-paragraph */}
                  <a href="#" className="thm-btn success-stories__btn">
                    Visit Website
                  </a>
                </div>
                {/* /.success-stories__content */}
              </div>
              {/* /.col-lg-6 */}
              <div className="col-lg-6">
                <div className="success-stories__blockqoute thm-gray-bg">
                  <p className="success-stories__blockqoute-text">
                    There are so many variations of is available but the majorit
                    have suffer alteration some form by inject humour isnot
                    random words which don't look even slightly.
                  </p>
                  {/* /.success-stories__blockqoute-text */}
                  <div className="success-stories__blockqoute-info">
                    <img
                      src="images\testimonials\testi-2-1.jpg"
                      alt="Awesome Image"
                    />
                    <div className="success-stories__blockqoute-info-content">
                      <h3 className="success-stories__blockqoute-title">
                        Casimira Chalifoux
                      </h3>
                      {/* /.success-stories__blockqoute-title */}
                      <p className="success-stories__blockqoute-designation">
                        Co Founder of Fast Lane
                      </p>
                      {/* /.success-stories__blockqoute-designation */}
                    </div>
                    {/* /.success-stories__blockqoute-info-content */}
                  </div>
                  {/* /.success-stories__blockqoute-info */}
                </div>
                {/* /.success-stories__blockqoute */}
                <div className="about-one__video">
                  <img
                    src="images\resources\video1-2.jpg"
                    alt="Awesome Image"
                  />
                  <a href="#" className="about-one__video-link hvr-pulse">
                    <i className="fa fa-play" />
                  </a>
                </div>
                {/* /.about-one__video */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.success-stories */}
      </div>
    </PageLayouts>
  </React.Fragment>
);

export default About;
