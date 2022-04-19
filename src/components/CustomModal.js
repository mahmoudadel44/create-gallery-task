import React from "react";
import { Modal } from "react-bootstrap";

const CustomModal = ({ show, handleClose }) => {
  return (
    <div className="all">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomModal;
