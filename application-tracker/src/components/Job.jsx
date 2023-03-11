import React from "react";
import Button from "react-bootstrap/Button";

function Job(props) {
    return (
        <section>
            <div className="job">
                <div className="job-top">
                    <p>{props.title}</p>
                    <Button variant="success">Apply</Button>
                </div>
                <div>
                    <p>{props.company}</p>
                    <p>{props.location}</p>
                </div>
                <div className="job-bottom">
                    <Button variant="primary">{props.link}</Button>
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