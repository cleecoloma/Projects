import React, { useState } from "react";
import Mode from "./Mode";
import JobModal from "./Modal"
import Button from "react-bootstrap/Button";

function Header() {
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