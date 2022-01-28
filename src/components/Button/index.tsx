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
      className={"base " + type}
    >
      {children}
    </button>
  );
};

export default styled(Button)`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  background-color: #1ea7fd;
  padding: 0.75em 3em;
`;
