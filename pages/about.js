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
      </Head>

      <div>
        <section className="inner-banner ">
          <div className="container flex-column-reverse d-flex justify-content-center align-items-center">
            <h2 className="inner-banner__title">About</h2>
          </div>
          {/* /.container */}
        </section>
        {/* /.inner-banner */}
        <section className="about-two">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-two__image">
                  <img
                    src="images\resources\about-1-2.jpg"
                    alt="Awesome Image"
                  />
                </div>
                {/* /.about-two__image */}
              </div>
              {/* /.col-lg-6 */}
              <div className="col-lg-6">
                <div className="about-two__content">
                  <div className="sec-title text-left">
                    <span className="tag-line">Introduction</span>
                    <h2 className="title-line">
                      Welcome to the virtual <br /> assistant platform.
                    </h2>
                    <span className="line-block line-block-two" />
                  </div>
                  {/* /.sec-title */}
                  <p className="about-two__text large-paragraph">
                    Simply are many variations of passages of orem Ipsum
                    available, but the majority have suffered altertion in some
                    form by injected humour or randomised words which don't look
                    even slightly believab you are going to use a passage.{" "}
                  </p>
                  {/* /.about-two__text */}
                  <div className="about-one__video">
                    <img
                      src="images\resources\video1-1.jpg"
                      alt="Awesome Image"
                    />
                    <a href="#" className="about-one__video-link hvr-pulse">
                      <i className="fa fa-play" />
                    </a>
                  </div>
                  {/* /.about-one__video */}
                </div>
                {/* /.about-two__content */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.about-two */}
        <section className="cta-four thm-black-bg">
          <img
            src="images\resources\moc-1-3.png"
            className="cta-four__moc"
            alt="Awesome Image"
          />
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <div className="cta-four__content">
                  <div className="sec-title text-left">
                    <span className="tag-line ">Best assistants</span>
                    <h2 className="title-line light">
                      We only choose the <br /> best one for you.
                    </h2>
                    <span className="line-block line-block-two" />
                  </div>
                  {/* /.sec-title */}
                  <p className="cta-four__text large-paragraph">
                    There are many variations of passages of Ipsum available but
                    the majority have suffered alteration in some form by
                    injected hu randomised words which don't look even slightly
                    believable. If you are going to use a passage of Lorem
                    Ipsum, you need to be sure there isn't anything hidden in
                    the middle of text.
                  </p>
                  {/* /.cta-three__text */}
                  <a href="#" className="thm-btn cta-four__btn">
                    Get Started now
                  </a>
                </div>
                {/* /.cta-four__content */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row justify-content-end */}
          </div>
          {/* /.container */}
        </section>
        {/* /.cta-four */}

        <section className="why-choose-one thm-gray-bg">
          <div className="container">
            <div className="sec-title text-center">
              <span className="tag-line">Why choose us</span>
              <h2 className="title-line">
                Why hire a inston virtual <br /> assistant.
              </h2>
              <span className="line-block" />
            </div>
            {/* /.sec-title */}
            <div className="row no-gutters">
              <div className="col-lg-4">
                <div className="why-choose-one__single">
                  <div className="why-choose-one__icon">
                    <i className="inston-icon-cap" />
                    <img
                      src="https://image.flaticon.com/icons/svg/686/686051.svg"
                      alt="logo"
                      className="img-fluid"
                      style={{ width: 170 }}
                    />
                  </div>
                  {/* /.why-choose-one__icon */}
                  <h3 className="why-choose-one__title">
                    <a href="#">Highly Educated Assistants</a>
                  </h3>
                  {/* /.why-choose-one__title */}
                  <p className="why-choose-one__text">
                    There are many variations of passages of lorem ipsum but the
                    majority.
                  </p>
                  {/* /.why-choose-one__text */}
                </div>
                {/* /.why-choose-one__single */}
              </div>
              {/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="why-choose-one__single">
                  <div className="why-choose-one__icon">
                    <i className="inston-icon-user-2" />
                    <img
                      src="https://image.flaticon.com/icons/svg/686/686051.svg"
                      alt="logo"
                      className="img-fluid"
                      style={{ width: 170 }}
                    />
                  </div>
                  {/* /.why-choose-one__icon */}
                  <h3 className="why-choose-one__title">
                    <a href="#">Already Trained. Ready Today</a>
                  </h3>
                  {/* /.why-choose-one__title */}
                  <p className="why-choose-one__text">
                    There are many variations of passages of lorem ipsum but the
                    majority.
                  </p>
                  {/* /.why-choose-one__text */}
                </div>
                {/* /.why-choose-one__single */}
              </div>
              {/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="why-choose-one__single">
                  <div className="why-choose-one__icon">
                    <i className="inston-icon-humanitarian" />
                    <img
                      src="https://image.flaticon.com/icons/svg/686/686051.svg"
                      alt="logo"
                      className="img-fluid"
                      style={{ width: 170 }}
                    />
                  </div>
                  {/* /.why-choose-one__icon */}
                  <h3 className="why-choose-one__title">
                    <a href="#">VA Bad fit? No Problem</a>
                  </h3>
                  {/* /.why-choose-one__title */}
                  <p className="why-choose-one__text">
                    There are many variations of passages of lorem ipsum but the
                    majority.
                  </p>
                  {/* /.why-choose-one__text */}
                </div>
                {/* /.why-choose-one__single */}
              </div>
              {/* /.col-lg-4 */}
            </div>
            {/* /.row no-gutters */}
          </div>
          {/* /.container */}
        </section>
        {/* /.why-choose-one */}

        <section className="meeting-one mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="meeting-one__image">
                  <img
                    src="images\resources\meeting-1-1.jpg"
                    alt="Awesome Image"
                  />
                </div>
                {/* /.meeting-one__image */}
              </div>
              {/* /.col-lg-6 */}
              <div className="col-lg-6">
                <div className="meeting-one__content">
                  <div className="sec-title text-left">
                    <span className="tag-line ">Get started</span>
                    <h2 className="title-line ">
                      By having your VA set <br /> up meetings.
                    </h2>
                    <span className="line-block line-block-two" />
                  </div>
                  {/* /.sec-title */}
                  <p className="meeting-one__block-text large-paragraph">
                    They can help remind you of that important call, deal with
                    the phone company, track your packages and plan your weekend
                    getaway.
                  </p>
                  {/* /.meeting-one__block-text */}
                  <div className="meeting-one__box-wrap">
                    <div className="meeting-one__box">
                      <div className="meeting-one__bubble">
                        Hello. I’m your personal assistant from Inston
                      </div>
                      {/* /.meeting-one__bubble */}
                      <img
                        src="images\resources\chat-1-1.jpg"
                        alt="Awesome Image"
                      />
                      <h3 className="meeting-one__title">Rhonda Mcdermond</h3>
                      {/* /.meeting-one__title */}
                      <p className="meeting-one__text">Assistant</p>
                      {/* /.meeting-one__text */}
                    </div>
                    {/* /.meeting-one__box */}
                    <div className="meeting-one__box">
                      <div className="meeting-one__bubble">Hello. Rhonda</div>
                      {/* /.meeting-one__bubble */}
                      <img
                        src="images\resources\chat-1-2.jpg"
                        alt="Awesome Image"
                      />
                      <h3 className="meeting-one__title">Karleen Pedigo</h3>
                      {/* /.meeting-one__title */}
                      <p className="meeting-one__text">Assistant</p>
                      {/* /.meeting-one__text */}
                    </div>
                    {/* /.meeting-one__box */}
                  </div>
                  {/* /.meeting-one__box-wrap */}
                </div>
                {/* /.meeting-one__content */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.meeting-one */}

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
                    <span className="tag-line ">Chill out</span>
                    <h2 className="title-line ">
                      Sit back, relax and <br /> enjoy coffee.
                    </h2>
                    <span className="line-block line-block-two" />
                  </div>
                  {/* /.sec-title */}
                  <p className="cta-three__text large-paragraph">
                    Your inbox is overflowing, your appointments are a mess, you
                    have travel that needs booked, and your "to do" list is
                    endless. VA's have all of the skills to handle both your
                    work and personal needs, and can start relieving your stress
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
        {/* /.cta-three */}
      </div>
    </PageLayouts>
  </React.Fragment>
);

export default About;
