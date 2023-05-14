import React, { useState } from "react";
import * as S from "./styles";
const ImageUploader = ({ setBase64Image }) => {
  const [previewImage, setPreviewImage] = useState('');


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewImage(reader.result);
      const base64ImageString = reader.result.split(',')[1];
      setBase64Image(base64ImageString);
      console.log( base64ImageString);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <S.Label htmlFor="image-upload">Carregar imagem</S.Label>
      <S.Input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      {previewImage && <S.PreviewImage src={previewImage} alt="Preview" />}
    </>
  );
};

export default ImageUploader;