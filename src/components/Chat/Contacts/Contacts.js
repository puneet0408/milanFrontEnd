import {useState,useEffect} from  'react'
import './Contacts.css'
let Contacts = ()=> 
{
    let users = ['jon','Nik','Lisa','Una','jenifer'];
    return(<>
    <div className='contact_container'>
        <div className='contact_top'>
            <h3>
                Chats
            </h3>
            <input type='text'/>
        </div>
        <div className='recent'>

        </div>
    </div>
    </>)
}
export default Contacts