import React, { useState } from 'react';


const CsvSearch = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredData = data.filter(row =>
      row.some(cell => cell.includes(searchTerm))
    );
    onSearch(filteredData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search CSV"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CsvSearch;
