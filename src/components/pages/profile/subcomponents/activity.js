import React from "react";
import ProfileImg from "../../../../static/profile/profile.jpg";
import feed1 from "../../../../static/profile/feeds/1.jpg";
import feed2 from "../../../../static/profile/feeds/2.jpg";
import feed3 from "../../../../static/profile/feeds/3.jpg";
import feed4 from "../../../../static/profile/feeds/4.jpg";


function Activity() {


    const feeds = [
        {
            id: 1,
            discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel porta felis.",
            img: feed1,
        },
        {
            id: 2,
            discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel porta felis.",
            img: feed2,
        },
        {
            id: 3,
            discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel porta felis.",
            img: feed3,
        },
        {
            id: 4,
            discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel porta felis.",
            img: feed4,
        }
    ];

    const card = feeds.map((feed , index)=>{
        return(
            <div className="profile-single-post">
                <div className="profileDetail" style={{ width:"50%", display:"flex",flexDrection:"row",color:"#000",alignItems:"center" , justifyContent:"space-between"}} >
                <div className="profileImgContainer" style={{  width: "40px"}} >
                                        <img src={ProfileImg} style={{width:"100%",objectFit:"cover"}} className="imgprofile" alt="profile"/>
                                    </div>
                    <h3 className="name" >Puneet</h3>
                    <p className="userName" >@pvirmani</p>
                    <p className="postTime" >.19h</p>
                </div>
                <p style={{paddingLeft: "60px", paddingTop: "23px" , color:"#000", width:"90%"}}>{feed.discription}</p>
                <div className="feedImgCont" >
                <img  style={{paddingLeft: "60px", paddingTop: "13px" , width:"100%"}} src={feed.img} className="feedImg" alt="feedimg"/>
                </div>
                <div class="p-s-p-content-footer">
                                <div class="left">
                                    <a href="#" class="comment" style={{color:"#000"}} >Comment</a>
                                    <a href="#" class="link"><i class="far fa-star"></i></a>
                                </div>
                            </div>
            </div>
        )
    })


    return (
        <section class="profile-section single-community">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="left-profile-area">
                            <div class="c-group-info">
                                <div class="profile-image">
                                    <img src={ProfileImg} className="profileimg" alt="profilePage" />
                                </div>
                                <div class="group-content">
                                    <p class="time">
                                        6 days ago
                                    </p>
                                    <h4 class="title">
                                        Easy Way to Dating
                                    </h4>
                                    <p class="text">
                                        Love for one another and love for
                                        yourself is priceless.
                                    </p>
                                    <p class="security">
                                        <i class="fas fa-globe-americas"></i>Public Group
                                    </p>
                                </div>
                                <div class="admin-area">
                                    <h4 class="title">
                                        Group Admins
                                    </h4>
                                    <a href="#">
                                        <img src="dsfs" alt="profile" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="profile-main-content">
                            <div class="write-post-area">
                                <div class="write-area"><grammarly-extension data-grammarly-shadow-root="true"
                                    style={{ position: "absolute", top: "0px", left: "0px", pointerEvents: "none" }} class="cGcvT">

                                </grammarly-extension><grammarly-extension data-grammarly-shadow-root="true"
                                    style={{ mixBlendMode: "darken", position: "absolute", top: "0px", left: "0px", pointerEvents: "none" }}
                                    class="cGcvT"></grammarly-extension>
                                    <div className='profileImgContainer' >
                                        <img src={ProfileImg} className="imgprofile" alt="profile"/>
                                    </div>
                                    <textarea placeholder="What's on your mind,Vernon" spellcheck="false"></textarea>
                                </div>
                                <div class="submit-area">
                                    <div class="left">
                                        <a href="#" class="upload-btn">
                                            <i class="fas fa-paperclip"></i>
                                        </a>
                                        <div class="select-area">
                                            <select class="nice-select select-bar">
                                                <option value="">Public</option>
                                                <option value="">Friends</option>
                                                <option value="">Only me</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <a href="#" class="custom-button">
                                            Post
                                        </a>
                                    </div>
                                </div>
                            </div>
                         <div>
                            {card}
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activity;