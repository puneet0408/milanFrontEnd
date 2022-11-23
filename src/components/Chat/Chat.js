import { React,useState,useEffect,useCallback } from "react"
import {Link} from 'react-router-dom'
import {io} from 'socket.io-client'
import './Chat.css'
let Chat = () => 
{
    const [socket,setSocket] = useState(null);

    useEffect(() => 
    {
        const newsocket = io("127.0.0.1:4000");
        setSocket(newsocket);
        return () => 
        {
            newsocket.close();
        }
    },[setSocket]);
    const testing = ()=> 
    {
        socket.emit('join_all_rooms','637b47dc51126d4f5d350d78');
    }
    return (<div>
        { socket ? (
        <div className="chat-container">
          {socket.id} connected
          <button onClick={testing} >
            Test Your Web Socket Backend
          </button>
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>);
}
export default Chat;