import React, { useState } from "react";
import Mode from "./Mode";
import JobModal from "./JobModal"
import Button from "react-bootstrap/Button";

function Header(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <header>
            <h1>Job Application Tracker</h1>
            <div className="header-buttons">
                <div className="add-job-button">
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Add Job
                    </Button>
                    <JobModal
                        onAdd={props.saveJob}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    /> 
                </div>
                <div className="view-mode">
                    <Mode />
                </div>
            </div>
        </header>
    )
}

export default Header;