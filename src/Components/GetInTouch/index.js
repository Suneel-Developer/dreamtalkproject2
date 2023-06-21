import React from "react";
import "./getInTouch.css";

const GetInTouch = () => {
  return (
    <section>
      <div className="getinToouch_container">
        <h1>Let’s get in touch!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Hendrerit id amet bibendum
          diam aliquet ut urna eget. Lorem ipsum dolor sit
        </p>
        <div className="inputFields">
          <input type="text" placeholder="Enter your emaill" />
          <button className="btn">Join Now</button>
        </div>
        <div className="cornerLeftImage"></div>
        <div className="cornerRightImage"></div>
      </div>
    </section>
  );
};

export default GetInTouch;
