import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import './App.css';
import {uuid } from  "uuidv4";
import {useState, useEffect} from "react";

function App() {

  const LOCAL_STORAGE_KEY= "contacts";
 const [contacts, setContacts]= useState([]);
  
 const addContactHandler = (contact) =>
 {
  console.log(contact);
  setContacts([...contacts, {id: uuid(), ...contact}]);
 }

 const deleteContact = (id) => 
 {
   const newContactList= contacts.filter((contact)=>
   {
     return contact.id !== id;
   })

    setContacts(newContactList);
 }

 useEffect(() => {

  const getContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(getContacts) setContacts(getContacts);
  
  },[]);

useEffect(() => {

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
   
},[contacts]);



 return (

    <div className="ui container">
     <Header/>
    <AddContact  addContactHandler= {addContactHandler}/>
    <ContactList contacts= {contacts} getContactId= {deleteContact}/>
    
       
     </div> 
  );
}

export default App;
