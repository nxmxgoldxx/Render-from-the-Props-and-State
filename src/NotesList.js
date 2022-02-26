import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
  const keepSearchMatches = (note) => note.DoesMatchSearch;
  const searchMatches = props.notes.filter(keepSearchMatches);
  const renderNote = (note) => <Note note={note} key={note.id} />;
  const noteElements = props.notes.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
