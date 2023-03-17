import React from "react";
// import Button from "react-bootstrap/Button";
import  { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";

function Filter() {
    return (
        <ButtonGroup className="filter" variant="contained" aria-label="outlined primary button group">
            <Button>All</Button>
            <Button>Watchlist</Button>
            <Button>Open</Button>
            <Button>Closed</Button>
        </ButtonGroup>
    );
}



export default Filter;