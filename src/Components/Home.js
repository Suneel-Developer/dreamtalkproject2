import React from "react";
import Navbar from "./Navbar";
import heroImg from ".././assets/INVENTIONAL.png";
import "./home.css";
import About from "./About";
import Banner from "./Banner";
import Footer from "./Footer";
import Contact from "./Contact";
import GetInTouch from "./GetInTouch";
import Services from "./Services";
import ChatBox from "./ChatBox";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <Navbar />
        <div className="hero_content">
          <div className="hero_heading">
            <span>BE</span>
            <img src={heroImg} alt="" />{" "}
          </div>
          <p>INVENTING THE UNIMAGINABLE </p>
        </div>
      </div>
      <About />
      <Banner />
      <Services />
      <ChatBox />
      <Contact />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
