import { useState } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import css from './ContactForm.module.css'

const ContactForm = ({ onFormSubmit, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    reset();

    const isNameExist = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
      if (isNameExist) {
        toast.error(`${name} is already in contacts.`);
        return
      }
    
    onFormSubmit({ name, number });
  }

  const reset = () => {
    setName('')
    setNumber('')
  }

      return (
        <form className={css.formContainer} onSubmit={handleSubmit}>
          <label className={css.formLabel}>
            Name
            <input
              className={css.formInput}
              value={name}
              onChange={handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label className={css.formLabel}>
            Number
            <input
              className={css.formInput}
              value={number}
              onChange={handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.formButton} type='submit' >Add contact</button>
          <Toaster
            position='top-right'
            toastOptions={{
              duration: 1500,
              style: {
                borderRadius: '20px',
              padding: '16px',
              color: '#b83b5e',
            }
          }}/>
        </form>
    )
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.string.isRequired))
}

export default ContactForm;




