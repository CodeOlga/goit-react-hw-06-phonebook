import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.mainContainer}>
      <h1 className={css.headers}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.headers}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;



















