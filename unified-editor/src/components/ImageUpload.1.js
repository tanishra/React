import React from 'react';
import { useDropzone } from 'react-dropzone';

// eslint-disable-next-line react/prop-types
export const ImageUpload = ({ onUpload }) => {
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    onUpload(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="image-upload">
      <input {...getInputProps()} />
      <p>Drag 'n' drop an image here, or click to select a file</p>
    </div>
  );
};
