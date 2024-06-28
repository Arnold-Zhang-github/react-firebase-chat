import React from "react";
import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Sam</h2>
        <p></p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy % help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>

          {/* photo section */}
          <div className="photos">
            {/* photoItems */}
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./img-1.jpg" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img
                src="./download.png"
                alt=""
                className="icon
              "
              />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="./img-1.jpg" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img
                src="./download.png"
                alt=""
                className="icon
              "
              />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="./img-1.jpg" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img
                src="./download.png"
                alt=""
                className="icon
              "
              />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="./img-1.jpg" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img
                src="./download.png"
                alt=""
                className="icon
              "
              />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="./img-1.jpg" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img
                src="./download.png"
                alt=""
                className="icon
              "
              />
            </div>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Share Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Detail;
