import React from "react";
import Mode from "./Mode";
import AddJob from "./AddJob";

function Header() {
    return (
        <header>
            <h1>Job Application Tracker</h1>'
            <div>
                <AddJob />
                <Mode />
            </div>
        </header>
    )
}

export default Header;