import React from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";
const Landingpage = () => {
  return (
    <>
      <div className="container_01">
        <div className="row_1">
          <img src={require(".././images/lufffy.jpg")} alt="Luffy" />
        </div>
        <div className="row_1">
          <h2>10X Team 04</h2>
          <Link to="/Postview">Enter</Link>
        </div>
      </div>
    </>
  );
};
export default Landingpage;
