import {useState,useEffect, useRef} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { add_new_message } from '../../../store/Messages/messages';
import "./Chatwindow.css"
let Chatwindow = ()=> 
{
    let view= useRef(null);

    let dispatch = useDispatch();
    let messages = useSelector((state)=> state.messages.value);
    let socket = useSelector((state)=> state.socket.value);
    let target = useSelector((state)=> state.target.value)
    useEffect(()=> {view.current.scrollIntoView({ behavior: 'smooth', block: 'start' });console.log("reloding")},[messages])

    //State for Chat Message Box
    const [msg,setMsg] = useState("");
    const handlechange = (event) => 
    {
        setMsg(event.target.value);
    }
    console.log(messages);

    //Listening for New Message
    socket && socket.on('new_message',(ms)=> 
    {
        let Id=localStorage.getItem('id');
        if(ms.sender==Id || ms.receiver==Id)
        {
            dispatch(add_new_message(ms));
        }
    });


    //Handle Message
    let sendMessage = (e)=> 
    {
        e.preventDefault();
        let sender=localStorage.getItem('id');
        socket.emit('create_message',sender,target.id,msg);
        setMsg("");

        //just checking backend
        // socket.emit('fetch_last_message',target.chatid,10);
    }

    //Individual Chat Design
    const message = (msg)=> 
    {
        return (<div className={'chat_individual_message'+ (msg.sender==target.id ? '' : ' chat_right')}>
            <div className='chat_photo'>
                <img></img>
            </div>
            <div className='chat_text_contain'>
            <div className='chat_individual_message_text'>
                <p>{msg.data}</p>
                <p>8:00 AM</p>
            </div>
            <div className='chat_individual_message_cut'></div>
            </div>
        </div>)
    }


    return (<div className='chatting_window'>
        <div className='chattop'>
        <div className='user_details'>
            <div className='user'>
                <div className='chatwindow_img'>

                </div>
                <div className='name'>
                    Jacks Sparrow
                </div>
                <div className='online_status'>
                </div>
            </div>
        </div>
        <ul className='chat_option'>
            <li>Sr</li>
            <li>Sr</li>
            <li>Sr</li>
            <li>Sr</li>
        </ul>
    </div>
    <div className='chat'>
        {messages && messages.map(message)}
        <div ref={view}></div>
    </div>
    <div className='chatting_box'>
        <form onSubmit={sendMessage}>
            <input value={msg} type='text' className='chatting_box_text bg-light' placeholder='Enter message' onChange={handlechange}/>
            <div className='extra_option'>
                    <div>emogi</div>
                    <div>file</div>
                    <div>photo</div>
                    <div>
                        <button type='submit'>Send</button>
                    </div>
            </div>
        </form>
    </div>
    </div>
    )
}
export default Chatwindow;