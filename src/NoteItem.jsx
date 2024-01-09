import React from "react";
import { showFormattedDate } from "./index";

const NoteItem = ({ note, deleteNote, toggleArchive }) => {
  return (
    <li
      key={note.id}
      className={`note-item ${note.archived ? "archived" : ""}`}
    >
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>Created: {showFormattedDate(note.createdAt)}</p>
      <button onClick={() => deleteNote(note.id)} className="delete-btn">
        Hapus
      </button>
      <button onClick={() => toggleArchive(note.id)} className="archive-btn">
        {note.archived ? "Unarchive" : "Archive"}
      </button>
    </li>
  );
};

export default NoteItem;
