import React  from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const TextEditor = ({ initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (content) => {
    setValue(content);
    onChange(content);
  };

  return (
    <div>
      <ReactQuill value={value} onChange={handleChange} />
    </div>
  );
};

export default TextEditor;
