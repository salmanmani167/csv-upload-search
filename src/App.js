import React, { useState } from "react";
import "./App.css";
import FileUpload from "./FileUpload";
import CsvList from "./CsvList";
import CsvSearch from "./CsvSearch";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [csvData, setCsvData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleCsvUpload = (data) => {
    setCsvData(data);
    setFilteredData(data);
  };

  const handleSearch = (data) => {
    setFilteredData(data);
  };

  return (
    <div className="App">
      <h1>CSV Upload and Search</h1>
      <button className="btn btn-info">Save</button>
      <FileUpload onCsvUpload={handleCsvUpload} />
      <CsvSearch data={csvData} onSearch={handleSearch} />
      <CsvList data={filteredData} />
    </div>
  );
}

export default App;
