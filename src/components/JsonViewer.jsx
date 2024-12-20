import React from 'react';
import ReactJson from 'react-json-view';

const JsonViewer = ({ jsonData }) => {
    return (
        <>
            <h1>Beautified JSON Viewer</h1>
            <div className='container'>
                {jsonData ? (
                    <ReactJson
                        src={jsonData}
                        theme="tomorrow"
                        enableClipboard={true}
                        style={{
                            padding: "20px",
                            borderRadius: "20px",
                            width: "90%"
                        }}
                        iconStyle='circle'
                        indentWidth={6}
                    />
                ) : (
                    <p>No JSON data to display</p>
                )}
            </div>
        </>
    );
};

export default JsonViewer;
