import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

function EditModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [job, setJob] = useState({
        id: props.changeId,
        title: props.changeTitle,
        company: props.changeCompany,
        location: props.changeLocation,
        link: props.changeLink
    });

function handleChange(event) {
    const { name , value } = event.target;

    setJob(prevJob => {
        return {
            ...prevJob,
            [name]: value
        }
    });
}

function submitJob(event) {
    props.onEditAdd(job);
    setJob({
        title: "",
        company: "",
        location: "",
        link: ""
    });
    event.preventDefault(); 
}

  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Edit
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Job</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    onChange={handleChange}
                    name="title"
                    type="text"
                    placeholder="Job Title"
                    value={job.title}
                    autoFocus
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    onChange={handleChange}
                    name="company"
                    type="text"
                    placeholder="Company"
                    value={job.company}
                    autoFocus
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    onChange={handleChange}
                    name="location"
                    type="text"
                    placeholder="Location"
                    value={job.location}
                    autoFocus
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    onChange={handleChange}
                    name="link"
                    type="text"
                    placeholder="Link"
                    value={job.link}
                    autoFocus
                />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button type="submit" variant="primary" onClick={submitJob}>
                Save Changes
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;