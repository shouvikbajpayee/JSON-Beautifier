import React, { useState } from 'react';
import JsonEditor from './components/JsonEditor';
import JsonViewer from './components/JsonViewer';

const App = () => {
  const [jsonData, setJsonData] = useState(null);

  const handleJsonUpdate = (data) => {
    setJsonData(data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>JSON Viewer and Beautifier</h1>
      <JsonEditor onJsonUpdate={handleJsonUpdate} />
      <p></p>
      <p></p>
      <JsonViewer jsonData={jsonData} />
    </div>
  );
};

export default App;
