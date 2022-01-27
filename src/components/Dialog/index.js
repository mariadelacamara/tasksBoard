import React from "react";
import Modal from "react-modal";
import styles from "./styles.module.scss";
import { bool, func } from "prop-types";
import cn from "classnames";

const Dialog = ({
  isOpen,
  closeModal,
  completeHandler,
  element,
  dialogTitle,
  okButtonText,
  cancelButtonText,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      className={`flex-column justify-around ${styles.modal}`}
    >
      <span>
        {dialogTitle}
        {element.id} - {element.title}
      </span>
      <div className={styles.buttonscontainer}>
        <button
          className={cn("ok-button", { disabled: element?.completed })}
          disabled={element?.completed}
          onClick={completeHandler}
        >
          {okButtonText}
        </button>
        <button className="cancel-button" onClick={closeModal}>
          {cancelButtonText}
        </button>
      </div>
    </Modal>
  );
};

Dialog.propTypes = {
  isOpen: bool,
  closeModal: func,
  completeHandler: func,
};

Dialog.defaultProps = {
  element: { title: "", id: "" },
  okButtonText: "Ok",
  cancelButtonText: "Close Modal",
};

export default Dialog;
