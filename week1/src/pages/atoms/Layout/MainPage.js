import React from "react";
import "../../../assets/MainContainer.css";
import MainHeader from "../Header/MainHeader";
import MainBody from "../Body/MainBody";
const MainPage = () => {
  return (
    <div className="Main-container">
      <div className="header">
        <MainHeader />
      </div>
      <div>
        <MainBody />
      </div>
    </div>
  );
};

export default MainPage;
