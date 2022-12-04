import {useState,useEffect} from 'react';
import "./Chatwindow.css"
let Chatwindow = ()=> 
{
    let messages = [{data:"hlo"},{data:"hii"},{data:"kesse ho"},{data:"I am Working"}]
    //Individual Chat Design
    const message = (msg)=> 
    {
        return (<div className='chat_individual_message'>
            <div className='chat_photo'>
                <img></img>
            </div>
            <div>
            <div className='chat_individual_message_text'>
                <p>{msg.data}</p>
                <p>8:00 AM</p>
            </div>
            <div className='chat_individual_message_cut'></div>
            </div>
        </div>)
    }


    return (<div>
        <div className='chatwindow'>
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
        {messages.map(message)}
    </div>
    </div>
    )
}
export default Chatwindow;