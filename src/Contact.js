import { useRef, useState } from "react";

function Contact() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    feedback: "",
  });

  let handleChnageFirstnameAction = (e) => {
    let newContact = { ...contact, firstname: e.target.value };
    setContact(newContact);
  };

  let handleChangeLastnameAction = (e) => {
    // console.log(e.target);
    let newContact = { ...contact, lastname: e.target.value };
    setContact(newContact);
  };
  let handleChangeEmailAction = (e) => {
    // console.log(e.target);
    let newContact = { ...contact, email: e.target.value };
    setContact(newContact);
  };
  let handleChangeMobileAction = (e) => {
    // console.log(e.target);
    let newContact = { ...contact, mobile: e.target.value };
    setContact(newContact);
  };
  let handleChangeFeedbackAction = (e) => {
    // console.log(e.target);
    let newContact = { ...contact, feedback: e.target.value };
    setContact(newContact);
  };

  let addContactAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      let url = `http://localhost:4000/addcontact?firstname=${contact.firstname}&lastname=${contact.lastname}&email=${contact.email}&mobile=${contact.mobile}&feedback=${contact.feedback}`;
      let res = await fetch(url);
      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }
      let newContact = {
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        feedback: "",
      };
      setContact(newContact);
      formRef.current.classList.remove("was-validated");
      alert("Registration Succesfull");
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 2000);
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-bg">
          <h3>Get in Touch with Us</h3>
          <h2>contact us</h2>
          <div className="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            iste facilis quos impedit fuga nobis modi debitis laboriosam velit
            reiciendis quisquam alias corporis, maxime enim, optio ab dolorum
            sequi qui.
          </p>
        </div>

        <div className="contact-body">
          <div className="contact-info">
            <div>
              <span>
                <i className="fas fa-mobile-alt"></i>
              </span>
              <span>Phone No.</span>
              <span className="text">9970853276</span>
            </div>
            <div>
              <span>
                <i className="fas fa-envelope-open"></i>
              </span>
              <span>E-mail</span>
              <span className="text">aniketraut@Teamo.com</span>
            </div>
            <div>
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span>Address</span>
              <span className="text">221B, Baker Street</span>
            </div>
            <div>
              <span>
                <i className="fas fa-clock"></i>
              </span>
              <span>Opening Hours</span>
              <span className="text">24*7</span>
            </div>
          </div>

          <div className="contact-form">
            <form ref={formRef} className="form-floating needs-validation">
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={contact.firstname}
                  onChange={handleChnageFirstnameAction}
                  required
                  pattern="^[a-zA-Z]{3,15}$"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  value={contact.lastname}
                  onChange={handleChangeLastnameAction}
                  required
                  pattern="^[a-zA-Z]{3,15}$"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  value={contact.email}
                  onChange={handleChangeEmailAction}
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  value={contact.mobile}
                  onChange={handleChangeMobileAction}
                  required
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                />
              </div>
              <textarea
                rows="5"
                placeholder="Message"
                value={contact.feedback}
                onChange={handleChangeFeedbackAction}
                className="form-control"
                required
              ></textarea>
              <input
                type="button"
                className="send-btn"
                onClick={addContactAction}
                value="send message"
              />
            </form>

            <div>
              <img src="./image/contact-png.png" alt="" />
            </div>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8597825275265!2d73.05167127487232!3d19.025899382168433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)!5e0!3m2!1sen!2sin!4v1686415735556!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-footer">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-youtube"></a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
