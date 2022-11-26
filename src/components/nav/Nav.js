import {React} from "react";
import {Link} from 'react-router-dom';
import logo from '../../static/background/profile.png'
import './Nav.css'
const Nav = () => 
{
    return(<div className="header">
        <div className="container">
            <div className="nav">
                <div className="logo">
                    MILAN LOGO
                </div>
                <ul className="menu_bar">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/community">COMMUNITY</Link></li>
                        <li><Link to="/membership">MEMBERSHIP</Link></li>
                        <li><Link to="/life">LIFE</Link></li>
                        <li><Link to="/chat">CHAT</Link></li>
                        <li><Link to="/singin">SINGIN</Link></li>
                        <li><Link to="/profile" style={{padding:"3px 2px"}}><img src={logo} /></Link></li>
                    </ul>
            </div>
            </div>
    </div>);
}
export default Nav;