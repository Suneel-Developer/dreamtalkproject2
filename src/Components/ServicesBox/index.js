import React from "react";
import NetworkLogo from "../../assets/services1.png";
import './ServicesBox.css'

const ServicesBox = (props) => {
  return (
    <div className="box">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <p>
        {props.details}
      </p>
    </div>
  );
};

export default ServicesBox;
