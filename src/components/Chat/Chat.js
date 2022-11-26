import { React,useState,useEffect,useCallback } from "react"
import {Link} from 'react-router-dom'
import {io} from 'socket.io-client'
import './Chat.css'
let Chat = () => 
{
    const [socket,setSocket] = useState(null);

    useEffect(() => 
    {
        const newsocket = io("127.0.0.1:4000",
        {
            auth:
            {
              userid: localStorage.getItem('id'),
              token: localStorage.getItem('token')
            }        
        });
        setSocket(newsocket);
        return () => 
        {
            newsocket.close();
        }
    },[setSocket]);
    const testing = ()=> 
    {
        // socket.emit('join_all_rooms','637b4e231a68c0c26f074a85');
        // socket.emit('create_message','637b4e231a68c0c26f074a85','637b4de71a68c0c26f074a83','Hii Brother');
        // socket.emit('unseen_message','637b47dc51126d4f5d350d78','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2I0N2RjNTExMjZkNGY1ZDM1MGQ3OCIsImlhdCI6MTY2OTI2NjAyOH0.w8-OpdEvMAf-zEM8762dph9l6c-_UFS94YYzQ3KRyKo');
    }
    // socket.on('new_message',(msg)=>
    // {
    //     console.log(msg);
    // });
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