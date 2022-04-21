import React from "react";
import FaceBookIcon from "../Icons/facebook.svg";
import InIcon from "../Icons/in.svg";
import InstagramIcon from "../Icons/instagram.svg";
import TwitterIcon from "../Icons/twitter.svg";

export default function Footer() {
  return (
    <div
      className="contact-container d-flex align-items-center justify-content-center"
      id="contact"
    >
      <div className="col-md-11 d-flex flex-column align-items-center justify-content-center">
        <div className="col-md-12  mt-5 mb-5 ">
          <ul className=" title-list col-md-12">
            <li className="mb-4">
              <h2>O&M</h2>
            </li>
            <li className="contact-inf d-flex icon-inf align-items-center flex-column">
              <h4>Contact</h4>
              <ul className="contact-list">
                <li>Tel:+90(555) 555 55 55</li>
                <li>Faks:+90(212) 222 22 22</li>
                <li>recep@onm-solutions.com</li>
              </ul>
            </li>
            <li className="d-flex icon-inf justify-content-center align-items-center flex-column">
              <h4>Bizi Takip Edin</h4>
              <ul className="icons-list">
                <li>
                  <img src={FaceBookIcon} alt="" />
                </li>
                <li className="ml-2">
                  <img src={InIcon} alt="" />
                </li>
                <li className="ml-2">
                  <img src={InstagramIcon} alt="" />
                </li>
                <li className="ml-2">
                  <img src={TwitterIcon} alt="" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="made-by col-md-12 ">
          <span className="mt-1 pb-5">@ 2021, Made By O&M</span>
        </div>
      </div>
    </div>
  );
}
