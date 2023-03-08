import React from "react";
import Button from "react-bootstrap/Button";

function Filter() {
    return (
        <div className="filter">
            <Button variant="primary">All</Button>
            <Button variant="primary">Watchlist</Button>
            <Button variant="primary">Open</Button>
            <Button variant="primary">Closed</Button>
        </div>
    );
}



export default Filter;