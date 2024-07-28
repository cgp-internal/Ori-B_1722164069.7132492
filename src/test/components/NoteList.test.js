import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { NoteList } from './NoteList';
import { NoteTest } from './Note.test';

describe('NoteList component', () => {
  it('renders Note components for each note', () => {
    const notes = [
      { id: 1, title: 'Note 1', content: 'This is note 1' },
      { id: 2, title: 'Note 2', content: 'This is note 2' },
    ];
    const { getAllByRole } = render(<NoteList notes={notes} />);
    const noteComponents = getAllByRole('listitem');
    expect(noteComponents).toHaveLength(notes.length);
  });

  it('calls onDelete when delete button is clicked', () => {
    const notes = [
      { id: 1, title: 'Note 1', content: 'This is note 1' },
      { id: 2, title: 'Note 2', content: 'This is note 2' },
    ];
    const onDelete = jest.fn();
    const { getAllByRole } = render(<NoteList notes={notes} onDelete={onDelete} />);
    const deleteButtons = getAllByRole('button');
    fireEvent.click(deleteButtons[0]);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});