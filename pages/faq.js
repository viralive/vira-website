import React from "react";
import HomeLayouts from "../Layouts/HomeLayouts";

const Faq = () => (
  <React.Fragment>
    <HomeLayouts>
      <section className="faq-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="faq-one__image-block">
                <img
                  src="images\resources\fun-fact-1-1.jpg"
                  alt="Awesome Image"
                />
                <div className="faq-one__funfact">
                  <div className="faq-one__funfact__single">
                    <h3 className="faq-one__funfact__title">600</h3>
                    {/* /.faq-one__funfact__title */}
                    <p className="faq-one__funfact__text">Happy Clients</p>
                    {/* /.faq-one__funfact__text */}
                  </div>
                  {/* /.faq-one__funfact__single */}
                  <div className="faq-one__funfact__single">
                    <h3 className="faq-one__funfact__title">990</h3>
                    {/* /.faq-one__funfact__title */}
                    <p className="faq-one__funfact__text">Hours Worked</p>
                    {/* /.faq-one__funfact__text */}
                  </div>
                  {/* /.faq-one__funfact__single */}
                </div>
                {/* /.faq-one__funfact */}
              </div>
              {/* /.faq-one__image-block */}
            </div>
            {/* /.col-lg-6 */}
            <div className="col-xl-6">
              <div className="faq-one__content">
                <div className="sec-title text-left">
                  <span className="tag-line">Introduction</span>
                  <h2 className="title-line">
                    Welcome to the virtual <br /> assistant platform.
                  </h2>
                  <span className="line-block line-block-two" />
                </div>
                {/* /.sec-title */}
                <p className="faq-one__text">
                  Simply are many variations of passages of orem Ipsum
                  available, but the majority have suffered altertion in some
                  form by injected humour or randomised words which don't look
                  even slightly believab you are going to use a passage.{" "}
                </p>
                {/* /.faq-one__text */}
                <div className="accrodion-grp" data-grp-name="faq-accrodion">
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Is there a setup fee?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Lorem Ipsum is simply dummy text of not the print
                          typesetting industry has been the industrys standard
                          dummy.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div className="accrodion ">
                    <div className="accrodion-title">
                      <h4>What if i want a different assistant?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Lorem Ipsum is simply dummy text of not the print
                          typesetting industry has been the industrys standard
                          dummy.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Do i get a dedicated assistant?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Lorem Ipsum is simply dummy text of not the print
                          typesetting industry has been the industrys standard
                          dummy.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                </div>
              </div>
              {/* /.faq-one__content */}
            </div>
            {/* /.col-lg-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.faq-one */}
    </HomeLayouts>
  </React.Fragment>
);

export default Faq;
