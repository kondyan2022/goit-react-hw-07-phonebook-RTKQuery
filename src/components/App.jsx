import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/contactSlice/thunk';
import { getError, getIsLoading } from 'redux/selectors';
import { Error } from './Heading/Heading.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && <p> Loading...</p>}
      {error && <Error>{error}</Error>}

      <Filter />
      <ContactList />
    </div>
  );
};
