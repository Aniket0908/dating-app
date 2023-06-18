import image1 from "./homeback.jpg";
import card1 from "./card1.jpg";
import card2 from "./card2.jpg";
import card3 from "./card3.jpg";
import image2 from "./playstore2.jpg";
import badge from "./google-play-badge.png";
function HomePage() {
  return (
    <>
      <main>
        <div
          className="mb-4 img-fluid justify-content-center text-center align-items-center"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            height: "100vh",

            display: "flex",
            width: "100vw",
          }}
        >
          <div className="ms-3 py-4" style={{ flex: "1 " }}>
            <h1 style={{ color: "white" }}>
              Meet beautiful singles all over the world.
            </h1>
            <h3 className="mt-4" style={{ color: "white" }}>
              Browse 4 Million Foreign Singles on the #1 International Dating
              Site.
            </h3>
            <input
              className="btn btn-outline-light mt-2"
              type="button"
              value="Find your match"
            />
          </div>
          <div style={{ flex: "1" }}></div>
          <div>
            <div>review</div>
            <div>rest</div>
          </div>
        </div>
        <hr />
        <div className="row mb-4 bg-dark-subtle">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="center py-6">
              <h2 className="text-center" style={{ color: "#95403a" }}>
                Broaden your search radius.
              </h2>
              <p className="text-center">
                Tired of the local dating pool? You're ready for something more.
                Something great.
              </p>
              <p className="text-center text-secondary">
                Meet someone exceptional. Someone like you, on
                InternationalCupid! There are plenty of places online to find
                romance, but few that support your search for love in this many
                countries. InternationalCupid makes that possible. Join now.
              </p>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <h3 className="text-center" style={{ color: "#95403a" }}>
            Members who have found love
          </h3>
          <div className="col-md-9 col-sm-12">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="card mb-3">
                  <img src={card1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">
                      "I joined Te Amo to meet people from other countries. What
                      I like about Te Amo is that you can meet people from a
                      specific city or country and its a great platform. "
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-4">
                <div className="card mb-3">
                  <img src={card2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">
                      "I met a wonderful woman from Bulgaria. I travelled to see
                      her six months after meeting her on Te Amo and she was
                      everything I dreamed of; we are now together!""
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-4">
                <div className="card mb-3">
                  <img src={card3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">
                      "The relationship began with a brief message and then we
                      exchanged phone no. The first date was great! I felt like
                      happy, he traveled to meet me and treated me like a
                      queen."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container-fluid bg-dark-subtle mb-3 align-items-center text-center">
          <div className="mb-0 py-2">
            <h3 className="fw-" style={{ color: "#95403a" }}>
              How It Works
            </h3>
            <h5 className="fw-bold">
              Get started on InternationalCupid.com today in 3 simple steps:
            </h5>
          </div>
          <div
            className="row d-flex align-items-center text-center"
            style={{ height: "auto" }}
          >
            <div className="col-md-4 col-sm-12 text-center">
              <h4 style={{ color: "#95403a" }}>Step 1:</h4>
              <h5>Create A Profile</h5>
              <h6 className="text-secondary">
                Create your profile in seconds with our easy sign-up. Don't
                forget to add a photo!
              </h6>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <h4 style={{ color: "#95403a" }}>Step 2:</h4>
              <h5>Browse Photos</h5>
              <h6 className="text-secondary">
                Search our large member base with ease, with a range of
                preferences and settings.
              </h6>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <h4 style={{ color: "#95403a" }}>Step 3:</h4>
              <h5>Start Communicating</h5>
              <h6 className="text-secondary">
                Send a message or interest to start communicating with members.
                It's your time to shine.
              </h6>
            </div>
          </div>
        </div>
        <hr />
        <div
          className="img-fluid shadow relative"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            backgroundImage: `url(${image2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <div
            className=""
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", height: "100vh" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "100%" }}
            >
              <div className="d-flex align-items-center justify-content-center"></div>
              <h2 style={{ color: "white" }}>download now</h2>
              <a href="">
                <img
                  style={{ height: "150", width: "300" }}
                  src={badge}
                  alt="playstore"
                />
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#4a3635" }}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Information
                </h6>
                <p>
                  Online dating, also known as Internet dating, Virtual dating,
                  or Mobile app dating, is a method used by people with a goal
                  of searching for and interacting with potential romantic or
                  sexual partners, via the internet.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Products
                </h6>
                <p>
                  <a className="text-white">Video chat</a>
                </p>
                <p>
                  <a className="text-white">Play Music</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i> Kharghar,Mumbai
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> aniketraut@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> 9970853276
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> 7625452545
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Follow us
                </h6>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#3b5998" }}
                  href="https://www.facebook.com/"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#55acee" }}
                  href="https://twitter.com/"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#dd4b39" }}
                  href="https://discord.com/"
                  role="button"
                >
                  <i className="fa-brands fa-discord"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="https://www.instagram.com/"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#0082ca" }}
                  href="https://www.linkedin.com"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#eef660" }}
                  href="https://www.snapchat.com/"
                  role="button"
                >
                  <i
                    className="fa-brands fa-snapchat"
                    style={{ color: "#000000" }}
                  ></i>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 TeAmo.com: All rights reserved.
        </div>
      </footer>
    </>
  );
}
export default HomePage;
