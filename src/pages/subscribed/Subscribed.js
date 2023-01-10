import React from "react";
import { Link } from "react-router-dom";
import img from "./profil.jpg";

import "./subscribed.scss";

const Subscribed = () => {
  return (
    <div>
      <div className="subscribed-opasity">
       
        <div className="subscribed-con">
          <p className="subscribed-title">Subscribed</p>
          <div className="imput-page">
            <input className="subscribed-input" type="text" placeholder="Search" />
            <label>
              {" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                  stroke="#14191F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.9996 13.9996L11.0996 11.0996"
                  stroke="#14191F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
          </div>
          <div className="subcribed-people">
            <div className="people-page">
              <div className="profil-item">
                <img src={img} alt="" />
                <div className="online"> </div>

                <div className="profil-text">
                  <p className="profil-title">Makler mazsulotlari do’koni </p>
                  <span className="profil-id">#3876974</span>
                </div>
              </div>
              <button className="follow-me">
                folllow me
              </button>
            </div>


            <div className="people-page">
              <div className="profil-item">
                <img src={img} alt="" />
                <div className="online"> </div>
                <div className="profil-text">
                  <p className="profil-title">Makler mazsulotlari do’koni </p>
                  <span className="profil-id">#3876974</span>
                </div>
              </div>
              <button className="follow-me">
                folllow me
              </button>
            </div>
            <div className="people-page">
              <div className="profil-item">
                <img src={img} alt="" />
                <div className="online"> </div>

                <div className="profil-text">
                  <p className="profil-title">Makler mazsulotlari do’koni </p>
                  <span className="profil-id">#3876974</span>
                </div>
              </div>
              <button className="follow-me">
                folllow me
              </button>
            </div>
            <div className="people-page">
              <div className="profil-item">
                <img src={img} alt="" />
                <div className="online"> </div>

                <div className="profil-text">
                  <p className="profil-title">Makler mazsulotlari do’koni </p>
                  <span className="profil-id">#3876974</span>
                </div>
              </div>
              <button className="follow-me">
                folllow me
              </button>
            </div>
            
          </div>
        </div>
       
        <Link className="close" to="/" ><i class="fa-solid fa-xmark"></i></Link>
      
      </div>
    </div>
  );
};

export default Subscribed;
