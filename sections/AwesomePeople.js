import React from "react";

const AwesomePeople = () => (
  <React.Fragment>
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
                connect you to a talented VA that does top quality work but also
                to someone with an awesome personality that you'll get along
                with. You might be surprised that some of our VAs are
                entrepreneurs themselves; from owning a cupcake business to
                writing a fashion blog, you're working with some really talented
                individuals.
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
  </React.Fragment>
);

export default AwesomePeople;
