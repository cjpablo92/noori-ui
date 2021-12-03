import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./props";

const Button: React.FC<ButtonProps> = ({ children, id, disabled, onClick }) => {
  return (
    <button id={id} onClick={onClick} key={id} disabled={disabled}>
      {children}
    </button>
  );
};

export default styled(Button)`
  font-weight: normal;
`;
