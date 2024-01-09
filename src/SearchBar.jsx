import React from "react";

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Cari catatan..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
