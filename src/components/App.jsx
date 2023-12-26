import { Component } from "react";
import Contacts from "./Contscts/Contacts";
import ContactList from "./ContactList/ContactList";
import FormContact from "./FormContact/FormContact";


class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }


  contactFilter = ({ name }) => {
    this.setState(() => {
      return {
        filter: name,
      }
    })
  }



  createUser = (data) => {
    console.log(data);
    if (this.state.contacts.some(item => item.name.toLowerCase() === data.name.toLowerCase())) {
      alert(`${data.name} is already in contacts`)
    } else {
      this.setState(prevState => (
        { contacts: [...prevState.contacts, data] }
      ));
      console.log(this.state.contacts);
      console.log(this.state.filter);
    }
  }

  delete = (nameDel) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== nameDel),
    }));
  }

  render() {
    return (
      <>
        <FormContact createUser={this.createUser} />
        <Contacts contactFilter={this.contactFilter} />
        {this.state.contacts.length !== 0 &&
          <ContactList delete={this.delete}
            contactsArr={this.state.contacts}
            filter={this.state.filter} />}
      </>
    );
  }
};

export default App 