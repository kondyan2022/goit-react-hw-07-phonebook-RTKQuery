import { useMemo } from 'react';
import UList from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/contactSlice/thunk';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const contactList = useMemo(
    () =>
      filter
        ? contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )
        : contacts,
    [contacts, filter]
  );

  return (
    <UList>
      {contactList.map(({ id, name, phone }) => (
        <li key={id}>
          {`${name}: ${phone}`}
          <button
            type="submit"
            onClick={() => {
              dispatch(deleteContactThunk(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </UList>
  );
};

export default ContactList;
