import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "./Form";

function JobModal(props) {
    

    return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                New Job
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form />
        </Modal.Body>
    </Modal>
  );
}

export default JobModal;
