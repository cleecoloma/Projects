import React, { useState } from "react";

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
            title: "",
            company: "",
            location: "",
            link: ""
        });
    }

    return (
        <div>
            <form className="job-form">
                <input onChange={handleChange} type="text" name="title" placeholder="Job Title" value={job.title} required/>
                <input onChange={handleChange} type="text" name="company" placeholder="Company" value={job.company} required/>
                <input onChange={handleChange} type="text" name="location" placeholder="Location" value={job.location} required/>
                <input onChange={handleChange} type="text" name="link" placeholder="URL link" value={job.link} required/>
            </form>   
        </div>
    );
}

export default Form;