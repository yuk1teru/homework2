import { Component } from 'react';
import s from './ContactForm.module.css';
import { PropTypes } from 'prop-types';

class ContactForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    onChangeValue: PropTypes.func,
    addContact: PropTypes.func,
  };
  render() {
    const { onChangeValue, addContact, name, number } = this.props;
    return (
      <form className={s.form} onSubmit={addContact}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={onChangeValue}
            required
          />
        </label>
        <label>
          Tel
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={onChangeValue}
            required
          />
        </label>
        <button>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
