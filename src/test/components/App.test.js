import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { App } from '../App';
import { NoteListTest } from './NoteList.test';

describe('App component', () => {
  it('renders NoteList component', async () => {
    const { getByText } = render(<App />);
    const noteListElement = await waitFor(() => getByText(/Note List/));
    expect(noteListElement).toBeInTheDocument();
  });

  it('calls NoteList component methods', async () => {
    const { getByRole } = render(<App />);
    const noteListElement = await waitFor(() => getByRole('note-list'));
    expect(NoteListTest.testGetNotes).toHaveBeenCalledTimes(1);
  });
});