import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "./Form";

function JobModal(props) {
    function onAdd(event) {
        setJob({
            title: "",
            company: "",
            location: "",
            link: ""
        });
    }

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
        <Modal.Footer>
            <Button variant="success" onClick={onAdd}>Add</Button>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
  );
}

export default JobModal;
