import * as React from 'react';
import { useContext } from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListIcon from '@mui/icons-material/List';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import { studentTabContext } from './StudentDashboard';
import { useNavigate } from 'react-router-dom';

// const categories = [
//   {
//     id: 'Lessons section',
//     children: [
//       {
//         id: 'Lesson Checkin',
//         icon: <HowToRegIcon />,
//         active: true,
//       },
//       { id: 'Assignments', icon: <AssignmentIcon /> },
//       { id: 'Attendance', icon: <ListIcon /> },
//     ],
//   },
//   {
//     id: 'My section',
//     children: [
//       { id: 'Course work', icon: <MenuBookIcon/> },
//       { id: 'Timetable', icon: <WorkHistoryIcon /> },
//       { id: 'Logout', icon: <LogoutIcon /> },
//     ],
//   },
// ];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;
  const navigate = useNavigate();
  // use tab context
  const studentTab = useContext(studentTabContext);

  // TODO: Func to handle student logout
const handleStudentLogout= (e)=>{
  e.preventDefault();
  alert("Are you sure you want to logout?",navigate("/",{replace:true}))
}

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          Kidato
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Semester Overview</ListItemText>
        </ListItem>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
          onClick={() => {
            studentTab.studentTabFunc((studentTab.studentCurrentTab = 0))
            // console.log(adminTab.adminCurrentTab);
          }}
        >
          <ListItemIcon>
            <HowToRegIcon />
          </ListItemIcon>
          Lesson Checkin
        </ListItem>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
          onClick={() => {
            studentTab.studentTabFunc((studentTab.studentCurrentTab = 1))
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
            studentTab.studentTabFunc((studentTab.studentCurrentTab = 2))
            // console.log(adminTab.adminCurrentTab);
          }}
        >
          <ListItemIcon>
            <WorkHistoryIcon />
          </ListItemIcon>
          Timetable
        </ListItem>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
          onClick={handleStudentLogout}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          Logout
        </ListItem>
        {/* {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#081627' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
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