import React from 'react'
import { 
  ButtonContainer,
  CtaTitle,
  Button,
} from './CtaButton.style';




const CtaButton = ({
  externalLink,
  title,
  text,
}) => {
  console.log('externalLink',externalLink);
  return(
    <ButtonContainer>
      {title && <CtaTitle>{title}</CtaTitle>}
      <Button href={externalLink} target="_blank">
        {text}
      </Button>
    </ButtonContainer>
  );
};

export default CtaButton
