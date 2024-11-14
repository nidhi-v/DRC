import { React, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <div>
      <div className="main-container">
        <div className="nav-main-up">
          <div className="navimg">
            <img src="/images/drc-logo.png" alt="" />
          </div>
          <div className="nav-cont-right">
            <ul>
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>Investment Ideas</li>
              </a>
              <a href="#">
                <li>Careers</li>
              </a>
              <a href="#">
                <li>Become a Partner</li>
              </a>
              <li>
                <i class="fa-solid fa-magnifying-glass fa-sm"></i>
              </li>
            </ul>
          </div>
          <div className="nav-hamburger" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className={`nav-items-container ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list-items">
            <li>
              <a href="#">Capital Markets</a>
            </li>
            <li>
              <a href="#">Research & Advisory</a>
            </li>
            <li>
              <a href="#">Fund Management</a>
            </li>
            <li>
              <a href="#">Investment Banking</a>
            </li>
            <li>
              <a href="#">Wealth Management</a>
            </li>
          </ul>
          <ul className="nav-list-items-2">
            <li>
              <a href="#">
                <i class="fa-solid fa-arrow-right-to-bracket fa-sm"></i>
                Chatur.AI
              </a>
            </li>
            <li>
              <a href="#" className="open-account">
                Open an Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
