import React from 'react';
import Note from './Note';

const NoteList = ({ notes }) => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Note note={note} />
        </li>
      ))}
    </ul>
  );
};

export default NoteList;