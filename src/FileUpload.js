// import React, { useState } from 'react';
import CSVReader from "react-csv-reader";

const FileUpload = ({ onCsvUpload }) => {
  const handleFileUpload = (data, fileInfo) => {
    onCsvUpload(data);
  };

  return (
    <div>
      <CSVReader onFileLoaded={handleFileUpload} />
    </div>
  );
};

export default FileUpload;
