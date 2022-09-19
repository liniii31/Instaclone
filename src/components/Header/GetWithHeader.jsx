import React from "react";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
const GetWithHeader = (ChildrenComponent) => {
  return function withHeader() {
    return (
      <>
        <div className="container">
          <div className="Header">
            <div className="logo">
              <img src={require(`.././images/10X.png`)} alt="Logo" />
            </div>
            <div className="logo-2">
              <Link to="/PostCard">
                <FaCamera />
              </Link>
            </div>
          </div>
          <hr />

          <ChildrenComponent />
        </div>
      </>
    );
  };
};

export default GetWithHeader;
