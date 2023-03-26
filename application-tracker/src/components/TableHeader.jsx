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
                            <TableCell>ID</TableCell>
                            <TableCell align="center">Job Title</TableCell>
                            <TableCell align="center">Company</TableCell>
                            <TableCell align="center">Location</TableCell>
                            <TableCell align="center">Link</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
      </div>
      );
}

export default TableHeader;