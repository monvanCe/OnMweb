import React from "react";
import Logo from "../Icons/logo-light.svg";

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbarset fixed-top d-flex justify-content-center align-items-center">
        <div className="col-md-11 align-items-center d-flex justify-content-between">
          <div>
            <a class="navbar-brand" href="#!">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="pt-3">
            <ul className="navbar-list">
              <li className="mr-4">
                <a href="#home" className="links">
                  Home
                </a>
              </li>
              <li className="mr-4">
                <a href="#whatwedo" className="links">
                  What We Do
                </a>
              </li>
              <li className="mr-4">
                <a href="#projects" className="links">
                  Works
                </a>
              </li>
              <li>
                <a href="#contact" className="links">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
