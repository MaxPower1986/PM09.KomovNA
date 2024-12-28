
import Header from "./comp/Header";
import React from "react";
import image1 from './media/image1.jpg';
import image2 from './media/image2.jpg';
import image3 from './media/image3.jpg';
import imagelogo1 from './media/imagelogo1.jpg';
import './Main.css';
import Otsiv from "./comp/Otsiv";


function Main() {
  return (
    <>
    <div className="header">
    <h3>Строительство домов</h3>
    <Header />

    </div>
    
      <div>
        <img className="img" src={imagelogo1}></img>
      </div>
      
      <div>
        <img className="img" src={image1} style={{ width: '300px', height: "100%" }} /><br></br>
        <img className="img" src={image2} style={{ width: '300px', height: "100%" }} />
        <img className="img" src={image3} style={{ width: '300px', height: "100%" }} />
      </div>
    <Otsiv></Otsiv>
    </>
  );
}

export default Main;
