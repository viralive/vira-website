import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import HomeLayouts from "../Layouts/HomeLayouts";

const Faq = () => (
  <React.Fragment>
    <HomeLayouts>
      <section className="inner-banner ">
        <div className="container flex-column-reverse d-flex justify-content-center align-items-center">
          <h2 className="inner-banner__title">FAQ</h2>
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

      <section className="pb-5 ">
        <div className="text-center bg-dark p-3">
          <h3 className="text-white">Not seeing any question here?</h3>

          <button className="btn btn-primary btn-lg">Ask</button>
        </div>
      </section>
    </HomeLayouts>

    <style jsx global>
      {`
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
