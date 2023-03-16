import React, { useState } from "react";
import Mode from "./Mode";
import JobModal from "./JobModal"

function Header(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <header>
            <h1>Job Application Tracker</h1>
            <div className="header-buttons">
                <div className="add-job-button">
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