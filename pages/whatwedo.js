import React from "react";
import PageLayouts from "../Layouts/PageLayouts";
import Head from "next/head";

const Faq = () => (
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

        <section className="service-two pricing-page">
          <div className="container">
            <div className="sec-title text-center">
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

        <section className="meeting-one">
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
        <section className="cta-five">
          <div className="container">
            <div className="sec-title text-center">
              <h2 className="title-line ">
                Few things that inston <br /> also do?.
              </h2>
              <span className="line-block " />
            </div>
            {/* /.sec-title */}
            <div className="row masonary-layout">
              <div className="col-lg-6 col-md-6 masonary-item">
                <img
                  src="images\what-we-do\what-we-do-1-1.jpg"
                  alt="Awesome Image"
                />

                <img
                  src="images\what-we-do\what-we-do-1-2.jpg"
                  alt="Awesome Image"
                  className="ml-4"
                />

                <div
                  className="cta-five__two cta-five__single mt-4"
                  style={{
                    backgroundImage:
                      "url(images/backgrounds/what-we-do-bg-1-1.jpg)",
                  }}
                >
                  <h3 className="cta-five__title light">
                    Personal Life <br /> Tasking
                  </h3>
                  {/* /.cta-five__title */}
                  <a href="#" className="cta-five__link light">
                    Let’s Get Started
                  </a>
                </div>
              </div>
              {/* /.col-lg-3 */}

              {/* /.col-lg-3 */}
              <div className="col-lg-6 masonary-item">
                <div
                  className="cta-five__one cta-five__single text-center"
                  style={{
                    backgroundImage:
                      "url(images/backgrounds/what-we-do-bg-1-2.jpg)",
                  }}
                >
                  <span className="cta-five__tag-line">We can help</span>
                  <h3 className="cta-five__title">
                    Work Related <br /> Tasking
                  </h3>
                  {/* /.cta-five__title */}
                  <p className="cta-five__text">
                    {" "}
                    We can help with your work <br /> related tasks, letting you{" "}
                    <br /> focus on what’s most <br /> important.
                  </p>
                  {/* /.cta-five__text */}
                  <a href="#" className="cta-five__link">
                    Let’s Get Started
                  </a>
                </div>
                {/* /.cta-five__one */}
              </div>
              {/* /.col-lg-6 */}

              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.cta-five */}
        <section className="todo-list-style-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="image-block">
                  <img src="images\resources\moc-1-1.png" alt="Awesome Image" />
                </div>
                {/* /.image-block */}
              </div>
              {/* /.col-lg-6 */}
              <div className="col-lg-6">
                <div className="content-block">
                  <div className="sec-title">
                    <h2 className="title-line">
                      Give us your to-do list <br /> and get on with your <br />{" "}
                      love-to-do list.
                    </h2>
                    <span className="line-block-two " />
                  </div>
                  {/* /.sec-title */}
                  <p>
                    Get started by having your VA set up meetings, manage your
                    busy schedule and streamline all the information that pours
                    into your inbox. They can help remind you of that important
                    call, deal with the phone company, track your packages.
                  </p>
                  <p>
                    With your VA handling all the small stuff, you can start
                    focusing <br /> on what's truly important, in work and life.
                  </p>
                  <a href="#" className="more-link">
                    Let’s Get Started
                  </a>
                </div>
                {/* /.content-block */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.todo-list-style-one */}
      </div>
    </PageLayouts>
  </React.Fragment>
);

export default Faq;
