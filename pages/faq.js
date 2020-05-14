import React from "react";
import Head from "next/head";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
<script
  defer
  src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
></script>;
import PageLayouts from "../Layouts/PageLayouts";

const Faq = () => (
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
          <h2 className="inner-banner__title">Frequently Asked Questions</h2>
          {/* /.inner-banner__title */}
          <ul className="thm-breadcrumb">
            <li className="thm-breadcrumb__item">
              <a href="#" className="thm-breadcrumb__link">
                Home
              </a>
            </li>
            {/* /.thm-breadcrumb__item */}
            <li className="thm-breadcrumb__item current">
              <a href="#" className="thm-breadcrumb__link">
                FAQ
              </a>
            </li>
            {/* /.thm-breadcrumb__item */}
          </ul>
          {/* /.thm-breadcrumb */}
        </div>
        {/* /.container */}
      </section>

      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Exercitation in fugiat est ut ad ea cupidatat ut in
                      cupidatat occaecat ut occaecat consequat est minim minim
                      esse tempor laborum consequat esse adipisicing eu
                      reprehenderit enim.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Is free will real or just an illusion?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="col-md-6 col-lg-6">
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Exercitation in fugiat est ut ad ea cupidatat ut in
                      cupidatat occaecat ut occaecat consequat est minim minim
                      esse tempor laborum consequat esse adipisicing eu
                      reprehenderit enim.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Is free will real or just an illusion?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5 text-center d-flex justify-content-center align-items-center ">
        <div className="bg-lightblue boxwidth">
          <img
            src="https://image.flaticon.com/icons/svg/2462/2462938.svg"
            className="img-fluid pb-2"
            alt="comment-icon"
            style={{ width: 50 }}
          />

          <h4 className="text-dark pb-2">Not seeing your question here?</h4>

          <button className="btn btn-primary btn-lg">Ask us directly?</button>
        </div>
      </section>
    </PageLayouts>
    <style jsx global>
      {`
        .bg-lightblue {
          background: #eff8fd;
        }

        .boxwidth {
          padding: 25px;
        }
        /**
       * ----------------------------------------------
       * Demo styles
       * ----------------------------------------------
       **/
        .accordion {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 2px;
        }

        .accordion__item + .accordion__item {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .accordion__button {
          background-color: #f4f4f4;
          color: #444;
          cursor: pointer;
          padding: 18px;
          width: 100%;
          text-align: left;
          border: none;
        }

        .accordion__button:hover {
          background-color: #ddd;
        }

        .accordion__button:before {
          display: inline-block;
          content: "";
          height: 10px;
          width: 10px;
          margin-right: 12px;
          border-bottom: 2px solid currentColor;
          border-right: 2px solid currentColor;
          transform: rotate(-45deg);
        }

        .accordion__button[aria-expanded="true"]::before,
        .accordion__button[aria-selected="true"]::before {
          transform: rotate(45deg);
        }

        .accordion__panel {
          padding: 20px;
          animation: fadein 0.35s ease-in;
        }

        /* -------------------------------------------------- */
        /* ---------------- Animation part ------------------ */
        /* -------------------------------------------------- */

        @keyframes fadein {
          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }
        }
      `}
    </style>
  </React.Fragment>
);

export default Faq;
