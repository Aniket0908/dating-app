import img from "./aboutimg.jpg";

function About() {
  return (
    <>
      <div id="preloader"></div>

      <div style={{ backgroundImage: `url(${img})` }}>
        <section id="about">
          <div className="container">
            <section className="section-header text-center mb-5 pb-2">
              <h3 style={{ color: "#95403a" }}>About Us</h3>
              <div>
                <p>
                  An online dating application app aim to simplify and speed up
                  the process of sifting through potential dating partners,
                  chatting, flirting, and potentially meeting or becoming
                  romantically involved over traditional online dating services.
                </p>
                <div className="row about-cols">
                  <div className="col-md-4 wow fadeInUp">
                    <div className="about-col">
                      <div className="img">
                        <img
                          src="img/about-plan.webp"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="icon">
                          <i className="ion-ios-speedometer-outline"></i>
                        </div>
                      </div>
                      <h2 className="title">
                        <a style={{ color: "#95403a" }} href="#">
                          We Keep It Real
                        </a>
                      </h2>
                      <p className="text-center">
                        Life isn’t a fairytale, so we make sure #Dating reflects
                        reality. Break-ups happen, there’s plenty of single moms
                        and dads, body insecurities are very real… Whatever your
                        story is, we’re right there with you.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="about-col">
                      <div className="img">
                        <img
                          src="img/about-plan.webp"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="icon">
                          <i className="ion-ios-list-outline"></i>
                        </div>
                      </div>
                      <h2 className="title">
                        <a style={{ color: "#95403a" }} href="#">
                          We keep it warm
                        </a>
                      </h2>
                      <p className="text-center">
                        You know that fuzzy feeling you get from a genuine
                        connection with someone? That’s what we’re all about!
                        The best way of getting love is to give it, so expect to
                        get lots of love from us.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="about-col">
                      <div className="img">
                        <img
                          src="img/about-vision.webp"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="icon">
                          <i className="ion-ios-eye-outline"></i>
                        </div>
                      </div>
                      <h2 className="title">
                        <a style={{ color: "#95403a" }} href="#">
                          We empower
                        </a>
                      </h2>
                      <p className="text-center">
                        #Dating isn’t just a dating app. We’re the cheerleader
                        on the side and the wise old owl all at the same time.
                        And we’re here to arm you with advice, tips and insight
                        to help you date your way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="call-to-action" className="wow fadeIn">
              <div className="container text-center">
                <h3 style={{ color: "#95403a" }}>The team behind #Dating</h3>
                <p className="text-center">
                  We’re not a huge corporation – just a group of people like
                  you. Our team is mostly women coming from more than 20
                  countries, so we get how challenging dating can be! That’s
                  what motivated us to create a truly game-changing dating app.{" "}
                </p>
                <a className="cta-btn text-decoration-none" href="about.html">
                  Get Started
                </a>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
export default About;
