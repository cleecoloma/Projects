import React from "react";
import Filter from "./Filter";
import Button from "react-bootstrap/Button";

function Job() {
    return (
        <section>
            <Filter />
            <div className="job">
                <div className="job-top">
                    <p>Job Title</p>
                    <Button variant="success">Apply</Button>
                    <p>Apply</p>
                </div>
                <div>
                    <p>Company</p>
                </div>
                <div className="job-bottom">
                    <a href="">Link</a>
                    <p>Watchlist</p>
                    <p>Edit</p>
                    <p>Delete</p>
                </div>
            </div>
        </section>
    );
}

export default Job;