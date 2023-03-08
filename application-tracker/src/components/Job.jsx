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
                </div>
                <div>
                    <p>Company</p>
                </div>
                <div className="job-bottom">
                    <Button variant="primary">Link</Button>
                    <div className="job-bottom-icons">
                        <p className="icons">Watchlist</p>
                        <p className="icons">Edit</p>
                        <p className="icons">Delete</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Job;