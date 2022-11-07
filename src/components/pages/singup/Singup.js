import { React,useState } from "react"
import img from '../../../static/singup/formleft.jpg'
import './Singup.css'
const Singup = () => {
    let form = 
    {
        username:"",
        password:"",
        confirm_password:"",
        name:"",
        birthDay:"",
        gender:"",
        desire_gender:"",
        marital_statis:"",
        City:""
    }
    let [FormData,setFomrmData] = useState(form);
    return (
        <div className="sign">
            <div className="container-fluid">
            <div className="row">
                <div className="col-xl-5 col-lg-6  px-0">
                    <div className="image_sing">
                        <img className="" src={img} />
                    </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-sm-12 px-5 py-3">
                    <div className="sing_form">
                        <div className="sing_header">
                            <h2>
                            WELCOME TO MILAN
                            </h2>
                            <p>
                            Let's create your profile! Just fill in the fields below, and we’ll get a new account.
                            </p>
                        </div>
                            <div className="account_details">
                                <div className="content_title">
                                    <h3>Account Details</h3>
                                </div>
                                <div class="input-group mb-3">
                                    <label for="" className="mb-2">Username*</label>
                                    <input type="text" className="sing_my_control" placeholder="Enter Your Username"/>
                                </div>
                                <div class="input-group mb-3">
                                    <label for="" className="mb-2">Password*</label>
                                    <input type="text" className="sing_my_control" placeholder="Enter Your Password"/>
                                </div>
                                <div class="input-group mb-3">
                                    <label for="" className="mb-2">Confirm Password*</label>
                                    <input type="text" className="sing_my_control" placeholder="Enter Your Password"/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>);
}
export default Singup;