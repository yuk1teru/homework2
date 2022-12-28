import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App2 extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => contactId !== id),
      };
    });
  };

  onChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addContact = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (!this.checkDublicateName()) {
      this.setState(({ contacts }) => {
        return { contacts: [...contacts, { name, number, id: nanoid() }] };
      });
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  checkDublicateName = () => {
    return this.state.contacts.find(({ name }) => name === this.state.name);
  };

  render() {
    const { name, number, filter, contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onChangeValue={this.onChangeInput}
          addContact={this.addContact}
          name={name}
          number={number}
        />
        <h2>Contacts</h2>
        <Filter onChangeFilter={this.onChangeInput} />
        <ContactList
          filterValue={filter}
          contacts={contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App2;
