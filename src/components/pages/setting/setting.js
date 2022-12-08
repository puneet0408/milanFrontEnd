import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./setting.css";
import profileImg from "../../../static/profile/profile.jpg"
import bgImg from "../../../static/profile/profile-box-bg.png"


const Setting = () =>
{

    const navigate = useNavigate();

    const [editProfile, editprofile] = useState({
        username: "",
        name: "",
        email: "",
        number: "",
        city: "",
        encry_password: "",
        dob: "",
        gender: "",
        Target_gender: "",
        password: "",
        confirm_password: "",
    });



    function navigateHome() {
        navigate("/")
    }


    return (
        <div>
            <section className="breadcrumb-area community-bc">
                <div className="container">
                    <div className="content">
                        <h2 className="title extra-padding">
                            setting 1
                        </h2>
                        <div className="breadcrumb-list extra-padding">
                            <p onClick={navigateHome} >
                                home {">"}
                            </p>
                            <p>
                                setting 1
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="col-xl-8 col-md-7 profileEditSection ">
                <div className="page-title" style={{ color: "#000", width: "100%", textAlign: "center" }} >
                    <h1>
                        Profile Info
                    </h1>

                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="profile-about-box">
                            <div className="top-bg">
                                <img src={bgImg} />
                            </div>

                            <div className="profile-img editPageProfileImg">
                                <img src={profileImg} className="editprofileImg" alt="" />
                                <div className="active-online"></div>
                            </div>
                            <h2 style={{ color: "#000", position: "absolute", bottom: "5rem" }} >Puneet</h2>
                        </div>
                    </div>
                </div>
                <div className="input-info-box mt-30">
                    <div className="headers">
                        About your Profile
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="my-input-box">
                                    <label for="">Profile Name</label>
                                    <input type="text" placeholder="Profile Name" name='username' value={editProfile.username} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="my-input-box">
                                    <label for="">Public Email</label>
                                    <input type="text" placeholder="Public Email" name='email' value={editProfile.email} />
                                </div>
                            </div>
                            {/* <div className="col-md-12">
                                <div className="my-input-box">
                                    <textarea name="" placeholder="Write a little description about you..."></textarea>
                                </div>
                            </div> */}
                            <div className="col-md-6">
                                <div className="my-input-box">
                                    <label for="">Country</label>
                                    <select name="" id="">
                                        <option value="" disabled="" selected="">Select Country</option>
                                        <option value="">india</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="my-input-box">
                                    <label for="">City</label>
                                    <select name="" id="">
                                        <option value="" disabled="" selected="">Select City</option>
                                        <option value="">delhi</option>
                                        <option value="">punjab</option>
                                        <option value="">himachal</option>
                                        <option value="">haryana</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="my-input-box">
                                    <label for="">Birthday</label>
                                    <input type="date" name='dob' value={editProfile.dob} />
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                                <div className="my-input-box">
                                    <label for="">Occupation</label>
                                    <input type="text" placeholder="Occupation" />
                                </div>
                            </div> */}
                            <div className="col-md-6">
                                <div className="my-input-box">
                                    <label for="">Status</label>
                                    <select name="" id="">
                                        <option value="">In a Relationship</option>
                                        <option value="">Single</option>
                                        <option value="">Marid</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="my-input-box">
                                    <label for="">Birthplace</label>
                                    <input type="text" placeholder="Birthplace" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="input-info-box mt-30">
                    <div className="header">
                        Interests
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="my-input-box">
                                    <label for="">Favourite TV Shows</label>
                                    <textarea name="" placeholder="Favourite TV Shows"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="my-input-box">
                                    <label for="">Favourite Music Bands / Artists</label>
                                    <textarea name="" placeholder="Favourite Music Bands / Artists"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="my-input-box">
                                    <label for="">Favourite Movies</label>
                                    <textarea name="" placeholder="Favourite Movies"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="my-input-box">
                                    <label for="">Favourite Games </label>
                                    <textarea name="" placeholder="Favourite Games "></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="my-input-box">
                                    <label for="">Favourite Games </label>
                                    <textarea name="" placeholder="Favourite Games"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="input-info-box mt-30">
                    <div className="header">
                        Jobs &amp; Education
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="my-input-box">
                                    <label for="">Title or Place</label>
                                    <input type="text" placeholder="Title or Place" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="my-input-box">
                                    <label for="">Year Started</label>
                                    <select name="" id="">
                                        <option value="">2014</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="my-input-box">
                                    <label for="">Year End</label>
                                    <select name="" id="">
                                        <option value="">2017</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="my-input-box">
                                    <label for="">Description</label>
                                    <textarea name="" id="" placeholder="Description"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="my-input-box">
                                    <label for="">Title or Place</label>
                                    <input type="text" placeholder="Title or Place" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="my-input-box">
                                    <label for="">Year Started</label>
                                    <select name="" id="">
                                        <option value="">2014</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="my-input-box">
                                    <label for="">Year End</label>
                                    <select name="" id="">
                                        <option value="">2017</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="my-input-box">
                                    <label for="">Description</label>
                                    <textarea name="" id="" placeholder="Description"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="buttons  mt-30">
                    <button type="submit" className="custom-button">Save Changes</button>
                    <button className="custom-button2">Discard All</button>
                </div>
            </div>
        </div>
    );
}
export default Setting;