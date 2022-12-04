import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {make_connection,close_connecton} from '../../../store/socket/socket'
import Chatwindow from '../../Chat/ChatWindow/Chatwindow'
let Life = () => 
{
    let socket = useSelector((state)=> state.socket.value);
    console.log(socket);
    return (<div style={{paddingTop: "70px"}}>
        <Chatwindow>

        </Chatwindow>
    </div>)
}
export default Life;