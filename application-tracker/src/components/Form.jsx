import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Form() {
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

    function onAdd(event) {
        setJob({
            jobTitle: "",
            company: "",
            location: "",
            link: ""
        })
    }

    function handleClick() {
        onAdd(job);
    }

    function onDelete(){
        
    }

    return (
        <div className="form-area">
            <div className="form-header">
                <div className="form-title">
                    New Job
                </div>
                <button className="form-close" onClick={onDelete}>&times;</button>
            </div>
            <form>
                <input onChange={handleChange} type="text" name="jobTitle" placeholder="Job Title" value={job.title} required/>
                <input onChange={handleChange} type="text" name="company" placeholder="Company" value={job.company} required/>
                <input onChange={handleChange} type="text" name="location" placeholder="Location" value={job.location} required/>
                <input onChange={handleChange} type="text" name="link" placeholder="URL link" value={job.link} required/>
                <div className="add-job-button">
                    <Button onClick={handleClick}>Add</Button>
                </div>
            </form>
            <div id="overlay"></div>
        </div>
    );
}

export default Form;