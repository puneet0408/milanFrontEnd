import { React } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { AiFillFacebook } from 'react-icons/ai';
//Imports Images
import img1 from "../../static/background/bannerfront.png";
import img2 from "../../static/background/bannerlove.png";
import icon01 from "../../static/icons/icon01.png";
import icon02 from "../../static/icons/icon02.png";
import icon03 from "../../static/icons/icon03.png";
import icon04 from "../../static/icons/icon04.png";
import illutration from "../../static/flirting/illutration.png";
import circle from "../../static/flirting/circle.png";
import circleShape from "../../static/circle-shape.png";
import bird from "../../static/bird.png";
import icon1hw from "../../static/howItswork/icon1.png";
import icon2hw from "../../static/howItswork/icon2.png";
import icon3hw from "../../static/howItswork/icon3.png";
import heartbg from "../../static/joinNow/heartshape.png";
import sideImg from "../../static/joinNow/img.png";
import i1Freature from "../../static/feature/i1.png";
import i2Freature from "../../static/feature/i2.png";
import i3Freature from "../../static/feature/i3.png";
import i4Freature from "../../static/feature/i4.png";
import sucess1 from "../../static/sucess/img1.jpg";
import sucess2 from "../../static/sucess/img2.png";
import sucess3 from "../../static/sucess/img3.png";
import sucessp1 from "../../static/sucess/p1.png";
import sucessp2 from "../../static/sucess/p2.png";
import sucessp3 from "../../static/sucess/p3.png";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="col-xl-4 col-lg-5 col-sm-12 data">
            <h1>LOVE BEGINS LIFE BEGINS</h1>
            <div className="form">
              <form>
                <div className="input_field">
                  <p>I am a : </p>
                  <div className="option">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      id="male"
                    ></input>
                    <label for="male">MALE</label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      id="female"
                    ></input>
                    <label for="female">FEMALE</label>
                  </div>
                </div>
                <div className="input_field">
                  <p>Seeking :</p>
                  <div className="option">
                    <input
                      type="radio"
                      name="target_gender"
                      value="male"
                      id="target_male"
                    ></input>
                    <label for="target_male">MALE</label>
                    <input
                      type="radio"
                      name="target_gender"
                      value="female"
                      id="target_female"
                    ></input>
                    <label for="target_female">FEMALE</label>
                  </div>
                </div>
                <div className="input_field">
                  <p>Marrital : </p>
                  <div className="option">
                    <input
                      type="radio"
                      name="married"
                      value={0}
                      id="no"
                    ></input>
                    <label for="no">NO</label>
                    <input
                      type="radio"
                      name="married"
                      value={1}
                      id="yes"
                    ></input>
                    <label for="yes">YES</label>
                  </div>
                </div>
                <div className="input_field">
                  <Link to="/singup">
                    <button type="submit" className="btn custom_btn">
                      Join Now!
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 image">
            <img className="img1 img-fluid" src={img1} alt="fluid" />
            <img className="img2 img-fluid" src={img2} alt="fluid" />
          </div>
        </div>
      </div>
      {/* --------------------feature page----------------- */}
      <section className="feature-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-feature wow fadeInUp"
                data-wow-delay="0.1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon">
                  <img src={icon01} alt="icon01" />
                </div>
                <h4>100% Verifide</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-feature wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon">
                  <img src={icon02} alt="icon02" />
                </div>
                <h4>Most Secure</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-feature wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon">
                  <img src={icon03} alt="icon03" />
                </div>
                <h4>100% Privacy</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-feature wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon">
                  <img src={icon04} alt="icon04" />
                </div>
                <h4>Smart Matching</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="flirting-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="content">
                <div class="section-header">
                  <h6
                    class="sub-title extra-padding wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    Meet New People Today!
                  </h6>
                  <h2
                    class="title extra-padding wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    Start Flirting
                  </h2>
                  <p>
                    In our modern day and age dating apps have become an
                    integral part of our lives. They allow you to check the
                    profile of singles living near you, to chat with them, to
                    meet them and maybe to fall in love.
                  </p>
                  <br />
                  <p>
                    If you’re searching for a simple dating app with free
                    features allowing to meet singles, you’re in good hands with
                    Pairko. With Pairko you get all you need from a mobile
                    dating app, which presents you thousands of users through
                    your smartphone in a very pleasant experience.
                  </p>
                </div>

                <p class="custom-button">Seek Your Partner</p>
              </div>
            </div>
            <div class="col-lg-6 align-self-center">
              <div class="img">
                <img class="bg-shape" src={illutration} alt="circle" />
                <img src={circle} alt="illutration" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="how-it-work-section">
        <img class="shape1" src={circleShape} alt="" />
        <img class="shape2" src={bird} alt="" />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="content">
                <div class="section-header">
                  <h6
                    class="sub-title extra-padding wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    Meet New People Today!
                  </h6>
                  <h2
                    class="title wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    How Does It Work?
                  </h2>
                  <p
                    class="text wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    You’re just 3 steps away from a great date
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div
                class="single-work-box wow fadeInUp"
                data-wow-delay="0.1s"
                style={{
                  visibility: "visible1",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="icon">
                  <img src={icon1hw} alt="" />
                </div>
                <h4 class="title">Tell us who you are!</h4>
                <a href="#" class="custom-button">
                  Join Now !
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div
                class="single-work-box wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="icon">
                  <img src={icon2hw} alt="" />
                </div>
                <h4 class="title">Find the right person</h4>
                <a href="#" class="custom-button">
                  Join Now !
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div
                class="single-work-box wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="icon">
                  <img src={icon3hw} alt="" />
                </div>
                <h4 class="title">Start Dating</h4>
                <a href="#" class="custom-button">
                  Join Now !
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="join-now-section">
        <img class="shape1" src={heartbg} alt="heartBg" />
        <img class="shape2" src={sideImg} alt="sideImg" />
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="content">
                <div class="section-header white-color">
                  <h2
                    class="title wow fadeInUp"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInUp",
                      color: "white",
                    }}
                  >
                    Best Ways to Find Your True Sole Mate
                  </h2>
                </div>

                <a href="#" class="custom-button">
                  Join Now !
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="feature-section extra-feature">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="content">
                <div class="section-header">
                  <h6
                    class="sub-title wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    An Exhaustive List Of
                  </h6>
                  <h2
                    class="title extra-padding wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    Amazing Features
                  </h2>
                  <p class="text">
                    To find meaningful connections, dates, and life partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-content-area">
          <div class="left-image">
            <div class="offer">
              <div class="offer-inner-content">
                <span class="fs">START NOW FOR</span>
                <h2>FREE</h2>
                <span class="ss">7 DAY TRIAL</span>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row justify-content-end">
              <div class="col-lg-5">
                <div class="feature-lists">
                  <div
                    class="single-feature-list wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div class="icon">
                      <img src={i1Freature} alt="featurei1" />
                    </div>
                    <div class="content">
                      <h4 class="title">Simple to use</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div>
                  <div
                    class="single-feature-list wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div class="icon">
                      <img src={i2Freature} alt="faturei2" />
                    </div>
                    <div class="content">
                      <h4 class="title">Smart Matching</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div>
                  <div
                    class="single-feature-list wow fadeInUp"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div class="icon">
                      <img src={i3Freature} alt="featurei3" />
                    </div>
                    <div class="content">
                      <h4 class="title">Filter very fast</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div>
                  <div
                    class="single-feature-list wow fadeInUp"
                    data-wow-delay="0.4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div class="icon">
                      <img src={i4Freature} alt="fealturei4" />
                    </div>
                    <div class="content">
                      <h4 class="title">Cool community</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="sucess-stories-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="content">
                <div class="section-header">
                  <h6
                    class="sub-title wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    Love in faith
                  </h6>
                  <h2
                    class="title wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    Success Stories
                  </h2>
                  <p
                    class="text wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    Aliquam a neque tortor. Donec iaculis auctor turpis.
                    Eporttitor mattis ullamcorper urna. Cras quis elementum
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div
                class="single-story-box wow fadeInUp"
                data-wow-delay="0.1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="img">
                  <img src={sucess1} alt="" />
                </div>
                <div class="content">
                  <div class="author">
                    <img src={sucessp1} alt="" />
                    <span></span>
                  </div>
                  <h4 class="title">
                    Love horoscope for Cancer There will be...
                  </h4>
                  <p class="date">December 10, 2021</p>
                </div>
                <div class="box-footer">
                  <div class="left">
                    <ul class="box-social-links">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="right">
                    <a href="#" style={{ color: "black" }}>
                      Read More<i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div
                class="single-story-box wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="img">
                  <img src={sucess2} alt="" />
                </div>
                <div class="content">
                  <div class="author">
                    <img src={sucessp2} alt="" />
                    <span></span>
                  </div>
                  <h4 class="title">
                    ‘love at first sight’ is all about initial attraction...
                  </h4>
                  <p class="date">December 11, 2021</p>
                </div>
                <div class="box-footer">
                  <div class="left">
                    <ul class="box-social-links">
                      <li>
                        <a href="#" >
                       <AiFillFacebook/>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="right">
                    <a href="#" style={{ color: "black" }}>
                      Read More<i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div
                class="single-story-box wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="img">
                  <img src={sucess3} alt="" />
                </div>
                <div class="content">
                  <div class="author">
                    <img src={sucessp3} alt="" />
                    <span></span>
                  </div>
                  <h4 class="title">
                    What women actually want to feel on their...
                  </h4>
                  <p class="date">December 14, 2021</p>
                </div>
                <div class="box-footer">
                  <div class="left">
                    <ul class="box-social-links">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="right">
                    <a href="#" style={{ color: "black" }}>
                      Read More<i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
