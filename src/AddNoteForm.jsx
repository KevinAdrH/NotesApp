import React from "react";

const AddNoteForm = ({
  newNote,
  remainingChars,
  handleTitleChange,
  handleBodyChange,
  addNote,
}) => {
  return (
    <div className="add-note-section">
      <h2>Tambah Catatan Baru</h2>
      <input
        type="text"
        placeholder="Judul catatan"
        value={newNote.title}
        onChange={handleTitleChange}
        className="input-title"
      />
      <span>Characters remaining: {remainingChars}</span>
      <textarea
        placeholder="Isi catatan"
        value={newNote.body}
        onChange={handleBodyChange}
        className="input-body"
      />
      <button onClick={addNote} className="add-btn">
        Tambah Catatan
      </button>
    </div>
  );
};

export default AddNoteForm;
