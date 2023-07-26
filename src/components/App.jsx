import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Error } from './Heading/Heading.styled';
import { useFetchContactsQuery } from 'redux/contactSliceRTK';

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  const { isLoading, error } = useFetchContactsQuery();

  // useEffect(() => {
  //   dispatch(fetchContactsThunk());
  // }, [dispatch]);

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
