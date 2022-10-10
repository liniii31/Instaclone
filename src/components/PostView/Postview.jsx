import React, { useEffect, useState } from "react";
import { FaEllipsisH, FaRegHeart, FaRegPaperPlane } from "react-icons/fa";
import GetWithHeader from "../Header/GetWithHeader";
import "./postview.css";
const ServerUrl = "https://instacloneserver-shalini.herokuapp.com/ ";
function Postview() {
  const [user, setUser] = useState([]);
  const getUserData = async () => {
    await fetch(`${ServerUrl}/getPosts`)
      .then((response) => response.json())
      .then((actualData) => {
        setUser(actualData.message);
      });
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      {user.length > 0 ? (
        <div className="main">
          {user.reverse().map((value, i) => {
            return (
              <div className="card_container" key={i}>
                <div className="card_header">
                  <div className="row_1">
                    <label>{value.author}</label>
                    <p>{value.location}</p>
                  </div>
                  <div className="row_2">
                    <FaEllipsisH />
                  </div>
                </div>
                <div className="card_main">
                  <img
                    src={`${ServerUrl}/Images/${value.image}`}
                    alt={`${value.image}`}
                  />
                </div>
                <div className="card_footer">
                  <div className="row__1">
                    <div>
                      <FaRegHeart />
                      <FaRegPaperPlane />
                    </div>
                    <div>{value.date}</div>
                  </div>
                  <div className="row__2">{`${value.likes} Likes`}</div>
                  <div className="row__3">{value.discription}</div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>...Loading</h1>
      )}
    </>
  );
}
export default GetWithHeader(Postview);
