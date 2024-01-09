import React, { useState } from "react";
import "./App.css";
import { getInitialData } from "./index";
import SearchBar from "./SearchBar";
import AddNoteForm from "./AddNoteForm";
import NoteList from "./NoteList";

const initialNotes = getInitialData();

const App = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [searchTerm, setSearchTerm] = useState("");
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
    archived: false,
    createdAt: new Date().toISOString(),
  });
  const [remainingChars, setRemainingChars] = useState(50);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    if (title.length <= 50) {
      setNewNote({ ...newNote, title });
      setRemainingChars(50 - title.length);
    }
  };

  const handleBodyChange = (e) => {
    setNewNote({ ...newNote, body: e.target.value });
  };

  const addNote = () => {
    if (newNote.title.trim() !== "" && newNote.body.trim() !== "") {
      setNotes([...notes, { ...newNote, id: +new Date() }]);
      setNewNote({
        title: "",
        body: "",
        archived: false,
        createdAt: new Date().toISOString(),
      });
      setRemainingChars(50);
    }
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const toggleArchive = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>NOTES APP</h1>
      <div className="image-container">
        <img src="pngegg.png" alt="Notes Icon" />
      </div>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <AddNoteForm
        newNote={newNote}
        remainingChars={remainingChars}
        handleTitleChange={handleTitleChange}
        handleBodyChange={handleBodyChange}
        addNote={addNote}
      />
      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        toggleArchive={toggleArchive}
        type="unarchived"
      />
      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        toggleArchive={toggleArchive}
        type="archived"
      />
    </div>
  );
};

export default App;
