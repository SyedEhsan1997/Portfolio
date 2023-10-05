import React from "react";
import "./Intro.css";
import bg from "../../assets/ehsn.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Ehsan</span>
            <br /> Web Dveloper
          </span>
          <p className="introPara">
            I am a skilled Web Developer with experience in creating visually
            appealing and user-friendly Apps.
          </p>
          <Link to="hireMeSection" smooth={true}>
            <button className="btn">
              <img src={btnImg} alt="Hire" className="btnImg" />
              Hire me
            </button>
          </Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
      </section>
    </div>
  );
};

export default Intro;
