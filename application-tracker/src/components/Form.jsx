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

    return (
        <form>
            <label>
                Job Title: 
                <input onChange={handleChange} type="text" name="jobTitle" value={job.title}/>
            </label>
            <label>
                Company: 
                <input onChange={handleChange} type="text" name="company" value={job.company}/>
            </label>
            <label>
                Location: 
                <input onChange={handleChange} type="text" name="location" value={job.location}/>
            </label>
            <label>
                Link: 
                <input onChange={handleChange} type="text" name="link" value={job.link}/>
            </label>
            <Button onClick={handleClick}>Add Job</Button>
        </form>
    );
}

export default Form;