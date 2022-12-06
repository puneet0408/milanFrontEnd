import { React, useState } from "react"
import { Form } from "react-router-dom";
import img from '../../../static/singup/formleft.jpg'
import './Singup.css'
const Singup = () => {


    const [signupForm, setFormData] = useState({
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

    console.log(signupForm);



    let [error, setError] = useState();
 

    let handleChange = (event) => {
        let { name, value } = event.target;
        setFormData({ ...FormData, [name]: value });
         setError(validate(signupForm));
    }
    const validate = (values) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        //  const pass =
        //  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{6, 20}/;
        if (!values.username) {
            error.username = "name is required";
        }else if (values.username.length > 15) {
            error.username = "Must be 15 characters or less";
        } else if (!values.email) {
            error.email = "email is required";
        } else if (!regex.test(values.email)) {
            error.email = "this is not a valid format";
        }else if (!(values.encry_password && values.confirm_password)) {
            error.confirm_password = "password is required";
            error.encry_password = "password is required";
        } else if (values.password !== values.confirm_password) {
            error.confirm_password = "password did'nt match";
        } else if (!values.name) {
            error.name = "userName is required";
        } else if (values.name.length > 15) {
            error.name = "Must be 15 characters or less";
        } else if(!values.gender){
            error.gender = "gender is required";
        } else if (!values.Target_gender){
            error.Target_gender = "gender is required";
        }
        else {

            return error;
        };
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
                        <form  className="sing_form">
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
                                <div className="input-group mb-3">
                                    <label className="mb-2">Username*</label>
                                    <input type="text" value={signupForm.username}
                                        className="sing_my_control" placeholder="Enter Your Username" onChange={handleChange} name="username" />
                                </div>
                             {/* <p className="error" >{error.username}</p> */}
                                <div className="input-group mb-3">
                                    <label className="mb-2">email*</label>
                                    <input type="text" value={signupForm.email} className="sing_my_control" placeholder="Enter Your Username" onChange={handleChange}  name="email" />
                                </div>
                                {/* <p className="error" >{error.email}</p> */}
                                <div className="input-group mb-3">
                                    <label className="mb-2">Password*</label>
                                    <input type="text" value={signupForm.encry_password} className="sing_my_control" placeholder="Enter Your Password" name="encry_password" onChange={handleChange}  />
                                </div>
                                {/* <p className="error" >{error.encry_password}</p> */}
                                <div className="input-group mb-3">
                                    <label className="mb-2">Confirm Password*</label>
                                    <input type="text" value={signupForm.confirm_password} className="sing_my_control" placeholder="Enter Your Password" name="confirm_password:" onChange={handleChange} />
                                </div>
                                {/* <p className="error" >{error.encry_password && error.confirm_password}</p> */}
                            </div>
                            <div className="profile_details">
                                <div className="content_title">
                                    <h3>Profile Details</h3>
                                </div>
                                <div className="input-group mb-3">
                                    <label className="mb-2">name*</label>
                                    <input type="text" value={signupForm.name} className="sing_my_control" placeholder="Enter Your Full Name" onChange={handleChange}  name="name" />
                                </div>
                                {/* <p className="error" >{error.name}</p> */}
                                <div className="input-group mb-3">
                                    <label className="mb-2">DOB*</label>
                                    <input type="date" value={signupForm.dob}
                                        className="sing_my_control" placeholder="mm/dd/yy" name="birthday" onChange={handleChange}/>
                                </div>
                                {/* <p className="error" >{error.dob}</p> */}
                                <div className="form-group">
                                    <label for="">I am a*</label>
                                    <div className="option genders ">
                                        <div className="s-input mr-3">
                                            <input type="radio" name="gender" value={signupForm.gender} id="males1" /><label for="males1">Man</label>
                                        </div>
                                        <div className="s-input">
                                            <input type="radio" name="gender" value={signupForm.gender} id="females1" /><label for="females1">Woman</label>
                                        </div>
                                    </div>
                                </div>
                                {/* <p className="error" >{error.gender}</p> */}
                                <div className="form-group">
                                    <label for="">I am looking for*</label>
                                    <div className="option gender ">
                                        <div className="s-input mr-3">
                                            <input type="radio" name="Target_gender" value={signupForm.Target_gender} id="males1" /><label for="males1">Man</label>
                                        </div>
                                        <div className="s-input">
                                            <input type="radio" name="Target_gender" value={signupForm.Target_gender} id="females1" /><label for="females1">Woman</label>
                                        </div>
                                    </div>
                                </div>
                                {/* <p className="error" >{error.Target_gender}</p> */}
                                <div className="input-group mb-3">
                                    <label className="mb-2">City*</label>
                                    <input type="text" className="sing_my_control" placeholder="Enter Your City" name="city" onChange={handleChange} />
                                </div>
                                {/* <p className="error" >{error.city}</p> */}
                            </div>
                            <button type="submit" className="btn custom_btn acc_btn text-nowrap">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
}
export default Singup;