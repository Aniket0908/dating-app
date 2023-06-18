import { useNavigate, Link } from "react-router-dom";

import image from "./logo3.png";
function Navigation() {
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/login", { replace: true });
  };

  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <></>;
  }
  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: " #4a3635" }}
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <a className="navbar-brand ms-4" href="#">
              <img
                src={image}
                style={{ height: "35px", width: "150px" }}
                alt=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse justify-content-end me-5 navbar-collapse"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item mx-4">
                  <Link
                    style={{
                      color: "white",
                      fontSize: "16px",
                      textDecoration: "none",
                    }}
                    to={"/home"}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item mx-4">
                  <Link
                    style={{
                      color: "white",
                      fontSize: "16px",
                      textDecoration: "none",
                    }}
                    to={"/registration"}
                  >
                    Registration
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link
                    style={{
                      color: "white",
                      fontSize: "16px",
                      textDecoration: "none",
                    }}
                    to={"/contact"}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link
                    style={{
                      color: "white",
                      fontSize: "16px",
                      textDecoration: "none",
                    }}
                    to={"/about"}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link
                    style={{
                      color: "white",
                      fontSize: "16px",
                      textDecoration: "none",
                    }}
                    onClick={logOutAction}
                  >
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Navigation;
