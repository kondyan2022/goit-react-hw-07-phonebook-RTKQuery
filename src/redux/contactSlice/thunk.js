import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContact, fetchContacts, addContact } from 'utils/mockapi';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await fetchContacts();
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async data => {
    return await addContact(data);
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return await deleteContact(id);
  }
);
