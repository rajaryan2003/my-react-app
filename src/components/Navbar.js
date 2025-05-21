import React from "react";
import PropTypes from "prop-types";
import { a } from "react-router-dom"; // ✅ Add this import

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>

        <ul className="navbar-nav me-auhref mb-2 mb-lg-0 d-flex flex-row">
          <li className="nav-item mx-2">
            <a className="nav-a active" aria-current="page" href="#">
              Home
            </a>
          </li>
          
        </ul>

        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  hrefggleMode: PropTypes.func,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About text here",
  hrefggleMode: () => {},
};
