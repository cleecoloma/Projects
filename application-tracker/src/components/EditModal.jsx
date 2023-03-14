import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function EditModal(props) {
    const [job, setJob] = useState({
        title: props.title,
        company: props.company,
        location: props.location,
        link: props.link
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
        props.editJob(job);
        setJob({
            title: "",
            company: "",
            location: "",
            link: ""
        });
        event.preventDefault(); 
        props.onHide();
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
            <form className="job-form">
                <input type="text" name="title" placeholder="Job Title" required/>
                <input type="text" name="company" placeholder="Company" required/>
                <input type="text" name="location" placeholder="Location" required/>
                <input type="text" name="link" placeholder="URL link" required/>
            </form> 
            <div className="add-job-button">
                <Button variant="success" onClick={submitJob}>Edit</Button>
            </div> 
        </Modal.Body>
    </Modal>
  );
}

export default EditModal;