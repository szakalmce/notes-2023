import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  height: 100vh;
`;

/* SIDEBAR */

export const SidebarWrapper = styled.div``;
export const SidebarActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;
export const Title = styled.h1``;
export const AddButton = styled.button`
  background-color: transparent;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #eee;
    background-color: #000;
    outline: none;
    box-shadow: none;
  }
`;

export const NotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const NoteWrapper = styled.div`
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  &.active {
    background-color: #eee;
  }
`;

export const NoteTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const NoteTitle = styled.p`
  font-weight: bold;
`;
export const NoteDesc = styled.p`
  font-size: 90%;
`;
export const NoteDate = styled.p`
  font-size: 90%;
  color: gray;
`;

export const IconsWrapper = styled.div`
  background-color: transparent;
  padding: 0.5rem;
  border: 5px;

  &:hover {
    background-color: #000;
    color: #eee;
  }
`;

/* MAIN */

export const MainWrapper = styled.div`
  display: grid;

  height: 100%;
`;

export const MainEmptyWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

export const MainTopWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0.5rem;
  gap: 1rem;
`;
export const Input = styled.input`
  height: 40px;
  border: none;
  border-right: 2px solid #ddd;
  border-bottom: 2px solid #ddd;

  &:focus {
    outline: none;
  }
`;
export const Textarea = styled.textarea`
  height: 100%;
  border: none;
  border-right: 2px solid #ddd;
  border-bottom: 2px solid #ddd;
  font-family: inherit;

  &:focus {
    outline: none;
  }
`;
export const MainPrevWrapper = styled(MainTopWrapper)``;
export const PrevTitle = styled.h2``;
export const PrevText = styled.p``;
