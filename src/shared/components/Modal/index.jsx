import React from "react";
import styled from "./modal.module.scss";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? `${styled.modal} ${styled.active}` : styled.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active
            ? `${styled.modal__content} ${styled.active}`
            : styled.modal__content
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
