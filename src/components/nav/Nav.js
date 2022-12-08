import { React, useState } from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../static/background/profile.png'
import './Nav.css'
const Nav = () => {

    const [isLogin,setIsLogin ] = useState(false)

    function changeState (){
        setIsLogin(prev => !prev )
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
                   <li><NavLink to="/chat">CHAT</NavLink></li>
                    { isLogin? <li style={{color:"white"}} onClick={changeState} >logout</li>: <p>
                    <li><NavLink to="/singin">singin</NavLink></li>
                    <li><NavLink to="/singup">signup</NavLink></li></p>}
                    <li><NavLink to="/setting">Setting</NavLink></li>
                    <li><NavLink to="/profile" style={{ padding: "3px 2px" }}><img src={logo} /></NavLink></li>
                </ul>
            </div>
        </div>
    </div>
    );
}
export default Nav;