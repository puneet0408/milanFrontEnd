import { React, useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../../store/login/login"
import { Link } from 'react-router-dom'
import { io } from 'socket.io-client'
import axios from "axios"
import './Chat.css'
let Chat = () => {
  //Redux Use redux react toolkit
  const islogin = useSelector((state) => state.login.value);
  const dispatch = useDispatch();

  const [socket, setSocket] = useState(null);
  const [chats, setChats] = useState([]);

  //Make Web Socket Connection With Backend
  useEffect(() => {
    const newsocket = io("127.0.0.1:4000",
      {
        auth:
        {
          userid: localStorage.getItem('id'),
          token: localStorage.getItem('token')
        }
      });
    setSocket(newsocket);
    return () => {
      newsocket.close();
    }
  }, []);

  //Fetch User (Friends List)
  useEffect(() => {
    var data = JSON.stringify({
      "id": localStorage.getItem('id'),
      "token": localStorage.getItem('token')
    });

    var config = {
      method: 'post',
      url: 'http://localhost:4000/backendapi/chat/fetchcontact',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setChats(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, []);


  //Show Messages
  let show_messages = (event,id) => {
    console.log("id",id);
  }

  //Helper Function that Return userDetails Window
  const userDetails = (user) => {
    return (
      <div className="user_details" onClick={(event) => { show_messages(event,user._id); }}>
        <div  className="photo"><img src={user.photo} /></div>
        <div className="user_details_name_time">
          <div className="name">
            <div>{user.name}</div>
            <div>Time</div>
          </div>
          <div className="last_message">
            hiii
          </div>
        </div>
      </div>);
  }

  //Chat Area
  const userChats = (Chats) => 
  {
      
  }

  const testing = () => {
    // socket.emit('join_all_rooms','637b4e231a68c0c26f074a85');
    // socket.emit('create_message','637b4e231a68c0c26f074a85','637b4de71a68c0c26f074a83','Hii Brother');
    // socket.emit('unseen_message','637b47dc51126d4f5d350d78','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2I0N2RjNTExMjZkNGY1ZDM1MGQ3OCIsImlhdCI6MTY2OTI2NjAyOH0.w8-OpdEvMAf-zEM8762dph9l6c-_UFS94YYzQ3KRyKo');
  }
  // socket.on('new_message',(msg)=>
  // {
  //     console.log(msg);
  // });
  return (<div>
    <div className="container-fluid chat-container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          {chats.map(userDetails)}
        </div>
        <div className="col-md-6 col-sm-12">Detials message or simple Photo</div>
      </div>
    </div>
  </div>);
}
export default Chat;