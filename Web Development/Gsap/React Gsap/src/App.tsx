import React from "react";
import arrow from "./images/arrow-right.svg";
import imgGirl from "./images/girl.webp";
import imgBoy from "./images/boy.webp";
import "./App.scss";

function App() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Reliving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    of disease caused
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behavior.</div>
                </div>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti maxime sed provident maiores fuga tempore cum dict
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="arrow" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner">
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="girl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
