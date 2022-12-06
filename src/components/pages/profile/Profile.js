import { React } from 'react';
import { useNavigate } from "react-router-dom";
import "./profile.css";
import Activity from "./subcomponents/activity" 
const Profile = () => {

    const navigate = useNavigate();

    function navigateHome() {
        navigate("/")
    }

    return (
        <div>
            <section className="breadcrumb-area community-bc">
                <div className="container">
                    <div className="content">
                        <h2 className="title extra-padding">
                            Single Profile
                        </h2>
                        <div className="breadcrumb-list extra-padding">

                            <p onClick={navigateHome} >
                                home {">"}
                            </p>
                            <p>
                                Single Profile
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="single-community-menu">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12">
                            <div className="top-menu bar_container">
                                <p className="active">
                                    Activity
                                </p>
                                <p>
                                    Profile
                                </p>
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
           <Activity/>

        </div>
    );
}
export default Profile;

