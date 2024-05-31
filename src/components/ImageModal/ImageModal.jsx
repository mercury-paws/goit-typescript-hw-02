import css from "./ImageModal.module.css";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, imageUrl }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      overlayClassName={css.overlay}
      className={css.modalContent}
    >
      <div className={css.imageContainer}>
        <img src={imageUrl} alt="Large Image" />
      </div>
      <div className={css.navigation}></div>
    </Modal>
  );
}
