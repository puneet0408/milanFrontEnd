import { React, useState , useEffect } from "react"
import img from '../../../static/singup/formleft.jpg'
import './Singup.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Singup = () => {

    let [submitting,setSubmitting] = useState(false);

    const [signupForm, setFormData] = useState({
        username: "",
        name: "",
        email: "",
        number: "",
        city: "",
        password: "",
        dob: "",
        gender: "",
        Target_gender: "",
        password: "",
        confirm_password: "",
    });
   
    
    
      const navigate = useNavigate();
 

    const [error, setError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    function handleChange(event) {
      const { name, value } = event.target;
      setFormData((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
      setError(validate(signupForm));

    }
  
    const handleSubmit = (event) => {
           event.preventDefault();
           console.log(signupForm);
           var config = {
            method: 'post',
            url: 'http://localhost:4000/backendapi/singup',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : signupForm
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  
    useEffect(() => {
      console.log(error);
      if (Object.keys(error).length === 0 && isSubmit) {
        setIsSubmit({ btnText: "submitting...", disabled: true });
      }
    }, [error, isSubmit]);


    const validate = (values) => {
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        //  const pass =
        //  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{6, 20}/;
        if (!values.username) {
            error.username = "userName is required";
        }else if (values.username.length > 15) {
            error.username = "Must be 15 characters or less";
        } else if (!values.email) {
            error.email = "email is required";
        } else if (!regex.test(values.email)) {
            error.email = "this is not a valid format";
        }else if (!(values.password && values.confirm_password)) {
            error.confirm_password = "password is required";
            error.password = "password is required";
          } else if (!values.name) {
            error.name = "name is required";
        } else if (values.name.length > 15) {
            error.name = "Must be 15 characters or less";
         } 
        //else if(!values.gender){
        //     error.gender = "gender is required";
        // } else if (!values.Target_gender){
        //     error.Target_gender = "Target_gender is required";
        // }
       else if (values.password !== values.confirm_password) {
            error.confirm_password = "password did'nt match";
        }
      return error;

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
                        <form  className="sing_form" onSubmit={handleSubmit} >
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
                                        className="sing_my_control" placeholder="Enter Your Username"
                                         onChange={handleChange} name="username" />
                                        
                                </div>
                        <p className="error" >{error.username}</p>
                                <div className="input-group mb-3">
                                    <label className="mb-2">email*</label>
                                    <input type="text" value={signupForm.email} className="sing_my_control" placeholder="Enter Your email" onChange={handleChange}  name="email" />
                                </div>
                                <p className="error" >{error.email}</p>
                                <div className="input-group mb-3">
                                    <label className="mb-2">Password*</label>
                                    <input type="password" value={signupForm.password} className="sing_my_control" placeholder="Enter Your Password" name="password" onChange={handleChange}  />
                                </div>
                                <p className="error" >{error.encry_password}</p>
                                <div className="input-group mb-3">
                                    <label className="mb-2">Confirm Password*</label>
                                    <input type="password" value={signupForm.confirm_password} className="sing_my_control" placeholder="Enter Your Password" name="confirm_password" onChange={handleChange} />
                                </div>
                                <p className="error" >{error.confirm_password}</p>
                            </div>
                            <div className="profile_details">
                                <div className="content_title">
                                    <h3>Profile Details</h3>
                                </div>
                                <div className="input-group mb-3">
                                    <label className="mb-2">name*</label>
                                    <input type="text" value={signupForm.name} className="sing_my_control" placeholder="Enter Your Full Name" onChange={handleChange}  name="name" />
                                </div>
                                <p className="error" >{error.name}</p>
                                <div className="input-group mb-3">
                                    <label className="mb-2">DOB*</label>
                                    <input type="date" value={signupForm.dob}
                                        className="sing_my_control" placeholder="mm/dd/yy" name="dob" onChange={handleChange}/>
                                </div>
                                <p className="error" >{error.dob}</p>
                                <div className="form-group" >
                                    <label for="">I am a*</label>
                                    <div className="option genders ">
                                        <div className="s-input mr-3">
                                            <input type="radio" name="gender"  value="Male" id="males1" onChange={handleChange}/><label >Man</label>
                                        </div>
                                        <div className="s-input">
                                            <input type="radio" name="gender" value="Female" onChange={handleChange} id="females1" /><label >Woman</label>
                                        </div>
                                    </div>
                                </div>
                                {/* <p className="error" >{error.gender}</p> */}
                                <div className="form-group">
                                    <label for="">I am looking for*</label>
                                    <div className="option gender ">
                                        <div className="s-input mr-3">
                                            <input type="radio" name="Target_gender" value="Male" id="males1" onChange={handleChange} /><label >Man</label>
                                        </div>
                                        <div className="s-input">
                                            <input type="radio" name="Target_gender" value="Female" id="females1" onChange={handleChange} /><label >Woman</label>
                                        </div>
                                    </div>
                                </div>
                                {/* <p className="error" >{error.Target_gender}</p> */}
                                <div className="input-group mb-3">
                                    <label className="mb-2">City*</label>
                                    <input type="text" className="sing_my_control" placeholder="Enter Your City" name="city" onChange={handleChange} />
                                </div>
                                <p className="error" >{error.city}</p>
                            </div>
                            <button type="submit" className="btn custom_btn acc_btn text-nowrap">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
}
export default Singup;