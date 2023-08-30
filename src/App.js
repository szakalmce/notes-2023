import { useState } from 'react';
import uuid from 'react-uuid';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import { NoteWrapper, Wrapper } from './globalStyles';

const App = () => {
  // wszystkie notatki
  const [notes, setNotes] = useState([]);
  // wybieranie aktywnej notatki onKK
  const [activeNote, setActiveNote] = useState(false);

  const handleAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'New title...',
      desc: '...',
      date: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  // usuwanie elementu
  const handleRemoveNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // helper, który wybiera element active
  const currentActive = () => {
    return notes.find((note) => note.id === activeNote);
  };

  // edytowanie istniejącej notatki
  const handleUpdateNote = (updateNote) => {
    const currentUpdateNote = notes.map((note) =>
      note.id === activeNote ? updateNote : note
    );

    setNotes(currentUpdateNote);
  };

  return (
    <Wrapper>
      <Sidebar
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        notes={notes}
        setNotes={setNotes}
        handleAddNote={handleAddNote}
        handleRemoveNote={handleRemoveNote}
      />
      <Main activeNote={currentActive()} handleUpdateNote={handleUpdateNote} />
    </Wrapper>
  );
};

export default App;
