import { useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css'

const ContactList = () => {
const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name && contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={css.listContainer}>
      {filteredContacts.map(contact => (
          <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
      />
      ))}
    </ul>
  );
}
export default ContactList;




