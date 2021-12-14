import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function Header() {
  return (
    <div className="p4 m-4 h6">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/home">
          ProShop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About us
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="">
                Advance Search
              </Link>
            </li> */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="advance-search"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Advance Search
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/login">
                  XXX
                </Link>
                <Link className="dropdown-item" to="/sign-out">
                  YYYY
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="dropdown-item" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="dropdown-item " to="/sign-up">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
