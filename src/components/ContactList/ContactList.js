import { Component } from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

class ContactList extends Component {
  static propTypes = {
    filterValue: PropTypes.string,
    contacts: PropTypes.array,
    deleteContact: PropTypes.func,
  };
  render() {
    const { filterValue, contacts, deleteContact } = this.props;
    const normalizeFilter = filterValue.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
    return (
      <ul className={s.contacts}>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>{`${name}: ${number}`} </p>
            <button onClick={() => deleteContact(id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
