import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactItem.module.css';

const ContactItem = ({id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.listItem} key={id}>
      <p>{name}: <span>{number}</span></p>
      <button
        className={css.listBtn}
        type="button"
      
        onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  )
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}

export default ContactItem;