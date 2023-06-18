import img1 from "./bg2.jpg";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let loginAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND :: ...
      let url = `http://localhost:4000/loginbypost`;
      let data = { email: user.email, password: user.password };
      let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status == 500) {
        let erroMessage = await res.text();
        throw new Error(erroMessage);
      }

      localStorage.setItem("loginStatus", "true");
      navigate("/home", { replace: true });
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsError(false);
        setIsSuccess(false);
      }, 2000);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div
            className="col-md-4 col-sm-8 border rounded-4 shadow-lg px-4"
            //  style={{backgroundImage: `url('https://img.freepik.com/premium-vector/vector-background-light-pastel-rainbow-colors_56745-7.jpg?w=2000')`}}
          >
            <h1
              className="text-center mt-4"
              style={{
                fontFamily:
                  "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
              }}
            >
              Login
            </h1>
            <form
              ref={formRef}
              className="form-floating needs-validation"
              action=""
            >
              <div className="my-2">
                <h3
                  style={{
                    fontFamily:
                      "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                  }}
                >
                  Email Id
                </h3>
                <input
                  className="form-control border-success"
                  placeholder="Enter Email Id"
                  value={user.email}
                  onChange={handlerEmailAction}
                  required
                  type="email"
                  id="username"
                />
              </div>
              <div className="my-1">
                <h3
                  style={{
                    fontFamily:
                      "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                  }}
                >
                  Password
                </h3>
                <input
                  className="form-control border-success"
                  placeholder="Type your password"
                  value={user.password}
                  onChange={handlerPasswordAction}
                  required
                  type="password"
                  id="passwordInput"
                />
                <p id="passwordError" style={{ color: "red", display: "none" }}>
                  Invalid password
                </p>
              </div>
              <div>
                <input
                  className="btn btn-outline-dark w-100  my-6"
                  type="button"
                  value="Login"
                  onClick={loginAction}
                />
              </div>
            </form>
            {isSuccess && <div className="alert alert-success">Success</div>}
            {isError && <div className="alert alert-danger">Error</div>}

            <div className="justify-content-center text-center">
              <h4 className="fs-6 text-decoration-underline">New User?</h4>
            </div>
            <div className="justify-content-center text-center">
              <Link to={"/registration"}>Register here</Link>
            </div>
            <div className="justify-content-center text-center">
              <h4>May also signup with</h4>
            </div>
            <div className="justify-content-center mb-3 text-center">
              <a href="https://www.youtube.com/">
                <i className="fa-brands mx-1 text-dark fa-2x fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands mx-1 text-dark fa-2x fa-twitter"></i>
              </a>
              <a href="">
                <i className="fa-brands mx-1 text-dark fa-2x fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
