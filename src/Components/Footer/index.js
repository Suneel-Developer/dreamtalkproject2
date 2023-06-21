import React from "react";
import "./footer.css";
import vectorLogo from '../../assets/Vector (1).png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="col">
        <h1 className="fheading">
          You like our work?!  Subscribe to our newsletter!
        </h1>
        <div className="subscribeInput">
            <input type="text" placeholder="Enter your email TO CONTACT US"  />
            <img src={vectorLogo} alt=""  />
        </div>
      </div>
      <div className="col">
        <ul>
          <li>Policy</li>
          <li><Link>Terms</Link></li>
          <li><Link>Privacy</Link></li>
        </ul>
      </div>
      <div className="col">
        <ul>
          <li>Contact</li>
          <li><Link>Email</Link></li>
          <li><Link>Telegram</Link></li>
          <li><Link>Instagram</Link></li>
        </ul>
      </div>
      <div className="col">
        <ul>
          <li>Company</li>
          <li><Link>About</Link></li>
          <li><Link>Branding</Link></li>
          <li><Link>Customers</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
