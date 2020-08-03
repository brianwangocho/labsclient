import React, { useState } from 'react'
import "./chatScreen.css"
import Avatar from "@material-ui/core/Avatar"
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from 'react-router-dom';

function ChatScreen(){
    const[input,setInput]=useState([]);
    const[messages,setMessages]= useState([
        {
            name:'Ellen',
            image:'https://www.gstatic.com/tv/thumb/persons/423/423_v9_bb.jpg',
            message:'wasssuuuup'
        },
        {
            name:'Ellen',
            image:'https://www.gstatic.com/tv/thumb/persons/423/423_v9_bb.jpg',
            message:'how have you been'
        },
        {
            message:'doing good ellen'
        }

    ])

    const handleSend = e =>{
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setInput('')
    }

    return(
        <div className="chatScreen">
        {messages.map(message=>(
            message.name?(
                <div className="chat_message">
                <Avatar
                className="chating_image"
                alt={message.name}
                src={message.image}
                />
                    <p className="chatting_text">{message.message}</p>
                    
                </div>

            ):(
                <div className="chat_message">
                <p className="chatting_textuser">{message.message}</p> 
                <Link to={`/videocall/${message.name}`}>
                <PhoneIcon/>
                </Link>
              
                </div>

                
            )
           
        ))}
        <div>
            <form className="input__message">
                <input type="text" 
                onChange={(e)=>setInput(e.target.value)}
                className="inputField__message"
                 placeholder="write message"/>
                <button className="send__button" onClick={handleSend}>SEND</button>
            </form>

        </div>

        </div>
    )

}
export default ChatScreen