import "../style/NavBarStyle.css";
import logo from "../assets/images/logo.svg";

const NavBar = () => {
  return (
    <>
      <nav className="nav-bar navbar navbar-expand-lg bg-body-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" className="w-75" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resources
                </a>
              </li>
            </ul>
            <form className="d-flex gap-5 align-items-center" role="search">
              <a href="#" className="text-decoration-none text-black">
                Login
              </a>
              <button className="btn-shorten" type="submit">
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
