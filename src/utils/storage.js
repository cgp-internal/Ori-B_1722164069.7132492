const NOTES_STORAGE_KEY = 'notes';

const getNotes = () => {
  const notesString = localStorage.getItem(NOTES_STORAGE_KEY);
  return notesString ? JSON.parse(notesString) : [];
};

const saveNotes = (notes) => {
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
};

export { getNotes, saveNotes };