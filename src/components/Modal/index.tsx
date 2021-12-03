import ReactModal from "react-modal";
import React from "react";
import { ModalProps } from "./props";
import styled from "styled-components";

/*
TODO: read more about styling the react-modal
https://github.com/reactjs/react-modal/blob/master/docs/styles/classes.md
*/

const Modal: React.FC<ModalProps> = ({
  children,
  id,
  isOpen,
  onAfterOpen,
  onRequestClose,
  //   title,
}) => {
  return (
    <ReactModal
      id={id}
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      // contentLabel={title}
    >
      {children}
    </ReactModal>
  );
};

export default styled(Modal)`
  font-weight: normal;
`;
