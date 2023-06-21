import React from "react";
import "./about.css";
import AboutImg from "../../assets/aboutUs.png";
import { BsDot } from "react-icons/bs";

const About = () => {
  return (
    <div className="aboutus_container">
      <div className="about_content">
        <h1>
          ABOUT <span>US</span>
        </h1>
        <p>
          At Inventional, we excel in delivering exceptional services to meet
          your digital requirements. Our team of experts is dedicated to
          offering a diverse array of tailored solutions that elevate your
          chatbot experience. Harnessing cutting edge technologies, we have
          successfully developed intricate chatbot systems.
        </p>
        <ul>
          <li>
            <BsDot className="dotIcon" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </li>
          <li>
            <BsDot className="dotIcon" />
            Lorem ipsum dolor sit amet, consectetur{" "}
          </li>
          <li>
            <BsDot className="dotIcon" />
            Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
          </li>
        </ul>
        <button className="btn">More Details</button>
      </div>
      <div className="about_img">
        <img src={AboutImg} alt="about Img" />
      </div>
    </div>
  );
};

export default About;
