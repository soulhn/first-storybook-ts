import React from "react";
import styled from "styled-components";

interface ButtonProps {
  clickHandler: () => void;
  buttonText: string;
}

interface StyledButtonProps {
  backgroundColor: string;
  color: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.backgroundColor || "blue"};
  color: ${(props) => props.color};
  border: none;
`;

function CustomButton({ buttonText, backgroundColor, color, clickHandler }: ButtonProps & StyledButtonProps) {
  return (
    <StyledButton onClick={clickHandler} backgroundColor={backgroundColor} color={color}>
      {buttonText}
    </StyledButton>
  );
}

export default CustomButton;
