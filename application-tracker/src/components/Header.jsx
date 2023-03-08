import React from "react";
import Mode from "./Mode";
import AddJob from "./AddJob";

function Header() {
    return (
        <header>
            <h1>Job Application Tracker</h1>
            <div className="header-buttons">
                <div className="add-job-button">
                    <AddJob />
                </div>
                <div>
                    <Mode />
                </div>
            </div>
        </header>
    )
}

export default Header;