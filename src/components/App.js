import React, { useState, useEffect } from 'react';
import NoteList from './NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const handleAddNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const handleDeleteNote = (noteIndex) => {
    const updatedNotes = notes.filter((_, index) => index !== noteIndex);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  return (
    <div>
      <h1>Notes App</h1>
      <NoteList notes={notes} onAddNote={handleAddNote} onDeleteNote={handleDeleteNote} />
    </div>
  );
};

export default App;