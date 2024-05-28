import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import modalImg1 from "../assets/modalImg1.png";
import modalImg2 from "../assets/modalImg2.png";

function BasicModal({
  show,
  onClose = () => {},
  handleSave = () => {},
  modalBody,
  title = "Title"
}) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const style = {
    modalHeader: {
      padding: 0,
    },
    modalImg2: {
      position: "absolute",
      left: "30px",
      top: 0,
    },
    modalTitle: {
      position: "absolute",
      right: "35%",
      // top: "30%",
    },
  };

  return (
    <>
      <Modal show={show} onHide={onClose} centered>
        <Modal.Header style={style.modalHeader} closeButton>
          <img src={modalImg1} alt="modal"/>
          <img src={modalImg2} style={style.modalImg2} alt="modal" />
          <Modal.Title style={style.modalTitle}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalBody()}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button> */}
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BasicModal;
