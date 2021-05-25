import React from "react";
import vk from "../../img/vk.png";
import instagram from "../../img/instagram.png";
import telegramm from "../../img/telegramm.png";
import GitHub from "../../img/GitHub.png";

const FooterPage = () => {
  return (
    <div
      style={{
        color: "black",
        bottom: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          marginTop: "20px",
          width: "100%",
          backgroundColor: "#00a1ba",
        }}
      >
        <div className="d-flex flex-column">
          <div
            className="p-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <a
              href="https://vk.com/jarniy"
              target="_blank"
              rel="noreferrer"
              style={{ flex: " 1 1 auto", margin: "0 5px" }}
            >
              <img src={vk} alt="vk" style={{ height: "60px" }}></img>
            </a>
            <a
              href="https://www.instagram.com/jarishka_/"
              target="_blank"
              rel="noreferrer"
              style={{ flex: " 1 1 auto", margin: "0 5px" }}
            >
              <img
                src={instagram}
                alt="instagram"
                style={{ height: "60px", margin: "0,10px,0" }}
              ></img>
            </a>
            <a
              href="https://t.me/jarniy"
              target="_blank"
              rel="noreferrer"
              style={{ flex: " 1 1 auto", margin: "0 5px" }}
            >
              <img
                src={telegramm}
                alt="telegram"
                style={{ height: "60px", margin: "0,10px,0" }}
              ></img>
            </a>
            <a
              href="https://github.com/AlexCheredow"
              target="_blank"
              rel="noreferrer"
              style={{ flex: " 1 1 auto", margin: "0 5px" }}
            >
              <img
                src={GitHub}
                alt="GitHub"
                style={{ height: "60px", margin: "0,10px,0" }}
              ></img>
            </a>
          </div>
          <div
            className="p-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            &copy; 2021 Copyright: Alex Cheredov
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterPage;
