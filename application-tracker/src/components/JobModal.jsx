import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function JobModal(props) {
    const [job, setJob] = useState({
        title: "",
        company: "",
        location: "",
        link: ""
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
        props.onAdd(job);
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
                <input onChange={handleChange} type="text" name="title" placeholder="Job Title" value={job.title} required/>
                <input onChange={handleChange} type="text" name="company" placeholder="Company" value={job.company} required/>
                <input onChange={handleChange} type="text" name="location" placeholder="Location" value={job.location} required/>
                <input onChange={handleChange} type="text" name="link" placeholder="URL link" value={job.link} required/>
            </form> 
            <div className="add-job-button">
                <Button variant="success" onClick={submitJob}>Add</Button>
            </div> 
        </Modal.Body>
    </Modal>
  );
}

export default JobModal;
