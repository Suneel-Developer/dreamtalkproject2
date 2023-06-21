import React from "react";
import "./chatBox.css";
import vectorLogo from "../../assets/VectorLogo.png";
import chatBox1Img from "../../assets/Rectangle.png";
import chatBoxImg from "../../assets/Rectangle-1.png";
import Vector from "../../assets/Vector.png";
import dotsImage from "../../assets/png.png";
import { Link } from "react-router-dom";

const ChatBox = () => {
  return (
    <div className="chatBot_container">
      {/* -------------------------top heading  */}
      <div className="chatHeading">
        <h1>Cool shit we’ve built</h1>
        <img src={vectorLogo} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus,{" "}
        </p>
      </div>

      <div className="chatbot_details">
        {/* ------------------------ left side imeges  */}
        <div className="chatImges">
          <img src={chatBox1Img} alt="" />
          <img src={chatBoxImg} alt="" className="topImgChatBot" />
        </div>

        {/* ----------------------- right side Box  */}
        <div className="chatBot_detailBox">
          <div className="Box">
            <div className="boxheading">
              <h3>DreamTalk</h3>
              <Link>
                <span>WEBSITE</span>
                <img src={Vector} alt="" />
              </Link>
            </div>
            <span className="subTitle">⭐️ AI-Persona</span>

            <p>
              Leveraging state-of-the-art algorithms and cutting-edge
              advancements in natural language processing, our chatbots possess
              the ability to comprehend intricate contextual cues with
              remarkable accuracy. This enables them to engage in nuanced and
              personalized conversations that closely mimic the intricacies of
              human-like interactions.
            </p>
          </div>
          <div className="Box">
            <div className="boxheading">
              <span className="subTitle">
                <img src={dotsImage} alt="" />
              </span>
              <Link>
                <span>NOTION</span>
                <img src={Vector} alt="" />
              </Link>
            </div>
            <span className="subTitle">⭐️ Case Study</span>

            <p>
              Leveraging state-of-the-art algorithms and cutting-edge
              advancements in natural language processing, our chatbots possess
              the ability to comprehend intricate contextual cues with
              remarkable accuracy. This enables them to engage in nuanced and
              personalized conversations that closely mimic the intricacies of
              human-like interactions.
            </p>
          </div>
          <div className="Box">
            <div className="boxheading">
              <span className="subTitle">
                <img src={dotsImage} alt="" />
              </span>
              <Link>
                <span>NOTION</span>
                <img src={Vector} alt="" />
              </Link>
            </div>
            <span className="subTitle">⭐️ Case Study</span>
            <p>
              Leveraging state-of-the-art algorithms and cutting-edge
              advancements in natural language processing, our chatbots possess
              the ability to comprehend intricate contextual cues with
              remarkable accuracy. This enables them to engage in nuanced and
              personalized conversations that closely mimic the intricacies of
              human-like interactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
