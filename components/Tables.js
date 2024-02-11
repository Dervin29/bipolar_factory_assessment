import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#cfd8dc",
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name,
  email,
  role,
  locations,
  last_active,
  permissions,
  status,
  action
) {
  return {
    name,
    email,
    role,
    locations,
    last_active,
    permissions,
    status,
    action,
  };
}

const rows = [
  createData("Peter John", "Peter@gmail.com", "owner", "Adam Stall", "Sep 13,2013 5:51 PM"," All Permission", <button className=" bg-green-500 text-white py-2 px-3 rounded-md">Active</button>,<div className=" ml-2">
    <DriveFileRenameOutlineIcon/>
    <DeleteOutlineIcon sx={{ color: "red", ml: 1}} />
  </div>),
  createData("Adam", "Peter@gmail.com", "executive", "Adam Stall", "Sep 13,2013 5:51 PM"," All Permission", <button className=" bg-green-500 text-white py-2 px-3 rounded-md">Active</button>,<div className=" ml-2">
  <DriveFileRenameOutlineIcon/>
  <DeleteOutlineIcon sx={{ color: "red", ml: 1}} />
</div>),
createData("Lingan", "Peter@gmail.com", "admin", "Adam Stall", "Sep 13,2013 5:51 PM"," All Permission", <button className=" bg-green-500 text-white py-2 px-3 rounded-md">Active</button>,<div className=" ml-2">
<DriveFileRenameOutlineIcon/>
<DeleteOutlineIcon sx={{ color: "red", ml: 1}} />
</div>),
createData("Smith", "Peter@gmail.com", "supervisor", "Adam Stall", "Sep 13,2013 5:51 PM"," All Permission", <button className=" bg-green-500 text-white py-2 px-3 rounded-md">Active</button>,<div className=" ml-2">
<DriveFileRenameOutlineIcon/>
<DeleteOutlineIcon sx={{ color: "red", ml: 1}} />
</div>),
createData("John Abraham`", "Peter@gmail.com", "executive", "Adam Stall", "Sep 13,2013 5:51 PM"," All Permission", <button className=" bg-red-500 text-white py-2 px-3 rounded-md">Inactive</button>,<div className=" ml-2">
<DriveFileRenameOutlineIcon/>
<DeleteOutlineIcon sx={{ color: "red", ml: 1}} />
</div>),
  
];

export default function Tables() {
  return (
    <div className="  h-screen flex items-center justify-center px-24 rounded-sm">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Role</StyledTableCell>
              <StyledTableCell align="center">Locations</StyledTableCell>
              <StyledTableCell align="center">Last Active</StyledTableCell>
              <StyledTableCell align="center">Permissions</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.role}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.locations}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.last_active}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.permissions}
                </StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">{row.action}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
