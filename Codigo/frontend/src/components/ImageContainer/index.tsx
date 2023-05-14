import * as S from "./styles";
import { Buffer } from 'buffer';

const ImageContainer = ({ base64String }) => {
    const decodedImage = Buffer.from(base64String, 'base64');
    const src = `data:image/jpeg;base64,${decodedImage.toString('base64')}`;
  
    return (
      <S.ImageContainer>
        <S.Image src={src} alt="Image" />
      </S.ImageContainer>
    );
  };

export default ImageContainer;