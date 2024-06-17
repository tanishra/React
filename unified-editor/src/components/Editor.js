// Editor.tsx

import React, { useState } from 'react';
import TextEditor from './TextEditor';
import ImageUpload from './ImageUpload';

function Editor() {
  const [textValue, setTextValue] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState < string | null > (null);

  function handleTextChange(value: tring) {
    setTextValue(value);
  }

  const handleImageUpload = (file: File) => {
    // Handle image upload logic (e.g., upload to server, update state with image URL)
    const imageUrl = URL.createObjectURL(file);
    setUploadedImageUrl(imageUrl);
  };

  return (
    <div className="editor">
      <h2>Unified Editor</h2>
      <TextEditor initialValue={textValue} onChange={handleTextChange} />
      <ImageUpload onUpload={handleImageUpload} />
      {uploadedImageUrl && (
        <div className="uploaded-image">
          <img src={uploadedImageUrl} alt="Uploaded" />
        </div>
      )}
      {/* Add more components for additional content types (audio, video, etc.) */}
    </div>
  );
}

export default Editor;
