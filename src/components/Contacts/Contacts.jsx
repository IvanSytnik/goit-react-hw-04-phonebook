import React, {useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import SubmitContacts from '../SubmitContacts/SubmitContacts'
import Filter from '../Filter/Filter'
import RenderContacts from '../RenderContacts/RenderContacts'

// class Contacts extends Component {
//     state = {
//      contacts: [],
//        filter: ''
//     }


    
   
//     addContacts = data => {
//      if(this.state.contacts.find(contact => contact.name === data.name))
//      {
//        alert(`${data.name} is already in contacts`)
//      }
//       else {
//        const contact = {
//          id: nanoid(),
//          name: data.name,
//          number: data.number
//        }
//       this.setState(update => ({
//        contacts: [contact, ...update.contacts]
//       }))
//       console.log(this.state)
//      }
//      };

//     contactsDelete = contactsID => {
       
//        this.setState(update => ({
//         contacts: update.contacts.filter(contact => contact.id !== contactsID)
//        }))
       
//      }

//     changeFilter = e => {
//      this.setState({filter: e.currentTarget.value})
//     }
    
//     componentDidUpdate(prevProps, prevState) {
//       if(this.state.contacts !== prevState.contacts) {
//         localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//         console.log("Saved localStorage")
//       }
//     }

//     componentDidMount() {
//       const local = localStorage.getItem('contacts');
//       const contacts = JSON.parse(local)

//       if(contacts) {
//         this.setState({
//           contacts: contacts
//         })
//       }
     
//     }

//     render() {
//      const normFilter = this.state.filter.toLowerCase();
//      const filterContacts = this.state.contacts.filter(contact => 
//        contact.name.toLowerCase().includes(normFilter))
//      return(
//        <>
//          <SubmitContacts onSubmit={this.addContacts}></SubmitContacts>
//          <Filter value={this.state.filter} onChange={this.changeFilter}></Filter>
//          <RenderContacts items={filterContacts} contactsDelete={this.contactsDelete}></RenderContacts>
//          </>
//      )
//     }
//    }


export default function Contacts() {
  let [contacts, setContacts] = useState(() => {
      return JSON.parse(window.localStorage.getItem('contacts') ?? [])
  })
  let [filter, setFilter] = useState('')
  let [name, setName] = useState('')
  let [number, setNumber] = useState('')
  
  
  const handleName = event => {
      setName(name = event.target.value )
  }
  
  const handleNumber = event => {
      setNumber(number = event.target.value)
     }
  
  useEffect( ()=> {
  window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const handleSubmit= e => {
      e.preventDefault();
      const contact = {id: nanoid(), name: name, number: number}
      if(contacts.find(contact => contact.name === name)){
          alert(`${name} is already in contacts`)
      }
      else {
          setContacts(contacts = [contact, ...contacts])
      console.log(contacts)
      setName(name = "" )
      setNumber(number = "" )
      }
      
  }

  const contactsDelete = contactsID => {
      setContacts(contacts = contacts.filter(contact => contact.id !== contactsID) )
  }
  
  const changeFilter = e => {
      setFilter(filter = e.currentTarget.value)
  }

  const normFilter = filter.toLowerCase();
  const filterContacts = contacts.filter(contact => 
     contact.name.toLowerCase().includes(normFilter))

  return (
      <>
      
      
      <SubmitContacts name={name} number={number} handleSubmit={handleSubmit} handleName={handleName} handleNumber={handleNumber}></SubmitContacts>
      <Filter value={filter} onChange={changeFilter}></Filter>
       <RenderContacts items={filterContacts} contactsDelete={contactsDelete}></RenderContacts>
     </>
     
    
      )
}
   