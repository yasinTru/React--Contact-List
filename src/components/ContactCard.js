import React from "react";
import userAvatar from "../images/userAvatar.png";

const ContactCard = (props) =>
{
    const {id, name, email}= props.contact;

    return(
        <div className="item">
            <img className= "ui avatar image" src={userAvatar} alt="user"/>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i  className="trash alternate outline icon"
            style={{color:"purple", marginTop:"10px"}}
            onClick={()=>props.clickHandler(id)}></i>
        </div>
    );
};




export default ContactCard;