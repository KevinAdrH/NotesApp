import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, deleteNote, toggleArchive, type }) => {
  const filteredNotes = notes.filter(
    (note) => note.archived === (type === "archived")
  );

  return (
    <div className="notes-section">
      <h3>{type === "archived" ? "Diarsipkan" : "Daftar Catatan"}</h3>
      {filteredNotes.length > 0 ? (
        <ul className="notes-list">
          {filteredNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              toggleArchive={toggleArchive}
            />
          ))}
        </ul>
      ) : (
        <p>
          Tidak ada catatan {type === "archived" ? "yang diarsipkan" : " "}.
        </p>
      )}
    </div>
  );
};

export default NoteList;
