import { React, useState, useEffect } from "react";
import logImg from "../../../static/singup/log.jpg";
import axios from "axios";
import "./singin.css";
const Singin = () => {
  let [FormData, setFormData] = useState({
    username: "",
    password: "",
  });
  let [error, setError] = useState({});
  let handleChange = (event) => {
    let { name, value } = event.target;
    setFormData({ ...FormData, [name]: value });

    setError(validate(FormData));

  };

  const validate = (values) => {
    const error = {};
    if (!values. username) {
      error.username = "username is required";
    }

    else if (!(values.password)) {
      error.password = "password is required";
    }
    
    return error;
  };

  //BackEnd API Call For Login
  var config = {
    method: "post",
    url: "http://localhost:4000/backendapi/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: FormData,
  };
  const login = (event) => {
    event.preventDefault();
    axios(config)
      .then(function (response) {
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("Chats", JSON.stringify(response.data.Chats));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <div class="top-menu-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <p>Back to Home</p>
            </div>
            <div class="col-lg-7 ">
              <div class="logo">
                <p>milan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-end">
          <div class="imagecontlogin image-log">
            <img className="imglogin" src={logImg} alt="logImg" />
          </div>
          <div class="col-lg-6 loginarea ">
            <div class="log-reg-inner">
              <div class="section-header inloginp">
                <h2 class="title">Welcome to milan</h2>
              </div>
              <div class="main-content inloginp">
                <form action="#" onSubmit={login}>
                  <div class="form-group">
                    <label for="">Your Username</label>
                    <input
                      type="text"
                      value={FormData.username}
                      onChange={handleChange}
                      class="my-form-control"
                      placeholder="Enter Your Email"
                      name="username"
                    />
                  </div>
                  <p>{error.username}</p>
                  <div class="form-group">
                    <label for="">Password</label>
                    <input
                      value={FormData.password}
                      type="password"
                      onChange={handleChange}
                      class="my-form-control"
                      placeholder="Enter Your Password"
                      name="password"
                    />
                  </div>
                  <p>{error.password}</p>
                  <p class="f-pass">Forgot your password?</p>
                  <div class="button-wrapper">
                    <button type="submit" class="custom-button">
                      Sign IN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Singin;
