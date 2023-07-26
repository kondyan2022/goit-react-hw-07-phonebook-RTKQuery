import { useMemo } from 'react';
import UList from './ContactList.styled';
import { getFilter } from 'redux/selectors';
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from 'redux/contactSliceRTK';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data: contacts } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

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
      {contactList?.map(({ id, name, phone }) => (
        <li key={id}>
          {`${name}: ${phone}`}
          <button
            type="submit"
            onClick={() => {
              deleteContact(id);
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
