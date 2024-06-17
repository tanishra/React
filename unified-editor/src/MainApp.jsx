import Text-Editor from './components/Text-Editor.js'
import Image-Upload from './components/Image-Upload.js'

const MainApp = () => {
    const handleTextChange = (value) => {
      console.log("Text changed:", value);
      // You can perform additional logic here based on text change
    };
  
    const handleImageUpload = (file) => {
      console.log("Image uploaded:", file);
      // Handle image upload logic here
    };
  
    return (
      <div>
        <h1>Unified Editor</h1>
        <Text-Editor initialValue="" onChange={handleTextChange} />
        <Image-Upload onUpload={handleImageUpload} />
      </div>
    );
  };

  return default MainApp
  