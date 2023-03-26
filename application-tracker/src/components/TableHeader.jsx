import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableHeader() {

    return (
      <div className='table-header'>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{width: 80}} align="center">ID</TableCell>
                            <TableCell style={{width: 320}} align="center">Job Title</TableCell>
                            <TableCell style={{width: 180}} align="center">Company</TableCell>
                            <TableCell style={{width: 180}} align="center" style={{width: 180}} >Location</TableCell>
                            <TableCell style={{width: 180}} align="center">Link</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
      </div>
      );
}

export default TableHeader;