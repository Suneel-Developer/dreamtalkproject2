import React, { useState } from "react";
import "./navbar.css";
import HeaderLogo from "../../assets/navLogo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="header">
      <div className="logo">
        <img src={HeaderLogo} alt="Nav Logo" />
      </div>
      <nav className={isOpen ? "nav_content mobile-menu-link" : "nav_content"}>
        <ul>
          <li>
            <Link className="active">Our Services</Link>
          </li>
          <li>
            <Link>Past projects</Link>
          </li>
          <li>
            <Link>Functionalities</Link>
          </li>
          <li>
            <Link>cool stuff we’ve built</Link>
          </li>
          <li>
            <Link>CASE STUDIES</Link>
          </li>
          <div className="contactBtn">
            <button className="btn ">CONTACT US</button>
          </div>
        </ul>
        <FaBars className="toggleBtn" onClick={() => setIsOpen(!isOpen)} />
      </nav>
    </section>
  );
};

export default Navbar;
