
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice'; 
import { getContacts } from 'redux/selectors'; 
import { nanoid } from '@reduxjs/toolkit';
import toast, { Toaster } from 'react-hot-toast';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const number = formData.get('number');

    if (contacts.some(contact => contact.name === name)) {
      toast.error(`${name} уже есть в контактах.`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    event.target.reset(); 
  };

  return (
    <form className={css.formContainer} onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        Name
        <input
          className={css.formInput}
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
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.formButton} type="submit">
        Add contact
      </button>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
          style: {
            borderRadius: '20px',
            padding: '16px',
            color: '#b83b5e',
          },
        }}
      />
    </form>
  );
};

export default ContactForm;


