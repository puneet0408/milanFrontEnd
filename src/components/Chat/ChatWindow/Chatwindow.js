import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_new_message } from "../../../store/Messages/messages";
import { BsEmojiLaughing } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { AiFillAudio } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import {BiTimeFive} from "react-icons/bi"


import "./Chatwindow.css";
let Chatwindow = () => {
  let view = useRef(null);

  let dispatch = useDispatch();
  let messages = useSelector((state) => state.messages.value);
  let socket = useSelector((state) => state.socket.value);
  let target = useSelector((state) => state.target.value);
  useEffect(() => {
    view.current.scrollIntoView({ behavior: "smooth", block: "start" });
    console.log("reloding");
  }, [messages]);

  //State for Chat Message Box
  const [msg, setMsg] = useState("");
  console.log(msg);
  const [productSearchByUser, setproductSearchByUser] = useState("");
  const [openSearchBar, setOpnSerchBar] = useState(false);
  const [showMsg , setShowMsg] = useState("");

  // useEffect(()=>{
  //   useEffect(() => {
  //     setShowMsg(
  //       msg
  //         .filter((user) =>
  //           user.data.toLocaleLowerCase().includes(productSearchByUser)
  //         )
  //     );
  //   }, [ SearchBar, productSearchByUser]);
  
  //   useEffect(() => {
  //     if (openSearchBar === false) {
  //       setproductSearchByUser("");
  //     }
  //   }, [SearchBar])
  //  })

  console.log(showMsg);

  function SearchBar(){
    setOpnSerchBar(prev => !prev);
  }

  //Print time in 12 hourt format
  function ampmtime(date)
  {
      let res="";
      let hr=date.getHours();
      let mn=date.getMinutes();
      let am=true;
      if(hr>=12)
      {
        am=false;
        hr=hr-12;
      }
      res=res+hr+":"+mn+(am?" AM":" PM");
      return res;
  }



  const handlechange = (event) => {
    setMsg(event.target.value);
  };
  console.log(messages);

  //Listening for New Message
  socket &&
    socket.on("new_message", (ms) => {
      let Id = localStorage.getItem("id");
      if (ms.sender === Id || ms.receiver === Id) {
        dispatch(add_new_message(ms));
      }
    });

  //Handle Message
  let sendMessage = (e) => {
    e.preventDefault();
    let sender = localStorage.getItem("id");
    socket.emit("create_message", sender, target.id, msg);
    setMsg("");

    //just checking backend
    // socket.emit('fetch_last_message',target.chatid,10);
  };

  //Individual Chat Design
  const message = (msg) => {
    let tm = msg.createdAt;
    let date = new Date(tm);
    return (
      <div
        className={
          "chat_individual_message" +
          (msg.sender === target.id ? "" : " chat_right")
        }
      >
        <div className="chat_photo">
          <img></img>
        </div>
        <div className="chat_text_contain">
          <div className="chat_individual_message_text">
            <p>{msg.data}</p>
            <p> <BiTimeFive/> {ampmtime(date)} </p>
          </div>
          <div className="chat_individual_message_cut"></div>
        </div>
      </div>
    );
  };



  return (
    <div className="chatting_window">
      <div className="chattop">
        <div className="user_detailschatWindow">
          <div className="user">
            <div className="chatwindow_img"></div>
            <div className="name">Jacks Sparrow</div>
            <div className="online_status"></div>
          </div>
          <div onClick={SearchBar} >
            {openSearchBar ? (
              <p
                style={{
                  fontSize: "2rem",
                  color: "#000",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
               >
                <GrClose/>
         
              </p>
            ) : (
              <p
                style={{
                  fontSize: "2rem",
                  color: "#000",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
                >
               <BsSearch/>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="chat">
        {messages && messages.map(message)}
        {openSearchBar&&     <div class="searchBar">
          {" "}
      
        </div>}
        
        <div ref={view}></div>
       {openSearchBar&& <div className="search">
            <input
              type="text"
              placeholder="Search Products"
              onChange={(event) => setproductSearchByUser(event.target.value)}
            />
          </div>}
        {/* <div className="emojiBox">
          {emojis && (
            <div>
              <EmojiPicker />
            </div>
          )}
        </div> */}
      </div>
      <div className="chatting_box">
        <form onSubmit={sendMessage}>
          <input
            value={msg}
            type="text"
            className="chatting_box_text bg-light"
            placeholder="Enter message"
            onChange={handlechange}
          />
          <div className="extra_option">
            <div>
              {" "}
              <BsEmojiLaughing />
            </div>

            <div>
              <GrAttachment/>
            </div>
            <div><AiFillAudio/></div>
            <div>
              <button type="submit" className="custom-button " >Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Chatwindow;
