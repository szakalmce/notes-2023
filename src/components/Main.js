import React from 'react';
import {
  Input,
  MainPrevWrapper,
  MainTopWrapper,
  MainWrapper,
  PrevText,
  PrevTitle,
  Textarea,
  MainEmptyWrapper,
} from '../globalStyles';

const Main = ({ activeNote, handleUpdateNote }) => {
  if (!activeNote)
    return <MainEmptyWrapper>No active task...</MainEmptyWrapper>;

  const handleOnChange = (key, value) => {
    handleUpdateNote({
      ...activeNote,
      [key]: value,
      date: Date.now(),
    });

    const t = {
      ...activeNote,
      [key]: value,
      date: Date.now(),
    };

    console.log(t);
  };

  return (
    <MainWrapper>
      <MainTopWrapper>
        <Input
          type="text"
          id="title"
          placeholder="..."
          value={activeNote.title}
          onChange={(e) => handleOnChange('title', e.target.value)}
        />
        <Textarea
          onChange={(e) => handleOnChange('desc', e.target.value)}
          value={activeNote.desc}
          id="desc"
        />
      </MainTopWrapper>
      <MainPrevWrapper>
        <PrevTitle>{activeNote.title}</PrevTitle>
        <PrevText>{activeNote.desc}</PrevText>
      </MainPrevWrapper>
    </MainWrapper>
  );
};

export default Main;
