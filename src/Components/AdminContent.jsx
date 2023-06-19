import * as React from "react";
import { useContext } from "react";
import Paper from "@mui/material/Paper";
import StudentsTable from "./StudentsTable";
import Assignments from "./Assignments";
import Modules from "./Modules";
import { adminTabContext } from "./AdminDashboard";

export default function Content() {
  // use admin tab context
  const adminTab = useContext(adminTabContext);
  return (
    // <Paper sx={{ maxWidth: 936, margin: "auto", overflow: "hidden" }}>
    <div>
      {adminTab.adminCurrentTab === 0 && <StudentsTable />}
      {adminTab.adminCurrentTab === 1 && <Assignments />}
      {adminTab.adminCurrentTab === 2 && <Modules />}
    </div>
    // </Paper>
  );
}
