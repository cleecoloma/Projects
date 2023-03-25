import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Job(props) {
    const [modalShow, setModalShow] = useState(false);

    function deleteClick() {
        props.removeJob(props.id)
    }

    function editClick() {
        props.updateJob(props.id)
    }

    return (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            {/* <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Job Title</TableCell>
                <TableCell align="center">Company</TableCell>
                <TableCell align="center">Location</TableCell>
                <TableCell align="center">Link</TableCell>
              </TableRow>
            </TableHead> */}
            <TableBody>
                <TableRow
                  key={props.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{props.id}</TableCell>
                  <TableCell align="center">{props.title}</TableCell>
                  <TableCell align="center">{props.company}</TableCell>
                  <TableCell align="center">{props.location}</TableCell>
                  <TableCell align="center">{props.link}</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default Job;