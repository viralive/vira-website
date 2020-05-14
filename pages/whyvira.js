import React from "react";
import PageLayouts from "../Layouts/PageLayouts";
import Head from "next/head";

const Whyvira = () => (
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

      <section>
        <div className="container">
          <h2 className="text-center text-dark mt-5">Calculate your value</h2>
          <br />
          <div
            className="row text-center text-primary pb-5"
            style={{ lineHeight: 3.5 }}
          >
            <div className="col-lg-4 col-sm-12 col-md-4">
              <input type="checkbox" /> <span>Email Management</span>
              <br />
              <input type="checkbox" /> <span>Email Management</span>
              <br />
              <input type="checkbox" /> <span>Email Management</span>
              <br />
              <input type="checkbox" /> <span>Email Management</span>
              <br />
            </div>

            <div className="col-lg-4 col-sm-12 col-md-4">
              <input type="checkbox" /> <span>Email Management</span>
              <br />
              <input type="checkbox" /> <span>Email Management</span>
              <br />
              <input type="checkbox" /> <span>Email Management</span>
              <br />
              <input type="checkbox" /> <span>Email Management</span>
              <br />
            </div>

            <div className="col-lg-4 col-sm-12 col-md-4">
              <input type="checkbox" /> <span>Email Management</span>
              <br />
              <input type="checkbox" /> <span>Email Management</span>
              <br />
              <input type="checkbox" /> <span>Email Management</span>
              <br />
              <input type="checkbox" /> <span>Email Management</span>
              <br />
            </div>
          </div>
        </div>
      </section>
      <section className="features-tab-two thm-gray-bg">
        <div className="container">
          <div className="sec-title text-center">
            <span className="tag-line ">Why choose us</span>
            <h2 className="title-line">
              Why hire a inston virtual <br /> assistant.
            </h2>
            <span className="line-block" />
          </div>
          {/* /.sec-title */}
          <ul className="nav nav-tabs features-tab-two__list" role="tablist">
            <li className="nav-item features-tab-two__list-item">
              <a
                className="nav-link active features-tab-two__list-link"
                href="#features-tab-1"
                role="tab"
                data-toggle="tab"
              >
                <span className="features-tab-two__list-title">
                  Highly Educated Assistants
                </span>
              </a>
            </li>
            <li className="nav-item features-tab-two__list-item">
              <a
                className="nav-link features-tab-two__list-link"
                href="#features-tab-2"
                role="tab"
                data-toggle="tab"
              >
                <span className="features-tab-two__list-title">
                  Professionally Trained
                </span>
              </a>
            </li>
            <li className="nav-item features-tab-two__list-item">
              <a
                className="nav-link features-tab-two__list-link"
                href="#features-tab-3"
                role="tab"
                data-toggle="tab"
              >
                <span className="features-tab-two__list-title">
                  VA Bad fit? No problem
                </span>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              role="tabpanel"
              className="tab-pane show active  animated fadeInUp"
              id="features-tab-1"
            >
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <img
                    src="images\resources\tab-2-1.jpg"
                    className="features-tab-two__image"
                    alt="Awesome Image"
                  />
                </div>
                {/* /.col-lg-6 */}
                <div className="col-lg-6">
                  <div className="features-tab-two__content">
                    <p className="features-tab-two__text large-paragraph">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form injected humour or randomised words which don't
                      look even believable. If you are going to use a passage of
                      Lorem Ipsum, you need to be sure there isn't anything
                      embarrassing hidden in the middle of text.
                    </p>
                    {/* /.features-tab-two__text large-paragraph */}
                    <ul className="features-tab-two__content-list">
                      <li className="features-tab-two__content-list-item">
                        <i className="fa fa-check" />
                        Highly trained in administrative tasks
                      </li>
                      {/* /.features-tab-two__content-list-item */}
                      <li className="features-tab-two__content-list-item">
                        <i className="fa fa-check" />
                        Professionally managed and supported
                      </li>
                      {/* /.features-tab-two__content-list-item */}
                      <li className="features-tab-two__content-list-item">
                        <i className="fa fa-check" />
                        Proficient in Google, and most popular productivity
                        suites
                      </li>
                      {/* /.features-tab-two__content-list-item */}
                    </ul>
                    {/* /.features-tab-two__content-list */}
                  </div>
                  {/* /.features-tab-two__content */}
                </div>
                {/* /.col-lg-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.tab-pane */}
            <div
              role="tabpanel"
              className="tab-pane show  animated fadeInUp"
              id="features-tab-2"
            >
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <img
                    src="images\resources\tab-2-1.jpg"
                    className="features-tab-two__image"
                    alt="Awesome Image"
                  />
                </div>
                {/* /.col-lg-6 */}
                <div className="col-lg-6">
                  <div className="features-tab-two__content">
                    <p className="features-tab-two__text large-paragraph">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form injected humour or randomised words which don't
                      look even believable. If you are going to use a passage of
                      Lorem Ipsum, you need to be sure there isn't anything
                      embarrassing hidden in the middle of text.
                    </p>
                    {/* /.features-tab-two__text large-paragraph */}
                    <ul className="features-tab-two__content-list">
                      <li className="features-tab-two__content-list-item">
                        <i className="fa fa-check" />
                        Highly trained in administrative tasks
                      </li>
                      {/* /.features-tab-two__content-list-item */}
                      <li className="features-tab-two__content-list-item">
                        <i className="fa fa-check" />
                        Professionally managed and supported
                      </li>
                      {/* /.features-tab-two__content-list-item */}
                      <li className="features-tab-two__content-list-item">
                        <i className="fa fa-check" />
                        Proficient in Google, and most popular productivity
                        suites
                      </li>
                      {/* /.features-tab-two__content-list-item */}
                    </ul>
                    {/* /.features-tab-two__content-list */}
                  </div>
                  {/* /.features-tab-two__content */}
                </div>
                {/* /.col-lg-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.tab-pane */}
            <div
              role="tabpanel"
              className="tab-pane show  animated fadeInUp"
              id="features-tab-3"
            >
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <img
                    src="images\resources\tab-2-1.jpg"
                    className="features-tab-two__image"
                    alt="Awesome Image"
                  />
                </div>
                {/* /.col-lg-6 */}
                <div className="col-lg-6">
                  <div className="features-tab-two__content">
                    <p className="features-tab-two__text large-paragraph">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form injected humour or randomised words which don't
                      look even believable. If you are going to use a passage of
                      Lorem Ipsum, you need to be sure there isn't anything
                      embarrassing hidden in the middle of text.
                    </p>
                    {/* /.features-tab-two__text large-paragraph */}
                    <ul className="features-tab-two__content-list">
                      <li className="features-tab-two__content-list-item">
                        <i className="fa fa-check" />
                        Highly trained in administrative tasks
                      </li>
                      {/* /.features-tab-two__content-list-item */}
                      <li className="features-tab-two__content-list-item">
                        <i className="fa fa-check" />
                        Professionally managed and supported
                      </li>
                      {/* /.features-tab-two__content-list-item */}
                      <li className="features-tab-two__content-list-item">
                        <i className="fa fa-check" />
                        Proficient in Google, and most popular productivity
                        suites
                      </li>
                      {/* /.features-tab-two__content-list-item */}
                    </ul>
                    {/* /.features-tab-two__content-list */}
                  </div>
                  {/* /.features-tab-two__content */}
                </div>
                {/* /.col-lg-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.tab-pane */}
          </div>
          {/* /.tab-content */}
        </div>
        {/* /.container */}
      </section>
      {/* /.features-tab-two */}
      <div>
        <section className="comparison-table why-choose-page">
          <div className="container">
            <div className="sec-title text-center">
              <span className="tag-line ">Comparison</span>
              <h2 className="title-line">
                Compare inston to the <br /> alternatives.
              </h2>
              <span className="line-block" />
            </div>
            {/* /.sec-title */}
            <div className="table-responsive">
              <table className="comparison-table__table">
                <thead>
                  <tr>
                    <th>Concern</th>
                    <th>Inston</th>
                    <th>Hire Full-Time</th>
                    <th>Outsourced Tasks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cost</td>
                    <td>$398</td>
                    <td>$4,000+/mo</td>
                    <td>$200 - $1,000</td>
                  </tr>
                  <tr>
                    <td>Time to Start</td>
                    <td>Immediate</td>
                    <td>4 - 8 weeks</td>
                    <td>1 Week</td>
                  </tr>
                  <tr>
                    <td>Replacement Issue</td>
                    <td>Easy: one email</td>
                    <td>Difficult: New Hire</td>
                    <td>Difficult: New Hire</td>
                  </tr>
                  <tr>
                    <td>Training</td>
                    <td>Professionally done</td>
                    <td>2 - 4 weeks</td>
                    <td>Spotty</td>
                  </tr>
                  <tr>
                    <td>Expertise</td>
                    <td>Diverse Skillsets</td>
                    <td>Specific to 1 Person</td>
                    <td>Specific to Contractor</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.table-responsive */}
          </div>
          {/* /.container */}
        </section>
        {/* /.comparison-table */}
        <section className="features-two thm-black-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="features-two__content">
                  <div className="sec-title text-left">
                    <span className="tag-line ">Awesome people</span>
                    <h2 className="title-line light">
                      Did we mention our <br /> VAs are also pretty <br /> cool
                      people?.
                    </h2>
                    <span className="line-block line-block-two" />
                  </div>
                  {/* /.sec-title */}
                  <p className="features-two__text">
                    We hire the type of people that we'd want to be around every
                    day: smart, outgoing and ambitious. We want to make sure we
                    connect you to a talented VA that does top quality work but
                    also to someone with an awesome personality that you'll get
                    along with. You might be surprised that some of our VAs are
                    entrepreneurs themselves; from owning a cupcake business to
                    writing a fashion blog, you're working with some really
                    talented individuals.
                  </p>
                  {/* /.features-two__text */}
                </div>
                {/* /.features-two__content */}
              </div>
              {/* /.col-lg-6 */}
              <div className="col-xl-6">
                <div className="features-two__box">
                  <div className="row no-gutters">
                    <div className="col-lg-6 d-flex ">
                      <h3 className="features-two__box-title thm-base-bg align-items-center justify-content-center d-flex text-center">
                        Smart and highly <br /> skilled people
                      </h3>
                      {/* /.features-two__box-title */}
                    </div>
                    {/* /.col-lg-6 */}
                    <div className="col-lg-6">
                      <img
                        src="images\resources\people-1-1.jpg"
                        alt="Awesome Image"
                      />
                    </div>
                    {/* /.col-lg-6 */}
                  </div>
                  {/* /.row */}
                  <div className="row flex-row-reverse no-gutters">
                    <div className="col-lg-6 d-flex">
                      <h3 className="features-two__box-title thm-base-bg align-items-center justify-content-center d-flex text-center">
                        Ambitious, looking to <br />
                        anticipate needs
                      </h3>
                      {/* /.features-two__box-title */}
                    </div>
                    {/* /.col-lg-6 */}
                    <div className="col-lg-6">
                      <img
                        src="images\resources\people-1-2.jpg"
                        alt="Awesome Image"
                      />
                    </div>
                    {/* /.col-lg-6 */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.features-two__box */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /.features-two thm-black-bg */}
        <section className="map-style-one">
          {/* <img
            src="images\resources\map-shape-1-1.png"
            alt="Awesome Image"
            className="map-shape-1-1"
          />
          <img
            src="images\resources\map-shape-1-2.png"
            alt="Awesome Image"
            className="map-shape-1-2"
          />
          <img
            src="images\resources\map-shape-1-3.png"
            alt="Awesome Image"
            className="map-shape-1-3"
          />
          <img
            src="images\resources\map-shape-1-4.png"
            alt="Awesome Image"
            className="map-shape-1-4"
          />
          <img
            src="images\resources\map-shape-1-5.png"
            alt="Awesome Image"
            className="map-shape-1-5"
          /> */}
          <div className="container text-center">
            <div className="sec-title text-center">
              <span className="tag-line ">Superhumans</span>
              <h2 className="title-line ">
                We only hire the best of the best <br /> assistants on the
                planet.
              </h2>
              <span className="line-block " />
            </div>
            {/* /.sec-title */}
            <div className="map-blocks text-center">
              <img
                src="images\resources\map-1-1.png"
                className="map-image"
                alt="Awesome Image"
              />
              <div className="map-person-1">
                <img src="images\resources\map-p-1-1.jpg" alt="Awesome Image" />
              </div>
              {/* /.map-person person-1 */}
              <div className="map-person-2">
                <img src="images\resources\map-p-1-2.jpg" alt="Awesome Image" />
              </div>
              {/* /.map-person person-1 */}
              <div className="map-person-3">
                <img src="images\resources\map-p-1-3.jpg" alt="Awesome Image" />
              </div>
              {/* /.map-person person-1 */}
              <div className="map-person-4">
                <img src="images\resources\map-p-1-4.jpg" alt="Awesome Image" />
              </div>
              {/* /.map-person person-1 */}
              <div className="map-person-5">
                <img src="images\resources\map-p-1-5.jpg" alt="Awesome Image" />
              </div>
              {/* /.map-person person-1 */}
              <div className="map-person-6">
                <img src="images\resources\map-p-1-6.jpg" alt="Awesome Image" />
              </div>
              {/* /.map-person person-1 */}
              <div className="map-person-7">
                <img src="images\resources\map-p-1-7.jpg" alt="Awesome Image" />
              </div>
              {/* /.map-person person-1 */}
              <div className="map-person-8">
                <img src="images\resources\map-p-1-8.jpg" alt="Awesome Image" />
              </div>
              {/* /.map-person person-1 */}
            </div>
            {/* /.map-blocks */}
            <div className="button-block text-center">
              <a className="thm-btn" href="#">
                Request a Consultation
              </a>
              <span className="btn-tagline">
                Looking for expert VA <i className="inston-icon-share" />
              </span>
            </div>
            {/* /.btn-block */}
          </div>
          {/* /.container */}
        </section>
        {/* /.map-style-one */}
      </div>
    </PageLayouts>

    <style jsx global>
      {`
        input[type="checkbox"] {
          width: 16px; /*Desired width*/
          height: 16px; /*Desired height*/
        }
      `}
    </style>
  </React.Fragment>
);

export default Whyvira;
