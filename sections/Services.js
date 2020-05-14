import React from "react";

const Services = () => (
  <React.Fragment>
    <section className="features-tab-one thm-gray-bg">
      <div className="container">
        <div className="sec-title text-center">
          <h2 className="title-line ">
            We can help with both your work <br /> and personal life tasks.
          </h2>
          <span className="line-block" />
        </div>
        {/* /.sec-title */}
        <ul className="nav nav-tabs features-tab-one__list" role="tablist">
          <li className="nav-item features-tab-one__list-item">
            <a
              className="nav-link active features-tab-one__list-link"
              href="#features-tab-1"
              role="tab"
              data-toggle="tab"
            >
              <i
                className="fas fa-search display-1 text-warning bg-white p-3 "
                style={{ boredrRadius: "50%" }}
              />
              <span className="features-tab-one__list-title">Research</span>
            </a>
          </li>
          <li className="nav-item features-tab-one__list-item">
            <a
              className="nav-link features-tab-one__list-link"
              href="#features-tab-2"
              role="tab"
              data-toggle="tab"
            >
              <i
                className="fas fa-money-bill-wave display-1 text-warning bg-white p-3 "
                style={{ boredrRadius: "50%" }}
              />

              <span className="features-tab-one__list-title">Expenses</span>
            </a>
          </li>
          <li className="nav-item features-tab-one__list-item">
            <a
              className="nav-link features-tab-one__list-link"
              href="#features-tab-3"
              role="tab"
              data-toggle="tab"
            >
              <i
                className="fas fa-phone-volume display-1 text-warning bg-white p-3 "
                style={{ boredrRadius: "50%" }}
              />

              <span className="features-tab-one__list-title">
                Call Answering
              </span>
            </a>
          </li>
          <li className="nav-item features-tab-one__list-item">
            <a
              className="nav-link features-tab-one__list-link"
              href="#features-tab-4"
              role="tab"
              data-toggle="tab"
            >
              <i
                className="fas fa-search display-1 text-warning bg-white p-3 fab fa-facebook-square"
                style={{ boredrRadius: "50%" }}
              />
              <span className="features-tab-one__list-title">Social Media</span>
            </a>
          </li>
          <li className="nav-item features-tab-one__list-item">
            <a
              className="nav-link features-tab-one__list-link"
              href="#features-tab-5"
              role="tab"
              data-toggle="tab"
            >
              <i
                className="far fa-clock display-1 text-warning bg-white p-3"
                style={{ boredrRadius: "50%" }}
              />
              <span className="features-tab-one__list-title">Scheduling</span>
            </a>
          </li>
          <li className="nav-item features-tab-one__list-item">
            <a
              className="nav-link features-tab-one__list-link"
              href="#features-tab-6"
              role="tab"
              data-toggle="tab"
            >
              <i
                className="far fa-clock display-1 text-warning bg-white p-3 "
                style={{ boredrRadius: "50%" }}
              />
              <span className="features-tab-one__list-title">Personal</span>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            role="tabpanel"
            className="tab-pane show active  animated fadeInUp"
            id="features-tab-1"
          >
            <img
              src="images\resources\tab-1-1.jpg"
              alt="Awesome Image"
              className="features-tab-one__image"
            />
            <div
              className="features-tab-one__content"
              style={{ background: "#FBD043" }}
            >
              <h3
                className="features-tab-one__title"
                style={{ color: "#053B81" }}
              >
                Call answering service is very easy way to inform your clients.
              </h3>
              {/* /.features-tab-one__title */}
              <p
                className="features-tab-one__text"
                style={{ color: "#053B81" }}
              >
                There’s no need for full time assistant for your business,
                simply are many variations of passages of orem Ipsum available.
              </p>
              {/* /.features-tab-one__text */}
            </div>
            {/* /.features-tab-one__content */}
          </div>
          {/* /.tab-pane */}
          <div
            role="tabpanel"
            className="tab-pane show  animated fadeInUp"
            id="features-tab-2"
          >
            <img
              src="images\resources\tab-1-2.jpg"
              alt="Awesome Image"
              className="features-tab-one__image"
            />
            <div className="features-tab-one__content">
              <h3 className="features-tab-one__title">
                Call answering service is very easy way to inform your clients.
              </h3>
              {/* /.features-tab-one__title */}
              <p className="features-tab-one__text">
                There’s no need for full time assistant for your business,
                simply are many variations of passages of orem Ipsum available.
              </p>
              {/* /.features-tab-one__text */}
            </div>
            {/* /.features-tab-one__content */}
          </div>
          {/* /.tab-pane */}
          <div
            role="tabpanel"
            className="tab-pane show  animated fadeInUp"
            id="features-tab-3"
          >
            <img
              src="images\resources\tab-1-1.jpg"
              alt="Awesome Image"
              className="features-tab-one__image"
            />
            <div className="features-tab-one__content">
              <h3 className="features-tab-one__title">
                Call answering service is very easy way to inform your clients.
              </h3>
              {/* /.features-tab-one__title */}
              <p className="features-tab-one__text">
                There’s no need for full time assistant for your business,
                simply are many variations of passages of orem Ipsum available.
              </p>
              {/* /.features-tab-one__text */}
            </div>
            {/* /.features-tab-one__content */}
          </div>
          {/* /.tab-pane */}
          <div
            role="tabpanel"
            className="tab-pane show  animated fadeInUp"
            id="features-tab-4"
          >
            <img
              src="images\resources\tab-1-2.jpg"
              alt="Awesome Image"
              className="features-tab-one__image"
            />
            <div className="features-tab-one__content">
              <h3 className="features-tab-one__title">
                Call answering service is very easy way to inform your clients.
              </h3>
              {/* /.features-tab-one__title */}
              <p className="features-tab-one__text">
                There’s no need for full time assistant for your business,
                simply are many variations of passages of orem Ipsum available.
              </p>
              {/* /.features-tab-one__text */}
            </div>
            {/* /.features-tab-one__content */}
          </div>
          {/* /.tab-pane */}
          <div
            role="tabpanel"
            className="tab-pane show  animated fadeInUp"
            id="features-tab-5"
          >
            <img
              src="images\resources\tab-1-1.jpg"
              alt="Awesome Image"
              className="features-tab-one__image"
            />
            <div className="features-tab-one__content">
              <h3 className="features-tab-one__title">
                Call answering service is very easy way to inform your clients.
              </h3>
              {/* /.features-tab-one__title */}
              <p className="features-tab-one__text">
                There’s no need for full time assistant for your business,
                simply are many variations of passages of orem Ipsum available.
              </p>
              {/* /.features-tab-one__text */}
            </div>
            {/* /.features-tab-one__content */}
          </div>
          {/* /.tab-pane */}
          <div
            role="tabpanel"
            className="tab-pane show  animated fadeInUp"
            id="features-tab-6"
          >
            <img
              src="images\resources\tab-1-2.jpg"
              alt="Awesome Image"
              className="features-tab-one__image"
            />
            <div className="features-tab-one__content">
              <h3 className="features-tab-one__title">
                Call answering service is very easy way to inform your clients.
              </h3>
              {/* /.features-tab-one__title */}
              <p className="features-tab-one__text">
                There’s no need for full time assistant for your business,
                simply are many variations of passages of orem Ipsum available.
              </p>
              {/* /.features-tab-one__text */}
            </div>
            {/* /.features-tab-one__content */}
          </div>
          {/* /.tab-pane */}
        </div>
        {/* /.tab-content */}
      </div>
      {/* /.container */}
    </section>
    {/* /.features-tab-one */}
  </React.Fragment>
);

export default Services;
