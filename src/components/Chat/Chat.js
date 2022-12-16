import { React, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";

import beforeLoginImg from "../../static/beforeLogin/chating.webp"

import messageImg from "../../static/chats/avatar-2.feb0f89de58f0ef9b424.jpg";

//Import Reducers Action
import { login, logout } from "../../store/login/login";
import { make_connection, close_connecton } from "../../store/socket/socket";
import {
  clear_messages,
  insert_new_messages,
} from "../../store/Messages/messages";
import { set_contacts, clear_contacts } from "../../store/Users/users";
import { clearTarget, setTarget } from "../../store/OpenChat/target";

//Import Individual Componets
import ChatWindow from "./ChatWindow/Chatwindow";

import { io } from "socket.io-client";
import axios from "axios";
import "./Chat.css";
import user_logo from "../../static/user.jpg";
import { useNavigate } from "react-router-dom";
let Chat = () => {




  // login state 

  const [isLogin, setIsLogin] = useState(true);

  
  const navigate = useNavigate();

  function goToSignUpPage() {
    navigate("/singup");
  }


  //Redux Use redux react toolkit
  const islogin = useSelector((state) => state.login.value);
  const dispatch = useDispatch();

  //Set Open Messages
  let reducerMsgs = useSelector((state) => state.messages.value);

  const [socketid, setSocketid] = useState({});
  const [socket, setSocket] = useState(null);
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [reciver, setReciver] = useState("");
  //Store State of Current Open Chat Id
  const [openchatid, setOpencahtid] = useState("");

  

  useEffect(() => {
    console.log(chats);

    dispatch(set_contacts(chats));
  }, [chats]);

  //State for Chat Message Box
  const [msg, setMsg] = useState("");
  const handlechange = (event) => {
    setMsg(event.target.value);
  };

  //Make Web Socket Connection With Backend
  useEffect(() => {
    const newsocket = io("127.0.0.1:4000", {
      auth: {
        userid: localStorage.getItem("id"),
        token: localStorage.getItem("token"),
      },
    });
    setSocket(newsocket);
    dispatch(clear_messages());
    //Close Connection on Leaving
    return () => {
      newsocket.close();
    };
  }, []);

  useEffect(() => {
    dispatch(make_connection(socket));
  }, [socket]);

  //Fetch User (Friends List)
  useEffect(() => {
    var data = JSON.stringify({
      id: localStorage.getItem("id"),
      token: localStorage.getItem("token"),
    });

    var config = {
      method: "post",
      url: "http://localhost:4000/backendapi/chat/fetchcontact",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setChats(response.data);
        setSocketid(JSON.parse(localStorage.getItem("Chats")));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //Helper Function that Return userDetails Window
  const userDetails = (user) => {
    return (
      <div className="leftside">
        <div
          className="user_details"
          onClick={(event) => {
            openMessageWindow(event, user._id);
          }}
        >
          <div className="messageImg">
            <img src={messageImg} />
          </div>
          <div className="user_details_name_time">
            <div className="name">
              <div>{user.name}</div>
              <div>time</div>
            </div>
            <div className="last_message">hiii</div>
          </div>
        </div>
      </div>
    );
  };

  //Individual Message
  // const chat = (message) =>
  // {
  //     return (
  //       //Set Class Based on (Message Varrible Vales)
  //       <div className="msg_container" onClick={(ev)=> {mark_message(openchatid,message._id)}}>
  //         <div>
  //             <h4>{message.data}</h4>
  //             //show tick or dobule tick bases on (message.isseen values)
  //         </div>
  //       </div>
  //     );
  // }

  //Chat Area
  // const userChats = (Chats) =>
  // {
  //     return (<div className="chat_details">
  //       <div className="oldchat">
  //         {Chats.map(chat)}
  //       </div>
  //       <div className="send_message">
  //         <input type="text" name="msg" onChange={handlechange}></input>
  //         <button onClick={send_message}>Send Message</button>
  //       </div>
  //     </div>);
  // }

  const openMessageWindow = (event, rec) => {
    //Set Target User Details
    let ob = { id: rec, chatid: socketid[rec] };
    dispatch(setTarget(ob));

    setOpencahtid(socketid[rec]);
    socket.on("message", (data) => {
      setMessages(data.conversations);
      dispatch(insert_new_messages(data.conversations));
      setReciver(rec);
    });
    socket.emit("fetch_last_message", socketid[rec], "0");
  };

  //Send New Message
  const send_message = () => {
    let sender = localStorage.getItem("id");
    socket.emit("create_message", sender, reciver, msg);
  };

  //Litening for New Message
  socket &&
    socket.on("new_message", (ms) => {
      setMessages([...messages, ms]);
    });

  //Testing Mark as seen Feature
  const mark_message = (chatid, msgid) => {
    socket.volatile.emit("mark_as_read", chatid, msgid);
  };

  //Join All rooms
  socket &&
    chats.length > 0 &&
    socket.emit("join_all_rooms", localStorage.getItem("id"));

  return (
    <div>
      {isLogin ? (
        <div>
          <div className="container-fluid chat-container">
            <div className="row">
              <div className="col-md-6 col-sm-12  chatList ">
                <header classNmae="header_chat">
                  <div className="userimg">
                    <img src={user_logo} className="cover" />
                    chats
                  </div>
                  <div class="search-box chat-search-box">
                    <div class="mb-3 rounded-lg input-group input-group-lg">
                      <span class="input-group-text text-muted bg-light pe-1 ps-3">
                        <AiOutlineSearch />
                      </span>
                      <input
                        placeholder="Search messages or users"
                        type="text"
                        class="form-control bg-light form-control"
                        value=""
                      />
                      {/* 
<input
            value={msg}
            type="text"
            className="chatting_box_text bg-light"
            placeholder="Enter message"
            onChange={handlechange}
          /> */}
                    </div>
                  </div>
                </header>

                <h2 className="recents">Recent</h2>

                <div className="userDetails">{chats.length==0? "You don't Have Any Frind":chats.map(userDetails)}</div>
              </div>

              <div className="col-md-6 col-sm-12">
                {/* {userChats(messages)} */}
                <ChatWindow />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="brforeLoginchat" >
          <img  className="BeforeLoginImg" src={beforeLoginImg} alt="chatNow"/>
          <button className="custom-button" onClick={goToSignUpPage} >join Now</button>
        </div>
      )}
    </div>
  );
};
export default Chat;
