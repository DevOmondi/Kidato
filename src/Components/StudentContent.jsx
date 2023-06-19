import * as React from 'react';
import { useContext } from 'react';
import LessonCheckin from "./LessonCheckin";
import StudentAssignment from "./StudentAssignment"
import Timetable from "./Timetable"
import { studentTabContext } from './StudentDashboard';

export default function Content() {
  // use student tab context
  const studentTab = useContext(studentTabContext);
  return (
    <div>
    {studentTab.studentCurrentTab === 0 && <LessonCheckin />}
    {studentTab.studentCurrentTab === 1 && <StudentAssignment/>}
    {studentTab.studentCurrentTab === 2 && <Timetable />}
  </div>
  );
}

