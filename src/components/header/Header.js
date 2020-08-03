import React from 'react';
import PersonIcon from "@material-ui/icons/Person"
import ForumIcon from "@material-ui/icons/Forum"
import "./header.css";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import {Link,useHistory} from "react-router-dom"


export default function Header({backbutton}){
    //get user history for the session
    const history = useHistory();

    return(
        <div className="header">
        {backbutton?(
            <IconButton onClick={()=>history.replace(backbutton)}>
            <ArrowBackIosIcon  className="header__icon"/>
            </IconButton>

        ):(    <IconButton>
            <PersonIcon  size="medium"className="header__icon" />
            </IconButton>)}
     
        <p>Labs Image</p>

        <Link to="/chats">
        <IconButton>
        <ForumIcon className="header__icon"/>
        </IconButton>
        </Link>
     
        </div>
    )

}