import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import EditModal from "./EditModal";
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';

function Job(props) {
    const [modalShow, setModalShow] = useState(false);
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'jobTitle', headerName: 'Job Title', width: 130 },
        { field: 'jobCompany', headerName: 'Company', width: 130 },
        { field: 'jobLocation', headerName: 'Location', width: 130 },
        { field: 'jobLink', headerName: 'Link', width: 130 }
    ];

    const rows = [
        { id: "props.id", jobTitle: "props.title", jobCompany: "props.company", jobLocation: "props.location", jobLink: "props.link"}
    ];

    // const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //   ];

    function deleteClick() {
        props.removeJob(props.id)
    }

    function editClick() {
        props.updateJob(props.id)
    }

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid
                // rows={
                //     rows.id = {props.id},
                //     rows.jobTitle = {props.title},
                //     rows.jobCompany = {props.company},
                //     rows.jobLocation = {props.location},
                //     rows.jobLink = {props.link}    
                // }
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

export default Job;