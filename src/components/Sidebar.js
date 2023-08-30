import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  AddButton,
  IconsWrapper,
  NoteDate,
  NoteDesc,
  NotesWrapper,
  NoteTextWrapper,
  NoteTitle,
  NoteWrapper,
  SidebarActionsWrapper,
  SidebarWrapper,
  Title,
} from '../globalStyles';

const Sidebar = ({
  activeNote,
  setActiveNote,
  notes,
  setNotes,
  handleAddNote,
  handleRemoveNote,
}) => {
  return (
    <SidebarWrapper>
      <SidebarActionsWrapper>
        <Title>Notes List</Title>
        <AddButton onClick={() => handleAddNote()}>Add...</AddButton>
      </SidebarActionsWrapper>

      <NotesWrapper>
        {notes.map((note) => (
          <NoteWrapper
            className={`${activeNote === note.id && 'active'}`}
            onClick={() => setActiveNote(note.id)}
            key={note.id}
          >
            <NoteTextWrapper>
              <NoteTitle>{note.title}</NoteTitle>
              <NoteDesc>{note.desc}</NoteDesc>
              <NoteDate>{new Date(note.date).toLocaleString()}</NoteDate>
            </NoteTextWrapper>
            <IconsWrapper>
              <FontAwesomeIcon
                onClick={() => handleRemoveNote(note.id)}
                icon={faTrash}
              />
            </IconsWrapper>
          </NoteWrapper>
        ))}
      </NotesWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
