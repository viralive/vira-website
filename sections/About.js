const About = () => (
  <React.Fragment>
    <section className="about-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-one__content">
              <div className="sec-title text-left">
                <span className="tag-line ">Secret weapon</span>
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
                Inston client, you get your very own Virtual Assistant (VA) — a
                smart, highly trained US-based point person who works remotely
                as your right hand and left brain. You delegate a task and your
                VA is on it.
              </p>
              {/* /.about-one__text */}
              <a
                href="#"
                className="thm-btn about-one__btn"
                style={{ background: "#053b81" }}
              >
                Get Started now
              </a>
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
            <div className="about-one__video">
              <img src="images\resources\video1-1.jpg" alt="Awesome Image" />
              <a
                href="#"
                className="about-one__video-link hvr-pulse"
                style={{ background: "#053B81" }}
              >
                <i className="fa fa-play" style={{ color: "#fff" }} />
              </a>
            </div>
            {/* /.about-one__video */}
          </div>
          {/* /.col-lg-6 */}
          <div className="col-lg-3">
            <div className="about-one__single">
              <i
                class="fas fa-graduation-cap display-4"
                style={{ color: "#FBD043" }}
              ></i>
              <h3 className="about-one__title">
                <a href="#">
                  Highly Educated <br /> Assistants
                </a>
              </h3>
              {/* /.about-one__title */}
            </div>
            {/* /.about-one__single */}
          </div>
          {/* /.col-lg-3 */}
          <div className="col-lg-3">
            <div className="about-one__single">
              <i
                class="fas fa-phone-volume display-4"
                style={{ color: "#FBD043" }}
              ></i>
              <h3 className="about-one__title">
                <a href="#">
                  Contact Us <br /> Anytime 24/7
                </a>
              </h3>
              {/* /.about-one__title */}
            </div>
            {/* /.about-one__single */}
          </div>
          {/* /.col-lg-3 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /.about-one */}
  </React.Fragment>
);

export default About;
