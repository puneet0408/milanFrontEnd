import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import Activity from "./subcomponents/activity";
import BeforeLogin from "../../../static/beforeLogin/backgroundImg.jpg"
import { useSelector } from "react-redux";
const Profile = () => {
  let isLogin = useSelector((state) => state.login.value);
  const navigate = useNavigate();
  function navigateHome() {
    navigate("/");
  }
  function goToSignUpPage() {
    navigate("/singup");
  }
  return (
    <div>
      {isLogin ? (
        <div>
          <section className="breadcrumb-area community-bc">
            <div className="container">
              <div className="content">
                <h2 className="title extra-padding">Single Profile</h2>
                <div className="breadcrumb-list extra-padding">
                  <p onClick={navigateHome}>home {">"}</p>
                  <p>Single Profile</p>
                </div>
              </div>
            </div>
          </section>
          <div className="single-community-menu">
            <div className="container">
              <div className="row ">
                <div className="col-lg-12">
                  <div className="top-menu bar_container">
                    <p className="active">Activity</p>
                    <p>Profile</p>
                    <p>
                      Friends
                      <div className="num">04</div>
                    </p>
                    <p>
                      Groups
                      <div className="num">14</div>
                    </p>
                    <p>
                      Media
                      <div className="num">47</div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Activity />
        </div>
      ) : (
        <div className="beforeLogin" >
          <img className="BeforeLoginImg" src={BeforeLogin} alt="bgimg" />

          <button className="custom-button " onClick={goToSignUpPage} >Join Now</button>{" "}


        </div>
      )}
    </div>
  );
};
export default Profile;
