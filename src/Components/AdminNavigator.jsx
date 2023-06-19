import * as React from "react";
import { useContext } from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TaskIcon from "@mui/icons-material/Task";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LogoutIcon from "@mui/icons-material/Logout";
import { adminTabContext } from "./AdminDashboard";
import {useNavigate} from "react-router-dom";

const categories = [
  {
    id: "Students section",
    children: [
      {
        id: "Registered students",
        icon: <PeopleIcon />,
        active: true,
      },
      { id: "Assignments", icon: <AssignmentIcon />, active: false },
      { id: "Modules", icon: <TaskIcon />, active: false },
    ],
  },
  {
    id: "Lecturer section",
    children: [
      { id: "Course work", icon: <MenuBookIcon /> },
      { id: "Timetable", icon: <WorkHistoryIcon /> },
      { id: "Logout", icon: <LogoutIcon /> },
    ],
  },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;
  const navigate = useNavigate();
  // use tab context
  const adminTab = useContext(adminTabContext);
  console.log(adminTab);

// TODO: Func to handle admin logout
const handleAdminLogout= (e)=>{
  e.preventDefault();
  alert("Are you sure you want to logout?",navigate("/",{replace:true}))
  // navigate("/",{replace:true})
}
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          Kidato
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText sx={{ fontSize: 24 }}>Semester Overview</ListItemText>
        </ListItem>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
          onClick={() => {
            adminTab.adminTabFunc((adminTab.adminCurrentTab = 0))
            // console.log(adminTab.adminCurrentTab);
          }}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          Students
        </ListItem>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
          onClick={() => {
            adminTab.adminTabFunc((adminTab.adminCurrentTab = 1))
            // console.log(adminTab.adminCurrentTab);
          }}
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          Assignments
        </ListItem>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
          onClick={() => {
            adminTab.adminTabFunc((adminTab.adminCurrentTab = 2))
            // console.log(adminTab.adminCurrentTab);
          }}
        >
          <ListItemIcon>
            <TaskIcon />
          </ListItemIcon>
          Modules
        </ListItem>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
          onClick={handleAdminLogout}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          Logout
        </ListItem>
        {/* {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))} */}
      </List>
    </Drawer>
  );
}
