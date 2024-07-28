import React, { useState, useEffect } from 'react';
import { getNotes, saveNotes } from '../utils/storage';

const Note = ({ title, content, done, onChange, onDelete }) => {
  const [isDone, setIsDone] = useState(done);

  useEffect(() => {
    onChange({ title, content, done: isDone });
  }, [isDone]);

  const handleToggle = () => {
    setIsDone(!isDone);
  };

  const handleDelete = () => {
    onDelete(title);
  };

  return (
    <div className="note">
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleToggle}
      />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {title}
      </span>
      <p>{content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Note;