import {React,useState,useEffect} from "react";
import axios from  "axios"
import "./singin.css"
const Singin = () => 
{
    let [FormData,setFormData] = useState();
    let [error,setError] = useState();
    let handleChange = (event) => 
    {
        let {name,value} = event.target;
        setFormData({...FormData, [name]:value});
    }
    //BackEnd API Call For Login 
    var config = {
        method: 'post',
        url: 'http://localhost:4000/backendapi/login',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : FormData
      };
      const login = () => 
      {
            axios(config)
            .then(function (response) {
                localStorage.setItem("id",response.data.id);
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("name",response.data.name);
                localStorage.setItem("role",response.data.role);
            })
            .catch(function (error) {
            console.log(error);
            });
      }



    return (
    <div className="login">
        <h3>Login Temprary Window</h3>
        <input onChange={handleChange} type="text" placeholder="Enter User Name" name="username"/>
        <input onChange={handleChange} type="password" placeholder="Password" name="password"/>
        <button onClick={login}>LOGIN</button>
    </div>
    )
}
export default Singin