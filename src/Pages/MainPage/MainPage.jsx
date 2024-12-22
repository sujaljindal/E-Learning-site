import React from 'react';
import './MainPage.css';
import laptop from '../../assets/Group 40.png';
import ui from '../../assets/ui.png';
import react1 from '../../assets/react.png';
import php from '../../assets/php.png';
import js from '../../assets/js.png';

const MainPage = () => {
  return (
    <div className="main">
      <div className="maingrid">
        <div className="maingridcard" id="gridcard1">
          <h3>
            By Themadbrains in <span>Inspiration</span>
          </h3>
          <h1>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius illo rem repellendus ea, enim saepe voluptatibus
            laudantium cumque error consequatur!
          </p>
        </div>
        <div className="maingridcard">
          <img className="maingridcard-img" src={laptop} alt="Laptop displaying UI design" />
        </div>
      </div>
      <div className="bloglist">
        <div className="box">
          <img src={ui} alt="UI Design" />
        </div>
        <div className="box">
          <img src={react1} alt="React Framework" />
        </div>
        <div className="box">
          <img src={php} alt="PHP Programming" />
        </div>
        <div className="box">
          <img src={js} alt="JavaScript Development" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
