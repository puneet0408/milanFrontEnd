import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import logo from '../../static/background/profile.png'
import {login,logout} from "../../store/login/login"

import './Nav.css'
const Nav = () => {

    let isLogin = useSelector((state) => state.login.value);
    let dispatch = useDispatch();
    function changeState (){
        dispatch(logout());
        localStorage.clear();
    }
    return (<div className="header">
        <div className="container">
            <div className="nav">
                <div className="logo">
                    MILAN LOGO
                </div>
                <ul className="menu_bar">
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/membership">MEMBERSHIP</NavLink></li>
                    {/* <li><NavLink to="/life">LIFE</NavLink></li> */}
                   { isLogin && <li><NavLink to="/chat">CHAT</NavLink></li> }
                    { isLogin? <li style={{color:"white"}} onClick={changeState} >SINGOUT</li>: <p>
                    <li><NavLink to="/singin">SINGIN</NavLink></li>
                    <li><NavLink to="/singup">SINGUP</NavLink></li></p>}
                    <li><NavLink to="/setting">SETTING</NavLink></li>
                    <li><NavLink to="/profile" style={{ padding: "3px 2px" }}><img src={logo} /></NavLink></li>
                </ul>
            </div>
        </div>
    </div>
    );
}
export default Nav;