import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Job from "./Job";

function Form(props) {
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
        })
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
    }

    return (
        <div>
            <form className="job-form">
                <input onChange={handleChange} type="text" name="title" placeholder="Job Title" value={job.title} required/>
                <input onChange={handleChange} type="text" name="company" placeholder="Company" value={job.company} required/>
                <input onChange={handleChange} type="text" name="location" placeholder="Location" value={job.location} required/>
                <input onChange={handleChange} type="text" name="link" placeholder="URL link" value={job.link} required/>
            </form> 
            <div className="add-job-button">
                <Button variant="success" onClick={submitJob}>Add</Button>
            </div> 
        </div>
    );
}

export default Form;