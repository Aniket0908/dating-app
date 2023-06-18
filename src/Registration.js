import img from "./bg2.jpg";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
function Registration() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    age: "",
  });

  let handleUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };
  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlerMobileAction = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
  };

  let handleAgeAction = (e) => {
    let newuser = { ...user, age: e.target.value };
    setUser(newuser);
  };

  let registerAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      let url = `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}&age=${user.age}`;
      let res = await fetch(url);
      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }
      let newuser = {
        username: "",
        password: "",
        email: "",
        mobile: "",
        age: "",
      };
      setUser(newuser);
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
      <div
        className="img-fluid"
        style={{
          backgroundImage: `url(${img})`,
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div
            className="col-sm-12 col-md-4 rounded-4 shadow-lg px-4"
            style={{
              backgroundImage: "url('')",
              backgroundRepeat: "norepeat",
              backgroundSize: "cover",
              fontFamily:
                "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            }}
          >
            <h1 className="text-center">
              <span>Registration Form</span>
            </h1>
            <form
              ref={formRef}
              className="form-floating needs-validation"
              action=""
            >
              <div className="mb-3">
                <label className="form-label">Enter Name</label>
                <input
                  type="text"
                  required
                  pattern="^[a-zA-Z]{3,15}$"
                  className="form-control"
                  placeholder="username"
                  value={user.username}
                  onChange={handleUsernameAction}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Enter Email</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  id="email-input"
                  placeholder="name@example.com"
                  value={user.email}
                  onChange={handlerEmailAction}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Enter Mobile Number</label>
                <input
                  type="phone"
                  className="form-control"
                  required
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  id="phone-input"
                  placeholder="mob no"
                  value={user.mobile}
                  onChange={handlerMobileAction}
                />
                <span id="phone-error" className="text-danger"></span>
              </div>
              <div className="mb-3">
                <label className="form-label">Enter Password</label>
                <input
                  type="password"
                  className="form-control"
                  required
                  pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  id="passwordInput"
                  placeholder="Password"
                  value={user.password}
                  onChange={handlerPasswordAction}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Enter Age</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  id="ageInput"
                  placeholder="Age"
                  value={user.age}
                  onChange={handleAgeAction}
                />
              </div>

              <div className="d-grid gap-2 mt-4">
                <button
                  type="submit"
                  value="register"
                  className="btn btn-primary"
                  onClick={registerAction}
                >
                  Register Now
                </button>
              </div>
            </form>
            <div className="justify-content-center mb-5 mt-2 align-items-center w-100 text-center">
              Already have an account? <br />
              <Link to={"/login"}>Login</Link>
            </div>
            {isSuccess && <div className="alert alert-success">Success</div>}
            {isError && <div className="alert alert-danger">Error</div>}
          </div>
        </div>
      </div>
    </>
  );
}
export default Registration;
