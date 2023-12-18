import { Component } from "react";
import Contacts from "./Contscts/Contacts";
import { FormContact } from "./FormContact/FormContact";
import { nanoid } from "nanoid";
import ContactList from "./ContactList/ContactList";


class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: [],
    name: '',
    number: '',
    showeContacts: false
  }


  contactFilter = ({ name }) => {
    if (name) {
      const foundContakt = this.state.contacts.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
      this.setState({
        filter: [...foundContakt]
      })
    } else {
      this.setState({
        filter: [...this.state.contacts]
      })
    }
  }

  createUser = (data) => {
    if (this.state.contacts.some(item => item.name === data.name)) {
      alert(`${data.name} is already in contacts`)
    } else {
      this.state.contacts.push({ ...data, id: nanoid() })
      this.setState({ ...data, showeContacts: true, filter: this.state.contacts });
    }
  }

  delete = (nameDel) => {
    this.state.filter.splice(this.state.filter.findIndex(arr => arr.id === nameDel), 1)
    this.setState({
      filter: [...this.state.filter],
      contacts: [...this.state.filter]
    })
  }

  render() {
    return (
      <>
        <FormContact createUser={this.createUser} />
        <Contacts contactFilter={this.contactFilter} />
        {this.state.showeContacts && <ContactList delete={this.delete} contactsArrFilter={this.state.filter} contactsArr={this.state.contacts} />}
      </>
    );
  }
};

export default App 