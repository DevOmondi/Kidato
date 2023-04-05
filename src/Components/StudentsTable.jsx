import * as React from "react";
import DetailsTable from "./DetailsTable";
import Box from "@mui/material/Box";
import { students } from "../utils/studentsDetails";
import { useState,useEffect } from "react";

const columns = [
  {
    field: "first_name",
    headerName: "First Name",
    width: 160,
  },
  {
    field: "second_name",
    headerName: "Last Name",
    width: 160,
    editable: true,
  },
  {
    field: "username",
    headerName: "Username",
    width: 60,
    editable: true,
  },
  {
    field: "regNumber",
    headerName: "Reg Number",
    width: 160,
    editable: true,
  },
  {
    field: "attendance",
    headerName: "Classes attended",
    width: 160,
    editable: true,
  },
];

export default function StudentsTable() {
  const [studentsList, setStudentsList] = useState([]);
  
  // TODO: Fetch Transactions on page load
  useEffect(()=>{
    generateStudentsList();
  },[])

  const generateStudentsList=()=>{
   setStudentsList(students)
  }


  return (
    <Box sx={{ height: 800, width: "100%" }}>
      <DetailsTable 
        rows={studentsList} 
        columns={columns} 
       />
    </Box>
  );
}
