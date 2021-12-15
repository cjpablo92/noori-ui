import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./props";
import { ButtonTypeEnum } from "./types";
import style from "./styles";

const Button: React.FC<ButtonProps> = ({
  children,
  id,
  disabled,
  onClick,
  type = ButtonTypeEnum.primary,
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      key={id}
      disabled={disabled}
      className={type}
    >
      {children}
    </button>
  );
};

export default styled(Button)`
  ${style}
`;
