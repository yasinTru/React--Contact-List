import React from "react";
import ContactCard from "./ContactCard";

const ContactList= (props)=>
{

    const deleteContact=  (id) =>
    {
        props.getContactId(id);
    };
    const renderContacts= props.contacts.map((contact)=>
    
        {
      return(
        <ContactCard contact={contact} clickHandler={deleteContact} key ={contact.id}> </ContactCard>
      
        );
      });

    return(

        <div className="ui celled list"> Contact List{renderContacts }</div>


    );

}

export default ContactList;