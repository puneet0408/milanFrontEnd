import { React,useState } from "react"
import { Form } from "react-router-dom";
import img from '../../../static/singup/formleft.jpg'
import './Singup.css'
const Singup = () => {

    let [FormData,setFormData] = useState();
    let [error,setError] = useState();
    let handleChange = (event) => 
    {
        let {name,value} = event.target;
        setFormData({...FormData, [name]:value});
    }
    let validate = (event) =>
    {
        console.log(event.target.name);
    }
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
                    <form className="sing_form">
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
                                    <label  className="mb-2">Username*</label>
                                    <input type="text" className="sing_my_control" placeholder="Enter Your Username" onChange={handleChange} onBlur={validate} name="username"/>
                                </div>
                                <div class="input-group mb-3">
                                    <label  className="mb-2">Password*</label>
                                    <input type="text" className="sing_my_control" placeholder="Enter Your Password" name="passoword" onChange={handleChange} onBlur={validate}/>
                                </div>
                                <div class="input-group mb-3">
                                    <label className="mb-2">Confirm Password*</label>
                                    <input type="text" className="sing_my_control" placeholder="Enter Your Password" name="confirm_password:" onChange={handleChange} onBlur={validate}/>
                                </div>
                            </div>
                            <div className="profile_details">
                                <div className="content_title">
                                    <h3>Profile Details</h3>
                                </div>
                                <div class="input-group mb-3">
                                    <label  className="mb-2">Username*</label>
                                    <input type="text" className="sing_my_control" placeholder="Enter Your Full Name" onChange={handleChange} onBlur={validate} name="name"/>
                                </div>
                                <div class="input-group mb-3">
                                    <label  className="mb-2">DOB*</label>
                                    <input type="date" className="sing_my_control" placeholder="mm/dd/yy" name="birthday" onChange={handleChange} onBlur={validate}/>
                                </div>
                                <div class="input-group mb-3">
                                    <label  className="mb-2">City*</label>
                                    <input type="text" className="sing_my_control" placeholder="Enter Your City" name="city" onChange={handleChange} onBlur={validate}/>
                                </div>
                            </div>
                            <button type="submit" className="btn custom_btn acc_btn text-nowrap">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
        </div>);
}
export default Singup;