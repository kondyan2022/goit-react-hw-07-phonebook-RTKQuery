import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  deleteContactThunk,
  fetchContactsThunk,
  addContactThunk,
} from './thunk';
import { initialState } from './initialState';
import {
  handleFulfilled,
  handleFulfilledDelete,
  handleFulfilledGet,
  handleFulfilledPost,
  handlePending,
  handleRejected,
} from './handleContacts';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunk = [deleteContactThunk, fetchContactsThunk, addContactThunk];

const getArrThunkStatus = status => arrThunk.map(elem => elem[status]);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(fetchContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactThunk.fulfilled, handleFulfilledPost)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...getArrThunkStatus(PENDING)), handlePending)
      .addMatcher(isAnyOf(...getArrThunkStatus(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...getArrThunkStatus(REJECTED)), handleRejected);
  },
});
